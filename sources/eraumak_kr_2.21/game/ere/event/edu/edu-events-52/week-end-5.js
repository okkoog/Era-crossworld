const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 32] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:52:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 종료', urara);
    await urara.say_and_wait([
      callname,
      ', 지금의 우라라, 전보다 훨씬 더 강해진 것 같지 않아?',
    ]);
    await era.printAndWait([
      '트레이닝 휴식 시간 중 오후의 해변에 앉아, ',
      urara.get_colored_name(),
      '와 곁에 있는 ',
      me.get_colored_name(),
      '은(는) 함께 지기 시작하는 오후의 햇살을 바라보았다.',
    ]);

    era.printButton('「물론, 지금의 우라라는 강해. 하지만 더 중요한 게 빠져 있어.」', 1);
    await era.input();

    await era.printAndWait([
      '억지로 너무 강해져 버린 어린 ',
      urara.get_uma_sex_title(),
      '가 마주한 상황에서, ',
      me.get_colored_name(),
      '은(는) 결국 솔직하게 말하기로 했다.',
    ]);
    await era.printAndWait([
      '지금의 ',
      urara.get_colored_name(),
      '는 이미 승리를 위한 모든 조건을 갖추었지만, ',
      me.get_colored_name(),
      '은(는) 그 일이 오늘날까지도 끝나지 않았음을 잘 알고 있었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 현재 원래 상태를 회복했지만, 그것은 겉으로 보기에 「달릴 수 있는」 상태를 회복한 것에 불과했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 그날 밤 ',
      urara.sex,
      '에게 남긴 조언은, ',
      urara.get_colored_name(),
      '가 알아듣지 못한 것이라기보다는, ',
      urara.sex,
      '가 아마 정답이 그렇게 간단하다는 사실을 믿고 싶지 않은 듯했다.',
    ]);
    await era.printAndWait([
      '어째서 이 아이는 이상한 부분에서 점점 고집이 세지는 걸까? ',
      me.get_colored_name(),
      '은(는) 불평하려 했으나, 뒤틀리며 자라는 것 또한 성장의 한 과정임을 떠올렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 솔직한 평가를 들은 ',
      urara.get_colored_name(),
      '는 그저 가볍게 고개를 끄덕이더니, 여름 바닷바람보다 가냘픈 목소리로 입을 열었다.',
    ]);
    await urara.say_and_wait([callname, ', 요즘 그 일들에 대해 얼마나 자세히 기억하고 있어?']);

    era.printButton('「잊을 리가 없잖아, 왜 물어봐? 또 무슨 일이라도 생긴 거야?」', 1);
    await era.input();

    await urara.say_and_wait([
      '……우라라가 나중에 ',
      urara.sex,
      '를 한참 동안 찾아다녔거든. 친구들 말로는, ',
      urara.sex,
      '가 역시 아주 먼 곳으로 떠났다고 하더라고.',
    ]);
    await urara.say_and_wait([
      '하지만 친구들이 그러는데, ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '때, 우라라에게 투표해 줄 거래.',
    ]);
    await urara.say_and_wait(
      '『심한 말을 그렇게 많이 했지만, 우라라에게 용서를 빌지는 않을게. 하지만 사실은 나도 정말로 우라라가 아리마에 나갔으면 좋겠어』.',
    );
    await urara.say_and_wait(
      '다들 그렇게 전해줬어. 하지만 다른 사람들이 그렇게 말해줘도, 우라라는 여전히 누군가의 꿈을 가볍게 여긴 거겠지……',
    );

    era.printButton(
      `「하지만 그렇다면, ${urara.sex}가 처음부터 일부러 우라라를 탓하려고 했던 건 아니지 않을까?」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '우라라도 계속 그렇게 생각했어. 하지만 분명 나도 모르게 상처를 주어서, 내가 다시는 달리지 않기를 바라는 사람들도 더 많을 거야……',
    );

    era.printButton(
      '「그러니까 우라라는 처음부터 잘못이 없어. 그런 부정적인 감정들을 혼자 짊어지지 않는 게 좋겠어—」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '하지만 부정당하더라도, 우라라는 그들의 미소를 짊어지고 싶어. 우라라를 향한 게 오직 악의뿐이라 해도 상관없어.',
    );
    await urara.say_and_wait(
      '저번 레이스가 끝났을 때 결심한 거지만…… 헤헤~ 너무 미움받을 만한 소리였을까?',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '조차 예상치 못한 대답을 한 뒤, 흠뻑 젖은 어린 ',
      urara.get_uma_sex_title(),
      '는 다시 평소보다 드물지만 여전히 희망에 찬 미소를 지어 보였다.',
    ]);

    era.printButton('「……이렇게 귀여운 고집불통 우라라라면 얼마든지 환영이야.」', 1);
    await era.input();

    await era.printAndWait([
      '웃는 얼굴 뒤에 가려진 그림자를 직시하며, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 타월을 ',
      urara.get_teen_sex_title(),
      '의 물기 어린 머리카락 위에 덮어주었다.',
    ]);

    era.printButton(
      '「하지만 무턱대고 너무 많은 것을 짊어지려 하면 망가질지도 몰라. 처음부터 준비가 안 됐던 우라라는 지금 상태가 어때?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '에? ',
      callname,
      ', 그런 식으로 말하지 마…… 마치 우라라의 친구 같잖아! 우라라는 괜찮아—',
    ]);
    await era.printAndWait([
      '그래 그래, ',
      urara.get_colored_name(),
      '는 괜찮지. 어린 ',
      urara.get_uma_sex_title(),
      '의 부드러운 귀와 뺨을 문지르며, ',
      me.get_colored_name(),
      '은(는) 남몰래 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '예상대로의 부정이었다. 하지만 스스로 이 고비를 넘기지 못한다면 타인의 조언은 의미가 없으리라.',
    ]);
    await urara.say_and_wait([
      '우으— 정 ',
      callname,
      '가 못 믿겠다면…… 그럼 ',
      callname,
      '가 그날 밤에 했던 말을 기억해 줘!',
    ]);
    await era.printAndWait('응? 갑자기 무슨 소리를……');
    await urara.say_and_wait([
      '지금은 아직 잘 모르겠지만, 적절한 때에 ',
      callname,
      '의 말을 듣는다면 우라라는 분명 다시 기운을 차릴 수 있을 거야!',
    ]);
    await me.say_and_wait(
      [
        '정말 모르는 건지 원. 적절한 때라는 게 대체 언제야? 뭐, ',
        urara.get_colored_name(),
        '가 그렇게 말한다면 나름의 생각이 있겠지. 일단은 기억해 둘까……',
      ],
      true,
    );
    await era.printAndWait(
      '어느덧 현재의 화제는 마무리되고, 두 사람 사이에 다시 침묵이 내려앉았다. 하지만 적어도 지금 이 순간만큼은, 그 느낌이 나쁘지 않았다.',
    );
    await era.printAndWait([
      '지금의 ',
      urara.sex,
      '는 과연 어떤 미래를 그리고 있는 것일까?',
    ]);
    era.drawLine();
    await urara.print_and_wait(
      '하지만, 지금 우라라가 생각하는 것들은 아는 사람 그 누구에게도 칭찬받지 못할 거야.',
    );
    await urara.print_and_wait([
      '어쩌면 지금의 우라라는 그저 다른 사람의 행복을 빼앗고 있는 것일지도 몰라. 하지만 이런 생각은 ',
      callname,
      '에게 차마 말할 수 없어.',
    ]);
    await urara.print_and_wait([
      callname,
      '가 우라라 때문에 근심하는 모습을 떠올리기만 해도, 우라라의 마음은 우울함으로 가득 차서 점점 나답지 않게 되어버려.',
    ]);
    await urara.print_and_wait([
      '우라라가 ',
      callname,
      '에게 어떤 감정을 품고 있든, 우라라는 ',
      callname,
      '와 멀어지고 싶지 않아. 그리고 무엇보다 ',
      callname,
      '가 슬퍼하지 않았으면 좋겠어.',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.print_and_wait([
        '그저 몸을 ',
        callname,
        '에게 기대는 것만으로도, 생각보다 따스한 느낌이 심장 소리를 타고 온몸으로 전해져 와.',
      ]);
      await urara.print_and_wait(
        '정말 안심돼. 마치 지금 당장 내의 염원을 내려놓고, 한 사람의 항구에 머물며 이대로 편안하게 계속 잠들 수 있을 것만 같아.',
      );
      await urara.print_and_wait([
        '더 이상 누군가에게 인정받으려 노력하지 않아도 되고, 비난받을 일도 없어. 그저 ',
        callname,
        '의 사랑 안에, 모두의 사랑 안에 푹 잠기기만 하면 돼……',
      ]);
    } else {
      await urara.print_and_wait([
        callname,
        '의 곁에서 몸을 웅크리면, 타인의 체온과 고동을 느낄 수 있어.',
      ]);
      await urara.print_and_wait([
        callname,
        '의 품 안은 분명 무척 편안하겠지. 그곳에 우라라를 위한 자리가 있을까? 우라라가 안심하고 잠들 수 있는 곳이?',
      ]);
      await urara.print_and_wait([
        '포기할 것들을 선택하기만 하면 ',
        callname,
        '의 사랑을 받을 수 있겠지? 아무것도 신경 쓰지 않는다면 모두가 계속 우라라를 응원해 주겠지……',
      ]);
    }
    await urara.print_and_wait([
      '하지만 그렇게 하는 건 분명 틀린 일이야. 왜냐하면 그건 ',
      callname,
      '와 모두를 배신하는 일이고, 나 자신도 분명 후회할 테니까.',
    ]);
    await urara.print_and_wait([
      '만약 우라라가 ',
      callname,
      '처럼 듬직한 어른이 될 수 있다면 좋을 텐데. ',
      callname,
      '라면 분명 우라라보다 훨씬 잘해냈겠지.',
    ]);
    await urara.print_and_wait(
      '정말 지쳐. 하지만 우라라는 아직 멈출 수 없어. 그러니까 아주 조금만, 우라라가 조금만 더 기댈 수 있게 해줘. 그러니까……',
    );
    await urara.say_and_wait([
      callname,
      ', 돌아가기 전에…… 우라라에게 『어른스러운 포옹』을 해줄 수 있어?',
    ]);
    if (era.get('love:52') >= 50) {
      await urara.print_and_wait([
        '우라라의 갑작스러운 부탁에, ',
        callname,
        '는 찰나의 순간 미간을 찌푸리며 당황한 기색을 보였어. 우라라의 요구가 너무 지나쳤던 걸까?',
      ]);

      era.printButton('「우라라, 역시 너는……」', 1);
      await era.input();

      await urara.print_and_wait([
        '응? 설마 ',
        callname,
        ', 이미 우라라가 무슨 생각하는지 다 알고 있었던 거야? 하지만 그런 건 이제 상관없어—',
      ]);
      await urara.print_and_wait(
        '우리는 이제 평범한 관계가 아니고, 지금의 우라라도 더 이상 예전처럼 단순한 어린아이가 아니니까.',
      );
      await urara.print_and_wait([
        callname,
        '가 미처 거절의 말을 내뱉기도 전에, 우라라는 ',
        callname,
        '가 쉽게 거절하지 못하게 만들 테니까.',
      ]);
    } else {
      await urara.print_and_wait([
        '우라라의 갑작스러운 부탁에 ',
        callname,
        '는 역시 깜짝 놀란 눈치였어. 진짜 연인이라 해도 이렇게 갑작스러운 요구는 하지 않을 텐데.',
      ]);

      era.printButton('「우라라, 아무리 그래도 이건 너무……!」', 1);
      await era.input();

      await urara.print_and_wait([
        '에? ',
        callname,
        ', 벌써 우라라의 속마음을 꿰뚫어 본 거야? 하지만 그런 건 이제 상관없어—',
      ]);
      await urara.print_and_wait([
        callname,
        '라면 이렇게 해도 괜찮다고 생각하니까. 그러니까 우라라도 절대로 ',
        callname,
        '가 거절하게 두지 않을 거야.',
      ]);
      await urara.print_and_wait([
        '연인이 아니어도 상관없어. 알려줘…… ',
        callname,
        '가 자신의 담당을 얼마나 좋아하는지.',
      ]);
    }
    await urara.print_and_wait(
      '괜찮아. 지금부터 우라라는 모두의 행복을 위해 계속 나아갈 거야. 그러니까 적어도 지금만큼은 우라라를 꽉 안아줘……',
    );
    await urara.say_and_wait(
      '우라라는 괜찮아질 거야. 금방 괜찮아질 테니까…… 그러니까, 우선 포옹부터 시작할까?',
    );
    await urara.print_and_wait([
      '그저 손가락 하나를 뻗어 말을 고르는 ',
      callname,
      '의 입술을 살짝 누른 것뿐인데, ',
      callname,
      '는 곧바로 저항력을 잃어버린 것 같아.',
    ]);
    await urara.print_and_wait([
      '단지 ',
      callname,
      '와 담당 간의 포옹이니까, 설령 사람들이 보는 해변에서 친밀하게 서로 껴안는다고 해도 아무 문제 없겠지?',
    ]);
    await urara.print_and_wait([
      me.get_colored_name(),
      '의 무릎 위에 정면으로 마주 앉아, 긴장으로 굳어버린 상대의 목을 살짝 감싸 안으며 우라라는 자신의 몸을 ',
      callname,
      '와 밀착시켰다.',
    ]);
    await urara.print_and_wait([
      callname,
      '는 곧 초조해지겠지. 얇은 천 한 장 너머로 담당의 부드러운 모든 것이 느껴질 테니까.',
    ]);
    await urara.print_and_wait([
      '아, 어른의 향기에 영향을 받은 걸까? 우라라는 가슴의 그 두 곳마저 봉긋하게 솟아버렸어……',
    ]);
    await urara.print_and_wait(
      '하지만 아직은 안 돼. 이건 평소에도 수없이 하는 평범한 「포옹」일 뿐이니까, 선을 넘는 짓을 하면 안 된다구?',
    );
    await urara.print_and_wait(
      '우라라는 몸이 뜨거워져서 어질어질한데도 계속 참고 있어. 뽀뽀도 안 돼! 왜냐하면, 사람들이 볼 수도 있으니까~',
    );
    if (era.get('talent:52:유방사이즈') > 0) {
      await urara.print_and_wait([
        '풍만하고 부드러운 두 열매를 ',
        callname,
        '에게 부드럽게 내리누르자, 찌릿한 쾌감이 꼿꼿이 선 끝부분부터 온몸으로 퍼져 나갔다.',
      ]);
      await urara.print_and_wait([
        callname,
        '도 이거 좋아하지? 이렇게 커진 뒤로 ',
        callname,
        '의 시선이 항상 우라라의 여기에 한참 동안 머물곤 했잖아.',
      ]);
      await urara.print_and_wait(
        '그러니까 만져봐. 아무렇지 않은 척 우라라의 가슴에 손을 얹고, 주변 시선이 없을 때 살짝 힘을 줘서……',
      );
      await urara.print_and_wait([
        '하응~! 세상에, 젖까지 스며 나와버렸어…… 정말이지, 이렇게 세게 누르다니, ',
        callname,
        '는 이제 어린애도 아니면서!',
      ]);
    }
    if (me.sex_code > 0) {
      await urara.print_and_wait([
        '아, 뭔가 딱딱한 게 우라라의 배를 찌르고 있어…… 다른 사람들이 말하는 것처럼, ',
        callname,
        '는 변태구나~',
      ]);
      await urara.print_and_wait([
        '우라라도 알고 있어. 손으로 살살 문지르면 우라라가 하얀 것들로 온통 엉망이 되어버린다는 걸.',
      ]);
      await urara.print_and_wait([
        '하지만 사람들 앞에서 어른을 도발하는 건 안 되는 거니까. 그러니까 설령 ',
        callname,
        '가 지금 부탁해도 우라라는 손대지 않을 거야.',
      ]);
    }
    if (me.sex_code - 1) {
      await urara.print_and_wait([
        '이제 ',
        callname,
        '의 가슴도 잔뜩 서버렸네. 바싹 다가가서 ',
        callname,
        '의 목덜미를 살짝 깨물면 그 부드러움이 그대로 느껴져.',
      ]);
      await urara.print_and_wait([
        '게다가 치아와 입술로 가슴과 목 주변에 자국을 남길 때는 다른 사람들에게 보일 걱정도 없지만, 소리가 너무 크면 곤란해.',
      ]);
      await urara.print_and_wait([
        '그런데 만약 우라라가 몰래 ',
        callname,
        '의 가슴에 있는 작은 두 알갱이를 깨문다면, ',
        callname,
        '는 어떤 귀여운 소리를 낼까?',
      ]);
    }
    await urara.print_and_wait([
      callname,
      '의 얼굴에 서린 멍한 표정은 경악일까, 아니면 두려움일까? 어쨌든 분명한 건, ',
      callname,
      '는 이미 말을 할 수 없게 되었다는 거지.',
    ]);
    await urara.print_and_wait([
      '그리고 ',
      callname,
      '가 말을 못 하니 우라라의 어떤 부탁도 거절할 수 없겠지. 헤헤~ 우라라는 정말 천재야~',
    ]);
    await urara.print_and_wait([
      '시간이 얼마나 흘렀을까. 거의 하나로 엉겨 붙어 있던 우라라와 ',
      callname,
      '의 몸이 아쉬움을 뒤로한 채 마침내 떨어졌다.',
    ]);
    await urara.print_and_wait([
      '갈구하는 행위는 잠시 멈췄지만, ',
      callname,
      '의 눈동자에 비친 우라라의 욕정에 젖은 벚꽃빛 눈동자는 석양 아래에서 여전히 뜨겁게 타오르고 있었다……',
    ]);
    await urara.print_and_wait([
      callname,
      '가 거절하지 못했으니, 우라라도 ',
      urara.sex,
      '의 ',
      callname,
      '를 그렇게 쉽게 놓아주지 않을 생각이었다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 우라라는 정말 이상해졌나 봐. 그러니까 우라라가 정상으로 돌아올 때까지 계속해서 대가 없는 사랑을 줘.',
    ]);
    await urara.say_and_wait(
      '처음 만났을 때처럼…… 우라라를 고민 없는 착한 아이로 만족시켜줘……?',
    );
    await urara.say_and_wait([
      callname,
      ', 같이 아무도 없는 곳으로 갈래? 지금이라면 ',
      callname,
      '가 거절하는 걸 허락해 줄게……?',
    ]);
    me.say('……');
    era.printButton(`설령 ${urara.sex}의 말을 들어준다고 해도 괜찮겠지…… (애정도+10)`, 1, {
      disabled: get_sex_acceptable(52) < 0,
    });
    era.printButton(`지금이라도 ${urara.sex}를 밀쳐내면 늦지 않아…… (호감도+20)`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await urara.say_and_wait([
        '헤헤~ ',
        callname,
        '는 역시 거절하지 못했네. 그럼 우라라랑 같이 가자.',
      ]);
      await urara.print_and_wait([
        '결국 거절하지 못한 ',
        callname,
        '를 인적이 드문 구석으로 이끌고 간 우라라는 몸에 걸치고 있던 얇은 수영복을 조심스레 벗어 던졌다.',
      ]);
      if (urara.sex_code - 1) {
        if (era.get('exp:52:성관계횟수') >= 10) {
          await urara.print_and_wait([
            '나도 모르게 아래가 벌써 흠뻑 젖어버렸어. 하지만 우라라가 아무리 음란해져도 ',
            callname,
            '는 거절하지 않을 거지?',
          ]);
          await urara.print_and_wait([
            '맞아. 사랑하는 사람을 기쁘게 하기 위한 기술도, 좋아하는 사람 앞에서 바보가 되어버리는 머리도, 전부 ',
            callname,
            '가 바라던 모습이잖아?',
          ]);
          await urara.print_and_wait([
            '봐봐. 바라보기만 해도 옷 너머로 빳빳하게 서는 유두도, 지금도 쉴 새 없이 흘러내리는 이 아래도, 전부 ',
            callname,
            '때문이라구……',
          ]);
        } else {
          await urara.print_and_wait([
            '그저 ',
            callname,
            '가 쳐다보는 것만으로도 아래가 너무 젖어서 축축해. ',
            callname,
            '는 대체 우라라를 어떤 모습으로 만들고 싶은 거야?',
          ]);
          await urara.print_and_wait([
            '하지만 ',
            callname,
            '가 좋아한다면, 우라라의 어디를 원하든 그것들을 ',
            callname,
            '가 가장 좋아하는 장난감으로 만들어 줄게.',
          ]);
          await urara.print_and_wait(
            '왜냐하면 우라라도 이미 결정했으니까. 우라라의 몸을 직접 길들인 변태 어른에게 전부 바치기로……',
          );
        }
        await urara.print_and_wait([
          '실오라기 하나 걸치지 않은 채로 ',
          callname,
          '를 향해 팔을 벌린 우라라는, 마치 엄마처럼 보살핌을 원하는 아이를 품에 안듯 상대를 맞이했다.',
        ]);
        await urara.print_and_wait([
          '그러니까…… ',
          callname,
          '도 응석을 부리고 싶다면 우라라가 제정신으로 돌아오기 전에 얼른 안아줘.',
        ]);
        urara.sex_code - 1 &&
          (await urara.print_and_wait([
            '오직 ',
            callname,
            '때문에 교성을 지르는 입술도, 오직 ',
            callname,
            '만이 마음대로 유린할 수 있는 두 구멍도, 오직 ',
            callname,
            '의 아이만을 잉태할 자궁까지……',
          ]));
        await urara.print_and_wait([
          '오직 ',
          callname,
          '만을 위한 이 몸의 구석구석을 전부 가득 채워줘야 해.',
        ]);
      }
      await quick_into_sex(52);
    } else {
      await urara.say_and_wait([
        '……헤헤~ ',
        callname,
        '가 거절하다니 의외인걸? 어른들은 정말 알 수 없는 고집이 있다니까……',
      ]);
      await urara.say_and_wait(
        '그럼 대신 우라라를 달래주는 셈 치고 계속 포옹하고 있자.',
      );
      await urara.print_and_wait([
        me.get_colored_name(),
        '에게 예상치 못하게 거절당했지만, 상대의 얼굴에 서린 더 큰 당혹감을 보며 우라라는 만족스럽게 웃었다.',
      ]);
      await urara.print_and_wait([
        '우라라를 거절한 ',
        callname,
        '에 대한 복수로, 게으른 태양이 저물 때까지 우라라는 절대 놓아주지 않을 작정이었다.',
      ]);
      await urara.print_and_wait('우라라가 정상으로 돌아올 때까지, 절대 놓아주지 않을 거야……');
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      52,
      new Array(5).fill(5),
      0,
      undefined,
      true,
    );
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 2), true, 10 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };

  handlers[95 + 46] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    event_object,
  ) => {
    if (edu_marks.loop > 0) {
      const attr_cache = attr_names.map((e) => era.get(`base:52:${e}`)),
        motivation_cache = era.get('cflag:52:컨디션');
      if (await era.loadData(52)) {
        CustomizedEdu.load_game();
      }
      attr_cache.forEach((e, i) => era.set(`base:52:${attr_names[i]}`, e));
      era.set('cflag:52:컨디션', motivation_cache);
      new UraraEduMarks().loop--;
      add_event(event_hooks.week_start, event_object);
      return true;
    }
  };

  handlers[95 + 47] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name(
      [
        '「',
        { color: urara.color, content: urara.sex },
        { color: in_urara.color, content: '들'},
        '」의 선물',
      ],
      urara,
    );
    await era.printAndWait([
      '오늘의 ',
      me.get_colored_name(),
      '은(는) 어느샌가 다시 「',
      in_urara.get_colored_name(),
      '」의 마음속에 펼쳐진 그 풀밭 위에 서 있었다.',
    ]);
    await era.printAndWait(
      '지난날의 안개는 이미 걷혔고, 구름 한 점 없는 밤하늘은 짙은 보랏빛으로 맑게 개어 별들이 찬란하게 빛나고 있었다. 그리고 별빛 아래 선 사람은 마치 세계의 중심에 있는 듯했다.',
    );
    await era.printAndWait([
      '달려오는 소리를 따라 고개를 돌리자, 밝은 달빛 아래 닮은꼴의 두 ',
      urara.get_teen_sex_title(),
      '가 이미 오랫동안 기다려온 듯 서 있었다.',
    ]);
    era.drawLine();
    await urara.say_and_wait([
      callname,
      '! 왔구나! 헤헤~ 같이 눕자. 풀밭이 전혀 안 차갑고 정말 기분 좋아!',
    ]);
    await urara.say_and_wait(
      '지금 우리 마음속이 정말 예쁘지? 뭐라고 해야 할까? 그게…… 음……',
    );
    await in_urara.say_as_unknown_and_wait(
      '화려한 수식어나 묘사하는 문구 같은 건 필요 없어. 하지만 전에는 여기가 이렇게 예쁜 줄 정말 몰랐네……',
    );
    await urara.say_and_wait(
      '모두 기분이 좋아서 그런 거 아닐까? 마치…… 아리마가 끝나면 크리스마스인 것처럼! 정말 기대돼~',
    );
    await in_urara.say_as_unknown_and_wait([
      '기대되는 건 알겠는데 정작 주인공이 긴장감이 전혀 없네…… 이길 수 있을 것 같아? ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '?',
    ]);
    await urara.say_and_wait(
      '나도 잘 몰라. 다들 정말 강하니까! 하지만 설령 이기지 못하더라도, 우라라는 반드시 달릴 거야!',
    );
    await in_urara.say_as_unknown_and_wait(
      '응응, 그렇네. 사실 지금 이 순간에도 모두가 『우라라가 이길 수 있다』고 기대하는 건 아니니까.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 이건 혼자 달리는 이야기가 아니야. 너와 나뿐만 아니라, 우라라로 연결된 모든 사람이 이 순간을 기다리고 있어.',
    );

    in_urara.say_as_unknown([
      '그러니까…… 트레이너 ',
      me.get_adult_sex_title(),
      ', 어떤 대답이라도 좋으니 한 말씀 해주세요.',
    ]);
    const attr_change = new Array(5).fill(0);
    era.printButton(
      '「언제나 그랬듯이, 기적이 일어나길 바라는 것보다 우라라의 성장을 믿는 게 더 확실하니까.」 (전 능력치 +5)',
      1,
    );
    era.printButton(
      '「너희는 이미 이 아름다운 풀밭을 가졌잖아? 그러니까 앞으로는 그저 계속 나아가기만 하면 돼.」 (잔디 적성 상승)',
      2,
    );
    era.printButton(
      '「운과 기적도 실력의 일부야. 남은 부족함은 용기로 채워보자!」 (중&장거리 적성 상승)',
      3,
    );
    switch (await era.input()) {
      case 1:
        attr_change.fill(5);
        break;
      case 2:
        edu_marks.gad++;
        break;
      case 3:
        edu_marks.dad++;
    }
    await urara.say_and_wait([
      '정말이야? 하지만 ',
      callname,
      '의 제안이라면, 우라라는 분명 괜찮을 거야!',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '그 말대로야. 교차한 뒤의 길이 즐겁든 그렇지 않든, 머리 위에 펼쳐진 저 연결된 별은 이미 나아가기 위한 청사진으로 변했으니까……',
    );
    await in_urara.say_as_unknown_and_wait(
      '……하아, 나도 조금만 더 일찍 이걸 깨달았더라면, 우라라가 시행착오를 덜 겪었을지도 모르는데——',
    );
    await urara.say_and_wait(
      '자! 더 이상 생각하기 없기! 정말이지, 다시 침울해지면 안 된다구? 어렵게 맞이한 크리스마스인데!',
    );
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await urara.say_and_wait(
        '에헤~ 크리스마스 선물 말이지! 이미 한 번 보냈지만, 우라라는 괜찮다고 생각해!',
      );
      await urara.say_and_wait(
        '이번에 1등을 할 수 있을지는 모르겠지만, 그래도 모두가 기뻐할 거라고 믿어——',
      );
    } else {
      await urara.say_and_wait('그래서 크리스마스에, 나도 모두를 위해 선물을 준비했어!');
      await urara.say_and_wait([
        '지금은 줄 수 없지만, ',
        callname,
        '는 내일 분명 보게 될 거야——',
      ]);
    }
    await urara.say_and_wait([
      '『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서의 달리기』, 우라라는 이 선물을 ',
      callname,
      '에게, 그리고 모두에게 주고 싶어!',
    ]);
    if (era.get('love:52') >= 50) {
      await in_urara.say_as_unknown_and_wait([
        '모처럼 크리스마스인데, 우라라는 자신의 트레이너 ',
        me.get_adult_sex_title(),
        '에게만 따로 특별한 선물을 줄 줄 알았더니?',
      ]);
      await urara.say_and_wait([
        '응! 왜냐하면 우라라는 이미 ',
        callname,
        '의 소유물이니까, 『몸 이외의 것』들밖에 줄 수 없는걸!',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '푸흡…… 커헉! 이, 이 말투는?! 전혀 모르는 건 아니지만, 보고도 못 본 척하기엔 역시 무리가 있네!',
      );
      await urara.say_and_wait(
        '히히~ 시간이 이렇게나 흘렀는데도 『우라라』는 여전히 순진하네, 대체 어떻게 된 거야~?',
      );
      await in_urara.say_as_unknown_and_wait(
        '너한테 들을 소린 아니거든! 왜 우라라는 이런 성격이 되어버린 거야?!',
      );
    } else {
      await in_urara.say_as_unknown_and_wait([
        '결국 모두에게 주는 공동 선물이구나. 그래도 모처럼 크리스마스인데, ',
        callname,
        '에게만 따로 뭘 주지는 않는 거야?',
      ]);
      await urara.say_and_wait([
        '에? 으음…… 따로 줄 만한 게 생각이 안 나! 맞다, 우라라를 ',
        callname,
        '에게 선물하면 되겠다!',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '잠잠잠잠깐! 그 선물은 설령 엄마가 허락해도 나는 허락 못 해! 이건 우라라에게 아직 너무 이르다고……',
      );
      await urara.say_and_wait(
        '하지만 난 이제 어린애가 아닌걸? 그리고 대체 뭐가 이르다는 거야? 설마 『우라라』는 야한 생각을 하는 거야?',
      );
      await in_urara.say_as_unknown_and_wait(
        '푸헉……! 무, 무슨 소리를 하는 거야 우라라, 난 절대 그렇지 않아!',
      );
    }
    in_urara.say_as_unknown([
      '트레이너 ',
      me.get_adult_sex_title(),
      ', 당신도 한마디라도 좀 해보세요——',
    ]);
    era.printButton('「……그것도 괜찮지 않아?」（애정도+5）', 1);
    era.printButton('「……사이가 참 좋네.」（호감+10）', 2);
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait([
      '트레이너 ',
      me.get_adult_sex_title(),
      '——!!',
    ]);
    era.drawLine();
    await era.printAndWait([
      '본심을 억눌러오던 「',
      in_urara.get_colored_name(),
      '」가 마음을 해방한 것을 시작으로, 두 명의 우마무스메와 한 명의 남자가 벌이는 소란은 빈 목초지 위에서 한참 동안 이어졌다.',
    ]);
    await era.printAndWait(
      '흥이 다할 때까지 소란을 피운 뒤에야 세 사람은 기진맥진하여 변치 않는 밤하늘 아래 나란히 누웠고, 함께 안심감이 감도는 깊은 어둠 속으로 빠져들었다.',
    );
    await era.printAndWait([
      '시간조차 의미를 잃어버린 별하늘과 초원 속에서, 벚꽃빛과 갈색빛의 「',
      urara.sex,
      '들」 사이에서 ',
      me.get_colored_name(),
      '은(는) 두 명의 ',
      urara.get_teen_sex_title(),
      '가 내뱉는 평온한 숨소리에 귀를 기울였다.',
    ]);
    await era.printAndWait(
      '벚꽃빛의 숨소리는 점차 안정을 찾아갔으나, 한쪽에서 좀처럼 잠들지 못하는 갈색빛은 마치 나직한 부름을 전해오는 듯했다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 다시 눈을 떴을 때, 조금은 색이 바랜 「',
      urara.sex,
      '」 가 비록 꽃은 없지만 광채를 되찾은 눈빛으로 곁에 있는 이를 지켜보고 있었다……',
    ]);
    era.println();

    await in_urara.say_as_unknown_and_wait(
      '아하, 미안해요. 그냥 조금…… 불면증인가 봐요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '우라라는 잠들었으니, 당신과 단둘이 이야기하고 싶어서…… 아, 일어나지 않아도 돼요. 괜찮으니까 누워서 들어주세요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만, 계속 폐만 끼쳐온 저와 단둘이 있는 게 당신에겐 그다지 기분 좋은 일은 아니겠죠……',
    );
    await in_urara.say_as_unknown_and_wait(
      '그래도, 저는 당신에게 단 한 번도 거짓말을 한 적이 없어요. 처음부터 당신을 사랑해왔다는 사실을 포함해서요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '어째서일까요…… 저도 잘 모르겠어요. 아마 사랑이라기보다, 영혼에서 우러나오는 본능에 더 가까운 걸지도 모르겠네요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '듣기에 참 우습죠? 당신 곁에 오랫동안 머무를 수도 없는 『하루 우라라』의 사랑에 무슨 의미가 있을까요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '말을 한 뒤에도 당신을 책임질 수 없고, 심지어 이 이후로는 당신의 응답조차 받을 수 없는데……',
    );
    await in_urara.say_as_unknown_and_wait(
      '명절 선물조차 준비할 수 없고, 그저 아득한 방관과 허무한 상호작용뿐인데도, 여전히 사랑이라고 부를 수 있을까요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '……결국 답을 내지 못했네요. 지금의 저는 당신과 처음 만났을 때의 저보다 전혀 맑아지지 못한 것 같아요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 제가 아는 유일한 정답은, 설령 아무런 의미가 없더라도 이 애정만큼은 독보적이라는 거예요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '심지어 당신 곁에 있는 우라라와도 상관없이요. 저는 주인공이 아니지만, 이건 오직 저만의, 오직 당신만을 향한 감정이에요.',
    );
    if (era.get('relation:52:0') > 150) {
      await in_urara.say_as_unknown_and_wait(
        '처음 우라라와 함께 당신을 만났던 때, 우라라가 달리는 것을 지켜보던 당신, 우라라와 함께 저를 구해준 당신……',
      );
      await in_urara.say_as_unknown_and_wait(
        '기적이 정말로 일어났어요. 꿈만 같을 정도로 아름다워서, 언젠가 갑자기 홀로 깨어나게 될까 봐 두려워질 정도로요.',
      );
      await in_urara.say_as_unknown_and_wait(
        '그러니까 꿈에서 깨기 전에, 이 마음을 정식으로 전하고 싶어요. 설령 거절당한다고 해도요.',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '제가 멋대로 당신을 선택했음에도, 과정마다 실수가 가득했음에도, 당신과 우라라는 결국 마지막에 저를 구해줬어요.',
      );
      await in_urara.say_as_unknown_and_wait(
        '3년 동안 왜 당신을 선택했는지 수없이 고민했지만, 지금 보니 모든 것이 사랑받을 가치가 있는 일이었네요.',
      );
      await in_urara.say_as_unknown_and_wait(
        '그러니 제 마음을 정식으로 전할 수 있다면, 설령 어느 날 꿈에서 깨더라도 다시 세상을 혐오하던 모습으로 돌아가지는 않을 거예요.',
      );
    }
    await in_urara.say_as_unknown_and_wait(
      '설령 영혼의 고동에 떠밀린 것뿐이라 해도, 당신에게 가식적인 감정이라며 미움받는다 해도, 한 번 더 말하고 싶어요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '성인의 기념일이니, 이 말로 다 할 수 없는 감정이 설령 허구라 할지라도 특별히 용서받을 수 있겠죠?',
    );
    await in_urara.say_as_unknown_and_wait('그러니 다시 한번, 제 말을 들어주세요……');
    era.println();
    await in_urara.say_as_unknown_and_wait(
      '처음도 아니고, 아마 마지막도 아니겠지만, 그래도……',
    );
    await in_urara.say_as_unknown_and_wait([
      '트레이너 ',
      me.get_adult_sex_title(),
      ', 사랑해요.',
    ]);
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      52,
      attr_change,
      0,
      undefined,
      true,
    );
    wait_flag =
      sys_like_chara(52, 0, 10 * (ret === 2), true, 5 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};