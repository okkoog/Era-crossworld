const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const basement_owners = require('#/data/event/basement-owners');
const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

async function ask_release_agree() {
  const grand = get_chara_talk(89),
    me = get_chara_talk(0),
    another = basement_owners.get().filter((e) => e !== 89)[0],
    callname = sys_get_colored_callname(89, 0);
  if (era.get('exp:89:감금횟수') === 1 && !new GrandLifeMarks().b_find_escape) {
    await grand.say_and_wait(['……네.']);

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 여길 떠나고 싶다는 부탁을 듣자, ',
      grand.get_colored_name(),
      '은 한참을 망설이다, 마침내 천천히 고개를 끄덕였다.',
    ]);
    era.println();

    if (another) {
      await grand.say_and_wait([
        '최근에…… ',
        sys_get_colored_callname(89, another),
        '이(가) 저한테 말했어요…… ',
        callname,
        '을 해외로 데려가겠다고.',
      ]);
      await grand.say_and_wait([
        grand.sex,
        ' 말로는 그곳에 가기만 하면…… 영원히 ',
        callname,
        '을 독차지할 수 있을 거라고 했어요.',
      ]);
      await grand.say_and_wait(['『영원』이라니…… 정말 무척이나…… 매력적이네요.']);
      era.println();

      await era.printAndWait([grand.get_colored_name(), '은 씁쓸하게 웃고 있다.']);
      await era.printAndWait([
        '기억을 더듬어보면, 이 지하실에 온 이후로 ',
        grand.get_teen_sex_title(),
        '은 항상 씁쓸한 웃음만 짓고 있었다.',
      ]);
      era.println();

      await grand.say_and_wait(['하지만…… 전 역시 이 추억이 가득한 장소를 떠나기가 아쉬워요.']);
    } else {
      await grand.say_and_wait([
        '최근에…… ',
        sys_get_colored_callname(89, 90),
        '랑 ',
        sys_get_colored_callname(89, 91),
        '가 뭔가를 눈치챈 것 같아요, 계속 제게 포기하라고 설득하고 있어요.',
      ]);
      await grand.say_and_wait([
        '절 위해서 그러는 건 알지만, 그건…… 더 이상 이곳이 안전하지 않다는 뜻이기도 하니까요……',
      ]);
      await grand.say_and_wait(['머지않아, 구조대가…… 이곳을 발견하게 되겠죠.']);
      era.println();

      await era.printAndWait([grand.get_colored_name(), '은 씁쓸하게 웃고 있다.']);
      await era.printAndWait([
        '기억을 더듬어보면, 이 지하실에 온 이후로 ',
        grand.get_teen_sex_title(),
        '은 항상 씁쓸한 웃음만 짓고 있었다.',
      ]);
      era.println();

      await grand.say_and_wait([
        '하지만…… 저는…… 그래서 ',
        callname,
        '을 보내주려는 게 아니에요.',
      ]);
    }
    await grand.say_and_wait([
      '원래는…… 아주 조금의 사랑만 받을 수 있다 해도, 모든 걸 버려서라도…… 두 번 다시 당신의 손을 놓지 않으려고 했어요.',
    ]);
    await grand.say_and_wait([
      '내 손으로 직접 ',
      callname,
      '을 망가뜨리게 되더라도, 당신 곁을 떠나고 싶지 않았어요.',
    ]);
    era.println();

    await era.printAndWait([
      '그렇게 말하며, ',
      grand.get_colored_name(),
      '은 무의식적으로 작은 주먹을 꽉 쥐었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '과(와) 시선이 마주치자, ',
      grand.get_child_sex_title(),
      '은 서서히 손에 힘을 풀었다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '……하지만…… 요 며칠 동안, 계속 ',
      callname,
      '과 함께 겪었던…… 여러 가지 일들이 떠올랐어요.',
    ]);
    await grand.say_and_wait(['알고 보니…… 제가 가장 좋아하는 건——']);
    await grand.say_and_wait([ callname,'을 제 시선 안에 묶어두는 것이 아니라 ', callname, '의 웃는 얼굴이었어요.']);
    era.println();

    await era.printAndWait([
      '그렇게 말하며 ',
      grand.get_colored_name(),
      '은 주머니에서 열쇠꾸러미를 꺼냈다. 그것은 ',
      me.get_couple_title(),
      '의 만남을 증명하는 증표였다.',
    ]);
    await era.printAndWait([grand.sex, '는 떨리는 작은 손으로 그중 하나를 골라, 자물쇠에 꽂아 넣었다.']);
    await era.printAndWait([
      '『철컥』 하는 소리와 함께, 그 무겁고 억압적이던 자물쇠가 마침내 풀렸다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '만약 이렇게 해서, 자유를 돌려드리면…… 당신은 절 다시 좋아해 주실 건가요……?',
    ]);
    await grand.say_and_wait([
      '……라니, 이런 건 불가능하다는 걸 잘 알고 있으면서도, 저도 모르게 기대를 품게 되네요……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      grand.get_colored_name(),
      '의 두 손이 치맛자락을 꽉 쥐고 있는 것을 눈치챘다.',
    ]);
    era.println();

    if (another) {
      await grand.say_and_wait(['빨리 가세요, ', callname, '…… 다른 사람들이 돌아오기 전에요.']);
      await grand.say_and_wait(['제 걱정은 안 하셔도 돼요…… 전…… 전 괜찮을 테니까요.']);
      await grand.say_and_wait(['게다가 저 같은 건, 걱정해주실 가치도 없는걸요……']);
      era.println();

      await era.printAndWait([
        '그럼에도 불구하고 ',
        grand.get_colored_name(),
        '은 굳게 닫힌 무거운 문을 밀어 열며, ',
        me.get_colored_name(),
        '에게 어서 떠나라고 재촉했다.',
      ]);
    } else {
      await grand.say_and_wait([
        '제가 저지른 일이…… 사과로 해결될 문제가 아니라는 건 알아요.',
      ]);
      await grand.say_and_wait(['그래도…… 죄송해요, ', callname, '.']);
      await grand.say_and_wait(['그리고, 안녕히 계세요…… ', callname, '.']);
      era.println();

      await era.printAndWait([
        '그럼에도 불구하고 ',
        grand.get_colored_name(),
        '은 억지로 미소를 지어 보이며, ',
        me.get_colored_name(),
        '이(가) 떠나는 모습을 배웅했다.',
      ]);
    }

    era.printButton('혼자서 떠난다', 1);
    era.printButton(`${grand.sex}에게 함께 가자고 제안한다`, 2, {
      disabled:
        era.get('relation:89:0') < 200 || new GrandLifeMarks().b_flatter < 3,
    });

    if ((await era.input()) === 1) {
      await me.say_and_wait([sys_get_callname(0, 89)[0], '……']);
      era.println();

      await era.printAndWait([
        '무언가 말하려고 했지만, 메말라버린 목구멍은 그저 입만 벙긋거리게 할 뿐이었다.',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        grand.get_colored_name(),
        '이 아무리 마음에 걸려도, 몸과 정신은 이미 붕괴 직전에 달해 있었다.',
      ]);
      await era.printAndWait([
        '어쩌면 이번 일은 그저 순간적인 충동이었을지도 모른다…… 하지만 ',
        grand.get_child_sex_title(),
        '를 보자마자 무의식적으로 공포를 느끼는 마음은, 틀림없이 깨진 유리가 다시 붙을 수 없다는 증거였다.',
      ]);
      await era.printAndWait([
        '어쩌면 다시 햇빛을 보게 된 후 ',
        grand.get_child_sex_title(),
        '의 이번 폭행을 숨겨주는 것만이, ',
        me.get_colored_name(),
        '이(가) ',
        grand.sex,
        '를 위해 해줄 수 있는 유일한 일일지도 모른다.',
      ]);
      era.println();

      await me.say_and_wait(['젠장……'], true);
      era.println();

      await era.printAndWait([
        '한심한 자신을 원망하며, ',
        me.get_colored_name(),
        '은(는) 벽을 짚은 채 간신히 지하실을 빠져나왔다.',
      ]);
    } else {
      await era.printAndWait([
        '철문과 ',
        grand.get_child_sex_title(),
        ' 사이를 번갈아 보던 ',
        me.get_colored_name(),
        '은(는) 마음속으로 조용히 결정을 내렸다.',
      ]);
      era.println();

      await me.say_and_wait([
        sys_get_colored_callname(0, 89),
        '…… 네 꿈, 아직 기억해?',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        '의 태도로 보아, 이번 과격한 행동은 그저 일시적인 충동으로 벌인 일인 것 같았다.',
      ]);
      await era.printAndWait([
        '실수는 누구나 하는 법. 어른으로서 ',
        grand.sex,
        '에게 다시 시작할 기회를 줘야 한다.',
      ]);
      era.println();

      await grand.say_and_wait(['에……?']);
      await grand.say_and_wait(['제, 제 꿈이요……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        '은 우물쭈물하며 쉽게 말을 꺼내지 못했다. 처음 ',
        grand.sex,
        '와 만났을 때와 똑같은 모습이었다.',
      ]);
      await era.printAndWait([
        '그때 ',
        grand.get_child_sex_title(),
        '의 꿈을 이뤄주겠다고 한 약속을, 고작 이런 일로 쉽게 포기할 수는 없다.',
      ]);
      era.println();

      await me.say_and_wait(['그 꿈, 계속해서 이뤄나가자.']);
      await grand.say_and_wait(['……에?']);
      await grand.say_and_wait([
        '그 말은…… 제, 제가 계속 ',
        callname,
        ' 곁에 남아있어도 된다는 뜻인가요?',
      ]);
      await me.say_and_wait([
        '당연하지. ',
        sys_get_colored_callname(0, 89),
        '은 나의 애마니까.',
      ]);
      era.println();

      await era.printAndWait([
        '그 말을 들은 ',
        grand.get_colored_name(),
        '은 처음엔 놀란 듯하더니, 이내 마음에 걸리는 게 있는 표정을 지었다.',
      ]);
      era.println();

      await grand.say_and_wait([
        '하지만…… 하지만 전, 전 ',
        callname,
        '을 상처 입히는 짓을 해버렸는걸요!',
      ]);
      await grand.say_and_wait([
        '게다가 ',
        callname,
        '이 오랫동안 사라졌으니…… 다들 분명히——',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        '의 말은 도중에 숨을 들이켜는 소리와 함께 삼켜졌다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 정면에서 ',
        grand.get_child_sex_title(),
        '의 두 손을 맞잡아 가슴팍으로 가져갔기 때문이다.',
      ]);
      era.println();

      await me.say_and_wait(['넌 아무 짓도 안 했어. 내가 증명할게.']);
      await grand.say_and_wait(['……!']);
      await me.say_and_wait(['본인이 직접 말하는 거니까, 이것보다 설득력 있는 건 없겠지?']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 예전에도 그랬던 것처럼, ',
        grand.get_colored_name(),
        '의 얼굴을 자신의 가슴팍에 묻어 ',
        grand.sex,
        '가 불쾌한 일들을 떠올리지 않게 해주었다.',
      ]);
      era.println();

      await me.say_and_wait([
        '악몽은 누구나 꾸는 거야. 그저 ',
        sys_get_colored_callname(0, 89),
        '의 잠버릇이 좀 험했을 뿐이지.',
      ]);
      await me.say_and_wait(['꿈에서 깨어나면 모든 건 끝나는 거야. 그냥 그것뿐이야.']);
      await me.say_and_wait([
        '애초에 ',
        sys_get_colored_callname(0, 89),
        '이 이런 짓을 하게 몰아붙인 내가 진짜 원흉이야…… 나를 용서해 줄래?',
      ]);
      await grand.say_and_wait([callname, '…… ', callname, '……!']);
      await grand.say_and_wait(['흐으흑…… 으아아앙……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 품에 안겨, 끊임없이 「용서할게요」라고 중얼거리며 오랫동안 소리 내어 울었다.',
      ]);
      await era.printAndWait([
        '진정한 후 ',
        me.get_colored_name(),
        '은(는) ',
        grand.get_child_sex_title(),
        '의 손을 이끌고 지하실을 빠져나왔다.',
      ]);
    }
  } else {
    await grand.say_and_wait(['네…… ', callname, '을 보내드릴게요.']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '의 끊임없는 애원에, ',
      grand.get_colored_name(),
      '은 한참을 침묵하다 마침내 입을 열었다.',
    ]);
    await era.printAndWait([
      '하지만 이내, 모자챙 아래의 두 눈으로 ',
      me.get_colored_name(),
      '을(를) 응시하며, 자신의 요구를 말했다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '하지만…… 이번에는, ',
      callname,
      '도 꼭 절 똑바로 봐주셔야 해요.',
    ]);
    era.println();

    await era.printAndWait([
      '한 치의 망설임도 없이, ',
      grand.get_teen_sex_title(),
      '가 내건 조건에 대해 ',
      me.get_colored_name(),
      '은(는) 두 번 다시 같은 실수를 반복하지 않겠다고 거듭 맹세했다.',
    ]);
    await era.printAndWait([
      '아무 의미 없는 맹세였음에도 불구하고, ',
      grand.get_colored_name(),
      '은 여전히 몹시 만족스러운 듯 살짝 고개를 끄덕였다.',
    ]);
    era.println();

    await grand.say_and_wait(['네…… 전 ', callname, '을 믿어요.']);
    await grand.say_and_wait([
      '하지만 이번엔…… 두 번 다시 ',
      callname,
      '을 제 시선에서 벗어나게 두지 않을 거예요.',
    ]);
    era.println();

    await era.printAndWait([
      '사면이라도 받은 듯 안도하던 ',
      me.get_colored_name(),
      '은(는) 그 말을 듣고, 아직 일이 끝나려면 멀었다는 것을 깨달았다.',
    ]);
    await era.printAndWait([
      '미래에 대한 걱정…… 그리고 등 뒤에서 느껴지는 시선을 안은 채, ',
      me.get_colored_name(),
      '은(는) 지하실을 빠져나왔다.',
    ]);
  }
}

module.exports = ask_release_agree;