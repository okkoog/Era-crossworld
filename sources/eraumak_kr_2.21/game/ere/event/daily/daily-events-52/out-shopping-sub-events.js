const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,number,number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[2] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    random_range,
  ) => {
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '노래 연습이 필요할 때는 자주 다 함께 여기로 오곤 해!',
          callname,
          '가 듣고 싶은 곡은 뭐든지 부를 수 있다구!',
        ]);
        await era.printAndWait([
          '먼저 마이크를 집어 들며, ',
          urara.get_colored_name(),
          '는 그동안의 연습 성과를 ',
          me.get_colored_name(),
          '에게 보여주고 싶은 듯 웃으며 ',
          me.get_colored_name(),
          '에게 물었다.',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          '조명을 켜니까 마치 라이브 무대에 선 것 같아!',
          callname,
          '도 같이 노래하자!',
        ]);
        await era.printAndWait([
          '장난기를 담아 천장의 미러볼 조명을 켜고, ',
          urara.get_colored_name(),
          '는 즐거운 듯 ',
          me.get_colored_name(),
          '을(를) 이끌며 함께 마이크를 잡았다.',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          '오늘은 뭘 부를까? 헤헤～ 사실 나 ',
          sys_get_colored_callname(52, 15),
          '한테 새로운 노래를 배웠어!',
        ]);
        await era.printAndWait([
          '비록 ',
          get_chara_talk(15).get_colored_name(),
          '에게 배웠다는 새 노래가 조금 불길하게 들리긴 했으나, ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '가 노래를 시작할 순간을 기대했다.',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '……에, 에? ',
          callname,
          ', 옆 방에서는 대체 무슨 일이……?',
        ]);
        await era.printAndWait([
          '옆방에서 끊임없이 흘러나오는 물소리와 신음 소리에, ',
          me.get_colored_name(),
          '과(와) ',
          urara.get_colored_name(),
          '는 한동안 무엇을 해야 할지 몰라 망설였다……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '어때 ',
          callname,
          '? 우라라한테 하, 하트를 저격당한 기분이야?',
        ]);
        await era.printAndWait([
          '앳된 목소리로 서툴게 아이돌풍 연애 노래를 한 곡 마친 ',
          urara.get_colored_name(),
          '는 수줍게 ',
          me.get_colored_name(),
          '을(를) 향해 하트 포즈를 취해 보였다.',
        ]);
        await era.printAndWait([
          '조금 무리하는 느낌도 들었지만, ',
          urara.sex,
          '는 역시나 귀여웠다……',
        ]);
        break;
      case 5:
        await urara.say_and_wait([
          callname,
          ', 바닐라 파르페야! 입 벌려봐! 아──!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 본능적으로 ',
          urara.get_colored_name(),
          '가 떠먹여 주는 아이스크림을 받아먹으며, 왜 노래방에서 이런 행동을 하는지 의아해했다.',
        ]);
        await era.printAndWait([
          '하지만 등을 돌린 ',
          me.get_colored_name(),
          '은(는), 담당이 몰래 얼굴을 붉히며 혀를 내밀어 ',
          me.get_colored_name(),
          '이(가) 물었던 숟가락을 살짝 핥으며 몽롱한 눈빛을 짓는 모습을 보지 못했다……',
        ]);
    }
  };

  handlers[3] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    random_range,
  ) => {
    if (!edu_marks.cor_game && urara.sex_code === 0 && Math.random() < 0.3) {
      edu_marks.cor_game = 1;
      await print_event_name('구석진 곳의 놀이?', urara);
      await era.printAndWait('과연 이 영화는 인류에게 있어 아직 시기상조인 듯했다.');
      await era.printAndWait([
        '품 안에서 곤히 잠든 ',
        urara.get_colored_name(),
        '를 안은 채, ',
        me.get_colored_name(),
        '은(는) 위기의 순간에도 뜬구름 잡는 소리만 늘어놓는 배우들을 보며 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '자극적인 공포 영화라고는 했으나, 상영 시작과 동시에 ',
        me.get_colored_name(),
        '의 품으로 파고든 ',
        urara.get_colored_name(),
        '는 이내 종잡을 수 없는 줄거리 탓인지 잠이 들어버렸다.',
      ]);
      await era.printAndWait([
        '지금 스크린 위에서 가면을 쓴 채 괴상한 행동을 하는 ',
        urara.get_uma_sex_title(),
        '닮은 괴생명체는, 아무리 봐도 ',
        get_chara_talk(7).get_colored_name(),
        '과 닮아 보였다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 기괴한 비명 소리에 잠을 설쳤는지, 귀를 접고 ',
        me.get_colored_name(),
        '의 몸에 비벼대며 좀 더 편안하게 잘 수 있는 자세를 찾았다.',
      ]);
      await era.printAndWait([
        '맛있는 것이라도 꿈꾸는 것인지, 잠결에 뒤척이던 작은 ',
        urara.get_uma_sex_title(),
        '는 입맞춤을 하듯 ',
        me.get_colored_name(),
        '의 목덜미 안쪽을 빨고 깨물기를 반복했다.',
      ]);
      await era.printAndWait([
        '남들의 눈에는 어린 소녀에게 갈구당하는 금단적인 상황으로 보이겠지만, ',
        me.get_colored_name(),
        '은(는) 알고 있다. ',
        urara.get_colored_name(),
        '가 아마도 당근과 관련된 꿈을 꾸고 있을 것임을.',
      ]);
      await era.printAndWait([
        '하지만 반대로 생각하면, ',
        me.get_colored_name(),
        '의 인내심 또한 막대한 시험을 치르고 있는 셈이었다.',
      ]);
      await era.printAndWait([
        '꼬리를 슬며시 ',
        me.get_colored_name(),
        '의 허벅지에 감으며, ',
        urara.get_teen_sex_title(),
        '의 건강하고 육감적인 몸은 여전히 ',
        me.get_colored_name(),
        '의 민감한 구석을 이리저리 문질러댔다.',
      ]);
      await era.printAndWait([
        '키스 마크 같은 흔적들이 ',
        urara.get_teen_sex_title(),
        '의 끈적한 흡입음과 함께 계속해서 늘어났으나, 그 유혹적인 벚꽃색 덩어리는 멈출 기색이 없었다.',
      ]);
      await era.printAndWait([
        '만약 처음 만났을 때 같은 침대에서 잠든 것이 정신이 온전치 못했던 ',
        me.get_colored_name(),
        '의 잘못이었다면, ',
        urara.get_colored_name(),
        '는 그저 무고한 작은 ',
        urara.get_uma_sex_title(),
        '일 뿐이었겠으나……',
      ]);
      await era.printAndWait(
        '이번만큼은 무고한 서큐버스 같은 담당이 잠결에 호감을 가진 트레이너를 무의식적으로 유혹하는 꼴이었다.',
      );
      await era.printAndWait([
        '적어도 지금의 ',
        me.get_colored_name(),
        '은(는) 천천히 들어 올린 자신의 손에 대해 그렇게 적절한 변명을 찾고 있었다.',
      ]);

      await in_urara.say_as_unknown_and_wait('저, 저기 말이죠, 지금이라도 멈추면 늦지 않──');
      era.printButton('이 발칙한 꼬마를 혼내준다……', 1);
      era.printButton('관두자, 참아야 해!', 2);
      const ret = await era.input();
      era.set('status:52:숙면', 1);
      begin_and_init_ero(0, 52);
      if (ret === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '가 잠결에 몸을 뒤척이는 틈을 타, ',
          me.get_colored_name(),
          '은(는) 어두운 영화관 안에서 담당의 옷 밑으로 손을 집어넣었다.',
        ]);
        await era.printAndWait(
          '애초에 이 영화를 보는 사람이 거의 없기도 했거니와, 텅 빈 맨 뒷줄은 원래 최고의 은신처였다.',
        );
        await era.printAndWait([
          '한 손은 옷 위로 조심스레 ',
          urara.get_teen_sex_title(),
          '의 풋풋한 봉우리를 희롱하고, 다른 한 손은 ',
          urara.get_teen_sex_title(),
          '의 치마 속으로 뻗어 ',
          urara.get_uma_sex_title(),
          '의 민감한 허벅지 안쪽을 쓰다듬었다.',
        ]);
        await era.printAndWait([
          '다소 가빠진 숨소리에 ',
          me.get_colored_name(),
          '의 손가락이 미세하게 멈칫했으나, 무언가 눈치챘음에도 작은 ',
          urara.get_uma_sex_title(),
          '는 여전히 깨어나지 않았다.',
        ]);
        await era.printAndWait([
          '손가락이 점점 더 깊이 파고들며, ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '의 속바지를 들추고 마지막 천 한 장 너머로 ',
          urara.get_teen_sex_title(),
          '의 비밀스러운 곳을 어루만졌다.',
        ]);
        await era.printAndWait([
          '스크린의 소음이 ',
          urara.get_teen_sex_title(),
          '가 꿈결에 내뱉는 신음을 집어삼켰고, ',
          me.get_colored_name(),
          '은(는) 천연의 엄폐 아래서 ',
          urara.sex,
          '의 연약하고 민감한 세 곳을 적절하게 괴롭히기 시작했다.',
        ]);
        await era.printAndWait([
          '동시에, 욕심 많은 담당이 ',
          me.get_colored_name(),
          '의 몸에 남긴 흔적들을 떠올리며 보복심이 고조된 ',
          me.get_colored_name(),
          '또한 작은 ',
          urara.get_uma_sex_title(),
          '의 목덜미 위 연약한 피부를 강하게 머금었다.',
        ]);
        await era.printAndWait([
          urara.get_teen_sex_title(),
          '의 몸이 갑자기 떨려옴과 동시에, ',
          me.get_colored_name(),
          '의 속바지 안으로 들어간 손끝에 점차 축축한 감촉이 전해졌다. 설마……?',
        ]);
        await era.printAndWait([
          '깜짝 놀란 ',
          me.get_colored_name(),
          '이(가) 급히 손을 거두자, ',
          urara.get_colored_name(),
          '도 마침내 몸의 재촉에 이기지 못한 듯 비몽사몽으로 눈을 떴다.',
        ]);
        await urara.say_and_wait([callname, '~ 영화가…… 으으으으응──?!']);
        await era.printAndWait([
          '갓 잠에서 깬 혼란 속에서, ',
          urara.get_colored_name(),
          '의 어린 몸은 ',
          me.get_colored_name(),
          '이(가) 쌓아 올린 자극 속에서 떨며 무너져 내렸다──',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 가랑이 사이에서 들려오는 졸졸거리는 물소리 속에서, ',
          me.get_colored_name(),
          '은(는) 그제야 영화가 너무 지루한 나머지 ',
          urara.sex,
          '가 자기 전에 커다란 음료수를 금방 비워버렸던 사실을 기억해 냈다.',
        ]);
        await era.printAndWait([
          '미안한 마음을 담아, ',
          me.get_colored_name(),
          '은(는) 「실수로」 실례를 해버려 훌쩍거리는 ',
          urara.get_colored_name(),
          '를 달래며 ',
          urara.sex,
          '를 화장실로 데려갔다.',
        ]);
        await era.printAndWait([
          '그리고 예정보다 일찍 작은 ',
          urara.get_uma_sex_title(),
          '를 데리고 돌아가는 길에, ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '의 은밀한 곳에 닿았던 손에 여전히 축축하고 끈적한 감촉이 남아있는 듯한 기분을 느꼈다……',
        ]);
        set_palam_to_max(52, part_enum.clitoris);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.clitoris),
          false,
        );
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.breast),
          false,
        );
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) ',
          urara.get_colored_name(),
          '를 깨우려던 찰나, 작은 ',
          urara.get_uma_sex_title(),
          '는 다시 몸을 뒤척이다 몸 앞에 멈춰 있던 ',
          me.get_colored_name(),
          '의 손가락을 그만 물어버리고 말았다.',
        ]);
        await era.printAndWait([
          '따스하고 부드러운 혀가 ',
          me.get_colored_name(),
          '의 손끝을 휘감더니, ',
          me.get_colored_name(),
          '의 손가락을 조금씩 입 안으로 끌어당겼다.',
        ]);
        await era.printAndWait([
          urara.get_teen_sex_title(),
          '는 작은 입을 벌리려 애썼고, 손가락은 혀끝의 애무를 따라 ',
          me.get_colored_name(),
          '의 통제를 벗어나 온기 있고 부드러운 깊숙한 곳으로 스스로 파고들었다.',
        ]);
        await era.printAndWait([
          '끊임없이 몽롱한 흡입음을 내는 작은 담당을 바라보며, ',
          me.get_colored_name(),
          '은(는) 숨이 막히는 기분을 느끼면서도 감히 시선을 돌리지 못했다.',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          '는 순결하면서도 아주 음란한 아이구나」.',
        ]);
        await era.printAndWait([
          urara.sex,
          '를 처음 만났을 때부터 ',
          me.get_colored_name(),
          '은(는) 그런 상스러운 예감을 품고 있었으나, ',
          urara.get_colored_name(),
          '가 정말로 본성을 드러내자 ',
          me.get_colored_name(),
          '은(는) 당황하고 말았다.',
        ]);
        await era.printAndWait([
          '음미가 끝날 무렵, 타액의 낙하와 함께 손가락이 해방되자 작은 ',
          urara.get_uma_sex_title(),
          '는 ',
          me.get_colored_name(),
          '의 마디 위에 작은 이빨 자국을 살짝 남겼다.',
        ]);
        await era.printAndWait([
          '그 맛을 되새기듯 입술을 달싹이더니, ',
          urara.get_colored_name(),
          '는 여전히 꿈결 같은 미소를 띤 채 자세를 바꿔 다시 ',
          me.get_colored_name(),
          '의 옷깃을 물기 시작했다.',
        ]);
        await era.printAndWait([
          '충격을 받은 ',
          me.get_colored_name(),
          '은(는) 그대로 멍하니 자리에 앉아, ',
          urara.get_colored_name(),
          '가 ',
          urara.sex,
          '의 흔적을 꿈속에서 계속 덧칠하도록 내버려 두었다.',
        ]);
        await era.printAndWait([
          '영화가 거의 끝나갈 무렵에야 ',
          me.get_colored_name(),
          '은(는) 품 안에서 들려오는 가느다란 부름에 제정신을 차릴 수 있었다.',
        ]);
        await urara.say_and_wait([callname, '…… 화장실 가고 싶어……']);
        await era.printAndWait([
          '정신을 차리자 ',
          me.get_colored_name(),
          '또한 ',
          urara.get_colored_name(),
          '가 잠들기 전 커다란 음료수를 마셨던 사실이 떠올랐다.',
        ]);
        await era.printAndWait([
          '그리하여 도망이라도 치는 것처럼, 당신은 여전히 눈을 비비는 ',
          urara.get_colored_name(),
          '를 데리고 황급히 화장실로 달아났다……',
        ]);
        set_palam_to_max(52, part_enum.mouth);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(52, part_enum.mouth),
          false,
        );
      }
      era.println();
      era.set('status:52:숙면', 0);
      end_ero_and_train();
      await era.printAndWait([
        '당연하게도, ',
        urara.get_colored_name(),
        '가 남긴 이빨 자국을 가리는 것을 깜빡해 들켜버린 ',
        me.get_colored_name(),
        '은(는) 타즈나 씨에게 호된 설교를 들어야만 했다.',
      ]);
      await era.printAndWait('물론 그런 것들은 영화 관람 중에 있었던 일들에 비하면 그리 중요하지 않았다.');
      era.drawLine();
      await in_urara.say_as_unknown_and_wait('……');
      await in_urara.say_as_unknown_and_wait(
        '과연 어떤 작품들은, 인류에게 있어 아직 시기상조인 것 같군요.',
      );
    } else {
      switch (get_random_value(0, random_range)) {
        case 0:
          await urara.say_and_wait(
            '팝콘도 맛있고 음료수도 맛있어! 그치만 역시 영화가 더 중요해!',
          );
          await urara.say_and_wait('이번에는 영화에 집중해서 보고 싶어!');
          await era.printAndWait([
            '하지만 ',
            urara.get_colored_name(),
            '가 그렇게 말해도, ',
            urara.sex,
            '가 여전히 먹고 싶어 한다는 것을 눈치챈 ',
            me.get_colored_name(),
            '은(는) 변함없이 팝콘과 음료수를 샀다.',
          ]);
          break;
        case 1:
          await urara.say_and_wait([
            '괜찮아 ',
            callname,
            '! 재미있기만 하다면 우라라는 졸지 않을 거야…… 아마도!',
          ]);
          await era.printAndWait([
            '의외로 진지한 소재의 영화를 고른 뒤, ',
            urara.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '에게 자신 있게 선언했다.',
          ]);
          await era.printAndWait([
            '하지만 정말 괜찮을까? ',
            urara.get_colored_name(),
            '의 웃는 얼굴을 보며 ',
            me.get_colored_name(),
            '은(는) 여전히 조금 걱정이 앞섰다.',
          ]);
          break;
        case 2:
          await urara.say_and_wait([
            '《환상의 ',
            urara.get_uma_sex_title(),
            '》가 다시 상영해! 볼 때마다 주인공 모습이 참 친근하게 느껴져! 근데 왜 그럴까?',
          ]);
          await era.printAndWait([
            '상영관 중 한 곳을 지나치며 벽에 붙은 정보를 보던 ',
            urara.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '에게 그렇게 말했다.',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '는 언제나 예리했기에, 어쩌면 ',
            urara.sex,
            '가 정말로 이 고전 영화에서 중요한 무언가를 발견했을지도 모를 일이었다.',
          ]);
          break;
        case 3:
          await urara.say_and_wait(
            '이 영화에 무서운 장면이 있다고 들었지만 우라라는 용감하다구!',
          );
          await urara.say_and_wait([
            '그러니까 만약 ',
            callname,
            '가 겁먹는다면 우라라가 달래줄 수 있어!',
          ]);
          await era.printAndWait([
            '어둠 속에서 살며시 팔걸이를 걷어 올리고, ',
            urara.get_colored_name(),
            '는 피부 접촉을 통해 빨라진 심박수와 올라간 체온을 ',
            me.get_colored_name(),
            '에게 전달했다.',
          ]);
          break;
        case 4:
          await urara.say_and_wait(
            '헤헤～ 아직 잘 모르는 부분도 있지만, 남주인공이랑 여주인공 사이가 참 좋네!',
          );
          await urara.say_and_wait([
            '그치만 ',
            callname,
            '랑 우라라도 이만큼이나 사이좋지? 그건 우라라도 잘 알고 있어!',
          ]);
          await era.printAndWait([
            '영화관 좌석 팔걸이 위에서, ',
            urara.get_colored_name(),
            '는 조금 성숙한 미소를 띠며 ',
            me.get_colored_name(),
            '의 손을 꽉 쥐었다.',
          ]);
          break;
        case 5:
          await urara.say_and_wait([
            '언젠가 우라라의 이야기도 영화가 된다면…… 우라라는 주인공이 꼭 ',
            callname,
            '를 모델로 했으면 좋겠어!',
          ]);
          await urara.say_and_wait(
            '왜냐면, 나는 『우라라』가 영원히 오직 『트레이너』만의 담당이었으면 좋겠으니까!',
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 어깨에 안심하고 기댄 채, ',
            urara.get_teen_sex_title(),
            '의 벚꽃빛 눈동자 속의 빛이 스크린의 변화를 따라 부드럽게 반짝였다.',
          ]);
      }
    }
  };
};