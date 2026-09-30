/**
 * @file 조교 지문 - 강간 애무계
 * @author ALEX
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroMakingOuts = require('#/event/ero/common/interface/ero-making-outs');
const EroRapedMakingOuts = require('#/event/ero/common/rape/raped-making-outs');

const { get_chara_color } = require('#/data/chara-colors');
const { stain_enum } = require('#/data/ero/stain-const');
const { get_skin_color } = require('#/data/info-generator');

const virgin_color_desc = ['발그레하고 가련한', '붉은빛 도는 자줏빛', '성숙한 빛깔'];
const skin_color_desc = ['상아색', '백색', '홍조 띤', '연갈색'];

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function deep_blow_job_common(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait(['으으~ 너무 뜨거워~ 숨이 안 쉬어져~'], true);
    await defender.print_and_wait(['귓가에는 빠르고 거친 물소리만이 들려온다.']);
    await defender.print_and_wait([
      '아까까지만 해도 유지하려 애썼던, 혐오 섞인 멸시의 시선은 어느새 위로 뒤집힌 아름다운 눈동자로 변해버렸다.',
    ]);
    await defender.print_and_wait([
      '자지가 거칠게 삽입될 때마다 목구멍이 짓눌리고, 확장된 식도가 기관을 압박해 숨조차 쉴 수 없지만, 목 안의 살점들은 이 혼잣놈의 자지를 필사적으로 조여온다.',
    ]);
    if ((era.get(`stain:${defender.id}:구강`) & (1 << stain_enum.semen)) > 0) {
      await defender.print_and_wait([
        '심지어 일부러 입안에 잠시 머물며, 남아있던 정액을 혀와 얇은 입술에 문질러 바른 뒤에야 아쉽다는 듯이 뽑아냈다.',
      ]);
      await defender.print_and_wait([
        '거칠고 지저분한 귀두와 얇은 입술 사이로 탁한 백색의 실이 길게 늘어진다.',
      ]);
    }
    await defender.print_and_wait(['넘쳐흐르는 정액과 침도 아래로 밀려 내려갔다.']);
    await defender.print_and_wait([
      '그저 눈앞의 강간범의 불알 속에 든 진한 정액을 삼키기 위한 준비를 마쳤을 뿐이다.',
    ]);
  } else {
    await defender.say_and_wait(['——커헉!?']);
    await defender.print_and_wait(['목구멍 깊숙이 박힌 자지 때문에 고개를 숙일 수도 없다.']);
    await defender.print_and_wait([
      '그저 몸을 뒤로 젖힌 채, 입안에 고인 쿠퍼액 섞인 침을 쉴 새 없이 삼킬 수밖에 없다.',
    ]);
    await defender.print_and_wait([
      '이물질이 침범한 구역질과 비릿한 것이 목구멍을 가득 채운 질식감.',
    ]);
    await defender.print_and_wait([
      '무엇보다 눈앞의 인간 말종을 만족시키기 위해 자지를 뿌리 끝까지 딥스로트로 받아내며 엉덩이를 높게 쳐들어야만 하는 굴욕감이 밀려온다.',
    ]);
    await defender.say_and_wait(['빨리 뽑아!!!'], true);
    await defender.print_and_wait([
      '들이마시는 공기는 이 녀석의 거친 동작을 따라가지 못해 점점 부족해진다.',
    ]);
    await defender.print_and_wait([
      '살짝 보랏빛으로 변한 뺨, 저항하려던 양손도 점차 힘을 잃고 부드럽게 늘어진다.',
    ]);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_hand_job(attacker, defender, hook) {
  if (hook.arg) {
    await attacker.print_and_wait([
      '권력이든 무력이든, 어쨌든 ',
      defender.get_colored_actual_name(),
      '(이)라는 이름의 ',
      era.get(`cflag:${defender.id}:종족`) ? '우마무스메 귀를 가진 ' : '',
      defender.get_phy_sex_title(),
      '에게 지금은 그저 협력할 수밖에 없다는 사실을 각인시켰다.',
    ]);
    await attacker.print_and_wait([
      '쿠퍼액이 맺힌 귀두를 마지못해 내민 작은 손 안으로 밀어 넣었다.',
    ]);
    await attacker.print_and_wait([
      '기둥 옆을 감싼 손가락은 아주 가볍게 쥐어져 있지만, 뜻밖에도 깃털이 스치는 듯한 몽롱한 느낌이 전해진다.',
    ]);
    await attacker.print_and_wait(['아름다운 존재를 더럽히고 있다는 중독적인 흥분감이 차오른다.']);
  } else {
    await attacker.say_and_wait(['힘 좀 써봐, 그냥 쥐고만 있지 말고.']);
    await defender.print_and_wait([
      '눈앞의 인간 말종이 기다렸다는 듯 더 심한 요구를 해오자, 어쩔 수 없이 양손을 자지에 밀착시킨다.',
    ]);
    await defender.print_and_wait([
      '이미 쿠퍼액으로 끈적해진 손가락도, 그 아래에서 요동치는 흥분한 핏줄도 고스란히 느껴진다.',
    ]);
    await defender.say_and_wait(['기분 나빠……']);
    await defender.print_and_wait([
      '보복하듯이 손을 휘두르는 속도를 높였고, 심지어 일부러 손가락 끝으로 요도구를 쿡쿡 찔렀다.',
    ]);
    await defender.say_and_wait(['후우…… 이제야 좀 괴로운 표정을 짓네……'], true);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_deep_blow_job(attacker, defender, hook) {
  if (hook.arg) {
    await defender.say_and_wait(['하아아~~ 응~~ 윽~~']);
    await attacker.print_and_wait([
      '마치 정교한 ',
      era.get(`cflag:${attacker.id}:종족`) ? '우마무스메 ' : '',
      '오나홀처럼 내 가랑이 사이에서 휘둘려지고 있다.',
    ]);
    await attacker.print_and_wait([
      '입안 전체의 공간이 완전히 점거되어, 마치 진공 상태와 같은 구멍이 되었다.',
    ]);
    await defender.say_and_wait(['커헉~']);
    await attacker.print_and_wait(['방금 전까지 불평을 늘어놓던 작은 입은 이제 그저 빨아올리는 동작밖에는 할 수 없다.']);
  } else {
    await deep_blow_job_common(attacker, defender, hook);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function common_tit_job(attacker, defender, hook) {
  if (era.get(`talent:${defender.id}:유방사이즈`) < 0) {
    return;
  }
  if (hook.arg) {
    await attacker.print_and_wait([
      '눈앞에서 멍하니 무릎을 꿇고 있는 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 가슴을 들어 올려, 자지를 가슴팍 사이로 곧장 찔러 넣었다.',
    ]);
    await defender.say_and_wait(['자지가, 으응, 가슴 속에……❤️']);
    await attacker.print_and_wait([
      '무의식중에 넋을 잃게 만드는 음란한 말을 내뱉더니, 가슴에 닿은 뜨거운 촉감에 데인 것인지 멍하니 있던 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '이(가) 드디어 정신을 차리고 손으로 자지를 밀어내려 한다.',
    ]);
    await attacker.print_and_wait([
      '그녀의 손을 붙잡아 억지로 자신의 가슴을 받치게 했다.',
    ]);
    await attacker.print_and_wait([
      '그러면서 가슴을 주무르는 동작으로 어떻게 해야 바짝 달아오른 자지를 더 잘 서비스할 수 있는지 가르쳐 주었다.',
    ]);
    await defender.say_and_wait(['으으……❤️ 맥박이 뛰어……❤️']);
  } else {
    await defender.print_and_wait([
      '가슴골 사이의 뜨거운 자지의 온도와 숨결 속의 비릿한 냄새, ',
      era.get(`cflag:${attacker.id}:종족`)
        ? '그리고 불규칙한 열기에 노출되어 파르르 떨리는 귀'
        : '',
      '.',
    ]);
    await defender.print_and_wait([
      '자포자기한 듯 자신의 부드러운 가슴을 세게 움켜쥐며, 서툰 솜씨로 자지를 문지르는 가슴의 압력을 높여 주의를 분산시키려 한다.',
    ]);
    await defender.print_and_wait([
      '가슴살을 자지에 밀착시켰다가 기계적으로 밀어내는 동작이 어느덧 거칠어졌다.',
    ]);
    await defender.say_and_wait(['……흥.']);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {HookArg} hook
 */
