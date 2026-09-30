const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.aoba_sho] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    await print_event_name('그림자 속의 복', kitaru);
    await era.printAndWait([
      '레이스 초반, ',
      kitaru.get_colored_name(),
      '의 위치 선정과 보폭 조절은 무척 훌륭했다. 평소의 ',
      kitaru.sex,
      '는 덜렁거리는 성격이었으나, ',
      me.get_colored_name(),
      '의 가르침을 마음속 깊이 새기고 있었다.',
    ]);
    await era.printAndWait([
      '레이스가 종반에 접어들자, ',
      kitaru.get_colored_name(),
      '도 가속하기 시작하며 선두권과의 거리를 급격히 좁혀나갔다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 보여주는 막판 스퍼트 능력은 상당히 뛰어났으며, 몇 마신이나 차이 나던 간격은 순식간에 사라졌다.',
    ]);
    await era.printAndWait('그러던 중……');
    if (extra_flag.rank !== 1) {
      await era.printAndWait([
        '해설: 「실속인가요? ',
        kitaru.get_colored_name(),
        '의 속도가 갑자기 급감합니다!」',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 방송에서 흘러나오는 해설을 들었다.']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 거의 비틀거리는 듯한 주법으로 결승선을 통과한 직후, ',
        me.get_colored_name(),
        '은(는) 한시도 지체하지 않고 경기장으로 달려나갔다. 대기 중이던 의사에게 문제가 없음을 확인한 뒤, 곧장 ',
        kitaru.sex,
        '를 안아 들고 대기실로 향했다.',
      ]);
    } else {
      await era.printAndWait([
        '해설: 「무슨 일이 생긴 걸까요? ',
        kitaru.get_colored_name(),
        '의 주법이 눈에 띄게 무너지고 있습니다.」',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 방송에서 흘러나오는 해설을 들었다.']);
      await era.printAndWait([
        '확실히 그랬다…… ',
        kitaru.get_colored_name(),
        '는 선두에게 바짝 다가선 이후 주법이 점점 불안정해졌고, 얼굴 표정 또한 눈에 띄게 일그러지기 시작했다.',
      ]);
      await era.printAndWait([
        '비록 압도적인 실력으로 ',
        kitaru.get_colored_name(),
        '가 1위로 들어오긴 했으나, 스퍼트 타이밍, 보폭, 위치 선정 의식이 전혀 느껴지지 않았다. 마치 방금 전의 ',
        kitaru.get_colored_name(),
        '는 그저 레이스 ',
        kitaru.get_uma_sex_title(),
        '로서의 본능만으로 달리고 있는 것 같았다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 거의 비틀거리는 듯한 주법으로 결승선을 통과한 직후, ',
        me.get_colored_name(),
        '은(는) 한시도 지체하지 않고 경기장으로 달려나갔다. 대기 중이던 의사에게 문제가 없음을 확인한 뒤, 곧장 ',
        kitaru.sex,
        '를 안아 들고 대기실로 향했다.',
      ]);
    }

    era.drawLine({ content: '도쿄 경기장 대기실 안'});
    await kitaru.say_and_wait('에헤헤! 괜찮다고 말씀드렸잖아요~!');
    await era.printAndWait([
      '레이스 후, 대기실 의자에 앉아 있는 ',
      kitaru.get_colored_name(),
      '는 맨발 상태였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 마음이 놓이지 않아 ',
      kitaru.sex,
      '에게 신발과 양말을 벗게 한 뒤 정밀 검사, 즉 촉진을 시작했다.',
    ]);
    await era.printAndWait(
      '드러난 하얀 피부는 레이스 직후라 그런지 약간 붉게 상기되어 있었고, 발바닥의 곡선은 매끄럽고 유려했으며, 발가락은 갑작스럽게 공기에 노출된 탓인지 미세하게 떨리고 있었다.',
    );
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 발을 감상할 여유 따위 없었다. 그저 조금 전의 상황이 골절이나 염좌가 아니라는 것을 재차 확인할 뿐이었다.',
    ]);
    await era.printAndWait('하지만, 육체적인 문제가 아니라면……');
    era.printButton('회상', 1);
    await era.input();
    await era.printAndWait([
      '낯설지 않은 감각이었다. 데뷔 전 선발 레이스 때도 비슷한 상황이 있었다. 다만 ',
      me.get_colored_name(),
      '은(는) 당시 그것을 ',
      kitaru.get_colored_name(),
      '가 스퍼트 타이밍을 잡는 데 미숙한 탓이라고만 생각했었다.',
    ]);
    era.printButton('「무슨 일이 있었던 거야?」', 1);
    await era.input();
    await kitaru.say_and_wait('아……');
    era.printButton('「방금 전 종반 때 말이야.」', 1);
    await era.input();
    await era.printAndWait([
      '방금 전까지만 해도 쾌활하던 ',
      kitaru.get_colored_name(),
      '가 다시 침묵에 빠졌다.',
    ]);
    await kitaru.say_and_wait('으으……');
    await kitaru.say_and_wait('싫어요……');
    await era.printAndWait([kitaru.sex, '의 입술이 굳게 다물렸고, 금방이라도 피가 날 듯 깨물고 있었다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이 ',
      kitaru.get_uma_sex_title(),
      '의 입에서 거절의 말을 듣는 일이 거의 없었기에 당혹스러웠다.',
    ]);
    era.printButton('추궁을 멈추고 기존 정보로 분석한다', 1);
    era.printButton('좀 더 부드러운 말투로 계속 추궁한다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        '그래. 데뷔전과는 달리 선발 레이스와 이번 청엽상에는 공통점이 있었다.',
      );
      await era.printAndWait([
        '도주 주법을 쓰는 레이스 ',
        kitaru.get_uma_sex_title(),
        '의 수와 수준이 평균치보다 높았으며, ',
        kitaru.get_colored_name(),
        '는 매번 종반에 도주 주자와 경합하는 과정에서 이런 증상을 보였다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 평소 모습들을 종합해볼 때,',
      ]);
      await era.printAndWait('무척 좋지 않은 상황이었다……');
      await era.printAndWait('특정 상황에서의 플래시백, 그리고 선택적 망각. 전형적인 PTSD 증상이었다.');
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 좀 더 부드러운 말투로 추궁을 이어갔다. 그러자……',
      ]);
      await kitaru.say_and_wait('아니야! 아니라고요! 제 잘못이 아니에요!');
      await kitaru.say_and_wait('제발요!');
      await era.printAndWait(
        '귀가 뒤로 완전히 뉘어져 머리에 파묻힐 정도가 되었고, 생기 넘치던 눈동자는 탁하게 흐려졌다.',
      );
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          '「',
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '아아아아아아!!!!!',
          },
          '」',
        ],
        {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait('퍽!', {
        align: 'center',
        color: 'red',
        fontSize: '2.25rem',
        fontWeight: 'bold',
      });
      await era.printAndWait([
        '묵직한 타격음과 함께, 패닉 상태에 빠진 ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '에게 주먹을 휘둘렀다.',
      ]);
      await era.printAndWait([
        '다행히 바닥에 쓰러진 ',
        me.get_colored_name(),
        '을(를) 본 순간, ',
        kitaru.get_uma_sex_title(),
        '의 흐릿하던 눈동자에 다시 생기가 돌아왔다.',
      ]);
      await kitaru.say_and_wait('아아앗! 정말 죄송해요!');
      await kitaru.say_and_wait([callname, '! 괜찮으세요?! 지금 바로 의사 선생님을 불러올게요!']);
      await era.printAndWait([
        '정말 괜찮은 걸까? ',
        me.get_colored_name(),
        '은(는) 비로소 자신이 알고 싶었던 답을 얻어냈다.',
      ]);
      await era.printAndWait(
        '과도한 반응과 동반된 공격적 행동. 전형적인 PTSD 증상이었다.',
      );
    }

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 깊은 고민에 빠졌다. 정신적인 결함은 육체적인 문제보다 훨씬 더 다루기 까다로운 법이었다.',
    ]);

    era.set('status:56:PTSD', 1);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 레이스에 대한 PTSD를 앓고 있음을 발견했다.',
    ]);

    era.set('status:56:흉', 1);
    era.set('cflag:56:컨디션', -2);
    era.set('status:56:대길', 0);
    era.set('status:56:소길', 0);
    era.set('status:56:중길', 0);
  };

  handlers[race_enum.toky_yus] = async (kitaru, me, callname) => {
    await print_event_name('동이 트다', kitaru);
    await kitaru.print_and_wait(
      '종반에 진입하자 모두가 스퍼트를 시작했고, 선두에 서 있던 도주 주자들도 가속을 시작했다!',
    );
    await kitaru.print_and_wait('머리가 너무 아파……');
    await kitaru.say_and_wait('안 돼…… 싫어!');
    await kitaru.print_and_wait([
      '그날, 나는 주황색 긴 머리를 휘날리며 스퍼트를 시작하던 레이스 ',
      kitaru.get_uma_sex_title(),
      '를 보았다.',
    ]);
    await kitaru.say_and_wait('안 돼!');
    await kitaru.print_and_wait('콰앙!!!');
    await kitaru.print_and_wait(
      '드러난 뼈, 뒤틀린 가드레일, 그리고 붉게 물든 잔디밭.',
    );
    await kitaru.say_and_wait('제발 그만해!');
    await kitaru.print_and_wait('마치 바다 깊은 곳이나 얼음 구덩이에 빠진 것처럼, 두 발이 진흙 속에 묶인 듯 무거웠다.');
    await say_by_passer_by_and_wait('해설', [
      kitaru.get_colored_name(),
      '! ',
      kitaru.get_colored_name(),
      ', 또다시 속도를 잃는 건가요?!',
    ]);
    await kitaru.say_and_wait([callname, '…… 실망시켜 드려서 죄송해요.']);
    await kitaru.print_and_wait([
      '그때, 울타리에 기대어 있던 레이스 ',
      kitaru.get_uma_sex_title(),
      '가 입을 여는 것을 보았다.',
    ]);
    await kitaru.say_as_unknown_and_wait('후쿠짱……');
    await kitaru.say_as_unknown_and_wait('우리 약속하자.');
    await kitaru.say_as_unknown_and_wait('나중에 후쿠짱이 국화상에서 달리는 모습을 꼭 보고 싶어!');
    await kitaru.say_and_wait([kitaru.get_bigger_sibling_sex_title(), '?!']);
    await kitaru.say_and_wait('으으…… 약속.');
    await kitaru.say_and_wait(['맞아, 약속…… ', callname, '이랑 약속했었지!']);
    await kitaru.say_and_wait('무사히 돌아가겠다고!');
    await kitaru.say_and_wait('지금은, 신령님께 저의 질주를 바쳐야 할 때예요!');
    await say_by_passer_by_and_wait('해설', [
      '아니, 빠릅니다! 정말 빨라요! ',
      kitaru.sex,
      '가 스퍼트를 시작합니다!',
    ]);
    await kitaru.say_and_wait([callname, '이 곁에 있는 나는 대길이라구!']);
    era.drawLine({ content: '도쿄 경기장 대기실 안'});
    await kitaru.say_and_wait(['후우…… ', callname, ', 저 해냈어요!']);
    await kitaru.say_and_wait('우와! 저 아직 살아있네요! 아무튼 지금, 너무 행복해요! 완전 만족스럽다니까요!');
    await kitaru.say_and_wait('복이 가득해요!');
    era.printButton('「고생했어, 고마워!」', 1);
    await era.input();
    await kitaru.say_and_wait('에이, 그렇게 말씀 안 하셔도 돼요!');
    await kitaru.say_and_wait('전 그저 제가 할 수 있는 일을 했을 뿐인걸요!');
    await kitaru.say_and_wait('저, 그림자 속에서 빠져나왔다고요!');
    era.printButton('「그럼 다음은 국화상일까?」', 1);
    await era.input();
    await kitaru.say_and_wait('국화상을 뛸 거예요!');
    await kitaru.say_and_wait('네! 국화상이요!');
    await kitaru.say_and_wait('물론 조금 힘들 수도 있겠지만……');
    await kitaru.say_and_wait(['저와 ', callname, '이라면 분명 문제없을 거라고 믿어요!']);

    era.set('status:56:PTSD', 0);
    await era.printAndWait([kitaru.get_colored_name(), '의 PTSD가 일시적으로 사라졌다.']);

    era.set('status:56:흉', 0);
    era.set('status:56:대길', 1);
    era.set('cflag:56:컨디션', 2);
  };

  handlers[race_enum.kobe_hai] = async (kitaru, me, callname) => {
    await print_event_name('인연의 결속', kitaru);
    await say_by_passer_by_and_wait('해설', [
      kitaru.get_colored_name(),
      ', 추월할 수 있을까요?',
    ]);
    await say_by_passer_by_and_wait('해설', '빠릅니다! 정말 빨라요! 너무 빠릅니다!');
    await say_by_passer_by_and_wait('해설', '5마신! 3마신! 1마신!');
    await say_by_passer_by_and_wait('해설', '추월했습니다!');
    await say_by_passer_by_and_wait('해설', [
      '우승자는 ',
      kitaru.get_colored_name(),
      '입니다!',
    ]);
    await kitaru.print_and_wait(
      '공포도, 망설임도 없었다. 그저 평소의 훈련과 쌓아온 노력을 종반의 순간에 전부 쏟아부었을 뿐이었다.',
    );
    await kitaru.print_and_wait('무척 훌륭한 모습이었다.');
    era.drawLine({ content: '한신 경기장 대기실 안'});
    await kitaru.say_and_wait('후우~!!!');
    era.printButton('「수고했어!」', 1);
    await era.input();
    await kitaru.say_and_wait('네!');
    await kitaru.say_and_wait('이제 완전히 극복한 거겠죠?!');
    await kitaru.say_and_wait('그럼 다음은 드디어 국화상이네요!');
    if (era.get('love:56') >= 50) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 대답하기도 전에, ',
        kitaru.get_colored_name(),
        '는 이미 ',
        me.get_colored_name(),
        '의 품으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 무릎 위에 앉아, ',
        me.get_colored_name(),
        '이(가) 수건으로 ',
        kitaru.sex,
        '의 땀에 젖은 머리카락을 닦아주기를 기다렸다.',
      ]);
      await era.printAndWait([
        '마침내 품 안의 레이스 ',
        kitaru.get_uma_sex_title(),
        '의 엉덩이가 가만히 있지 못하고 꼼지락거리기 시작하자, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '의 머리를 가볍게 한 대 치며 ',
        kitaru.sex,
        '에게 진정하라는 신호를 보냈다.',
      ]);
      await kitaru.say_and_wait('아야야!');
    }
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 복슬복슬한 꼬리를 피해 서류 가방에서 ',
      kitaru.get_colored_name(),
      '를 위해 설계한 국화상 훈련 계획표를 꺼냈다.',
    ]);
    await kitaru.say_and_wait(['오오! 역시 ', callname, '. 이미 준비하고 계셨군요!']);
    era.printButton('「겁나니?」', 1);
    era.printButton('「결정적일 때 실수하면 안 돼!」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('당연하죠!');
    } else {
      await kitaru.say_and_wait('그럴 리가 없잖아요!');
    }
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '와의 약속인 참배길, 제가 ',
      kitaru.get_bigger_sibling_sex_title(),
      '의 몫까지 끝까지 달려 보일게요!',
    ]);
  };

  handlers[race_enum.kiku_sho] = async (kitaru, me, callname) => {
    await print_event_name('운명의 반환점', kitaru);
    await era.printAndWait('선두 그룹이 제4 코너에 진입하며, 레이스는 종반으로 치달았다.');
    await era.printAndWait([
      '하지만 ',
      kitaru.get_colored_name(),
      '의 모습은 여전히 무리 속에 파묻혀 보이지 않았다. ',
      me.get_colored_name(),
      '은(는) 그저 간간이 보이는 주황빛 실루엣으로 ',
      kitaru.get_colored_name(),
      '의 대략적인 위치를 짐작할 뿐이었다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 뛰어난 폭발력을 활용하는 선입이나 선행 주법은 본래 타이밍 포착이 까다로워, 승리와 패배가 한 끗 차이로 갈리곤 한다.',
    ]);
    await era.printAndWait([
      '과연 이 레이스는 ',
      kitaru.get_colored_name(),
      '에게 대흉으로 끝날 것인가?',
    ]);
    await say_by_passer_by_and_wait(
      '해설',
      '제4 코너를 지났습니다. 이제 남은 건 최종 직선뿐입니다……!',
    );
    await era.printAndWait(['길이 막힌 것인가? 하지만 결승선은 이미 코앞이었다.']);
    await era.printAndWait([
      '관찰, 조정, 결정, 그리고 행동. 지금 이 순간의 연쇄는 오직 소용돌이의 중심에 서 있는 ',
      kitaru.get_colored_name(),
      ' 본인만이 해낼 수 있는 것이었다. 관중석의 ',
      me.get_colored_name(),
      '은(는) 아무런 도움을 줄 수 없었다.',
    ]);
    await era.printAndWait(['기도하고 싶다는 생각이 문득 머릿속을 스쳤다.']);
    await era.printAndWait([
      '어쩌면 ',
      me.get_colored_name(),
      '이(가) 느끼는 이 무력감은, ',
      kitaru.get_bigger_sibling_sex_title(),
      '와 사별하던 날의 ',
      kitaru.get_colored_name(),
      '와 같을지도 몰랐다.',
    ]);
    await me.say_and_wait('아니…… 지금 트레이너로서 도와줄 수 있는 일이 하나 있어.', true);
    era.printButton('「후쿠짱!!!!!」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), '은(는) 목이 터져라 소리를 질렀다.']);
    await era.printAndWait([
      '초고속으로 질주 중인 ',
      kitaru.get_colored_name(),
      '에게 ',
      me.get_colored_name(),
      '의 외침이 닿았는지는 알 수 없었으나, 승리의 천칭은 확실하게 ',
      kitaru.sex,
      '의 쪽으로 기울기 시작했다.',
    ]);
    await era.printAndWait([
      '마치 성인이 바다를 가르듯, 혹은 아라비아의 소년이 주문으로 문을 열 듯, 주황색 번개가 말들의 무리를 찢고 나타났다.',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '——마치카네입니다! ',
      kitaru.get_colored_name(),
      '! 복은 계속해서 찾아오는 것입니까?!!',
    ]);
    await say_by_passer_by_and_wait(
      '해설',
      check_aim_race(RaceHistory.get(56).get(), race_enum.kobe_hai, 1, 1)
        ? '결승선을 통과합니다! 고베에 이어!!! 국화의 무대에도 복이 찾아왔습니다!!!'
        : '결승선 통과!',
    );
    era.drawLine({ content: '교토 경기장 국화상 종료 후'});
    await kitaru.say_and_wait([callname, '!!']);
    await kitaru.say_and_wait('저…… 저 이겼어요! 이겼다고요……!');
    await era.printAndWait([
      '트레이닝실 안에서 행복에 젖은 ',
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 품으로 뛰어들어 ',
      me.get_colored_name(),
      '와(과) 강하게 포옹했다.',
    ]);
    await era.printAndWait([
      '장거리 레이스를 마친 ',
      kitaru.get_uma_sex_title(),
      '의 뜨거운 체온과 가슴의 부드러운 촉감이 땀에 젖은 세일러복 너머로 ',
      me.get_colored_name(),
      '에게 그대로 전해졌다.',
    ]);
    if (era.get('love:56') >= 50) {
      await kitaru.say_and_wait('이건 다 운명의 사람 덕분이에요!');
      await era.printAndWait([
        '그렇게 말하며 ',
        kitaru.sex,
        '는 고개를 들어 호박색 눈동자로 ',
        me.get_colored_name(),
        '을(를) 빤히 바라보았다.',
      ]);
      await kitaru.say_and_wait('맞다!');
      await kitaru.say_and_wait('운명의 사람에게 보답을 해드려야겠네요!');
      await era.printAndWait([
        '그리고 ',
        me.get_colored_name(),
        '의 눈동자가 경악으로 커지는 찰나, ',
        kitaru.sex,
        '가 살짝 까치발을 들었고 두 사람의 입술이 하나로 겹쳐졌다.',
      ]);
      await era.printAndWait([
        '불가사의계 ',
        kitaru.get_teen_sex_title(),
        '의 청아한 체취가 공기 중에 흩어진 미세한 땀 냄새와 섞여 ',
        me.get_colored_name(),
        '의 후각을 가득 채웠다.',
      ]);
      await era.printAndWait('혀끝이 서로 맞닿았다가 다시 얽혀들었다.');
      await era.printAndWait([
        '입술이 떨어진 뒤, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_teen_sex_title(),
        '의 작은 혀가 입가에 묻은 타액을 핥아 올리는 것을 보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '가 이렇게 적극적으로 나오는 것을 처음 보았다.',
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      end_ero_and_train();
    }
    await era.printAndWait([
      '국화상에서 승리한 ',
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_teen_sex_title(),
      '는 자신의 집념을 이루어냈고, 행복을 쫓는 운명의 길 위에 커다란 발자국을 남겼다.',
    ]);
    await era.printAndWait(['하지만 ', kitaru.sex, '의 다음 발걸음은 또 어디를 향하게 될까?']);
  };
};