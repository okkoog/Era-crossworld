const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  hook.arg = (await select_action_in_atrium()) === 0;
  let random_range;
  if (hook.arg) {
    if (!edu_marks.time_cap && love === 100) {
      edu_marks.time_cap = 1;
      await print_event_name('타임 캡슐이라구?', urara);
      await era.printAndWait(
        '오늘의 안뜰에는 개미 한 마리 보이지 않았고, 그 고목의 나무 구멍도 변함없이 잔디밭 한가운데에서 조용히 주위를 지켜보고 있었다.',
      );
      await era.printAndWait([
        '익숙한 그루터기 가장자리에 앉아, 곁에 있는 이미 특별한 사림이 된 ',
        me.get_colored_name(),
        '을(를) 주시하며, 오늘의 ',
        urara.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 평소와는 다른 화제를 던졌다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 며칠 전에 말이야, 다 같이 타임 캡슐을 만들었어!',
      ]);

      era.printButton('「재미있을 것 같네!」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 다들 허둥지둥하고, 적어 내려간 글자도 삐뚤빼뚤했지만, 정말 즐거웠어!',
      );
      await urara.say_and_wait(
        '그리고 말이야, 다 쓰고 나서 묻을 때 어디에 둘지 다들 많이 논의했지만, 역시 익숙한 곳에 두기로 했어!',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 시선을 따라 ',
        me.get_colored_name(),
        '도 침묵을 지키는 나무 구멍을 바라보았다. 나무 구멍 아래쪽 잔디의 일부분에는 확실히 파헤쳐졌던 흔적이 남아 있었다.',
      ]);
      await era.printAndWait([
        '다른 사람이 보기에는 뜻밖일지 몰라도, 트레센의 ',
        urara.get_uma_sex_title(),
        '들에게는 지극히 당연한 선택이었다.',
      ]);

      era.printButton('「그런데, 왜 일부러 나한테 알려주는 거야?」', 1);
      await era.input();

      await urara.say_and_wait([
        '어라…… 에헤헤, 아마도 ',
        callname,
        '가 나무 구멍 씨처럼 비밀을 잘 지켜주기 때문 아닐까!',
      ]);
      await era.printAndWait([
        '표정이 잠시 멈칫한 뒤, 작은 ',
        urara.get_uma_sex_title(),
        '는 아무도 없는 안뜰으로 다시 시선을 돌렸다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 여전히 찬란하게 웃고 있었지만, ',
        urara.sex,
        '가 드물게 무언가를 갈무리하고 있었다. 조금은 고민스러운 듯, 지금의 ',
        urara.sex,
        '는 이전과는 다른 무언가를 고심하고 있는 듯 보였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그 밝음 속에 서린 한 줄기 우울함, 그리고 문득 발견한 듯한 동경과 망설임을 알아차렸으나, ',
        urara.sex,
        '의 표현은 여전히 그리 뚜렷하지 않았다.',
      ]);
      await era.printAndWait([
        '어쩌면 ',
        urara.get_colored_name(),
        ' 자신조차 아직 깨닫지 못했을지도 모르지만, 트레이너인 ',
        me.get_colored_name(),
        '은(는) 방청객의 시점에서 우연히 그 점을 발견했다.',
      ]);
      await urara.say_and_wait(
        '지망하는 길은 전부 다르지만, 다 같이 찍은 사진 속의 웃는 얼굴은 함께였어! 그래서 이렇게 헤어져도 다들 즐거울 거라고 생각했는데——',
      );
      await urara.say_and_wait(
        '하지만, 다들 정말 즐거워해도 지망하는 곳이 다 다르니까, 헤어지는 날은 언젠가 오겠지……',
      );
      await era.printAndWait([
        '「즐거운」 말투로 ',
        me.get_colored_name(),
        '에게 타임 캡슐을 묻었을 때의 경험을 서술하고 있었으나, ',
        urara.get_colored_name(),
        '의 꼬리와 오른발은 마치 ',
        urara.sex,
        '의 사고에 맞추기라도 하듯 본능적으로 빙글빙글 돌고 있었다.',
      ]);
      await era.printAndWait([
        '이윽고 무언가 깨달은 듯한 ',
        urara.get_colored_name(),
        '는 「충분히 이해했다는 듯한」 미소를 지으며 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 헤어지는 날, ',
        callname,
        '는 우라라와 떨어지기 싫어질까?…… 나는 분명히 ',
        callname,
        '와 헤어지기 싫어서, 그때가 되면 분명 울어버릴 거야!',
      ]);
      await era.printAndWait([
        '여전히 웃는 얼굴로 마주하는 ',
        urara.get_colored_name(),
        '는 어른들은 차마 솔직하게 말하지 못할 사실을 씩씩하게 인정했다.',
      ]);
      await era.printAndWait([
        '어느샌가 훌쩍 자라버린 ',
        urara.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '을(를) 향해 미소 지었다. 비록 약간의 멈춤은 있었을지언정 말투에는 티끌만큼의 동요도 없었다.',
      ]);
      await urara.say_and_wait([
        '하지만, 그러면 ',
        callname,
        '도 슬퍼하겠지? 그러니까 정말 그 순간이 오더라도, 꾹 참고 울지 않을 거야!',
      ]);
      await era.printAndWait([
        '어느샌가 ',
        me.get_colored_name(),
        '의 곁에 바짝 달라붙은 분홍색 그림자가 미세하게 떨리고 있었다. 이것은 결코 ',
        me.get_colored_name(),
        '의 착각이 아니었으나, ',
        urara.get_colored_name(),
        '는 여전히 웃으며 ',
        me.get_colored_name(),
        '의 손가락을 걸어왔다.',
      ]);
      await urara.say_and_wait([
        '그러니까 그때 ',
        callname,
        '도 울면 안 돼! 약속이야! 왜냐하면 ',
        callname,
        '와 우라라는 반드시 다시 만날 거니까!',
      ]);
      await era.printAndWait([
        '벚꽃빛 눈동자가 얇은 눈물 속에서 피어올랐다. 지금 이 순간 필사적으로 귀를 쫑긋 세우려 노력하는 ',
        urara.sex,
        '는 그 누구에게도 뒤지지 않을 만큼 무겁고도 진지한 감정을 품고 있었다.',
      ]);
      await urara.say_and_wait([
        '관계가 어떻게 변하든, 나중에 어디에 가든, 우라라는 ',
        callname,
        '를 기억할 거야! 그러니까, 그러니까……',
      ]);

      era.printButton(
        '「그러니까 이미 약속한 거야? 설령 미래에 헤어지더라도, 우리는 반드시 다시 만난다고.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '담당이 정말로 눈물을 흘리기 전에, ',
        me.get_colored_name(),
        '은(는) 먼저 맹세를 건네며 ',
        urara.sex,
        '에게 어른으로서의 포옹을 해주었다.',
      ]);
      await era.printAndWait(
        '충동적으로 행동하지 말 것, 쉽게 맹세하지 말 것, 타인과 나눈 약속을 가벼이 여기지 말 것, 약속하기 전에는 지킬 수 있는지 생각할 것——',
      );
      await era.printAndWait([
        '이 모든 것을 ',
        me.get_colored_name(),
        '은(는) 알고 있었으나, 지금 이 순간 어느덧 성장한 ',
        urara.get_colored_name(),
        '에게 매료된 ',
        me.get_colored_name(),
        '은(는) 마음이 시키는 대로 유일한 해답을 내놓았다.',
      ]);
      await era.printAndWait([
        '계약을 맺었을 때와는 닮은 듯 다른 고동을 느끼며, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 부드러운 머리카락을 쓰다듬고 ',
        urara.sex,
        '의 눈가에 맺힌 눈물을 닦아주었다.',
      ]);

      era.printButton('「같이 돌아가자!」', 1);
      await era.input();

      await urara.say_and_wait('응!');
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        '그런 건가요? 그럼 미래의 우라라가, 그때가 되어 부디 소원을 이룰 수 있기를……',
      );
      await in_urara.say_as_unknown_and_wait([
        '또한 미래의 당신이, 설령 변하더라도 이 ',
        urara.get_teen_sex_title(),
        '와 맺은 약속을 부디 지켜낼 수 있기를……',
      ]);
      hook.override = true;
      era.println();
      get_attr_and_print_in_event(
        52,
        new Array(5).fill(10),
        0,
        undefined,
        true,
      ) && (await era.waitAnyKey());
      sys_like_chara(52, 0, 10) && (await era.waitAnyKey());
    } else {
      random_range = 1;
      if (love === 100) {
        random_range = 5;
      } else if (love >= 75) {
        random_range = 4;
      } else if (love >= 50) {
        random_range = 3;
      } else if (love >= 25) {
        random_range = 2;
      }
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait([
            callname,
            ', 오늘 나무 구멍 안쪽에 새로운 변화가 생긴 것 같아!',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '의 힌트를 들으며 ',
            me.get_colored_name(),
            '도 나무 구멍 안쪽을 관찰하기 시작했다.',
          ]);
          break;
        case 1:
          await urara.say_and_wait(
            '다들 나무 구멍 씨에게 나쁜 기분을 가져가 달라고 하지만, 기분 좋은 일을 공유해주면 좋은 일이 생길지도 몰라!',
          );
          await era.printAndWait([
            '비록 어린아이 같은 엉뚱한 생각일지라도, 이것이야말로 ',
            urara.get_colored_name(),
            '만의 축복일 것이라고 생각했다.',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            callname,
            '! 같이 나무 구멍 씨에게 즐거운 일을 들려주자! 나무 구멍 씨도 아주 기뻐할 거야!',
          ]);
          await era.printAndWait([
            '일찍이 안뜰으로 달려가 나무 구멍 곁에 앉아 ',
            me.get_colored_name(),
            '을(를) 기다리던 ',
            urara.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '에게 웃으며 손을 흔들었다.',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            '소문으로는 나무 구멍 씨가 너무 많이 쌓인 욕망도 가져가 준다는데, 왠지 그러기엔 나무 구멍 씨가 너무 불쌍한 것 같아……',
          );
          await era.printAndWait([
            '말로는 그렇게 생각하면서도, ',
            urara.get_colored_name(),
            '는 시선을 계속해서 가련한 고목 구멍으로 옮겼다.',
          ]);
          break;
        case 4:
          await urara.say_and_wait([
            '나무 구멍 씨! 어떻게 하면 ',
            callname,
            '가 나를 더 좋아하게 될지 알려줄래? 헤헤~ 역시 나무 구멍 씨도 모르는구나!',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '는 망설임 없이 나무 구멍에 이런 질문을 던졌다. 어쩌면 이 작은 ',
            urara.get_uma_sex_title(),
            '는 이미 자신만의 답을 가지고 있을지도 모른다.',
          ]);
          break;
        case 5:
          await urara.say_and_wait(
            '어떤 사람이 그러는데, 나무 구멍 씨에게 공물을 바치면 갈구하는 사람이 영원히 나만 바라보게 해준대……',
          );
          await urara.say_and_wait(
            '생각해 보기는 했지만…… 그러면 안 돼! 그렇게 하면 나무 구멍 씨도 기뻐하지 않을 거야!',
          );
          await era.printAndWait([
            '살짝 섬뜩한 이야기였음에도, ',
            urara.get_colored_name(),
            '가 이런 곳에서 거짓말을 하지는 않을 것임을 알기에, 확실히 그러지 않겠다고 말하는 ',
            urara.sex,
            '의 모습은 여전히 안심이 되었다.',
          ]);
      }
    }
  } else {
    random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 50) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '사실 ',
          sys_get_colored_callname(52, 20),
          '은 여기서 자주 낮잠을 자! 음— 오늘은 없는 모양이네!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 말대로, 나무 아래 모여 햇볕을 쬐는 고양이들 사이에 그 익숙한 회색 털 ',
          urara.get_uma_sex_title(),
          '의 모습은 보이지 않았다.',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 56),
          '은 보통 저기서 무료 점술 가판대를 열어. 하지만 너무 지나치게 하면 선생님들한테 쫓겨나고 말아!',
        ]);
        await era.printAndWait([
          '지금 작은 ',
          urara.get_uma_sex_title(),
          '가 가리키는 안뜰 한구석은 텅 비어 있었다. 아무래도 후쿠키타루는 최근에 또 쫓겨난 모양이다.',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          callname,
          ', 그림책 보는 거 좋아해? 내가 ',
          sys_get_colored_callname(52, 30),
          '한테서 새로운 그림책을 받았어!',
        ]);
        await era.printAndWait([
          '안뜰의 벤치에 앉아, ',
          urara.get_colored_name(),
          '는 두 사람 사이에 미리 가져온 그림책을 웃으며 펼쳤다.',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '햇볕을 쬐고 나면 ',
          callname,
          '한테서 아주 좋은 냄새가 나…… 정말이야!',
        ]);
        await urara.say_and_wait([
          '하지만 우라라한테서도 아주 좋은 냄새가 난다고! ',
          callname,
          '도 한번 맡아봐……!',
        ]);
        await era.printAndWait([
          '홍조가 가득한 미소 속에서, ',
          urara.get_colored_name(),
          '는 ',
          urara.get_uma_sex_title(),
          '다운 힘으로 ',
          me.get_colored_name(),
          '을(를) ',
          urara.get_teen_sex_title(),
          '의 체취가 가득한 품 안으로 끌어당겼다……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '헤헤~ ',
          callname,
          '랑 안뜰에서 산책하니까 꼭 데이트하는 것 같아!',
        ]);
        await urara.say_and_wait([
          '에? 지금 데이트하는 중인 거야? 그럼…… 우라라는 매일 ',
          callname,
          '랑 데이트하는 셈이네?',
        ]);
        await era.printAndWait([
          '데이트를 그런 식으로 계산해도 되는 걸까? 비록 ',
          urara.get_colored_name(),
          '와 함께하는 시간은 언제나 즐거운 것이 맞지만 말이다.',
        ]);
        break;
      case 5:
        await urara.say_and_wait(
          '같이 잔디밭에 누워 있으면 정말 안심돼! 햇볕 아래서 잠들어버릴 것 같아!',
        );
        await urara.say_and_wait([
          callname,
          ', 나 좀 안아줄래? 우라라 여기—— 아직 비어있다고?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 곁에 누워, ',
          urara.get_colored_name(),
          '는 부드러운 품을 다정하게 벌리고 미소 지으며 ',
          me.get_colored_name(),
          '에게 초대장을 건넸다.',
        ]);
        break;
    }
  }
};