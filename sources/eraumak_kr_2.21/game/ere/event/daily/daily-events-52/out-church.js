const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum } = require('#/data/train-const');

module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  await era.printAndWait([
    '의욕이 넘치는 ',
    urara.get_colored_name(),
    '를 위해, 그리고 다음 레이스 전에 행운을 빌어줄 겸, ',
    me.get_colored_name(),
    '은(는) ',
    urara.get_uma_sex_title(),
    '와 함께 신사에 가기로 했다.',
  ]);
  await era.printAndWait('딱히 급한 일도 없었고, 여기까지 온 김에 들르기로 한 것이다.');
  await era.printAndWait([
    '다만 계단을 오를 때, ',
    me.get_colored_name(),
    '은(는) 이곳의 분위기가 평소와 조금 다르다는 것을 느꼈다.',
  ]);
  await era.printAndWait([
    '보통 이 작은 신사는 늘 북적였다. 주변 주민들과 노는 아이들뿐만 아니라, 긴 계단을 이용해 훈련하는 ',
    urara.get_uma_sex_title(),
    '들도 있었기 때문이다.',
  ]);
  await era.printAndWait(
    '하지만 오늘따라 계단은 유난히 조용했다. 양옆 숲의 흔들림과 새 울음소리 외에는 두 사람의 발자국 소리만이 들려올 뿐이었다.',
  );
  era.println();
  if (era.get('relation:52:0') > 150 && edu_marks.loop < 2) {
    await era.printAndWait([
      '단둘뿐인 발걸음은 확실히 조금 적막했지만, ',
      me.get_colored_name(),
      '의 손을 꼭 잡은 ',
      urara.get_colored_name(),
      '는 시종일관 웃는 얼굴로 ',
      me.get_colored_name(),
      '의 곁을 지켰다.',
    ]);
    await urara.say_and_wait('왠지 오늘 여기, 말로 표현 못 할 정도로 깨끗한 기분이야!');
    await era.printAndWait([
      '어떤 면을 말하는 것인지는 알 수 없었지만, ',
      me.get_colored_name(),
      '은(는) 고개를 끄덕이며 ',
      urara.get_colored_name(),
      '의 생각에 동조했다. ',
      urara.get_uma_sex_title(),
      '와 함께하는 동안 마음도 점차 맑아졌다.',
    ]);
  } else {
    await era.printAndWait([
      '잠시 망설이던 ',
      urara.get_colored_name(),
      '는 한 걸음 다가와 ',
      me.get_colored_name(),
      '의 손을 잡더니, 갑자기 ',
      me.get_colored_name(),
      '의 앞으로 나섰다.',
    ]);
    await urara.say_and_wait([callname, '! 스태미나 훈련이니까 잘 따라와야 해?']);
    await era.printAndWait([
      '반응하기도 전에, ',
      me.get_colored_name(),
      '은(는) 갑자기 장난스럽게 웃으며 달려 나가는 담당에게 이끌려 다음 계단을 올랐다——',
    ]);
  }
  era.println();

  await era.printAndWait([
    '앞서 달려가는 ',
    urara.get_colored_name(),
    '에게 이끌려 마지막 계단을 밟자, 계단 끝 토리이 너머로 익숙한 작은 신사가 나타났다.',
  ]);
  await era.printAndWait(
    '분위기가 어떻게 변하든, 오늘의 신사 역시 이곳에서 조용히 참배객을 기다리고 있었다.',
  );
  await era.printAndWait([
    urara.get_colored_name(),
    '와 함께 신사의 시전함 앞에 선 ',
    me.get_colored_name(),
    '은(는) 동전 두 개를 꺼내 그중 하나를 ',
    urara.get_colored_name(),
    '의 손에 쥐여주었다.',
  ]);
  await era.printAndWait([
    '동전을 보며 눈을 깜빡이던 ',
    urara.get_colored_name(),
    '는 귀를 쫑긋 세우고, 무언가 깨달은 듯 그것을 꽉 움켜쥐었다……',
  ]);
  await era.printAndWait([
    '간단하고 조금 서툰 의식을 마친 뒤, ',
    me.get_colored_name(),
    '은(는) ',
    urara.get_colored_name(),
    '를 위해 접힌 운세 뽑기 종이를 집어 들었고, ',
    urara.get_colored_name(),
    '와 함께 종이를 펼칠 준비를 했다——',
  ]);

  if ((hook.arg = Math.random() < 0.5)) {
    await urara.say_and_wait('아! 이번에는 운이 꽤 좋은걸!');
    await era.printAndWait([
      urara.get_colored_name(),
      '는 기쁜 듯 ',
      me.get_colored_name(),
      '에게 손에 든 종이를 보여주었다. 그곳에 적힌 결과는 확실히 훌륭했다.',
    ]);

    era.printButton('「축하해, 내 결과도 나쁘지 않아.」', 1);
    await era.input();

    await urara.say_and_wait([
      '운세에서 좋은 결과가 나오면 언제나 즐거워! ',
      callname,
      '도 같이 기분 좋아졌지?',
    ]);
    await era.printAndWait([
      '하지만 기분이 좋아진 이유는 운세 결과보다는 ',
      urara.get_colored_name(),
      ' 덕분이었다. 작은 담당의 웃는 얼굴을 보며 ',
      me.get_colored_name(),
      ' 역시 어느새 입가에 옅은 미소를 띠었다.',
    ]);
    await era.printAndWait([
      '신사 경내에서 즐거운 작은 새처럼 빙글빙글 도는 ',
      urara.get_colored_name(),
      '를 바라보자, 익숙한 온기가 다시 ',
      me.get_colored_name(),
      '의 몸을 채웠다.',
    ]);
    await era.printAndWait([
      '마음이 한결 가벼워졌다. 이 기세라면 최근의 일들도 잘 해낼 수 있을 것이다. 두 사람의 첫 만남을 회상하며 ',
      me.get_colored_name(),
      '은(는) 깊은 숨을 들이마셨다.',
    ]);
    await urara.say_and_wait([callname, ', 이제 가자——']);
    await era.printAndWait([
      '붉은 토리이 앞에 멈춰 서서, 작은 분홍 새가 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들며 부르고 있었다.',
    ]);
    await era.printAndWait([
      '떠나기 전, 숲의 나뭇가지 사이로 하늘을 바라보며 ',
      me.get_colored_name(),
      '은(는) 어딘가에서 지켜보고 있을 누군가에게 감사를 전했다.',
    ]);
    await era.printAndWait('오늘은 정말 좋은 날이네.');
  } else if (edu_marks.church === 1) {
    edu_marks.church++;
    const in_urara = get_chara_talk(52, chara_colors[52][1]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '옛날 옛적 변방의 노인(새옹)이 어느 ',
      urara.get_uma_sex_title(),
      '를 만났는데——',
    ]);
    await in_urara.say_as_unknown_and_wait('커헉, 아니지, 틀렸어——');
    era.drawLine();

    await era.printAndWait([
      '하지만 이번에는 종이를 담당에게 건네기 전, ',
      me.get_colored_name(),
      '은(는) 무의식적으로 종이를 먼저 펼쳐 보았다.',
    ]);

    era.printButton('「……」', 1);
    await era.input();

    await era.printAndWait([
      '기대로 가득 찬 얼굴로 바라보는 ',
      urara.get_colored_name(),
      '의 앞에서, 토씨 하나 다르지 않은 「대흉」 종이 두 장을 든 ',
      me.get_colored_name(),
      '은(는) 복잡한 침묵에 빠졌다.',
    ]);

    await in_urara.say_as_unknown([
      '이때, 트레이너 ',
      me.get_adult_sex_title(),
      '의 선택은……',
    ]);
    era.printButton('「대, 대흉이야……」（스태미나 +10）', 1);
    era.printButton('「소, 소길이려나……?」（속도 +10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 떨리는 목소리로 ',
        urara.get_colored_name(),
        '에게 사실대로 말했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 대답을 들은 뒤, 조금 실망한 기색이었으나 이내 몇 초도 지나지 않아 다시 씩씩한 미소를 지어 보였다.',
      ]);
      await urara.say_and_wait([
        '괜찮아! 대흉이라도 돌아갈 때 발밑만 잘 조심하면 아무 문제 없어! ',
        sys_get_colored_callname(52, 56),
        '도 그렇게 말했는걸! 게다가 우라라는 신호등 건너는 거 아주 잘한다구?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 듬직하면서도 귀여운 대답을 듣자 ',
        me.get_colored_name(),
        ' 역시 안심하며 고개를 끄덕였고, 마음의 짐도 서서히 덜어지는 듯했다.',
      ]);
      await era.printAndWait([
        '하지만 짐을 내려놓은 지 채 몇 초도 되지 않아, 새로운 압박감이 ',
        me.get_colored_name(),
        '의 심장을 입 밖으로 튀어나오게 만들었다.',
      ]);
      await era.printAndWait([
        '이미 앞장서서 귀갓길에 오른 ',
        urara.get_colored_name(),
        '는 뒤를 돌아보며 ',
        me.get_colored_name(),
        '에게 무언가 계속 말하고 있었으나, 그 때문에 「발밑 조심」을 잊어버리고 말았다.',
      ]);
      await era.printAndWait([
        '어느덧 ',
        urara.get_uma_sex_title(),
        '는 계단 맨 꼭대기에 다다랐고, 계단의 어느 석판 하나가 거울처럼 매끄럽게 빛나고 있었다.',
      ]);
      await era.printAndWait([
        '그리고 가여운 ',
        urara.get_uma_sex_title(),
        '는 멍한 표정을 지으며 그대로 발을 헛디뎠다……',
      ]);

      era.printButton('「조심해!」', 1);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 제때 ',
        urara.get_colored_name(),
        '를 붙잡았지만, 허공에 뜬 발과 함께 ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 아래에 깔린 채 공원 미끄럼틀을 타듯 그 긴 계단을 쭉 미끄러져 내려갔다.',
      ]);
      await era.printAndWait(
        '추락하기 전 이미 마음의 준비를 했음에도 불구하고, 이 미끄럼틀의 경사는 너무나도 험난했다.',
      );
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 조금 뜨끔해하며 두 장의 종이를 등 뒤로 숨겼다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 조금의 의심도 없이 ',
        me.get_colored_name(),
        '의 대답을 믿었고, 「길」을 뽑았다는 사실에 매우 기뻐하는 듯했다.',
      ]);
      await era.printAndWait([
        '방금까지는 망설였지만, 지금 보니 역시 ',
        urara.get_colored_name(),
        '의 웃는 얼굴이 더 중요한 법이었다.',
      ]);
      await era.printAndWait([
        '그렇게 생각하며 ',
        me.get_colored_name(),
        '은(는) 몰래 안도의 한숨을 내쉬었다. 종이 두 장을 몰래 챙긴 뒤, ',
        me.get_colored_name(),
        '은(는) 다음에 ',
        urara.get_colored_name(),
        '와 어디를 구경할지 고민했다.',
      ]);
      await era.printAndWait([
        '마치 얕잡아 보인 원한을 풀기라도 하려는 듯, 경내를 벗어나자마자 ',
        me.get_colored_name(),
        '이(가) 압수한 두 장의 「대흉」이 기다렸다는 듯 그 효력을 ',
        me.get_colored_name(),
        '의 머리 위에 쏟아부었다.',
      ]);
      await urara.say_and_wait([callname, '! 조심해!']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 뒤에 있던 ',
        urara.get_colored_name(),
        '가 전력으로 달려왔으나, 체구가 작은 ',
        urara.get_uma_sex_title(),
        '는 균형을 잃은 ',
        me.get_colored_name(),
        '을(를) 제때 붙잡지 못했다.',
      ]);
      await era.printAndWait([
        '기다렸다는 듯 운세가 들어맞기라도 하듯, 생각에 잠겨 방심하고 있던 ',
        me.get_colored_name(),
        '은(는) 어느새 계단 꼭대기에서 가장 매끄러운 석판을 밟고 말았다.',
      ]);
      await era.printAndWait([
        '발바닥이 허공을 가르며, ',
        me.get_colored_name(),
        '은(는) 마치 훈련에 실패한 ',
        urara.get_uma_sex_title(),
        '처럼 ',
        urara.get_colored_name(),
        '의 당황한 비명 속에서 요란하게 신사의 긴 계단을 굴러 내려갔다……',
      ]);
    }

    await era.printAndWait([
      { isBr: true },
      '잠시 후, ',
      me.get_colored_name(),
      '은(는) 계단 맨 아래에 반듯하게 하늘을 보고 누워 있었고, 엉망이 된 머릿속에서 흩어진 생각들을 정리하려 애썼다.',
    ]);
    await era.printAndWait([
      '다행히 이렇게 굴러 떨어진 게 ',
      urara.get_colored_name(),
      '가 아니라서 다행이다. 위쪽의 푸른 하늘과 걱정스러운 표정의 ',
      urara.get_colored_name(),
      '를 바라보며, ',
      me.get_colored_name(),
      '은(는) 오직 그 생각 하나만을 선명하게 떠올렸다.',
    ]);
    await era.printAndWait([
      '천만다행으로 몸 상태를 체크한 결과, ',
      urara.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      ' 모두 ',
      me.get_colored_name(),
      '의 몸에 큰 이상이 없다는 사실에 안도의 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '다만 저 하늘 위에서 ',
      me.get_colored_name(),
      '의 눈앞을 바람 타고 날아가는 두 장의 「대흉」 종이가, 마치 누군가 보이지 않는 곳에서 무언의 비웃음을 보내는 것 같은 기분이 들었다.',
    ]);
    await era.printAndWait('아이고, 등이 정말 아프네……');
    await era.printAndWait([
      '그래도 돌아간 뒤에 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 위해 한층 더 열심히 ',
      ret === 1 ? '곁에 있어 주기로' : '훈련하기로',
      ' 한 것 같았다. ',
      me.get_colored_name(),
      '이(가) 실제로 크게 다친 것은 아니었지만 말이다……',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '응? 뭘 봐요? 제가 한 거 아니거든요? 진짜 아니거든요?',
    );
    await print_event_name('새옹지마?', urara);
    const attr_change = new Array(5).fill(0);
    attr_change[ret === 1 ? attr_enum.endurance : attr_enum.speed] = 10;
    get_attr_and_print_in_event(52, attr_change, 0);
  } else {
    await urara.say_and_wait([
      '에? ',
      callname,
      ', 이번 결과는 조금 안 좋은 것 같아. ',
      callname,
      ' 것도 그래?',
    ]);
    await era.printAndWait([
      '내용이 그리 좋지 않은 종이를 보여주며 ',
      urara.get_colored_name(),
      '는 조금 실망한 듯 보였으나, 이내 아무렇지 않은 듯 웃으며 ',
      me.get_colored_name(),
      '을(를) 돌아보았다.',
    ]);

    era.printButton('「응, 하지만 괜찮다고 생각해.」', 1);
    await era.input();

    await urara.say_and_wait(
      '응! 운이 나쁜 건 흔한 일인걸. 예전의 우라라도 계속 지기만 했으니까! 같이 마음 편하게 돌아가자!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 대답을 듣자 ',
      urara.get_colored_name(),
      '는 안심하며 웃었고, 다가와 ',
      me.get_colored_name(),
      '의 손을 잡았다.',
    ]);
    await era.printAndWait(
      '그 뒤, 집으로 향하던 두 사람은 동시에 우스꽝스럽게 앞으로 고꾸라지고 말았다. 언제부턴지 두 사람의 신발 끈이 소리 없이 풀려 있었던 것이다.',
    );
    await era.printAndWait(
      '하지만 바닥에 주저앉아 서로의 멍한 얼굴을 마주 보던 두 사람은, 신발 끈에 걸려 넘어진 상황이 어쩐지 우스워 그만 웃음을 터뜨리고 말았다.',
    );
    await era.printAndWait([
      '안 좋은 운세를 뽑아도 꼭 나쁜 일만 생기는 건 아니네! 서로의 옷에 묻은 먼지를 털어주며 ',
      urara.get_colored_name(),
      '는 낙관적으로 생각했다.',
    ]);
    await era.printAndWait([
      '그렇지만 이게 정말로 운세가 들어맞은 걸까? 방금 전의 기묘한 분위기를 떠올리며, ',
      urara.get_colored_name(),
      '와 함께 귀갓길에 오른 ',
      me.get_colored_name(),
      '은(는) 생각에 잠겼다.',
    ]);
    edu_marks.church += !edu_marks.church;
  }
};