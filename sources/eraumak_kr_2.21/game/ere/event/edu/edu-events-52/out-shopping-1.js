const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[34] = async (urara, me, in_urara, callname, edu_marks, flags) => {
    await print_event_name('모두가 가장 좋아하는 미소?', urara);
    await in_urara.say_as_unknown_and_wait(
      '오늘 어느 행사에서 열린 시범 레이스에 참가한 우라라는, 예상대로라 해야 할지, 또다시 아쉽게도 패배하고 말았습니다.',
    );
    await in_urara.say_as_unknown_and_wait([
      '표준적인 전개라고는 해도, 트레이너 ',
      me.get_adult_sex_title(),
      '(으)로서는 꽤나 골치가 아픈 일이었죠.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '어찌 된 영문일까요? 돌아오는 길에 누군가는 답을 낼 때까지 계속 멍한 상태겠지만, 하지만……',
    );
    era.drawLine();
    await era.printAndWait([
      '하지만 정식 레이스에서는 이길 수 있는데, 왜 이벤트 레이스에서는 여전히 꼴찌를 하는 걸까? ',
      urara.get_colored_name(),
      '는 결코 대충 달릴 ',
      urara.get_uma_sex_title(),
      '가 아닌데도...',
    ]);
    await era.printAndWait([
      '아마도 주변이 너무 강한 탓도 있겠지만, ',
      urara.get_colored_name(),
      '의 현재 실력이라면 꼴찌로 처진 채 거리가 크게 벌어질 정도는 아닐 텐데.',
    ]);
    await era.printAndWait(
      '집중도가 정식 레이스와 다른 점 등의 심리적 요인 외에, 설마 경쟁 의식이 너무 낮은 걸까? 그렇다면……',
    );
    await era.printAndWait([
      '드물게 곁에 있는 담당의 표정을 살피지 못한 채, ',
      me.get_colored_name(),
      '은(는) 시선과 생각을 저 멀리 인파 속으로 던졌다.',
    ]);
    await era.printAndWait([
      '몇 번을 지더라도 ',
      urara.get_colored_name(),
      '는 낙천적일 수 있다. 이것이 반드시 긍정적이라고만은 할 수 없으며, 오히려 다른 환부를 숨기고 있을지도 모른다.',
    ]);
    await urara.say_and_wait('계속 계속 힘내면, 다음번엔 꼭 이길 수 있을 거야!');
    await era.printAndWait([
      '오늘 레이스에 대해 ',
      urara.sex,
      '는 ',
      me.get_colored_name(),
      '에게 그렇게 말했다. 그리고 이전에 ',
      urara.sex,
      '의 친구로부터 들은 바에 따르면, ',
      urara.sex,
      '는 예전부터 질 때마다 늘 이랬다고 한다.',
    ]);
    await era.printAndWait([
      '다음엔 꼭 이기겠다는 말은, 대체 누구를 위로하기 위한 말일까. 이런 생각은 자신의 편견으로 ',
      urara.get_colored_name(),
      '를 제멋대로 추측하는 것이 아니었다.',
    ]);
    await era.printAndWait([
      '레이스에 대해 보다 현실적인 기대를 품고 있는 ',
      me.get_colored_name(),
      '의 심정은 안정되어 있었지만, 다음엔 이길 거라 말하는 ',
      urara.get_colored_name(),
      '는 정말 겉모습처럼 즐거운 상태인 걸까?',
    ]);
    await era.printAndWait([
      '오가는 인파 속에서 ',
      urara.get_colored_name(),
      '의 작은 손을 잡고 걸으며, ',
      me.get_colored_name(),
      '은(는) 언젠가 반드시 마주해야 할 문제에 대해 고민했다.',
    ]);
    await era.printAndWait([
      '비록 ',
      urara.get_colored_name(),
      '가 계속 긍정적이고 밝게 노력하며 이겨나가길 바라지만, 어떻게 해야 ',
      urara.sex,
      '와 서로를 더 깊이 이해할 수 있을까?',
    ]);
    era.println();
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '나, 길 잃어버리지 않는다구? 평소에도 이렇게 손잡고 있잖아? ',
        callname,
        ', 그렇게 꽉 잡지 않아도 돼!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 곁에 딱 달라붙어, ',
        urara.get_colored_name(),
        '는 웃으며 살며시 ',
        me.get_colored_name(),
        '의 손가락을 맞잡았다.',
      ]);
      await urara.say_and_wait([
        '그리고 말이야, 나는 웃는 얼굴이 ',
        callname,
        '에게 더 잘 어울린다고 생각해. 그러니까 미간 찌푸리고 생각하지 마!',
      ]);
      await era.printAndWait([
        '담당의 미소 속에서, ',
        me.get_colored_name(),
        '은(는) 미간과 손가락의 힘을 풀고 ',
        urara.get_colored_name(),
        '에게 미안하다는 듯 미소로 화답했다.',
      ]);
      await era.printAndWait([
        '맞다. 이건 정말 실수였다. 자신이 책임져야 할 일들만 생각하느라, 정작 더 중요한 ',
        urara.sex,
        ' 본인이 옆에 있다는 사실을 잊을 뻔했다.',
      ]);
      await era.printAndWait(
        '그런데 언제부터였을까. 단둘이 걷다 보면 어느새 자연스럽게 서로의 손을 즐겁게 맞잡게 된 것이.',
      );
    } else {
      await urara.say_and_wait([
        callname,
        '? 너무 세게 잡았어! 우라라라도 손이 아프단 말이야!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '에게 붙잡힌 손을 살짝 잡아당기는 ',
        urara.get_colored_name(),
        '의 미소에는 어딘가 곤혹스러움이 묻어났다.',
      ]);
      await urara.say_and_wait(
        '길에 사람이 많다구? 주의하지 않으면 위험하니까, 같이 즐겁게 집으로 돌아가는 게 좋아!',
      );
      await era.printAndWait([
        '투덜거리는 듯한 담당의 선의 어린 조언에 정신을 차린 ',
        me.get_colored_name(),
        '은(는) 몸의 긴장을 풀었다.',
      ]);
      await era.printAndWait([
        '그런데 언제부터였을까. 기분은 수시로 변할지언정 ',
        urara.get_colored_name(),
        '는 늘 자연스럽게 ',
        me.get_colored_name(),
        '의 손을 잡곤 했다.',
      ]);
      await era.printAndWait([
        '지금의 ',
        urara.sex,
        '는 대체 ',
        me.get_colored_name(),
        '에게 어떤 감정을 품고 있는 걸까? 아니면 ',
        urara.sex,
        '는 사실 아직 완벽하게 이성으로서의 인식을 하지 못하고 있는 걸까……',
      ]);
    }
    era.println();
    await era.printAndWait([
      '대부분의 사람들의 눈에는 이것이 그저 보호자가 아이를 데리고 가는 모습으로 보이겠지만, ',
      me.get_colored_name(),
      '에게는 또 다른 의미가 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '에게 마음을 빼앗기고 끌렸기에 ',
      urara.sex,
      '의 트레이너가 되었다. 하지만 지금은 ',
      urara.sex,
      '와 접촉할 때마다 매번 ',
      me.get_colored_name(),
      '의 이성이 깎여나가는 것만 같았다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '와 나누는 자연스러운 친밀감, 자연스러운 포옹. 하지만 그와 동시에 ',
      urara.sex,
      '의 천진하고 어린 육체에 점차 「흥미」를 느끼게 되는 것도 자연스러운 흐름이었다.',
    ]);
    await era.printAndWait(
      '정말이지 이대로 가다가는 성인으로서의 인생이 끝나버릴 것 같다는 예감이 들었다. 설마 정말로——',
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '하지만 트레이너 ',
      me.get_adult_sex_title(),
      '이(가) 또 다른 의구심에 빠지려던 찰나, 스쳐 지나가는 사람들의 말소리가 들려왔습니다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그것은 젊은 학생처럼 보이는 행인 두 명이 ',
      urara.get_colored_name(),
      '에 대해 나누는 이야기였죠.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '행인 A「저기 있는 ',
      urara.get_child_sex_title(),
      ', 아까 레이스에서 꼴찌 했던 그 애 아냐?」',
    ]);
    await era.printAndWait([
      '행인 B「이름이 하루 우라라였나? 어차피 이벤트 레이스일 뿐이고, 대충 뛰어도 상관없지 않겠어?」',
    ]);
    await era.printAndWait([
      '행인 A「아니야, ',
      urara.sex,
      '는 원래 못 이겨. 데뷔 전부터 계속 연패만 했다던데, 대체 어떻게 데뷔했는지 모르겠어.」',
    ]);
    await era.printAndWait([
      '행인 B「진짜 대단하네. 어떻게 중앙 트레센에 들어온 거야?」',
    ]);
    await era.printAndWait([
      '행인 A「아마 트레이너가 무슨 짓을 했겠지. 저렇게 친해 보이는 걸 보니, 분명 또 트레센의 괴담 같은……」',
    ]);
    await era.printAndWait(
      '행인 B「세상에, 그런 거였어? 보아하니 저 트레이너, 다루기 쉬운 애를 골랐나 보네……」',
    );
    await era.printAndWait([
      '비록 그것들이 아무 의미 없는 헛소문이라는 것을 알고 있음에도 불구하고, ',
      me.get_colored_name(),
      '은(는) 행인들의 계속되는 망언에 점차 짜증이 치밀어 올랐다.',
    ]);
    await era.printAndWait([
      '자신이 어떤 평가를 받든 상관없지만, ',
      urara.get_colored_name(),
      '가 설령 약하다고 해서 이런 험담을 들을 이유는 없었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) ',
      urara.get_colored_name(),
      '를 데리고 그 자리를 피하려던 그때, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 고개를 들어 ',
      me.get_colored_name(),
      '의 숨기지 못한 표정을 확인하더니, 먼저 잡고 있던 손을 놓았다.',
    ]);

    era.printButton('「기다……」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 행동은 한 발 늦었다. ',
      me.get_colored_name(),
      '이(가) 반응하기도 전에 ',
      urara.get_colored_name(),
      '는 이미 자신에 대한 험담을 하던 사람들 앞에 서 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 뒤따라갔을 때, ',
      urara.get_colored_name(),
      '는 갑작스러운 등장에 움찔거리는 행인들 앞에 다가가 있었다. 다행히 얼굴에는 평소처럼 다정한 미소를 띤 채였다.',
    ]);
    await urara.say_and_wait(
      '너희들, 우라라 이야기를 하고 있었구나! 아까 내 레이스도 봐준 거야?',
    );
    await era.printAndWait('행인 A「어, 그게, 우리는……」');
    await era.printAndWait([
      '꼬마 ',
      urara.get_uma_sex_title(),
      '는 귀를 쫑긋거렸고, 맑은 벚꽃빛 눈동자에는 어쩔 줄 몰라 하는 두 행인의 표정이 비쳤다.',
    ]);
    await era.printAndWait([
      '방금까지 자신을 험담하던 두 사람을 대하면서도, ',
      urara.get_colored_name(),
      '의 표정은 평소처럼 봄날처럼 화사했다.',
    ]);
    await urara.say_and_wait([
      '헤헤~ 맞아! 나는 사실 대단한 ',
      urara.get_uma_sex_title(),
      '가 아니야. 달리기도 별로 빠르지 않고, 거의 매번 지기만 해!',
    ]);
    await urara.say_and_wait(
      '그렇지만, 모두의 목소리를 들을 수 있다면 나는 계속 힘낼 수 있어!',
    );
    await era.printAndWait('행인 B「그, 그런 게 정말 가능할 리가……」');
    await urara.say_and_wait(
      '정말이야! 나는 굳게 믿고 있어! 달리는 것을 가장 좋아해 주고 나를 응원해 주는 모두가 있으니까, 다음번엔 꼭 이길 거야!',
    );
    await era.printAndWait([
      '거의 할 말을 잃은 두 사람을 향해 ',
      urara.get_colored_name(),
      '는 여전히 꼬리를 흔들었고, 투명한 목소리에는 단 한 점의 부정적인 불순물도 섞여 있지 않았다.',
    ]);
    await urara.say_and_wait('그러니까 괜찮다면, 다음에도 내 레이스를 보러 와주지 않을래?');
    await era.printAndWait('행인 A&B「……응, 가, 갈게. 아마도……」');
    era.println();
    if (era.get('relation:52:0') > 150) {
      await era.printAndWait([
        '두 사람의 더듬거리는 약속을 들은 ',
        urara.get_colored_name(),
        '는 먼저 기쁘게 고개를 끄덕이더니, 돌연 진지한 말투로 열정적인 친절함을 지웠다.',
      ]);
      await urara.say_and_wait(
        '그리고 말이야, 트레이너는 우라라를 계속 도와주는 고마운 사람이야. 그러니까 앞으론 트레이너 험담은 하지 말아줘……?',
      );
      await era.printAndWait('행인 A&B「……!」');
      await era.printAndWait([
        '수치심과 치유, 그리고 다시 놀라움으로 변하는 불쌍한 행인들의 표정 변화를 살핀 뒤, 꼬마 ',
        urara.get_uma_sex_title(),
        '는 다시 귀여운 미소를 지었다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 화난 건 아니야! 그냥 트레이너가 그런 말을 듣는다고 생각하니까 조금 울컥했을 뿐이야!',
      ]);
      await era.printAndWait('행인 A&B「으…… 응!」');
    }
    era.println();
    await urara.say_and_wait(
      '응! 바로 그거야! 내 이야기를 들어줘서 고마워! 그럼 나 이만 갈게! 길 조심해서 돌아가!',
    );
    await era.printAndWait([
      '충격을 받아 한 마디도 벙긋하지 못하는 두 행인에게 손을 흔들어 작별을 고하고, ',
      urara.get_colored_name(),
      '는 다시 ',
      me.get_colored_name(),
      '의 곁으로 달려왔다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '가 방금 서 있던 자리를 보니, ',
      urara.get_colored_name(),
      '와 대화를 나눴던 두 청년들은 멍한 표정으로 그 자리에 굳어 있었다.',
    ]);
    await era.printAndWait(
      '한참 동안 서로를 바라보던 두 사람은 마침내 정신을 차린 듯, 여전히 더듬거리는 말투로 뒤돌아 떠나갔다.',
    );
    await era.printAndWait([
      '행인 A「……나, 저 아이를 응원해 주기로 했어. 왠지 정말 열심히 하는 것 같아……」',
    ]);
    await era.printAndWait('행인 B「나, 나도…… 저 아이는 심지어 나를 걱정해 주기까지 했어……」');
    await era.printAndWait('행인 A「무슨 소리야, 그건 분명 나한테 한 말인데……」');
    await era.printAndWait('행인 B「아니야, 분명 나한테……」');
    await era.printAndWait('……요즘 젊은이들은 다 저런 걸까?');
    await era.printAndWait([
      '묘하게 변해버린 두 사람의 뒷모습을 바라보며, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 고개를 저은 뒤 주의를 ',
      urara.get_colored_name(),
      '에게 돌렸다.',
    ]);

    era.printButton('「우라라, 괜찮니?」', 1);
    await era.input();

    await urara.say_and_wait([callname, ', 걱정해 주는 거야? 우라라는 괜찮아!']);

    era.printButton('「하지만, 혹시라도 우라라가 다른 사람의 말에 상처를 입는다면 너무 가슴 아플 것 같아.」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 그러니까 어떤 일이 있어도, 우라라는 정말로 ',
      callname,
      '에게 감사하고 싶어!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 진심 어린 걱정에, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 다시 한번 ',
      me.get_colored_name(),
      '에게 순수한 감사의 마음을 전했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 안심이 되는 미소를 독차지하며 아까 전의 두 사람을 떠올리자, ',
      me.get_colored_name(),
      '은(는) 무언가를 깨달은 듯했다.',
    ]);

    if (era.get('cflag:38:모집상태') === recruit_flags.yes) {
      await era.printAndWait([
        '잠깐, 방금 그 두 사람이 ',
        urara.get_colored_name(),
        '와 대화를 마친 뒤의 모습, 어디서 본 적 있지 않나?',
      ]);
      await era.printAndWait([
        '카렌짱에게 귀여움 포교를 당한 뒤, 방금 막 카렌짱의 귀여움에 사로잡힌 사람들도 저런 모습이었던 것 같은데?',
      ]);
    }
    era.println();
    await era.printAndWait('……과연 그렇군.');
    await era.printAndWait([
      '레이스 ',
      urara.get_uma_sex_title(),
      '에게 있어 팬들의 지지는 매우 중요하다. 그리고 ',
      urara.get_colored_name(),
      '는 사람들이 기꺼이 ',
      urara.sex,
      '를 응원하고 싶게 만드는 보기 드문 자질을 가지고 있다. 심지어 ',
      me.get_colored_name(),
      ' 자신조차 그 매력에 빠져 있으니 말이다.',
    ]);
    await era.printAndWait([
      '말하자면, ',
      urara.sex,
      '는 무의식적으로 자신의 무기를 활용하고 있는 걸까? ',
      urara.get_colored_name(),
      '는 사실 엄청난 서큐버스인 게 아닐까?',
    ]);
    await era.printAndWait([
      '기분이 조금 묘해지긴 했지만, ',
      me.get_colored_name(),
      '은(는) 그런 자질이 없더라도 이렇게 착한 아이를 거절할 수 있는 사람은 거의 없으리라는 사실을 알고 있었다.',
    ]);
    await era.printAndWait(
      '그렇기는 해도, 현재 두 사람이 서로를 이해하고 있는 수준으로는 처음에 고민했던 문제에 대한 답을 낼 수 없었다.',
    );
    await era.printAndWait([
      '역시 서두를 일은 아니다. 지금의 최우선 과제는 여전히 ',
      urara.sex,
      '가 레이스에서 안정적으로 승리할 수 있도록 하는 것이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그렇게 생각하며, 다시금 ',
      urara.get_colored_name(),
      '가 내민 작은 손을 맞잡았다. 두 사람의 길게 늘어진 그림자가 햇살 아래 다시 하나로 겹쳐졌다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '소동이 일어나지는 않았지만, 의외로 불쾌하네요, 저 행인들.',
    );
    await in_urara.say_as_unknown_and_wait(
      '그리고 죄송하지만, 지금 당신의 시간을 잠시만 더 뺏어야겠어요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '이번 문제는 가볍게 넘어갔지만, 앞으로 우라라가 스스로 해결할 수 없는 곤경에 처한다면 당신은 어떻게 하실 건가요?',
    );
    era.printButton('「담당의 심신 건강을 챙기는 것도 트레이너의 업무야.」（호감도+20）', 1);
    era.printButton(
      `「결코 도망치지 않아. 내가 우라라를 지켜주겠어.」（애정도+10）`,
      2,
    );
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait([
      '어떤 이유에서든, 『',
      urara.get_colored_actual_name(),
      '』를 소중히 여기시겠다고요? 과연 그렇군요, 『내』가 신뢰하는 당신다워요……',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '알겠습니다. 안에서는 당신에게 불평하지 않을 테니, 밖에서는 부디 ',
      urara.sex,
      '를 계속 잘 보살펴 주세요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '미래에 우라라가 더 이상 나아가지 못하고 주저앉는 날이 오지 않기를 진심으로 바랍니다.',
    );
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      52,
      [0, 0, 0, 5, 5],
      0,
      undefined,
      true,
    );
    flags.wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      flags.wait_flag;
    edu_marks.fan_buff += 5;
  };

  handlers[47 + 12] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('상점가의 아이돌!', urara);
    await urara.say_and_wait([
      '에헴…… 여러분 안녕하세요! 이번에 이 상점가의…… 『간판 레이스 ',
      urara.get_uma_sex_title(),
      '』?를 맡게 된 우라라예요!',
    ]);
    await urara.say_and_wait(
      '아직 잘은 모르겠지만, 열심히 할게요! 여러분, 잘 부탁드려요——!',
    );
    await era.printAndWait([
      '상점가의 특별 무대 위에 선 ',
      urara.get_colored_name(),
      '는 사람들에게 열정적으로 손을 흔들며, 무대 아래의 ',
      me.get_colored_name(),
      '에게 몰래 윙크를 보냈다.',
    ]);
    await era.printAndWait([
      '무대 아래 인파 속에 섞여 있던 ',
      me.get_colored_name(),
      '은(는), ',
      urara.get_colored_name(),
      '의 신호를 받자마자 즉시 살며시 ',
      urara.get_colored_name(),
      '에게 엄지손가락을 치켜세워 보였다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('이 일의 시작은 며칠 전으로 거슬러 올라간다.');
    era.drawLine();
    await era.printAndWait([
      '인망이 두터운 현역 ',
      urara.get_uma_sex_title(),
      '를 초대해 상업 홍보를 진행하는 이런 행사는 드문 일이 아니며, ',
      urara.get_colored_name(),
      '가 초대받은 것 또한 충분히 예상 가능한 일이었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '에게 쏟아진 이 갑작스러운 제안들은 장소는 제각각이었지만, 자세히 보니 모두 같은 지역에서 온 것들이었다.',
    ]);
    await era.printAndWait([
      '상점가 사람들이 정말로 ',
      urara.get_colored_name(),
      '를 아껴주는구나. 그렇게 생각하며, ',
      me.get_colored_name(),
      '은(는) 수많은 의뢰서들을 책상 위에 가지런히 정리해 쌓아 올렸다.',
    ]);
    await urara.say_and_wait('음…… 그러니까, 모두가 우라라에게 도와달라고 부탁하는 거야?');

    era.printButton(
      '「이번엔 정식 업무지만, 괜찮아. 우라라는 평소처럼 하면 돼.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      urara.get_colored_name(),
      '의 질문에 대답하며, ',
      me.get_colored_name(),
      '은(는) 손에 들고 있던 의뢰서를 다가온 꼬마 ',
      urara.get_uma_sex_title(),
      '에게 건넼다.',
    ]);
    await era.printAndWait('현재 두 사람에게 의뢰를 거절할 이유는 전혀 없었다.');
    await era.printAndWait([
      urara.get_colored_name(),
      '는 일상 속에서 자신을 돌봐준 사람들에게 보답하고 싶어 했고, 만약 명실상부한 상점가의 간판이 된다면 ',
      urara.sex,
      '는 더 실질적으로 모두를 도울 수 있게 될 것이다.',
    ]);
    await era.printAndWait([
      '트레이너의 관점에서도, 업무를 수락하는 것은 지명도를 효과적으로 높일 수 있는 기회였으며, 현재의 ',
      urara.get_colored_name(),
      '에게 지지도의 중요성은 훈련 못지않게 컸다.',
    ]);
    await era.printAndWait([
      '다만 두 사람의 선택이 일치하더라도, ',
      urara.get_colored_name(),
      '는 정작 상황이 어떻게 돌아가는지 제대로 이해하지 못한 게 아닐까? 어떡하면 좋을까……',
    ]);
    if (era.get('cflag:60:모집상태') === recruit_flags.yes) {
      await era.printAndWait([
        '괜찮겠지? 가서 ',
        sys_get_colored_callname(0, 60),
        '의 의견을 물어볼까? ',
        urara.sex,
        ' 또한 상점가에서 매우 인기 있는 ',
        urara.get_uma_sex_title(),
        '니까.',
      ]);
      await era.printAndWait([
        '가야 할까? 지금 가서 ',
        urara.sex,
        '를 번거롭게 하는 건 시기상조일지도 모르고, 무엇보다 이건 ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '의 업무다. 하지만 혹시라도 실수해서 망치게 되면 골치가 아파질 텐데……',
      ]);
    }
    era.println();
    await era.printAndWait('관두자. 전전긍긍해봤자 소용없다. 어떻게든 되겠지.');
    await urara.say_and_wait([
      '그치만 ',
      sys_get_colored_callname(52, 61),
      '이 나한테 알려줬어. 『업무인 만큼 예의를 지켜야 한다!』라고. 그러니까 나 지금 아주 진지하다구?',
    ]);
    await urara.say_and_wait(
      '상점가의 아저씨, 아주머니들은 평소처럼만 하면 된다고 하셨지만, 그래도 주의할 거야!',
    );
    await era.printAndWait([
      '상점가로 돌아온 지금, ',
      me.get_colored_name(),
      '의 곁을 걸으며 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 옆에서 작은 목소리로 속삭였다.',
    ]);
    await era.printAndWait([
      '인사말을 순조롭게 마친 뒤, 현재 ',
      urara.get_colored_name(),
      '는 의뢰 내용에 따라 상점가의 가게들을 하나하나 돌고 있었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 스스로 무엇을 해야 할지 인지하고 있는 이상, 더는 걱정할 필요가 없을 것 같았다.',
    ]);
    await urara.say_and_wait(
      '아, 아저씨 안녕하세요! 오늘도 물건들이 아주 싱싱하네요! 네! 다음에 또 도와드리러 올게요!',
    );
    await urara.say_and_wait(
      '아주머니 안녕하세요! 맞아요, 채소를 좀 사 가려고요! 우라라는 이걸로 살게요!',
    );
    await urara.say_and_wait([
      '제가 좀 도와드릴게요! 괜찮아요, ',
      urara.get_uma_sex_title(),
      '는 힘이 아주 세거든요. 그럼 갑니다——!',
    ]);
    await urara.say_and_wait(
      '이쪽은 앞으로 가다가 오른쪽으로 꺾어야 해요! 고마워할 거 없어요. 언니들도 길 조심해서 가세요!',
    );
    await urara.say_and_wait(
      '울지 마! 남자애라면 조금 더 씩씩해져야지! 어머니가 분명 근처에 계실 거야…… 아! 찾았다! 이쪽이에요——!',
    );
    await urara.say_and_wait([
      '응? ',
      urara.sex_code - 1 ? '언니' : '오빠',
      '는 레이스 ',
      urara.get_uma_sex_title(),
      '야! 다음에 나 응원해 줄 거야? 고마워!',
    ]);
    await era.printAndWait([
      '익숙하거나 혹은 낯선 사람들과 친근하게 교감하며, ',
      urara.get_colored_name(),
      '의 타고난 기질은 가는 곳마다 친근한 매력을 발산했다.',
    ]);
    await era.printAndWait([
      '마치 그림책 속 동화처럼, ',
      urara.get_colored_name(),
      '가 가는 곳마다 사람들이 모여들었고, 꽃이 피어나는 듯한 떠들썩하고 훈훈한 정경이 펼쳐졌다.',
    ]);
    await era.printAndWait([
      '참 좋구나. 이렇게 따뜻한 광경을 마지막으로 본 게 언제였더라? ',
      urara.get_colored_name(),
      '의 뒤에서 적당한 거리를 유지하며 묵묵히 ',
      urara.sex,
      '를 지켜보던 ',
      me.get_colored_name(),
      '은(는) 그렇게 감탄했다.',
    ]);
    await era.printAndWait([
      '이토록 훌륭한 인망 위에 달리기 실력까지 더해진다면, 미래에는 반드시 ',
      urara.get_colored_name(),
      '의 소원을 이룰 수 있을 것이다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 말했던 것처럼, ',
      urara.sex,
      '가 계속 달려 나가기만 한다면……',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '저기, 옆에 계신 분. 당신이 우라라의 트레이너인가요?',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 현재 상황에 대해 고민하던 찰나, 옆을 지나가던 여성이 조용히 ',
      me.get_colored_name(),
      '을(를) 불러 세웠다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이 여성이 상점가 진흥 조직의 일원임을 알아차렸다. 듣기로는 ',
      urara.get_colored_name(),
      '가 입학했을 때부터 줄곧 ',
      urara.sex,
      '를 돌봐준 지인이라고 한다.',
    ]);

    era.printButton('「네, 우라라에게 의뢰를 맡겨주셔서 감사합니다.」', 1);
    await era.input();

    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      `오히려 고맙다고 말해야 할 쪽은 우리예요. 우라라는 정말 우리에게 큰 도움이 되었답니다.`,
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '우라라가 온 뒤로 이 상점가도 더 활기차졌어요. 전에는 이 거리, 정말 쓸쓸했거든요.',
    );
    await era.printAndWait([
      '그녀의 감사를 들으며, ',
      me.get_colored_name(),
      '은(는) 이 거리에 관한 몇 가지 일들을 떠올렸다.',
    ]);
    await era.printAndWait(
      '복합 쇼핑몰의 발전으로 인해 기능성이 부족한 전통 상점가는 도시 내에서 그 입지가 끊임없이 좁아지고 있었다.',
    );
    await era.printAndWait([
      '유동 인구의 감소는 곧 냉대와 쇠락을 의미하지만, ',
      urara.get_colored_name(),
      '가 온 뒤 보여준 수많은 열성적인 모습들은 이 거리에 새로운 활력을 불어넣어 주었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 열정에는 어떤 목적도 없었지만, ',
      urara.sex,
      '는 사실 아주 오래전부터 무의식중에 상점가 사람들에게 도움을 주고 있었다. 다만……',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '……우라라의 레이스 실력, 그렇게 강하지는 않지요? 저번에 들었는데, 그 아이는 늘 이기지 못한다고……',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 상념을 깨뜨리며, 눈앞의 여성이 잠시 망설이다 다시 입을 열었다.',
    ]);

    era.printButton('「하지만 우라라도 조금씩 강해지고 있습니다.」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신의 결론을 증명할 확신이 있었으나, 왠지 분위기가 심상치 않음을 느꼈다.',
    ]);
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      `네, 저도 ${urara.sex}가 분명 열심히 노력하고 있다고 믿어요. 하지만…… ${urara.sex}의 재능은 역시 다른 아이들보다 부족하잖아요?`,
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '그러니 조금 느려도 괜찮아요. 그저 우라라가 계속 즐겁게 달려준다면, 저희는 그것만으로도 큰 힘을 얻으니까요.',
    );
    await CharaTalk.say_by_passer_by_and_wait(
      '상점가 사람',
      '다시 한번 감사드려요. 그렇게만 된다면 저희는 정말 기쁠 거예요.',
    );
    await era.printAndWait([
      '그녀는 말을 하는 내내 부모가 자식을 보살피는 듯한 애정 어린 시선으로 ',
      urara.get_colored_name(),
      '를 바라보았다.',
    ]);
    await era.printAndWait([
      '부모와 같은 마음으로 꼬마 ',
      urara.get_uma_sex_title(),
      '를 지켜보는 사람들은, 어쩌면 진심으로 「',
      urara.sex,
      '가 즐겁게 달리기만 하면 된다」라고 생각하고 있을지도 모른다.',
    ]);
    await era.printAndWait([
      '하지만 정말 그것만으로는 결코 최선의 답이 될 수 없었다. 작별 인사를 하고 떠나가는 여성의 뒷모습을 보며, ',
      me.get_colored_name(),
      '은(는) 복잡한 심정으로 고개를 저었다.',
    ]);
    await era.printAndWait([
      '타인의 선의를 부정하는 것은 아니었으나, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '의 염원을 알고 있었고, 성장 중인 ',
      urara.sex,
      '가 결코 여기에 머물지 않으리라는 것을 확신했다.',
    ]);
    await era.printAndWait(
      '비록 미래의 시간은 아직 많이 남았으나, 모두에게 소원이 꽃피는 것을 보여주기 위해서는 계속해서 나아가는 것만이 정답이었다.',
    );
    await era.printAndWait([
      '방금 산 음료수를 든 채, ',
      me.get_colored_name(),
      '은(는) 일이 끝난 뒤 인파 속에서 ',
      me.get_colored_name(),
      '의 모습을 찾고 있는 ',
      urara.get_colored_name(),
      '를 향해 웃으며 손을 흔들었다.',
    ]);

    era.printButton('「우라라, 일하느라 수고했어!」', 1);
    await era.input();

    await urara.say_and_wait([callname, '! 오늘 우라라가 모두에게 도움이 됐을까?']);
    await era.printAndWait([
      '일과를 마치고 벤치에 앉아 쉬고 있던 ',
      urara.get_colored_name(),
      '는 석양을 등지고 ',
      me.get_colored_name(),
      '이(가) 건넨 주스를 받아 들었다.',
    ]);
    await era.printAndWait([
      '하루의 분주함 끝에 마침내 차분해진 ',
      urara.get_colored_name(),
      '의 옆에 서서, ',
      me.get_colored_name(),
      '은(는) 다시 한번 그 「하지만」에 대해 고찰했다.',
    ]);
    await era.printAndWait(
      '……이것은 단순히 레벨을 올리는 문제가 아니라, 시대 발전과 세대 교체라는 거대한 흐름에 직면한 문제였다.',
    );
    await era.printAndWait([
      urara.get_colored_name(),
      '가 할 수 있는 일은 영구적인 해결책이 아니었으며, 거대한 전환점이 없는 한 개인의 힘만으로는 계속 버텨낼 수 없었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 누군가 옷자락을 잡아당기는 것을 느꼈다. 고개를 돌리자 부드러운 노을이 ',
      urara.get_colored_name(),
      '를 비추고 있었고, ',
      urara.sex,
      '의 평온한 얼굴은 따스한 빛에 젖어 있었다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 나도 알고 있다구? 거리 사람들의 사정 같은 거. 지금 내가 하는 일로 미래를 바꾸기는 어렵다는 거 말이야.',
    ]);
    await urara.say_and_wait(
      '하지만 설령 언젠가 상점가가 사라지고 모두가 흩어지더라도, 우라라가 하고 싶은 일은 변하지 않아.',
    );
    await era.printAndWait([
      '머나먼 수평선의 붉은 태양을 바라보며, 꼬마 ',
      urara.get_uma_sex_title(),
      '의 진지한 미소에는 확신이 서려 있었다.',
    ]);
    await urara.say_and_wait(
      '모두에게 보여줄 거야. 우라라는 이곳의 아이돌로서, 상점가 사람들에게 웃음과 희망을 가져다줄 거야!',
    );
    await urara.say_and_wait(
      '게다가 트레센 친구들도 다들 여기를 좋아하니까, 포기하지 않으면 분명 방법이 있을 거야. 우라라가 직접 보여줄게!',
    );
    await era.printAndWait([
      '마지막 망설임이 ',
      urara.get_colored_name(),
      '의 대답 속에서 흩어졌다. 어느새 태양은 눈부신 노을을 ',
      me.get_colored_name(),
      '의 위로도 쏟아내고 있었다.',
    ]);

    era.printButton('「함께 돌아가자.」', 1);
    await era.input();

    await urara.say_and_wait('응, 돌아가자!');
    await era.printAndWait([
      '마음을 정리한 뒤, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '에게 손을 내밀었고, ',
      urara.get_colored_name(),
      '는 웃으며 ',
      me.get_colored_name(),
      '의 손을 맞잡았다.',
    ]);
    await era.printAndWait([
      '계속해서 달려 나간다면 어떻게든 방법은 생길 것이다. 결코 강하지 않은 ',
      urara.get_colored_name(),
      '에게도, 그리고 삶을 긍정하며 살아가는 주변 사람들에게도.',
    ]);
    await era.printAndWait([
      '노을을 향해, ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 귀갓길에 올랐다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '하지만 겨우 그것만으로, 단지 노력하는 것만으로 정말 누군가를 구할 수 있을까요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '죄송해요, 또 하지 말아야 할 소리를 했네요. 그럼, 친애하는 당신은 어떻게 생각하시나요?',
    );
    era.printButton(
      '「작년 연말에 이미 이야기하지 않았어?」（중&장거리 적성 상승）',
      1,
    );
    era.printButton('「시간은 아직 많아. 해보지 않으면 모르는 법이지.」（잔디 적성 상승）', 2);
    era.printButton(
      '「선택을 내린 이상, 끝까지 책임질 거야.」（전 능력치 +2, 훈련 능숙도 상승）',
      3,
    );
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait(
      '……이걸 의외라고 해야 할까요? 당신은 그렇게 생각하시는군요…… 사실 『우라라』도 비슷해요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '제 생각은 여전하지만, 저 역시 ',
      urara.sex,
      '가 상처받는 것은 원치 않아요. 그러니 지금의 페이스대로 ',
      urara.sex,
      '를 잘 보살펴 주세요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '다만 그것이 가볍든 무겁든, 짊어지는 것과 각오를 가지고 나아가야만 강해질 수 있다는 사실은 몇 번을 겪어도 참 싫네요……',
    );
    const attr_change = new Array(5).fill(0);
    switch (ret) {
      case 1:
        edu_marks.dad++;
        break;
      case 2:
        edu_marks.gad++;
        break;
      case 3:
        attr_change.fill(2);
        era.set(
          'talent:52:연습X서수',
          Math.min(era.get('talent:52:연습X서수') + 1, 2),
        );
    }
    attr_change[attr_enum.toughness] += 5;
    attr_change[
      get_random_entry(
        Object.values(attr_enum).filter((e) => e !== attr_enum.toughness),
      )
    ] += 5;
    edu_marks.fan_buff += 5;
    flags.wait_flag =
      get_attr_and_print_in_event(52, attr_change, 0) || flags.wait_flag;
    flags.wait_flag = sys_change_motivation(52, 1) || flags.wait_flag;
  };
};