/**
 * @file 하루 우라라 - 지하실
 * @author 99
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

function common_welcome() {
  const in_urara = get_chara_talk(52, chara_colors[1]);
  in_urara.say_as_unknown(
    '역시 이런 일은, 처음이 어렵지 그다음부터는 망설임조차 없게 되네요…… 게다가 선택권조차 없으니까요.',
  );
  in_urara.say_as_unknown(
    '하지만 너무 불안해하지 마세요. 이왕 이렇게 된 거, 우라라의 제멋대로인 면을 즐겨보시는 건 어떨까요?',
  );
  era.drawLine();
}

function common_welcome_end() {
  const in_urara = get_chara_talk(52, chara_colors[1]);
  era.drawLine();
  in_urara.say_as_unknown([
    '죄송해요, 우라라는 결국 나쁜 아이가 되어버렸네요. 이렇게 되면 저도 어쩔 도리가 없답니다.',
  ]);
  in_urara.say_as_unknown([
    '당신이 무언가를 하려 해도, 대부분의 상황에서 저는 못 본 척 눈감아 드릴 테니, 부디 마음껏 즐겨주세요.',
  ]);
}

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const me = get_chara_talk(0),
      callname = sys_get_callname(52, 0),
      urara = get_chara_talk(52),
      in_urara = get_chara_talk(52, chara_colors[1]);
    await era.printAndWait([
      '언제나 ',
      me.get_colored_name(),
      '의 의견에 타당한 이유가 있다면, ',
      urara.get_colored_name(),
      '는 대체로 동의해 준다. 비록 감금된 처지일지라도, 이러한 묘한 유대감은 여전히 유효했다.',
    ]);
    await urara.say_and_wait([
      '응! 괜찮아, ',
      callname,
      '가 그렇게 말하는 것도 다 우라라를 위해서지? 그럼 나도 더 이상 고집 피우면 안 되겠네……',
    ]);
    await urara.say_and_wait([
      callname,
      ', 밖에 나가면 우라라가 당분간은 지켜줄 수 없으니까, 조심해야 해! 내일 또 보자……?',
    ]);
    await era.printAndWait([
      '눈물이 떨어지지 않도록 꾹 참으며, ',
      urara.get_colored_name(),
      '는 붉어진 눈가를 살며시 문지르고는 아쉬움 가득한 손길로 ',
      me.get_colored_name(),
      '을(를) 위해 문에 설치된 장치를 열어주었다.',
    ]);
    await era.printAndWait([
      '어둠 속에서 쓸쓸한 표정을 짓고 있는 가여운 ',
      urara.get_uma_sex_title(),
      '를 바라보자, 순간 ',
      me.get_colored_name(),
      '의 마음속에는 계속 ',
      urara.sex,
      '의 곁에 남아주고 싶다는 생각이 스쳐 지나갔다.',
    ]);
    await era.printAndWait([
      '하지만 지금 이 자리에 머무는 것은 이미 불가능한 일이다. 무겁게 가라앉은 발걸음을 옮기며, ',
      me.get_colored_name(),
      '은(는) 어딘가 공허한 「자유」를 향해 걸어 나갔다……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '하지만 우라라가 말한 것처럼, 조심하는 게 좋을 거예요. 가급적이면 아무 생각 없이 이곳으로 다시 돌아오지 않는 편이 좋답니다.',
    ]);
  }

  async ask_release_reject() {
    const me = get_chara_talk(0),
      in_urara = get_chara_talk(52, chara_colors[1]);
    await in_urara.say_as_unknown_and_wait([
      '너무 짧은걸요? 그런 사소한 일들은 잠시 잊어버리세요. 적어도 지금은 당신이 쉽게 입을 열게 두지 않을 테니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신이 무엇을 쫓으려 하든, 저에게는 『우라라의 지금 이 순간』보다 중요한 건 없답니다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '자, 밖으로 나가겠다는 생각은 잠시 접어두세요. 이제 편히 숨을 들이켜셔도 좋습니다.',
    ]);
    await era.printAndWait([
      '선언이 끝나자마자, 숨이 막힐 듯한 압박감이 소리를 내려던 ',
      me.get_colored_name(),
      '의 목을 놓아주었으나, 누군가 등 뒤를 노려보는 듯한 서늘함이 뒷덜미를 타고 올라왔다.',
    ]);
    await era.printAndWait([
      '곁눈질로 뒤를 살피자, 회흑색의 투명한 빛을 띠며 주변 풍경에 녹아든 「',
      in_urara.get_colored_actual_name(),
      '」가 차가운 시선으로 ',
      me.get_colored_name(),
      '을(를) 쏘아보고 있었다.',
    ]);
    await era.printAndWait(['계책과 핑계뿐만 아니라, 인내심 또한 반드시 갖춰야 할 덕목이다……']);
  }

  async ask_time(date, hours, minutes) {
    const callname = sys_get_callname(52, 0),
      urara = get_chara_talk(52);
    await urara.say_and_wait([
      `에? 아, 잠시만 기다려 봐…… 지금 시간은 ${CustomizedBase.get_cur_time(hours, minutes)}이야.`,
    ]);
    await urara.say_and_wait([
      callname,
      ', 중요한 일이 생각난 거야? 미안해, 우라라는 평소에 시간을 잘 못 지켜서 지금도 그런 건 생각 못 하고 있었어……',
    ]);
    await urara.say_and_wait([
      '하지만 어렵게 같이 있게 됐는데, 조금만 더 우라라랑 놀아주면 안 될까? 우라라는 아직……',
    ]);
  }

  back_basement() {
    if (!LifeEventMarks.get_marks(this.id).b_start) {
      return super.back_basement();
    }
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      urara = get_chara_talk(52);
    common_welcome();
    era.print([
      '낯설면서도 익숙한 방에서 눈을 뜨며, ',
      me.get_colored_name(),
      '은(는) 포근한 어둠 속에서 몸을 일으켰으나 방 안에는 아무도 없다는 사실을 깨달았다.',
    ]);
    era.print([
      me.get_colored_name(),
      '이(가) 누가 이런 짓을 벌였는지 의아해하던 찰나, 시선 끝에 닿은 문 너머에서 작은 발소리가 들리더니 잠금장치가 풀리는 소리가 울려 퍼졌다.',
    ]);
    urara.say([callname, ', 일어났구나! 헤헤…… 이번에도 나랑 한참 동안 같이 있어줘야 해?']);
    era.print([
      '벚꽃색 머리의 작은 주모자가 천진난만하게 웃으며 힘차게 달려와 안기자, ',
      me.get_colored_name(),
      '의 갓 깨어난 의식은 다시 한번 어지럽게 소용돌이쳤다.',
    ]);
    common_welcome_end();
  }

  async battle_escape() {
    const in_urara = get_chara_talk(52, chara_colors[1]),
      urara = get_chara_talk(52),
      me = get_chara_talk(0);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 끈질긴 방해를 온 힘을 다해 뿌리치고, ',
      me.get_colored_name(),
      '은(는) 무거운 몸을 이끌고 마지막 장치 앞에 도달했다.',
    ]);
    await era.printAndWait([
      '천만다행으로 남은 체력은 ',
      me.get_colored_name(),
      '이(가) 이곳을 탈출하기에 충분했다. 묵직한 대문을 밀어젖히며, ',
      me.get_colored_name(),
      '은(는) 저 멀리 자유를 상징하는 빛을 향해 발을 내디뎠다.',
    ]);
    await era.printAndWait([
      '방을 나서는 순간, 출처를 알 수 없는 오한과 함께 뇌리를 직접 파고드는 듯한 나직한 읊조림이 등 뒤에서 ',
      me.get_colored_name(),
      '의 척추를 타고 올라왔다.',
    ]);
    await era.printAndWait([
      '고개를 돌린 찰나, ',
      me.get_colored_name(),
      '은(는) 또 다른 ',
      in_urara.get_colored_name(),
      '가 문가에 서서 서늘할 정도로 깊은 원망의 기운을 뿜어내고 있는 것을 보았다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '결국 우리 주인공께서는 이렇게 무책임하게 도망쳐 버리시는군요. 참으로 경사스럽네요, 그렇죠?',
    ]);
    await in_urara.say_as_unknown_and_wait(['……어서 가세요. 이번에는 당신을 붙잡지 못한 걸로 해두죠.']);
    await era.printAndWait([
      '등줄기를 찌르는 시선을 뒤로한 채, ',
      me.get_colored_name(),
      '은(는) 필사적으로 지하실을 빠져나와 단단한 지면 위에 쓰러지고서야 비로소 안도할 수 있었다.',
    ]);
  }

  async battle_prison() {
    const in_urara = get_chara_talk(52, chara_colors[1]),
      urara = get_chara_talk(52),
      me = get_chara_talk(0),
      callname = sys_get_callname(52, 0);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 예상외로 순조롭게 ',
      urara.get_colored_name(),
      '의 방해를 뿌리치고 마지막 장치 앞에 섰다. 이 장치만 해제하면, 드디어──',
    ]);
    await me.say_and_wait('……');
    await era.printAndWait([
      '하지만 그 자리에 얼어붙은 ',
      me.get_colored_name(),
      '은(는), 끝내 이 잔인할 정도로 간단한 장치를 몇 번이고 해제하지 못했다.',
    ]);
    await era.printAndWait([
      '굳게 닫힌 두꺼운 문에 걸린 「',
      callname,
      '」과(와) 「',
      sys_get_callname(0, 52),
      '」의 합동 사진 속 두 사람의 미소는, 햇빛 아래 매미 날개처럼 얇고 위태로워 보였다.',
    ]);
    await era.printAndWait(['뒤이어 들려온 것은 「악마의 조롱」이었다.']);
    await in_urara.say_as_unknown_and_wait([
      '간단해요, 트레이너님. 그저 문손잡이를 잡고 이 사진을 찢어버리기만 하면 된답니다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '음~ 망설여지시나요? 하지만 우라라에게 폭력까지 행사하셨던 당신에게, 이 정도는 아무 일도 아니잖아요?',
    ]);
    await era.printAndWait([
      '사진 속 환한 미소를 응시하며, ',
      me.get_colored_name(),
      '은(는) 결국 떨리는 손을 힘없이 거두었다. 귓가를 맴돌던 저주는 차가운 콧소리와 함께 흩어져 사라졌다.',
    ]);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      urara = get_chara_talk(52);
    if (is_back) {
      era.print([
        urara.get_colored_name(),
        '가 자리를 비운 사이, ',
        me.get_colored_name(),
        '은(는) 서둘러 이곳을 빠져나가려 했으나 겹겹이 쌓인 장치들 때문에 애를 먹고 있을 때 문이 갑자기 열렸다.',
      ]);
      urara.say([
        '에? ',
        callname,
        ', 이것도 못 푸는 거야? 우라라가 꽤 오랫동안 나갔다 왔는데도 결국 도망치지 못했네!',
      ]);
      era.print([
        '대문이 천천히 닫히며 외부의 빛을 차단하자, ',
        urara.get_teen_sex_title(),
        '의 작고 순수한 얼굴에는 어둠과 함께 짓궂은 조소와 조롱의 기운이 감돌았다.',
      ]);
    } else {
      era.print([
        urara.get_colored_name(),
        '가 아직 깨어나지 않은 틈을 타 ',
        me.get_colored_name(),
        '은(는) 이곳을 탈출하기로 결심했다. 하지만 수많은 장치 앞에서 고전하고 있을 때, 등 뒤에서 ',
        urara.get_teen_sex_title(),
        '의 목소리가 들려왔다.',
      ]);
      urara.say([
        '에? ',
        callname,
        ', 아직도 못 푼 거야? 우라라는 벌써 잠에서 다 깼다구?',
        callname,
        '는 우라라보다 머리가 훨씬 나쁜 거야?',
      ]);
      era.print([
        '등 뒤에 가만히 서서 ',
        me.get_colored_name(),
        '의 헛된 수고를 지켜보던 ',
        urara.get_teen_sex_title(),
        '의 작고 순수한 얼굴에는 어둠 속에서 묘한 조소와 조롱이 서려 있었다.',
      ]);
    }
    urara.say([
      callname,
      ', 당황했나 보네. 하지만 굳이 변명할 필요는 없어. 딱히 화난 건 아니니까!',
    ]);
    era.print([
      '마치 다 큰 어른처럼 ',
      me.get_colored_name(),
      '의 앞에 우뚝 선 ',
      urara.get_colored_name(),
      '는 말썽꾸러기 제자를 가르치는 선생님처럼, ',
      me.get_colored_name(),
      '을(를) 향해 「흥미진진한」 시선을 던졌다.',
    ]);
    era.print([
      '말은 그렇게 가볍게 하고 있었지만, 이후 이어진 시간 동안 미소에서 웃음기가 사라진 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 더욱 밀착해왔다.',
    ]);
  }

  async flatter() {
    const callname = sys_get_callname(52, 0),
      urara = get_chara_talk(52),
      me = get_chara_talk(0);
    era.println();
    if (Math.random() < 0.5) {
      await urara.say_and_wait([
        '에? ',
        callname,
        ', 그거 진심이야? 그래도 그렇게 말해주니까 기뻐, 그러니까…… 쪽~ 하아～～',
      ]);
      await urara.say_and_wait([
        '헤헤~ 이건 ',
        callname,
        '에게 주는 상이야. 우라라를 조금만 더 좋아해 주면 정말 행복할 것 같아!',
      ]);
      await era.printAndWait([
        '뺨을 붉게 물들인 채 ',
        me.get_colored_name(),
        '의 무릎 위에 걸터앉은 작은 ',
        urara.get_uma_sex_title(),
        '는 질척하고 깊은 입맞춤으로 ',
        me.get_colored_name(),
        '의 달콤한 말을 막아버렸다.',
      ]);
    } else {
      await urara.say_and_wait([
        '에? 아! ',
        callname,
        '가 무슨 말을 하려는지 알 것 같아. 그리고 꼭 진심이 아니어도 괜찮아, 우라라도 잘못했으니까.',
      ]);
      await urara.say_and_wait([
        '우라라는 ',
        callname,
        '와 함께 있는 것만으로도 정말 행복해. 하지만 바깥 일이 생각나면 가끔 너무 불안해져서……',
      ]);
      await urara.say_and_wait([
        '지금 ',
        callname,
        '가 곁에 있어 준다면…… 우라라도 잠시 고민을 잊을 수 있겠지, 그치?',
      ]);
    }
  }

  get_up() {
    if (!LifeEventMarks.get_marks(this.id).b_start) {
      return super.get_up();
    }
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      urara = get_chara_talk(52);
    common_welcome();
    era.print([
      '낯설면서도 익숙한 방에서 눈을 뜨며 옆자리의 온기를 살피자, 작은 ',
      urara.get_uma_sex_title(),
      '가 잠결에도 ',
      me.get_colored_name(),
      '의 몸을 꽉 끌어안고 있었다.',
    ]);
    era.print([
      me.get_colored_name(),
      '이(가) 깨어난 기척 때문인지, 머리카락을 늘어뜨린 채 잠들었던 ',
      urara.get_colored_name(),
      '도 어둠 속에서 촉촉하지만 생기를 잃은 벚꽃색 눈동자를 서서히 떴다.',
    ]);
    urara.say([
      '아~ ',
      callname,
      ', 잘 잤어? 지금이 몇 시쯤 됐으려나? 조금만 더 누워있자, 헤헤~ 쪽…… 하아～～～',
    ]);
    era.print([
      me.get_colored_name(),
      '의 몸 위로 올라탄 채, 상대가 입을 열기도 전에 ',
      urara.get_teen_sex_title(),
      '는 부드러운 입술과 혀를 이용해 다정하면서도 거부할 수 없는 힘으로 입을 막아버렸다.',
    ]);
    common_welcome_end();
  }

  async strike_fail() {
    const in_urara = get_chara_talk(52, chara_colors[1]),
      urara = get_chara_talk(52),
      me = get_chara_talk(0);
    await in_urara.say_as_unknown_and_wait([
      '보시다시피, ',
      me.get_adult_sex_title(),
      '（당신）께서는 담당을 기습하려 하셨지만, 예상대로 역으로 당해 기절하셨네요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '게임 오버 후에 나오는 무슨무슨 팁…… 같은 건 존재하지 않아요. 설령 있다 해도 건설적인 조언 같은 건 해드리지 않을 거고요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신도 잘 생각해보세요. 우라라는 어찌 됐든 계속 성장 가도를 달리고 있는 ',
      urara.get_uma_sex_title(),
      '랍니다. 이런 결과가 나오는 건 당연한 일 아닐까요?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '마지막으로…… 사과드릴게요. 비록 당신이 먼저 잘못을 저질렀지만, 우라라가 힘 조절을 못 한 부분에 대해서는 제가 잘 타이르도록 할게요.',
    ]);
  }

  async strike_success() {
    const in_urara = get_chara_talk(52, chara_colors[1]),
      me = get_chara_talk(0);
    await in_urara.say_as_unknown_and_wait([
      '보시다시피, 트레이너 ',
      me.get_adult_sex_title(),
      '（당신）께서는 담당을 기습하는 방식을 통해 지하실에서 성공적으로 탈출하셨습니다…… 하아……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '……정말이지 모질게도 손을 대셨네요. 하지만 당신이 그런 선택을 내린 이상, 제가 덧붙일 말은 없습니다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '굳이 그런 방식까지 써야 했나 싶지만, 관두죠. 저도 당분간은 당신의 얼굴을 보고 싶지 않으니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '……걱정 마세요. 상처받은 우라라는 제가 잘 달래둘게요. 다시 원래대로 돌려놓을 거예요, 전부……',
    ]);
  }

  welcome() {
    if (era.get('exp:52:감금횟수') > 1) {
      const callname = sys_get_callname(52, 0),
        me = get_chara_talk(0),
        urara = get_chara_talk(52);
      common_welcome();
      era.print([
        '낯설면서도 익숙한 방에서 눈을 뜨자, ',
        me.get_colored_name(),
        '이(가) 머물던 어둠은 의외로 따스했다. 그리고 ',
        me.get_colored_name(),
        '의 옆에 누워 있는 ',
        urara.get_colored_name(),
        '의 붉어진 벚꽃색 눈동자는 열망으로 가득 차 질척하게 젖어 있었다.',
      ]);
      urara.say([
        '우라라는 결국 나쁜 아이가 되어버렸나 봐. 하지만 이왕 나쁜 아이가 될 거라면 좀 더 제멋대로 굴고 싶어. 그러니까 ',
        callname,
        '……',
      ]);
      urara.say([
        '이번에는 나랑 좀 더 오래 있어 줘. 게다가…… 이번에는 ',
        callname,
        '에게 거부권 같은 건 없으니까!',
      ]);
      era.print([
        me.get_colored_name(),
        '의 대답도 기다리지 않은 채, 작은 ',
        urara.get_uma_sex_title(),
        '의 두 팔은 힘껏 ',
        me.get_colored_name(),
        '을(를) 아래에 깔고 껴안았고, 앳된 얼굴은 점차 진한 홍조로 물들었다.',
      ]);
      common_welcome_end();
    }
  }
};