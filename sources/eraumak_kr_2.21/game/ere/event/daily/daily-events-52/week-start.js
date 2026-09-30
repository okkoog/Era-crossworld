const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  if (event_object.arg?.punish === 1) {
    const callname = sys_get_callname(52, 0),
      me = get_chara_talk(0),
      urara = get_chara_talk(52);
    await era.printAndWait([
      '마치 수치심도 모르는 듯 낯설고 예민해진 육체를 위아래로 만지작거리며, 오늘의 ',
      me.get_colored_name(),
      '은(는) 트레이닝실 한구석에 웅크린 채 가느다란 신음 소리를 내뱉고 있었다.',
    ]);
    await era.printAndWait([
      '거울 속의 몸매와 얼굴은 자기 자신이라고는 믿기지 않을 정도로 정교하게 변해 있었으나, ',
      me.get_colored_name(),
      '은(는) 깨어나지 않는 악몽 속에 잠긴 채 헤어 나오지 못하는 쪽을 택했다.',
    ]);
    await era.printAndWait([
      '살짝만 건드려도 이 몸은 가려움을 견디기 힘들 정도가 된다…… 이것 또한 개조 때문인가? 아니면, 설마 이것이 우마무스메의 몸인 것인가……?',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 계속해서 옷을 벗으려 하던 그때, 등 뒤의 잠기지 않은 문에서 가볍고 예의 바른 노크 소리가 들려왔다.',
    ]);
    await era.printAndWait([
      '문이 열리기 직전, 정신이 번쩍 든 ',
      me.get_colored_name(),
      '은(는) 공포에 질려 두근거리는 가슴을 억누르며 황급히 자신의 몸을 가렸다.',
    ]);
    await era.printAndWait([
      '그리고 눈앞의 옷차림이 흐트러진 「우마무스메 언니」를 보며, 문을 열고 들어온 ',
      urara.get_colored_name(),
      '는 천진난만하면서도 의아한 듯 고개를 갸웃거렸다.',
    ]);
    await urara.say_and_wait([
      '에? 알고 보니 ',
      callname,
      '였구나. 우라라도 언젠가 이런 날이 올 거라고 생각은 했지만, 조금 빠르지 않아?',
    ]);
    await era.printAndWait([
      '놀라움도 잠시, 곧 익숙한 미소를 지으며 ',
      callname,
      '를 알아본 작은 ',
      urara.get_uma_sex_title(),
      '는 평소와 다름없는 기특한 모습으로 ',
      me.get_colored_name(),
      '의 곁에 앉았다.',
    ]);
    await urara.say_and_wait([
      '헤헤～ ',
      callname,
      '는 역시 ',
      callname,
      '네! 다시 처음부터 ',
      callname,
      '랑 통성명해야 하는 줄 알았어. 그랬으면 너무 아쉬웠을 거야!',
    ]);

    era.printButton('「……우라라, 너도 알고 있었던 거야?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 우라라도 예전에 모두에게 들은 적이 있어. 하지만 ',
      callname,
      '처럼 변한 건 우라라도 처음 봐!',
    ]);
    await urara.say_and_wait([
      '그치만 ',
      callname,
      '의 변화는 정말 대단하네. 다행히 몸에서 나는 냄새는 하나도 안 변해서, 우라라는 바로 알아봤다구!',
    ]);
    await era.printAndWait([
      '슬그머니 양손을 뻗어, ',
      urara.get_colored_name(),
      '는 위로하듯 ',
      me.get_colored_name(),
      '의 뺨을 어루만지다 약간의 망설임 끝에 손길을 위로 옮겼다.',
    ]);
    await era.printAndWait([
      '장난기 어린 작은 손이 ',
      me.get_colored_name(),
      '의 더욱 부드러워진 머리카락을 지나, 마지막으로 머리 위의 아직 말을 잘 듣지 않는 복슬복슬한 귀를 붙잡았다.',
    ]);

    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await urara.say_and_wait([
        callname,
        ', 지금 많이 불편하지? 하지만 괜찮아, 우라라가 ',
        callname,
        '에게 어떻게 생활하면 되는지 가르쳐 줄 수도 있으니까!',
      ]);
      await urara.say_and_wait([
        '우라라가 듣기로는, 만약 ',
        callname,
        '가 여기서 더 변해버리면 훨씬 무서운 일이 일어날지도 모른다던데……',
      ]);
      await era.printAndWait([
        '무언가 무서운 일이 떠오른 듯, ',
        urara.get_colored_name(),
        '는 잠시 몸을 떨며 멈칫했으나, 이내 달래는 듯한 미소를 지으며 곁에 있는 ',
        me.get_colored_name(),
        '을(를) 껴안았다.',
      ]);
      await urara.say_and_wait([
        '괜찮아! 정말 그렇게 되더라도 내가 ',
        callname,
        '를 돌봐줄게! 물론 ',
        callname,
        '가 그렇게 변하지 않는 게 제일 좋겠지만!',
      ]);
    } else {
      await urara.say_and_wait([
        '이렇게 변해버린 ',
        callname,
        '가 앞으로는 우라라에게 좀 더 상냥하게 대해주면 좋을 텐데. 정말 그렇게 될 수 있을까?',
      ]);
      await urara.say_and_wait([
        '게다가 우라라가 듣기로는, 만약 예전이랑 똑같이 굴면 ',
        callname,
        '는 아주 이상한 모습이 되어버린대……',
      ]);
      await era.printAndWait([
        '갑자기 슬픈 일이 생각난 듯 ',
        me.get_colored_name(),
        '의 몸을 꽉 껴안으며, 작은 ',
        urara.get_uma_sex_title(),
        '가 ',
        me.get_colored_name(),
        '을(를) 바라보는 눈빛에는 복잡한 감정이 서려 있었다.',
      ]);
      await urara.say_and_wait([
        '만약 정말 그렇게 된다면…… 설령 ',
        callname,
        '가 싫어하더라도, 우라라가 ',
        callname,
        '를 돌봐줄 수밖에 없다구?',
      ]);
    }

    await era.printAndWait([
      '어쩌면 작은 ',
      urara.get_colored_name(),
      '가 알고 있는 사실은, ',
      me.get_colored_name(),
      '이(가) 상상하는 것보다…… 아니, 어쩌면 ',
      me.get_colored_name(),
      ' 본인이 아는 것보다 훨씬 더 많을지도 모를 일이었다.',
    ]);
    await era.printAndWait([
      '다만…… 과거에 사이가 좋았든 나빴든, 눈앞의 맑은 벚꽃빛 눈동자는 언제나 ',
      urara.sex,
      '의 ',
      callname,
      '를 향하고 있었다.',
    ]);
    await era.printAndWait([
      '어쩌면 비록 되돌아갈 수는 없더라도, 지금이라면 아직 늦지 않은 것인가? 어쩌면 ',
      urara.get_colored_name(),
      '를 위해서라도 지금부터 변하려고 노력한다면 아직 기회가 있는 것인가?',
    ]);
    await era.printAndWait([
      '……적어도, 뒤늦은 그 한마디만은 ',
      urara.sex,
      '에게 전해주도록 하자. 품 안의 작은 ',
      urara.get_uma_sex_title(),
      '를 꽉 껴안으며, ',
      me.get_colored_name(),
      '은(는) 보건실에서의 그 첫 포옹을 회상했다.',
    ]);

    era.printButton('「고마워……」', 1);
    await era.input();

    await urara.say_and_wait([
      '응? ',
      callname,
      ', 왜 고맙다고 하는 거야? 우라라는 아직 아무것도 안 했는데?',
    ]);
    await urara.say_and_wait([
      '하지만…… ',
      callname,
      '가 그렇게 변하지 않으려면, 우라라랑 ',
      callname,
      '는 그냥 말로만 해서는 안 된다구?',
    ]);
    await era.printAndWait([
      '마치 길을 잃은 어린 소녀를 달래듯 부드럽게 ',
      me.get_colored_name(),
      '의 등덜미를 두드리며, ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 품속에서 여전히 상냥하게 웃고 있었다.',
    ]);
    await era.printAndWait([
      '어쩌면 이 순간만큼은, 유치해 보이던 ',
      urara.sex,
      '는 진정으로 의지할 수 있는 「어른」일지도 모른다……',
    ]);
    await urara.say_and_wait([
      '그래서 우라라가 결정했어, 오늘부터 같이 병주하자! 진지하게 임한다면 나중에는 분명 좋아질 거야, 그치?',
    ]);

    era.printButton('「에? 하지만 이 몸으로는 아직……」', 1);
    await era.input();

    await urara.say_and_wait([
      '걱정하지 마! 내가 보장할게! ',
      callname,
      '는 나중에 분명 우라라보다 훨씬 더 빨리 달릴 수 있게 될 거야!',
    ]);
    await urara.say_and_wait([
      '그러니까…… 지는 사람은 꼬리 만지게 해주기야! 헤헤～ 어차피 ',
      callname,
      '의 꼬리는 분명 자고 일어났을 때처럼 엉망진창일 테니까!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 반응하기도 전에, ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 이끌고 트레이닝실을 뛰쳐나와 훈련장을 향해 질주하기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아직 아무것도 하지 못했으나, 작은 담당과의 거리는 어느덧 부지불식간에 성큼 좁혀져 있었다.',
    ]);
    await era.printAndWait(['어쩌면 우마무스메가 되어버린 일이…… 아주 나쁜 일만은 아닐지도 모르겠다.']);
  }
};