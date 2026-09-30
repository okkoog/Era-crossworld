const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    urara = get_chara_talk(52);
  hook.arg = await select_action_in_station(52);
  let random_range = 2;
  if (love === 100) {
    random_range = 5;
  } else if (love >= 75) {
    random_range = 4;
  } else if (love >= 50) {
    random_range = 3;
  }
  switch (hook.arg) {
    case 0:
      if (!edu_marks.hid_menu && love >= 75) {
        edu_marks.hid_menu = 1;
        await print_event_name('히든 메뉴, 정말 맛있어!', urara);
        await era.printAndWait([
          '어느 날의 외식 끝에 계산을 준비하던 ',
          me.get_colored_name(),
          '은(는) 점원이 제안한 특별한 요구에 멍하니 굳어버렸다.',
        ]);
        await say_by_passer_by_and_wait(
          '점원 A',
          '좋습니다! 그래서 본 점포의 히든 커플 메뉴를 맛본 뒤에 해야 할 일은 무엇일까요?',
        );
        era.printButton('「키, 키스……?」', 1);
        await era.input();
        await era.printAndWait([
          '수상쩍은 미소를 짓는 점원이 내건 수상쩍은 조건을 되뇌며, 무고한 표정의 담당을 슬쩍 올려다본 ',
          me.get_colored_name(),
          '은(는) 생각에 잠겼다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 정말로 친구의 추천 때문에, 다른 목적 없이 이 가게에 온 걸까?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 정말로 「실수로」 이 가게의 「히든 메뉴」를 물어본 걸까?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 정말로 가게 밖의 기괴한 장식을 알아보지 못하고 타인을 안으로 끌어들인 걸까?',
        ]);
        await me.say_and_wait(
          '하지만 내가 왜 우라라를 의심하는 거지? 설마 이 모든 게 내 문제인가?',
          true,
        );
        await era.printAndWait([
          '보이지 않는 곳에서 ',
          urara.get_colored_name(),
          '의 순진함 속에 장난이 성공했을 때의 얄미운 미소가 살짝 비쳤고, ',
          me.get_colored_name(),
          '은(는) 사고 회로가 정지되어 끊임없이 자신을 의심했다.',
        ]);
        era.println();
        if (relation >= 150) {
          await urara.say_and_wait([callname, ', 왜 멍하니 있어? 자, 키스하자!']);
          await urara.say_and_wait(
            `자아 자아! 헤헤~ 밖에서 ${callname}와 뽀뽀하는 거네!`,
          );
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '의 동요를 보며 ',
            urara.get_colored_name(),
            '는 즐거운 듯 주위 사람들과 함께 분위기를 띄웠다.',
          ]);
          await era.printAndWait([
            '진지한 얼굴로 다가오는 담당의 모습에 ',
            me.get_colored_name(),
            '은(는) 귀신이라도 본 것처럼 필사적으로 고개를 저었다.',
          ]);
          await me.say_and_wait(
            '분명 다른 선택지가 있을 거야, 우라라. 이러면 다들 충격받을 거고, 아무에게도 축복받지 못할 거야……',
          );
        } else {
          await urara.say_and_wait([callname, ', 키스하기 싫어? 알고는 있었지만……']);
          await urara.say_and_wait(
            `하지만 ${callname}! 어른이라면 모든 일을 선택할 수 있는 건 아니라고?`,
          );
          await era.printAndWait([
            '점점 당황해하는 ',
            me.get_colored_name(),
            '을(를) 보며 ',
            urara.get_colored_name(),
            '는 살짝 질린 듯하면서도 묘하게 즐거운 표정을 지었다.',
          ]);
          await era.printAndWait([
            '겉으로는 냉담하지만 태도는 단호한 담당 앞에서 ',
            me.get_colored_name(),
            '은(는) 평소에 어떻게 대처해야 할지 까맣게 잊어버렸다.',
          ]);
          await me.say_and_wait(
            '안 돼 우라라, 사람들 앞에서 이러면 나 잡혀가. 상점가 사람들도 욕할 거고, 네 친구들도……',
          );
        }
        era.println();
        await urara.say_and_wait(
          `${callname}! 한눈팔지 마, 그러다간 제대로 못 한다고!`,
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '의 말이 끝나기 무섭게 거절하려던 ',
          me.get_colored_name(),
          '은(는) 순식간에 흥이 오른 담당의 ',
          urara.get_uma_sex_title(),
          '의 힘에 얼굴이 붙들렸다.',
        ]);
        await era.printAndWait('이거, 정말 사회적으로 끝장나겠는데……');
        await era.printAndWait([
          '폭주하는 담당에게 붙잡혀 움직일 수 없게 된 ',
          me.get_colored_name(),
          '은(는) 사람들의 시선 속에서 절망적으로 ',
          urara.get_colored_name(),
          '의 목적의식 뚜렷한 귀여운 얼굴을 바라볼 수밖에 없었다……',
        ]);
        await era.printAndWait([
          '이어서 도망칠 수 없는 ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '의 「숨 막히는 애욕」을 온몸으로 느끼게 되었다.',
        ]);
        era.println();
        if (era.get('exp:52:키스횟수') >= 10) {
          await era.printAndWait([
            '어린 ',
            urara.get_uma_sex_title(),
            '는 순수함 속에 묘한 요염함을 담은 표정으로 망설임 없이 ',
            me.get_colored_name(),
            '에게 다가와 장난스럽게 ',
            me.get_colored_name(),
            '의 입술을 깨물었다.',
          ]);
          await era.printAndWait([
            '그 후 이어진 어린 ',
            urara.get_uma_sex_title(),
            '의 긴 요구 속에서 ',
            me.get_colored_name(),
            '은(는) 정신을 잃을 것만 같았다.',
          ]);
          await era.printAndWait([
            '처음에 ',
            me.get_colored_name(),
            '은(는) 구경꾼들의 웅성거림을 희미하게 들을 수 있었으나, 곧 ',
            urara.get_colored_name(),
            '가 쏟아내는 애정 속에 모든 것이 흐릿해졌다.',
        ]);
          await era.printAndWait([
            '주변 소리가 거의 조용해질 즈음, ',
            urara.get_colored_name(),
            '는 마침내 쓰러지기 일보 직전인 ',
            me.get_colored_name(),
            '을(를) 아쉬운 듯 놓아주었다.',
          ]);
          await era.printAndWait([
            '하지만 그 직후에도 ',
            urara.get_colored_name(),
            '는 천진난만하고 무구한 표정으로 혀끝을 내밀어 ',
            me.get_colored_name(),
            '의 입술을 훑었다.',
          ]);
        } else {
          await era.printAndWait([
            '부끄러움 때문인지, 혹은 경험 부족으로 긴장한 탓인지 조급해하던 어린 ',
            urara.get_uma_sex_title(),
            '는 ',
            me.get_colored_name(),
            '의 얼굴과 정면으로 부딪히고 말았다.',
          ]);
          await urara.say_and_wait('으와아, 아파! 입술이랑 이빨이 부딪힌 것 같아……');
          await era.printAndWait([
            '하지만 첫 번째 실패도 ',
            urara.get_colored_name(),
            '를 멈추게 할 수는 없었다. 초조하게 ',
            me.get_colored_name(),
            '의 옷깃을 잡아당기며 ',
            urara.get_colored_name(),
            '는 계속해서 거칠게 ',
            me.get_colored_name(),
            '의 숨결을 탐닉했다.',
          ]);
          await era.printAndWait([
            '주변의 웅성거림을 애써 무시하며 어린 ',
            urara.get_uma_sex_title(),
            '에게 목덜미를 공격적으로 붙들린 ',
            me.get_colored_name(),
            '은(는) 당장이라도 기절할 것 같은 기분이 들었다……',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 힘이 다해 쓰러지기 직전, ',
            urara.get_colored_name(),
            '는 마침내 약간의 아쉬움을 남긴 채 자신의 ',
            callname,
            '을(를) 놓아주었다.',
          ]);
        }
        era.println();
        await me.say_and_wait(
          '이런 생각은 실례지만, 우라라 설마 욕구불만인 건가……?',
          true,
        );
        await era.printAndWait([
          '의자에 털썩 주저앉아 ',
          me.get_colored_name(),
          '은(는) 곁눈질로 얼굴을 가린 점원과 고개를 들지 못하는 다른 손님들을 살피며 기운 없이 숨을 내뱉었다.',
        ]);
        await era.printAndWait([
          '작은 담당은 여전히 사랑스러운 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 바라보고 있었고, 마치 ',
          me.get_colored_name(),
          '에게 한 번 더 할지 묻는 듯했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 순진했던 ',
          urara.get_colored_name(),
          '의 각성이 자신과 무관하지 않음을 인정했지만, 한순간에 이렇게 색욕에 빠진 분홍빛 ',
          urara.sex_code - 1 ? '암컷' : '수컷',
          '이 되어버린 것은 너무 과한 게 아닐까 생각했다.',
        ]);
        await era.printAndWait([
          '자신의 행동을 깊이 반성하던 도중, ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '가 다시 얼굴을 붉히며 다가오는 것을 보았다.',
        ]);
        await urara.say_and_wait(
          `연인이라는 걸 증명하려면 ${callname}도 이 정도로는 부족하다고 생각하지? 괜찮아, 나도 그렇게 생각해!`,
        );
        await urara.say_and_wait(['그러니까 ', callname, '…… 한 번 더 하자?']);
        await me.say_and_wait(
          `제발 그러지 마 우라라, ${callname}는 정말 이제 한계야! 적어도, 적어도 사회적 죽음 뒤에 생존할 구멍은 남겨줘!`,
          true,
        );
        await era.printAndWait([
          '살짝 입술을 핥는 연분홍빛 혀를 바라보며 ',
          me.get_colored_name(),
          '은(는) 감당할 수 없는 무게에 눈을 감았다……',
        ]);
        begin_and_init_ero(0, 52);
        set_palam_to_max(0, part_enum.mouth);
        set_palam_to_max(52, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(52, part_enum.mouth),
          new EroParticipant(0, part_enum.mouth),
          false,
        );
        end_ero_and_train();
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '음, 뭐, 아…… 그냥 즐기면 되잖아요. 그것도 좋지 않나요?',
        );
      } else {
        switch (get_random_value(0, random_range)) {
          case 0:
            await urara.say_and_wait([
              sys_get_colored_callname(52, 30),
              '과 ',
              sys_get_colored_callname(52, 33),
              '이 같이 추천해준 빵집은 역시 최고네! 다음에 또 같이 오자!',
            ]);
            await era.printAndWait([
              '손에 든 도넛을 한입 베어 물며, ',
              urara.get_colored_name(),
              '는 즐겁게 입가의 설탕 가루를 닦았다.',
            ]);
            break;
          case 1:
            await urara.say_and_wait(
              `저기는 저번에 다 같이 먹었던 라면집이야! 히든 메뉴도 있다고 들었어! ${callname}도 한번 먹어봐!`,
            );
            await era.printAndWait([
              '으슥한 골목에 위치했지만 의외로 깔끔한 가게를 보며, ',
              me.get_colored_name(),
              '은(는) 결국 ',
              urara.get_colored_name(),
              '와 함께 가게 안으로 발을 들였다.',
            ]);
            await era.printAndWait(
              '담당의 식단 조절은…… 외출했을 때만큼은 기분을 망치지 말기로 하자.',
            );
            break;
          case 2:
            await urara.say_and_wait(
              '어? 오늘은 패스트푸드야? 그럼 나 이 신제품 세트 먹어볼래!',
            );
            await urara.say_and_wait([
              '양이 많다고? 그럼 ',
              callname,
              '도 같이 먹자! 『우라라~』 하게 먹어치우는 거야!',
            ]);
            await era.printAndWait([
              '커다란 세트 메뉴를 나눠 먹은 뒤, ',
              me.get_colored_name(),
              '은(는) 이제 체중 관리가 필요한 게 ',
              urara.get_colored_name(),
              '뿐만이 아니라고 느꼈다.',
            ]);
            break;
          case 3:
            await urara.say_and_wait(
              '아암~ 츄릅—— 먹을 때 이상한 소리 내지 말라고? 알았어……?',
            );
            await era.printAndWait([
              '이상한 방식으로 음식을 빨아들이는 모습을 보였음에도, 무구한 표정의 어린 ',
              urara.get_uma_sex_title(),
              '는 정작 자신이 무엇을 하고 있는지 모르는 듯했다.',
            ]);
            break;
          case 4:
            await urara.say_and_wait(
              `헤헤~ ${callname}가 먹여줬다! 하지만 우라라는 이제 어린애가 아니야! 그러니까 다음은 내 차례야? ${callname}, 아——`,
            );
            await era.printAndWait([
              '행복한 미소를 지으며 ',
              urara.get_colored_name(),
              '는 숟가락을 뺏어 들고는, 흉내를 내듯 볶음밥 한 술을 떠서 ',
              me.get_colored_name(),
              '의 입가로 가져갔다.',
            ]);
            break;
          case 5:
            await urara.say_and_wait(
              '내 말 좀 들어봐! 잡지에서 봤는데, 엄청 대단한 「입에서 입으로 먹여주기」 게임이라는 게 있대!',
            );
            await urara.say_and_wait(
              `하지만 밖에서는 참아야겠지…… 그럼 나중에 둘만 있을 때 나랑 그 게임 해줄 거야?`,
            );
            await era.printAndWait([
              '안 된다고 해도 소용없겠지. 약간 열광적으로 기대하는 듯한 어린 ',
              urara.get_uma_sex_title(),
              '의 눈빛을 뒤로하고 ',
              me.get_colored_name(),
              '은(는) 묵묵히 밥을 먹었다.',
            ]);
        }
      }
      break;
    case 1:
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait([
            sys_get_colored_callname(52, 77),
            '이 추천한 그 잡화점, 오늘 재미있는 게 들어온 것 같아! 같이 구경 가자!',
          ]);
          await era.printAndWait([
            '어느새 저만치 달려간 ',
            urara.get_colored_name(),
            '는 벌써 아기자기한 잡화점 옆에 서 있었다.',
          ]);
          break;
        case 1:
          await urara.say_and_wait([
            '저기 있는 기념품 가게, ',
            sys_get_colored_callname(52, 58),
            '이랑 ',
            sys_get_colored_callname(52, 56),
            '이 가끔 가는 곳이야! 지금 같이 가볼래?',
          ]);
          await era.printAndWait([
            '몇 번을 가봐도 제대로 된 기념품점 같지는 않았지만, ',
            urara.get_colored_name(),
            '가 즐거우면 그걸로 된 거 아닐까 싶었다.',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            '아! 저기 ',
            sys_get_colored_callname(52, 47),
            '이 추천해준 헌책방이다! 안에 엄청 희귀한 책들이 들어왔대!',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '의 손을 끌고 서점 입구에 도착한 ',
            urara.get_colored_name(),
            '는 호기심 가득한 눈으로 쇼윈도 안을 들여다보았다.',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            `하아…… 아, 똑바로 걸어야 하는데! 하지만 ${callname}한테서 나는 냄새가…… 하아……`,
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 옷자락을 계속 붙잡은 채, ',
            urara.get_colored_name(),
            '는 ',
            callname,
            '의 향기에 완전히 취해 있었다.',
          ]);
          break;
        case 4:
          await urara.say_and_wait(
            `입학 첫날에 엄마가 트레센에 데려다줬던 게 생각나…… 하지만 지금은 ${callname}가 내 곁에 있네!`,
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 팔짱을 끼고, ',
            urara.get_colored_name(),
            '는 웃으며 ',
            me.get_colored_name(),
            '과(와) 함께 북적이는 인파 속을 가로질러 갔다.',
          ]);
          break;
        case 5:
          await urara.say_and_wait([
            callname,
            ', 지금은 손 놓으면 안 돼? 인파 속에서 길을 잃으면 우라라도 무섭단 말이야!',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '의 팔을 꼭 껴안은 채, 표정은 보이지 않았지만 ',
            urara.get_colored_name(),
            '는 분명 웃고 있을 것이었다.',
          ]);
      }
      break;
    case 2:
      if (!edu_marks.try_dress && love >= 25) {
        edu_marks.try_dress = 1;
        hook.override = true;
        await print_event_name('무대 의상을 입어볼 거야!', urara);
        await era.printAndWait([
          '다음 레이스를 완벽하게 준비하기 위해, ',
          me.get_colored_name(),
          '과(와) ',
          urara.get_colored_name(),
          '는 쇼핑몰을 찾아 훈련에 필요한 운동 용품을 구매하기로 했다.',
        ]);
        await era.printAndWait([
          '하지만 맞춤 승부복을 전문으로 하는 가게 앞을 지나던 중, ',
          urara.get_colored_name(),
          '는 뜻밖에도 「무대 의상 시착」 제안을 받게 되었다.',
        ]);
        await era.printAndWait([
          '그리고 ',
          urara.get_uma_sex_title(),
          ' 점원과 잠시 대화를 나눈 끝에 ',
          me.get_couple_title(),
          '은 사정을 알게 되었다.',
        ]);
        await era.printAndWait(
          '최근 다른 트레센으로부터 새로운 무대 의상 제작을 의뢰받았다고 한다.',
        );
        await era.printAndWait(
          '본래 과거에 사용하지 않았던 샘플을 개량하려 했으나, 어떤 것을 고르는 게 좋을지 고민하던 차였다.',
        );
        await era.printAndWait(
          '선택이 어렵다면 차라리 트레센 학생에게 직접 입혀보는 게 가장 확실하지 않겠냐는 것이었다.',
        );
        await urara.say_and_wait([
          '그래서 마침 나와 ',
          callname,
          '가 여기를 지나가게 된 거구나? 정말 우연이네!',
        ]);
        await urara.say_and_wait([
          '새 옷을 입어보는 건 우라라도 정말 흥미 있어! 하지만 오늘은 다른 할 일도 있으니까——',
        ]);
        await era.printAndWait([
          '잠시 망설이던 ',
          urara.get_colored_name(),
          '는 곧바로 ',
          me.get_colored_name(),
          '의 의견을 묻기로 했다.',
        ]);

        era.printButton('「괜찮아, 입어보고 싶으면 그렇게 해.」', 1);
        await era.input();

        await urara.say_and_wait('만세——!');
        await era.printAndWait([
          '긍정적인 답변을 듣자마자, 어린 ',
          urara.get_uma_sex_title(),
          '는 신이 나서 점원의 안내에 따라 의상이 준비된 탈의실로 훌쩍 뛰어 들어갔다.',
        ]);
        await era.printAndWait([
          '그런데 ',
          urara.get_colored_name(),
          '는 괜찮을까? ',
          urara.sex,
          '가 혼자서 옷을 잘 갈아입을 수 있을지 조금 걱정이 되었다.',
        ]);
        await era.printAndWait([
          '처음에는 그런 걱정이 앞섰으나, 이내 ',
          urara.get_colored_name(),
          '가 옷을 말끔히 차려입고 웃으며 나타나자 ',
          me.get_colored_name(),
          '의 우려도 씻은 듯 사라졌다.',
        ]);
        await era.printAndWait([
          '하지만 라이브 때의 안무를 선보이며 점원들에게 촬영 각도를 잡아주는 담당을 바라보며, ',
          me.get_colored_name(),
          '은(는) 묘한 감회에 젖었다.',
        ]);
        await era.printAndWait([
          '평소에는 한없이 어린애 같아 보여도 ',
          urara.sex,
          '는 계속해서 성장하고 있다. 설령 트레이너를 만나지 못했더라도 ',
          urara.sex,
          '는 훌륭하게 자라났을 것이다.',
        ]);
        await era.printAndWait([
          '그런 생각이 들 때마다 ',
          me.get_colored_name(),
          '은(는) 첫 만남의 순간에 ',
          urara.get_colored_name(),
          '를 한번 보고 말지 않은 것을 천만다행으로 여겼다.',
        ]);
        await era.printAndWait([
          '어쩌면 ',
          urara.get_colored_name(),
          ' 없는 ',
          me.get_colored_name(),
          '도 나름대로 곤경을 헤쳐 나갔을 것이고, ',
          me.get_colored_name(),
          ' 없는 ',
          urara.get_colored_name(),
          '도 1등을 차지할 수 있었을지도 모른다……',
        ]);
        await era.printAndWait([
          '하지만 안 된다는 것을 알면서도, 트레이너인 ',
          me.get_colored_name(),
          '은(는) 문득 ',
          urara.get_colored_name(),
          '를 독점하고 싶다는 충동에 휩싸이곤 했다.',
        ]);
        await era.printAndWait([
          '트레이너로서 참 한심한 생각이었다. 어른스럽지 못한 마음을 고개를 저어 털어내던 찰나, ',
          me.get_colored_name(),
          '은(는) 우연히 ',
          urara.get_colored_name(),
          '와 시선이 마주쳤다.',
        ]);
        await era.printAndWait([
          '마치 개인 라이브를 하는 작은 아이돌처럼, 벚꽃빛의 밝은 미소를 지은 채 ',
          me.get_colored_name(),
          '에게 소리 없이 「우마뾰이 전설」의 에어 키스를 날렸다.',
        ]);
        await era.printAndWait([
          '노래와 음악이 없었음에도, 그리고 이미 다른 곳에서 수없이 보았음에도 불구하고, 어린 ',
          urara.get_uma_sex_title(),
          '의 붉어진 뺨과 수줍은 에어 키스는 ',
          me.get_colored_name(),
          '의 심장을 관통했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 요동치는 심장을 진정시키기도 전에, ',
          urara.get_colored_name(),
          '는 점원들의 「OK」 사인에 맞춰 다시 탈의실 안으로 쏙 들어가 버렸다.',
        ]);
        await me.say_and_wait('……방금 그거, 우라라였어?', true);
        await era.printAndWait([
          '두근거리는 가슴을 억누르며 진정한 뒤에야 ',
          me.get_colored_name(),
          '은(는) 깨달았다. 사랑스러운 키스를 보낸 그 ',
          urara.get_teen_sex_title(),
          '가 바로 겉보기엔 아직 앳된 자신의 작은 담당이었다는 것을……',
        ]);
        era.drawLine();

        await urara.print_and_wait([
          '탈의실 안에서, 방금 막 ',
          callname,
          '에게 기습을 감행한 ',
          urara.get_colored_name(),
          '는 전신거울의 가장자리를 붙잡고, 세차게 뛰는 심장 소리를 억누르려 애썼다.',
        ]);
        await urara.say_and_wait(
          '심장아, 제발 좀 멈춰줘! 지금은 훈련 중도 아니고, 레이스 중도 아니라고? 으으…… 머리가 어질어질해……',
          true,
        );
        await urara.say_and_wait(
          [
            '분명 그냥 ',
            callname,
            '를 깜짝 놀라게 해주고 싶었을 뿐인데, 왜 막상 하고 나니까 이렇게 부끄러운 거야……',
          ],
          true,
        );
        await urara.print_and_wait([
          '어느 정도 진정이 되자, ',
          urara.get_colored_name(),
          '는 알 수 없는 감정을 품은 채 천천히 몸을 일으켰다.',
        ]);
        await urara.print_and_wait([
          urara.get_teen_sex_title(),
          '의 시선이 위로 향하고, 곁눈질에서 서서히 정면을 응시하게 되자, ',
          urara.get_colored_name(),
          '는 거울 속에서 「또 다른 ',
          urara.get_uma_sex_title(),
          '」를 발견했다.',
        ]);
        await urara.print_and_wait([
          '거울 속의 ',
          urara.get_uma_sex_title(),
          '는 누구일까? ',
          urara.get_colored_name(),
          '와 닮았고, ',
          urara.get_colored_name(),
          '와 똑같은 옷을 입고 있지만, 한눈에 봐도 사랑스러운 모습이었다.',
        ]);
        await urara.print_and_wait([
          '마치 책 속의 ',
          urara.sex_code - 1 ? '공주님' : '왕자님',
          '처럼, 발그레해진 뺨과 부끄러움을 머금은 두 눈…… 이것은 아마도 「첫사랑에 빠진 ',
          urara.get_teen_sex_title(),
          '」의 모습일까?',
        ]);
        await urara.print_and_wait([
          '잘은 모르겠지만, 사람들이 말하듯 어린아이 같은 ',
          urara.get_colored_name(),
          '와는 전혀 달랐다. 이런 ',
          urara.get_child_sex_title(),
          '를 싫어할 사람은 아무도 없을 것 같았다……',
        ]);
        await urara.say_and_wait(
          [
            '그럼…… ',
            callname,
            '도 이런 ',
            urara.get_child_sex_title(),
            '를 좋아해 줄까?',
          ],
          true,
        );
        await urara.print_and_wait([
          '손을 뻗어 거울 속의 「',
          urara.get_colored_name(),
          '」를 살며시 어루만지며, 다시 가팔라지는 심장 박동을 느끼던 ',
          urara.get_teen_sex_title(),
          '는 문득 생각했다.',
        ]);
        await urara.say_and_wait(
          ['그런데 왜 이럴 때 또 ', callname, ' 생각이 나는 거지?'],
          true,
        );
        era.println();
        if (relation >= 150) {
          await urara.say_and_wait(
            [
              '아직 어떻게 해야 할지 잘 모르겠지만, 우라라는 역시 ',
              callname,
              '가 기뻐하는 모습을 보는 게 좋아……',
            ],
            true,
          );
          await urara.print_and_wait([
            '어린 ',
            urara.get_uma_sex_title(),
            '는 탈의실 한구석에 걸려 있지 않은 옷 한 벌을 바라보았다.',
          ]);
          await urara.say_and_wait(
            [
              '우라라도 그 옷이 왜 미리 나와 있지 않았는지 알고 있지만, 그 옷이라면 ',
              callname,
              '가 분명……',
            ],
            true,
          );
          await urara.print_and_wait([
            '귀를 쫑긋 세우며, 점차 이성을 잃어가는 첫사랑에 빠진 ',
            urara.get_teen_sex_title(),
            '는 과감한 시도를 하기로 결심했다.',
          ]);
        } else {
          await urara.say_and_wait(
            [
              '왜 우라라는 기분이 좋은 걸까? ',
              callname,
              '가 아주 즐거워 보였기 때문일까?',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '하지만 만약 ',
              callname,
              '가 우라라를 더 좋아하게 된다면, 우라라를 위해 더 좋은 사람이 되어줄까?',
            ],
            true,
          );
          await urara.say_and_wait(
            ['그럼 ', callname, '를 우라라에게 푹 빠지게 만들면, 혹시……?'],
            true,
          );
          await urara.print_and_wait([
            '상자를 열고 그 옷을 꺼내며, 첫사랑에 빠진 ',
            urara.get_teen_sex_title(),
            '는 잠시 망설이다 서툰 핑계로 자신을 설득했다.',
          ]);
        }
        era.drawLine();
        await urara.say_and_wait('이 옷도 다 갈아입었어!');
        await era.printAndWait([
          urara.get_colored_name(),
          '의 수줍음 섞인 활기찬 선언과 함께, 탈의실의 긴 커튼이 젖혀졌다.',
        ]);
        await era.printAndWait(
          '그 직후, 겨우 활기를 띠기 시작했던 공기가 순식간에 얼어붙었다.',
        );
        await era.printAndWait([
          '얼굴을 붉히고 있는 ',
          urara.get_colored_name(),
          '를 제외하고, 현장의 모든 이들이 무언가 충격적인 것을 본 듯 동작을 멈췄다.',
        ]);

        era.printButton('「……?!」', 1);
        await era.input();

        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 지금의 ',
          urara.get_colored_name(),
          '를 어떻게 묘사해야 할지 알 수 없었다. 묘사는커녕, 지금의 ',
          me.get_colored_name(),
          '은(는) 담당을 똑바로 쳐다볼 의지조차 잃을 지경이었다.',
        ]);
        await era.printAndWait([
          '하지만 그것은 분명 트레이너로서 단 한 번도 본 적 없는 ',
          urara.get_colored_name(),
          '의 모습이었다——',
        ]);
        await era.printAndWait([
          '꽉 조여진 코르셋이 강조하는 곡선 아래로 이어지는 것은, 가녀린 허리를 감싸며 ',
          urara.get_teen_sex_title(),
          '의 육체 라인을 파고드는 타이트한 하이레그였다.',
        ]);
        await era.printAndWait([
          '허리 뒤쪽과 꼬리 뿌리에서 뻗어 나온 레이스 자락이 유혹적으로 흔들렸고, 의도적으로 드러낸 배꼽과 아랫배는 마치 관능적인 의도만을 담은 듯했다.',
        ]);
        await era.printAndWait([
          '한쪽으로 넘긴 벚꽃색 포니테일 옆에는 하트 모양의 금속 귀걸이와 칠흑 같은 이어커버가 있었고, 가죽 장갑 및 롱부츠와 함께 애욕의 빛을 반사하고 있었다.',
        ]);
        await era.printAndWait([
          '이 순흑의 의상에 감싸인 채, 본래 「앳되어야 할」 ',
          urara.get_colored_name(),
          '는 지금 이 순간 너무나 요염하고 매혹적이었다.',
        ]);
        await era.printAndWait(
          '이게 대체 어디의 아이돌이란 말인가? 이 서큐버스 같은 복장은 또 대체 어디에 쓰일 무대 의상이란 말인가?',
        );
        await era.printAndWait([
          '어째서 빛을 잃은 벛꽃빛 눈동자를 가진 ',
          urara.get_colored_name(),
          '에게 이 과격한 무대 의상이 이토록 잘 어울리는 것일까?',
        ]);
        await era.printAndWait([
          '눈을 가늘게 뜨고 마치 사냥감을 포착한 듯 자신의 ',
          urara.sex,
          '의 ',
          callname,
          '에게 던지는 그 흥분 섞인 미소는 또 무엇이란 말인가?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 시선에 등골이 오싹해진 ',
          me.get_colored_name(),
          '은(는) 마른침을 삼켰다. 어느덧 ',
          me.get_colored_name(),
          '은(는) 서서히 이성이 증발하는 함정 속으로 빠져드는 것만 같았다……',
        ]);
        await era.printAndWait([
          '하지만 어른들이 침묵에 빠진 것과 동시에, 어린 ',
          urara.get_uma_sex_title(),
          '가 먼저 발그레해진 얼굴을 감싸 쥐었다.',
        ]);
        await urara.say_and_wait('미, 미안해. 우라라가 너무 지나쳤나 봐, 아마도……');
        await era.printAndWait([
          '작은 서큐버스의 모습은 단 몇 초뿐이었고, 그녀는 곧바로 옆의 탈의실 커튼 뒤로 숨어버렸다. 너무 부끄러운 나머지 눈가가 촉촉해진 ',
          urara.get_colored_name(),
          '로 돌아온 채였다.',
        ]);
        era.println();

        await me.say_and_wait('메지로 가문과 협력해서 특수 목적 의상을 부업으로 제작한다고?');
        await era.printAndWait([
          '모두가 현장을 정리한 뒤, 충격에 빠진 ',
          me.get_colored_name(),
          '은(는) 연신 사과하는 점원의 말을 믿기 힘들다는 듯 되뇌며 한동안 할 말을 잃었다.',
        ]);
        await say_by_passer_by_and_wait(
          '점원 A',
          '정말 죄송합니다. 그 옷은 원래 처분할 예정이었는데, 그만 탈의실에 깜빡하고 두는 바람에……',
        );
        await me.say_and_wait('그 이유는 일단 그렇다 치고……');
        await me.say_and_wait(
          '잠깐, 다른 옷은 그렇다 쳐도 왜 이 옷이 우라라에게 딱 맞는 거지? 이 옷을 주문했던 원래 주인은 대체……?',
          true,
        );
        await me.say_and_wait('……역시 관두자.', true);
        await era.printAndWait([
          '운동 용품이 가득 담긴 봉투를 들고 돌아가는 길, ',
          me.get_colored_name(),
          '은(는) 이 수상쩍은 문제에 대해 더는 생각하지 않기로 했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 깊은 생각에 잠겨 있는 동안, 곁을 걷던 ',
          urara.get_colored_name(),
          '가 질문을 던졌다.',
        ]);
        await urara.say_and_wait([
          `만약 우라라가 앞으로도 계속 ${callname}에게 보여준다면, ${callname}는 두근거려 줄 거야?`,
        ]);
        in_urara.say_as_unknown([
          urara.get_colored_name(),
          '의 질문에 트레이너 ',
          me.get_adult_sex_title(),
          '은 대답했습니다.',
        ]);
        era.printButton('「무슨 소리야, 그건 너무 과격해……」（호감도 +10）', 1);
        era.printButton('「다른 걸 다 제쳐둔다면…… 아마 그렇겠지?」（애정도 +5）', 2);
        const ret = await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '의 대답을 들은 ',
          urara.get_colored_name(),
          '는 평소와는 다른, 무언가 짐작하기 어려운 미소를 지어 보였다.',
        ]);
        await era.printAndWait(['대체 무슨 생각을 하는 걸까……']);
        era.drawLine();
        await urara.say_and_wait([
          '겉으로는 내키지 않아 보여도, ',
          callname,
          ', 두근거린다는 걸 부정하지 않았네! 비록 이번에는 오래 못 버텼지만.',
        ]);
        await urara.say_and_wait([
          '헤헤~ 이것도 나중에 ',
          callname,
          '를 두근거리게 만들기 위해서니까! 물론, 우라라만을 바라봐야 해……',
        ]);
        await in_urara.say_as_unknown_and_wait(
          '정말 이대로 괜찮은 건가요? 그렇게 충동적으로 믿다니…… 인간이란 정말 믿을 게 못 된다고요?',
        );
        await urara.say_and_wait([
          '괜찮아! 왜냐하면 나는 ',
          callname,
          '를 믿고 있으니까!',
        ]);
        sys_like_chara(52, 0, (ret === 1) * 10, true, (ret === 2) * 5) &&
          (await era.waitAnyKey());
      } else {
        switch (get_random_value(0, random_range)) {
          case 0:
            await urara.say_and_wait(
              '저기에 레이스에 나가는 다른 애들의 광고판이 있어. 오늘 실린 사람은 누구일까~?',
            );
            await era.printAndWait([
              '쇼핑몰 로비에서, ',
              urara.get_colored_name(),
              '와 ',
              me.get_colored_name(),
              '은(는) 함께 머리 위의 ',
              urara.get_uma_sex_title(),
              ' 홍보 광고판을 올려다보았다.',
            ]);
            break;
          case 1:
            await urara.say_and_wait([
              callname,
              '! 이번 신발이랑 편자도 지난번이랑 같은 걸로 사면 되는 거지! 어? 저건가?',
            ]);
            await era.printAndWait([
              '당황한 기색으로 서로 다른 두 종류의 러닝슈즈를 들고 있는 ',
              urara.get_colored_name(),
              '는 레이스와 훈련에 대한 이해가 아직은 서툰 듯 보였다.',
            ]);
            break;
          case 2:
            await urara.say_and_wait(
              '또 승부복 전시된 곳이야! 게다가 이번에는 예쁜 새 옷들이 들어왔어!',
            );
            await era.printAndWait([
              '새로운 승부복이 전시되었다는 것은 새로운 ',
              urara.get_uma_sex_title(),
              '가 중상 레이스에 참여하게 된다는 뜻이며, 미래의 압박이 조금 더 커질 수도 있다는 의미였다.',
            ]);
            await era.printAndWait([
              '하지만 ',
              urara.get_colored_name(),
              '의 미소는 그저 모두가 미래를 향해 한 걸음 더 나아갈 수 있다는 사실에 기뻐할 뿐이었다.',
            ]);
            break;
          case 3:
            await urara.say_and_wait([
              callname,
              ', 요새 옷 안쪽이…… 쓸려서 좀 아파. 우라라랑 같이 새 거 보러 가줄 수 있어……?',
            ]);
            await urara.say_and_wait([
              '다른 친구랑 가라고? 하지만 다른 친구들은 요즘 다들 바쁘단 말이야! ',
              callname,
              ', 한 번만 더 도와줘……',
            ]);
            await era.printAndWait([
              urara.get_colored_name(),
              '의 눈빛이 너무나 가련했지만, 철창신세를 지지 않기 위해 ',
              me.get_colored_name(),
              '은(는) 필사적으로 ',
              urara.get_colored_name(),
              '의 요청을 거절했다.',
            ]);
            break;
          case 4:
            await urara.say_and_wait([
              '아! 이 옷…… 안 사줘도 돼, ',
              callname,
              '! 용돈 열심히 모아서 내가 직접 살 거야!',
            ]);
            await era.printAndWait([
              '조금 아쉬운 기색이었지만, 사주겠다는 ',
              me.get_colored_name(),
              '의 제안을 들은 ',
              urara.get_colored_name(),
              '는 단호하게 원피스를 다시 옷걸이에 걸어두었다.',
            ]);
            break;
          case 5:
            await urara.say_and_wait([
              '우라라~ 헤헤, 놀랐어? ',
              callname,
              '! 그러니까 우라라랑 너무 멀리 떨어지지 마! 손 꽉 잡고 가야 해!',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) 담당을 휴게 구역에 잠시 두고 떠나려 하자, ',
              urara.sex,
              '는 ',
              me.get_colored_name(),
              '이(가) 뒤를 도는 순간 등 뒤로 달려들어 안겼다.',
            ]);
            await era.printAndWait([
              '다시 가서 좀 앉아 있으라고 말하고 싶었지만, ',
              urara.get_colored_name(),
              '는 물러날 기미도, 웃음기도 전혀 없는 표정이었다……',
            ]);
        }
      }
  }
};