async function tit_and_blow_job(attacker, defender, hook) {
  if (defender.sex_code === 1) {
    return;
  }
  if (hook.arg) {
    await attacker.print_and_wait([
      '일부러 허리를 내밀어 가슴 사이에서 삐져나온 귀두로 입술을 툭툭 건드리며, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '에게 입을 벌릴 시간임을 알렸다.',
    ]);
    await defender.say_and_wait(['으응……']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '은(는) 그저 미간을 찌푸린 채 입술을 꽉 깨물고 이빨을 살짝 드러내며 입을 벌리려 하지 않는다.',
    ]);
    await attacker.print_and_wait([
      '귀두로 뺨과 입술을 계속해서 찔러대자, 눈물이 맺힌 눈동자가 커지더니 이내 초점을 잃어간다.',
    ]);
    await attacker.print_and_wait([
      '마침내 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '이(가) 발그레하고 유혹적인 입술을 벌렸다.',
    ]);
    await defender.say_and_wait(['——아——앙.']);
  } else {
    await defender.say_and_wait(['쪽, 츄릅, 쪽……']);
    await defender.print_and_wait([
      '귀두와 귀두 테두리 부분이 완전히 입안에 삼켜졌고, 가끔 혀끝으로 기둥을 핥아 올린다.',
    ]);
    await defender.print_and_wait([
      '두 팔로 가슴을 모으는 동시에 남는 손으로 자지를 함께 쥐라는 요구까지 받았다.',
    ]);
    await defender.print_and_wait([
      '정말 굴욕적이다. 고개를 완전히 숙이고 마치 복종하며 항복하는 듯한 이 자세는.',
    ]);
    await defender.say_and_wait(['으윽——']);
    await defender.print_and_wait([
      '불만 섞인 신음 소리를 내뱉었지만, 돌아오는 것은 다음번 삼킬 때 머리를 쓰다듬어주는 강간범의 손길뿐이었다.',
    ]);
  }
}

class EroRapeMakingOuts extends EroMakingOuts {
  /** @type {EroMakingOuts} */
  raped;

  constructor(root) {
    super(root);
    this.raped = new EroRapedMakingOuts(root);
  }

  /** @param {boolean} is_raper */
  get_this(is_raper) {
    return is_raper ? this : this.raped;
  }

  /** @author ALEX */
  async pet_ear(attacker, defender, hook) {
    if (!era.get(`cflag:${defender.id}:종족`)) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '본인의 허락도 없이 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 귀를 만지기 시작했다. 가느다란 솜털과 약간 열이 오른 귓바퀴가 붉게 달아오른 그녀의 얼굴과 대조를 이룬다.',
      ]);
      await attacker.print_and_wait([
        '살짝 힘주어 쥐자, 고개가 순식간에 반대편으로 튕겨 나갔고 입에서는 반대의 의미를 담은 강한 신음이 새어 나왔다.',
      ]);
      await attacker.print_and_wait([
        '하지만 이 녀석이 아무리 발버둥 치며 미간을 찌푸려도, 귓가에서 계속되는 강렬한 자극은 불과 몇 초 만에 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 힘을 빼앗아 버렸다.',
      ]);
    } else {
      await defender.print_and_wait([
        '파르르 떨며 고개를 숙였다. 귀가 그 녀석에 의해 마치 성기라도 되는 양 애무 당하고 있다.',
      ]);
      await defender.say_and_wait(['이제 끝내주면 안 돼……?'], true);
      await defender.say_and_wait(['윽!']);
      await defender.print_and_wait([
        '민감한 뿌리와 안쪽을 갑자기 손가락 끝으로 찌르자, 깜짝 놀란 귀가 반사적으로 쫑긋 섰다.',
      ]);
      await defender.print_and_wait([
        '보복하듯 쫑긋 세운 귀로 상대의 뺨을 「착」 소리가 나게 때렸지만, 그 녀석은 오히려 웃음소리를 낼 뿐이었다.',
      ]);
    }
  }

  /** @author ALEX */
  async pull_ear(attacker, defender) {
    if (!era.get(`cflag:${defender.id}:종족`)) {
      return;
    }
    const hair_color = era.get(`cstr:${defender.id}:머리색`);
    await attacker.print_and_wait([
      '이전의 애무로 이미 예열될 대로 된 ',
      {
        color: get_chara_color(hair_color),
        content: `${hair_color}색`,
      },
      ' 귀가 추가적인 침범을 피하려는 듯 머리카락에 아주 불만스럽게 달라붙어 있다.',
    ]);
    await attacker.print_and_wait([
      '하지만 결국 손에 쉽게 잡혔고, 주저 없이 마음껏 잡아당기자 눈앞의 ',
      defender.get_uma_sex_title(),
      '는 더듬거리며 용서를 구하는 말을 내뱉었다.',
    ]);
    await attacker.print_and_wait([
      '이 거친 장난질에 본능적으로 경련하며 떨리는 귀 끝이 충혈되어 가련한 분홍빛을 띠고 있다.',
    ]);
  }

  /** @author ALEX */
  async pet_breast(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '푸딩처럼 탄력 있게 떨리는 가슴살을 손으로 받쳐 들고 부드럽게 압박하며, 손바닥으로 이 ',
        era.get(`cflag:${defender.id}:종족`) ? '암컷' : '암컷',
        '이 나의 침범으로 인해 빨라진 심장 박동을 느꼈다.',
      ]);
      await defender.say_and_wait(['절대! 절대로 용서 못 해……']);
      await defender.say_and_wait(['으윽!!!']);
      await attacker.print_and_wait([
        '거칠게 가슴을 여러 모양으로 주무르자, 그녀가 내뱉으려던 위협은 가슴의 뜨거운 촉감에 막혀버렸다.',
      ]);
      await attacker.print_and_wait(['자, 다음은 어떤 모양으로 빚어줄까?']);
    } else {
      await attacker.print_and_wait([
        '손바닥 아래에서 따뜻한 가슴살이 짓눌려 변형되고, 손가락 사이의 유두도 점점 더 뚜렷하게 발기한다.',
      ]);
      await attacker.print_and_wait(['마치 그 촉감을 음미하듯 앞뒤로 쓰다듬는다.']);
      await defender.say_and_wait(['이 자식이!!!']);
      await attacker.print_and_wait([
        '가슴을 마음껏 농락당하는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 자신을 유린하는 자를 향해 저주를 퍼붓지만…… 할 수 있는 것은 오직 그것뿐이다.',
      ]);
    }
  }

  /** @author ALEX */
  async pet_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '이미 스스로 꼿꼿하게 선 산딸기 같은 유두를 잡아 세밀하게 문지르며, 마치 라디오 다이얼을 맞추듯 주무른다.',
      ]);
      await attacker.print_and_wait([
        '충혈되어 붉어진 유두는 자신의 존재감을 강조하듯 열을 내뿜는다.',
      ]);
      await attacker.print_and_wait([
        '내 앞의 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 자극에 이를 악물고, 채 다물지 못한 입술 끝으로 인내의 흔적을 드러낸다.',
      ]);

      await attacker.print_and_wait(['……그럼 힘을 좀 더 줘볼까.']);
    } else {
      await attacker.print_and_wait([
        '치솟은 유두를 향해 거침없이 손을 뻗어, 손가락 끝으로 교묘하고 빠르게 유두를 희롱하며 몇 번이고 눌러댄다.',
      ]);
      await attacker.print_and_wait([
        '쌀알처럼 단단해진 유두를 잡아당기며 노리개처럼 다루자, 분홍빛 몸이 미세하게 떨리지만…… 여전히 고집스럽게 입술을 깨물고 있다.',
      ]);
      await attacker.print_and_wait(['아주 간단해, 손톱으로 살짝 꼬집기만 하면……']);
      await defender.say_and_wait(['으응——❤️!']);
      await attacker.print_and_wait([
        '곧이어 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 짧고 높은 신음이 터져 나왔고, 입가에 내민 혀끝에는 투명한 침이 맺혔다.',
      ]);
    }
  }

  /** @author ALEX */
  async pet_clitoris(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '두 손가락을 벌리자, 껍질이 벗겨진 작은 콩알이 부끄러운 듯 미세하게 떨리고 있다.',
      ]);
      await defender.say_and_wait(['어이…… 대체 뭘 하려고……']);
      await attacker.print_and_wait([
        '손톱을 음핵의 살점 사이에 살짝 끼워 넣고 들어 올리자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 본능적으로 허리를 활처럼 굽히며 몸을 방탕하게 떨기 시작했다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '음핵을 감싼 표피를 거칠게 벗겨내고, 검지로 음핵을 눌러 고정한 채 중지와 약지로 음순을 고정했다.',
      ]);
      await attacker.print_and_wait([
        '숙련된 솜씨로 긁고 진동시키며 자극하자, 충혈되어 발기한 음핵은 제멋대로 주무르고 당겨지는 대로 더욱 민감해진다.',
      ]);
      await attacker.print_and_wait([
        '끊임없는 애무를 통해 지속적인 쾌락이 척수를 타고 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뇌로 전달된다. 아무리 강인한 의지라도 이렇게 농락당하면 균열이 생길 수밖에 없으리라.',
      ]);
      await defender.say_and_wait(['으으윽……❤️ 클리토리스가, 망가져 버려…… 아아아악❤️']);
      await attacker.print_and_wait(['맞아…… 정말로 좀 붉게 부어올랐네.']);
    }
  }

  /** @author ALEX */
  async finger_fuck(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '가볍게 검지와 중지를 모아 보이고는, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 반응하기도 전에 두 손가락을 그대로 ',
        virgin_color_desc[era.get(`talent:${defender.id}:음핵타입`)],
        ' 보지에 찔러 넣었다.',
      ]);
      await defender.say_and_wait(['이얏…… 안 돼…… 하지 마…… 이 나쁜 놈아!']);
      const body_hair_color = era.get(`cstr:${defender.id}:털색`),
        hair_color = era.get(`cstr:${defender.id}:머리색`);
      await attacker.print_and_wait([
        '고개를 뒤로 젖히고, ',
        ...(era.get(`cflag:${defender.id}:종족`)
          ? [
              {
                color: get_chara_color(body_hair_color),
                content: `${body_hair_color}색 털을 가진 `,
              },
              '우마무스메',
            ]
          : [
              {
                color: get_chara_color(hair_color),
                content: `${hair_color}색 머리카락의 `,
              },
              '암컷',
            ]),
        '은 마치 화살을 맞은 백조처럼 고통 속에 희열이 섞인 달콤한 비명을 질렀다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '손가락 끝으로 부드럽고 젖은 보지 안을 거칠게 들락날락하며, 삽입된 손가락은 두드리고, 주무르고, 문지르는 등 변화무쌍하게 움직인다. 남는 다른 손도 아랫배 위에서 박자에 맞춰 눌러준다.',
      ]);
      await defender.say_and_wait(['으윽……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 손으로 입술을 필사적으로 가리지만, 아름다운 눈동자는 젖어 들어 몽롱해진다.',
      ]);
      await attacker.say_and_wait([
        '효과가 아주 좋은 모양이네, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '.',
      ]);
    }
  }

  /** @author ALEX */
  async stimulate_g_spot_by_finger(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait(['겉만 맴도는 게 무슨 재미가 있겠어?']);
      await attacker.print_and_wait([
        '손가락을 더 깊숙이 전진시켜, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 평소 자위할 때 거의 건드리지 못했던 곳을 탐색하다 손가락 끝이 육벽 위의 작은 돌기를 스쳤다.',
      ]);
      await defender.say_and_wait(['하아…… 제발 부탁이야……']);
      await defender.say_and_wait(['——이얏~!']);
      await attacker.print_and_wait([
        '그저 가볍게 한 번 눌렀을 뿐인데, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 애원은 바로 쾌락 섞인 신음으로 바뀌었다.',
      ]);
      await attacker.print_and_wait([
        '야동에서나 볼 법한 저급한 아헤가오를 지어 보이고 있다.',
      ]);
    } else {
      await defender.say_and_wait(['하아~ 이건…… 뭐야……']);
      await attacker.print_and_wait([
        '불안하게 허리를 비틀어 보지만, 오히려 연해진 보지 살점들이 내 손가락을 꽉 휘감게 만들 뿐이다.',
      ]);
      await attacker.print_and_wait([
        '약점을 들킨 뒤로는, 처음엔 이물질을 밀어내려던 보지가 이제는 적극적으로 돌기를 이용해 손가락의 거친 지문을 비벼대고 있다.',
      ]);

      await attacker.print_and_wait([
        '땀방울이 그녀의 매끄러운 뺨을 타고 살짝 벌어진 입가로 흘러들어, 혀끝에 맺힌 침과 함께 떨어진다.',
      ]);
      await defender.say_and_wait(['으으……']);
      await attacker.print_and_wait([
        '눈을 반쯤 뜬 채, 눈동자도 곧 잠들 것 처럼 위로 뒤집혀 있다.',
      ]);
    }
  }

  /** @author ALEX */
  async pet_leg(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '진찰도 아니고 연인 사이도 아닌, 상대의 의사에 반하여 눈앞의 ',
        (era.get(`cflag:${defender.id}:종족`)
          ? defender.get_uma_sex_title
          : defender.get_phy_sex_title)(),
        '의 허벅지를 만지작거린다.',
      ]);
      await attacker.print_and_wait([
        {
          color: get_skin_color(defender.id),
          content:
            skin_color_desc[era.get(`cflag:${defender.id}:피부색`) + 1],
        },
        '의 피부와 적당한 육감이 느껴진다.',
      ]);
      await attacker.print_and_wait([
        '약점을 간파당한 이후, 처음엔 이물질을 쫓아내려던 보지는 지문의 거친 결에 돌기를 필사적으로 비비고 있다.',
      ]);
      await attacker.print_and_wait([
        '우아한 다리 곡선을 훑으며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '이(가) 단련해온 결과를 감상한다. 손을 떼자마자 탄력 있게 되돌아오는 절묘한 감각은 손가락 끝에 완벽한 즐거움을 선사한다.',
      ]);
      await attacker.print_and_wait(['훈련 성과가 아주 좋은 것 같네……']);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 육감과 곡선을 겸비한 허벅지는, 손바닥이 오가는 동안 음란한 분홍빛과 끈적한 기름기 섞인 땀으로 물들었다.',
      ]);
      await attacker.print_and_wait([
        '허벅지를 모아 농락을 피하려 하지만, 이는 오히려 더 민감한 허벅지 안쪽까지 한꺼번에 내주는 꼴이 되었다.',
      ]);
      await attacker.print_and_wait([
        '다리 살에 감싸인 손바닥 전체가 팽팽한 살점의 마찰감을 만끽한다.',
      ]);
      await attacker.print_and_wait([
        '발그레한 얼굴에 혐오감을 띤 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 표정을 보고 있자니, 본인 허락 없이 성기라도 만진 것 같은 기분이 든다.',
      ]);
    }
  }

  /** @author ALEX */
  async pet_tail(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await attacker.print_and_wait([
        '남는 손으로 등을 타고 내려가 꼬리 뿌리 부분에 닿자마자, 온몸을 팽팽하게 긴장시킨 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸이 마치 전기가 통한 듯 파르르 떨렸다.',
      ]);
      await defender.say_and_wait(['너! 이 나쁜 놈! 꿈도 꾸지 마!']);
      await attacker.print_and_wait([
        '갑자기 고개를 들어 사납게 노려보는 우마무스메였지만, 그 눈동자에는 눈물이 맺혀 가련해 보일 뿐이다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '도발하듯 계속해서 꼬리 뿌리를 가볍게 긁으며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가련하면서도 자극을 억지로 참으려 애쓰는 표정을 감상한다.',
      ]);
      await defender.say_and_wait(['하아, 하아…… 인간…… 쓰레기……']);
      await attacker.print_and_wait([
        '살짝 이를 악물고 몸을 미세하게 떨고 있지만, 그것이 오히려 나의 가학심을 부추길 뿐이다.',
      ]);
      const body_hair_color = era.get(`cstr:${defender.id}:털색`);
      await attacker.print_and_wait([
        '더욱 짖궂게 ',
        {
          color: get_chara_color(body_hair_color),
          content: `${body_hair_color}색`,
        },
        ' 꼬리를 휘감아 가볍게 흔들었다.',
      ]);
    }
  }

  /** @author ALEX */
  async pull_tail(attacker, defender) {
    if (defender.sex_code === 1) {
      return;
    }
    await defender.say_and_wait('이얏~❤️');
    await defender.print_and_wait(['꼬리 끝에서 뿌리까지, 그리고 온몸을 휩쓰는 기묘한 감각.']);
    await defender.print_and_wait([
      '오랫동안 쓰지 않던 케이블에 갑자기 전기가 통하듯, 통증이 느껴지는 꼬리 뿌리에서 뇌로, 다시 뇌에서 웅성거리는 보지로 쾌락이 전해진다.',
    ]);
    await defender.print_and_wait([
      '몸이 뒤로 젖혀지는 동시에, 무의식적으로 꼬리를 흔들며 아양을 떨기 시작했다.',
    ]);
  }

  /** @author ALEX */
  async cunnilingus(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '눈을 가늘게 뜨고 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 이미 스스로 꼿꼿하게 선 붉게 부은 음핵을 근거리에서 관찰했다.',
      ]);
      await attacker.print_and_wait([
        '그 과정에서 일부러 내뱉는 숨결이 닿게 하자, 자극받은 작은 콩알이 조금 더 꼿꼿해졌다.',
      ]);
      await defender.say_and_wait(['안 돼, 보지 마……']);
      await attacker.print_and_wait([
        '혀를 음핵 위에 대고 강하게 핥아 올리자, 방금 전까지 엄하게 호통치던 목소리에 애원의 기색이 섞인다.',
      ]);
      await attacker.print_and_wait([
        '경련하며 음액을 내뿜는 보지가 내 입술을 축축하게 적셨다.',
      ]);
    } else {
      await defender.print_and_wait([
        '민감한 작은 콩알이 혀끝에 농락당하자, 이를 악물어 참으려 하지만 입술 사이로 가끔 신음 소리가 새어 나온다.',
      ]);
      await defender.print_and_wait(['하지만, 그렇게 쉽게 저항을 포기하지 않을 거야!']);
      await defender.say_and_wait(['이야아악!!!']);
      await defender.print_and_wait([
        '갑작스러운 통증과 전기가 통하는 듯한 쾌락에 몸이 순간적으로 뻣뻣해졌고, 입가는 제어할 수 없이 파르르 떨렸다.',
      ]);
      await defender.say_and_wait(['잠깐! 거기를 이빨로 물지 마!']);
    }
  }

  /** @author ALEX */
  async suck_virgin(attacker, defender, hook) {
    if (hook.arg) {
      await defender.say_and_wait(['안 돼…… 안 돼…… 저리 가……']);
      await attacker.print_and_wait([
        '내키는 대로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 ',
        virgin_color_desc[era.get(`talent:${defender.id}:음핵타입`)],
        ' 보지에 입을 맞추었다. 위협적이지도 않고 오히려 떨리기만 하는 그녀의 경고는 무시했다.',
      ]);
      await attacker.print_and_wait(['살짝 빨아올리자, 따뜻하고 부드러운 혀가 질 안으로 들어갔다.']);
      await attacker.print_and_wait([
        '부드러운 질벽의 주름을 앞뒤로 긁어대자, 가끔 수축하는 질벽이 마치 내 혀를 밀어내려는 듯한 느낌이 든다.',
      ]);
    } else {
      await defender.say_and_wait(['싫어…… 우후후……']);
      await defender.print_and_wait([
        '입구 쪽의 주름진 살점이 파고든 이물질에 의해 구석구석 유린당했다.',
      ]);

      await defender.print_and_wait([
        '낮게 욕설을 내뱉는 사이, ',
        era.get(`cflag:${defender.id}:종족`) ? '달리기 위한 ' : '',
        '두 다리는 이미 힘없이 떨리며 다리 사이에 묻힌 머리를 감싸 안았다.',
      ]);
    }
  }

  /** @author ALEX */
  async ask_blow_job(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.print_and_wait([
        '입가에 내밀어진 비릿한 귀두를 머금고, 망설이듯 천천히 혀를 기둥에 밀착시켰다.',
      ]);
      await attacker.say_and_wait(['조금 더 힘내보라고.']);
      await defender.say_and_wait(['정말 끝도 없네……'], true);
      await defender.say_and_wait(['으응……']);
      await defender.print_and_wait([
        '하지만 현재의 상황에 굴복한 그녀는 스스로 입안을 좁혔고, 위아래로 움직이는 입술이 젖은 타액을 자지에 골고루 발랐다.',
      ]);
      await defender.print_and_wait([
        '설면이 아주 마지못해 표면에 솟은 핏줄을 핥아 올리자, 자지가 그녀의 타액으로 반짝이기 시작했다.',
      ]);
      await defender.say_and_wait(['으응…… 왜 또 조금 커진 거야……'], true);
    } else {
      await defender.print_and_wait(['눈을 감고, 보지 않으면 신경 쓰이지 않을 거라 생각한다.']);
      await defender.print_and_wait([
        '하지만 예민한 후각은 현재의 상황을 그녀에게 충실히 보고하고 있다.']);
      await defender.print_and_wait([
        '부드러운 입술이 천천히 음경을 감싸 안고, 노래를 연습하던 혀끝이 귀두 주위를 감돌며, 트로피를 들어야 할 양손이 음경을 붙잡는다.',
      ]);
      await defender.print_and_wait(['입맞춤…… 호흡…… 냄새……']);
      await defender.say_and_wait(['냄새나……'], true);
    }
  }

  /** @author ALEX */
  async force_blow_job(attacker, defender, hook) {
    if (hook.arg) {
      await attacker.print_and_wait([
        '팽창할 대로 팽창한 자지로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입술을 강제로 벌렸다.',
      ]);
      await attacker.print_and_wait([
        '부드러운 입술이 고리처럼 자지를 조이며 앞뒤로 움직이고, 뺨 한쪽이 불룩하게 튀어나올 정도로 깊게 박혔다.',
      ]);
      await attacker.print_and_wait([
        '반사적으로 오므라든 입술과 뺨 안쪽의 점막이 자지를 위해 아주 좁은 고깃구멍을 만들어냈다.',
      ]);
      await attacker.print_and_wait([
        '하지만 무엇보다 마음에 드는 것은, 나를 향한 경멸을 담은 채 반짝이는 그녀의 눈동자다.',
      ]);
    } else {
      await defender.say_and_wait(['하아……❤️']);
      await attacker.print_and_wait([
        '방금 전까지 나만을 뚫어지게 노려보던 눈동자가 이제는 초점을 잃었고, 자지가 입 밖으로 뽑혀 나올 때의 짧은 숨결 사이로,',
      ]);
      await attacker.print_and_wait([
        '이름이 ',
        defender.get_colored_name(),
        ' 인 이 ',
        era.get(`cflag:${defender.id}:종족`)
          ? defender.get_sex_slave_title()
          : defender.get_phy_sex_title(),
        '는 무의식적으로 내민 혀로 자지를 가볍게 받치고 있다.',
      ]);
      await attacker.print_and_wait([
        '입안의 타액과 쿠퍼액이 섞여 뚝뚝 떨어지게 내버려 두며, 강렬한 자지 냄새가 섞인 공기를 크게 들이마신다.',
      ]);
    }
  }

  /** @author ALEX */
  async ask_deep_blow_job(attacker, defender, hook) {
    await common_deep_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async force_deep_blow_job(attacker, defender, hook) {
    if (hook.arg && era.get(`cflag:${defender.id}:종족`)) {
      await defender.print_and_wait([
        '못 들은 척하며, 그저 귀두를 머금고 빠는 동작만을 계속 유지한다.',
      ]);
      await defender.print_and_wait([
        '이미 이만큼이나 해줬는데, 더 깊이 머금으라는 건 좀 너무 심한 요구 아닌가?',
      ]);
      await defender.say_and_wait(['으으?']);
      await defender.print_and_wait([
        '꼬리에 누군가 만지는 촉감이 느껴진다. 또 만지려는 건가? 다른 한 손은 귀를 긁기 시작했다.',
      ]);
      await defender.say_and_wait(['으으으?!']);
      await defender.print_and_wait([
        '예상치 못하게 꼬리를 잡아당기자 순식간에 온몸에 힘이 쭉 빠졌고, 머리를 누르고 있던 손이 거칠게 아래로 눌려 내려왔다.',
      ]);
      await defender.print_and_wait([
        '입술과 혀 사이에 걸쳐있던 귀두가 단숨에 목구멍 깊숙한 곳까지 처박혔다.',
      ]);
      await defender.say_and_wait(['커헉!!']);
      await defender.print_and_wait([
        '비린내로 가득 찬 미뢰와 비강, 그리고 뇌는 민감한 몸과 함께 경련하며 요동쳤다.',
      ]);
    } else {
      await common_deep_blow_job(attacker, defender, hook);
    }
  }

  /** @author ALEX */
  async ask_hand_job(attacker, defender, hook) {
    await common_hand_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async force_hand_job(attacker, defender, hook) {
    await common_hand_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_tit_job(attacker, defender, hook) {
    await common_tit_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async fuck_tit_and_mouth(attacker, defender, hook) {
    await tit_and_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async ask_tit_and_blow_job(attacker, defender, hook) {
    await tit_and_blow_job(attacker, defender, hook);
  }

  /** @author ALEX */
  async bite_nipple(attacker, defender, hook) {
    if (defender.sex_code === 1) {
      return;
    }
    if (hook.arg) {
      await defender.say_and_wait(['안 돼~ 안 돼~~ 저리 가!']);
      await attacker.print_and_wait([
        '침으로 젖은 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 붉은 딸기를 이빨로 지그시 물었다. 힘을 주어 깨물자, 그동안 쌓여있던 강렬한 가려움과 욕망이 단숨에 폭발했다.',
      ]);
      await defender.say_and_wait(['으앗!!!❤️']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 참지 못하고 가련한 신음을 흘렸다.',
      ]);
      await attacker.print_and_wait([
        '이내 제정신이 든 듯 서둘러 고개를 저으며 떼어냈고, 얼굴 가득 홍조를 띤 채 혀를 거두어들였지만 가슴 위로는 타액의 은사가 길게 늘어졌다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '이빨 끝으로 깨물어 붉게 부어오른 흔적을 남기고, 때때로 강하게 물어뜯어 밀쳐내려던 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '을(를) 맥없이 주저앉게 만들었다.',
      ]);
      await defender.say_and_wait(['으윽…… 나쁜 놈❤️! 쓰레기! 강간범❤️!']);
      await attacker.print_and_wait(['내뱉는 분노의 욕설조차 이제는 끈적하고 유혹적으로 들릴 뿐이다.']);
    }
  }
}

module.exports = EroRapeMakingOuts;