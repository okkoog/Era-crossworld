const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  if (love >= 75) {
    await tachyon.say_and_wait('……그래, 바로 지금이야.');
    await tachyon.say_and_wait('돌려!');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '을 믿은 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 말이 끝나자마자 즉시 회전판의 손잡이를 돌렸다.',
    ]);
    await say_by_passer_by_and_wait('점주', '특별상! 온천 여행권 당첨!');
    era.println();
    await era.printAndWait('상점가 아저씨가 힘차게 종을 흔들었다.');
    await era.printAndWait('오늘의 최고 경품이 주인을 찾았음을 선포했다.');
    era.println();
    await tachyon.say_and_wait('오호라…… 온천 여행권이라니, 꽤 괜찮아 보이는데.');
    era.println();
    await era.printAndWait('기한은…… 내년 4월까지였다.');
    await era.printAndWait('이거라면 URA 파이널스가 끝난 뒤가 딱 적당한 시기였다.');
    era.printButton('「타키온, 같이 갈래?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '그거야 당연하지. 아니, 애초에 나 말고 또 누가 자네와 함께 가겠나?',
    );
    era.println();
    await era.printAndWait('참으로 가차 없는 대답이었다.');
    era.println();
    await tachyon.say_and_wait(
      '농담일세. 이 온천권은 지난 3년 동안 자네가 보여준 노력에 대한 보답이라고 생각해주게나…… 모든 곤란과 부상을 이겨낸 끝에 맞이하는…… 우리의 해피 엔딩이지.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '의 귓가에 밀착해 속삭였다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 입에서 나왔다고는 믿기지 않는 다정한 말에 ',
      me.get_colored_name(),
      '은(는) 무심코 놀라 고개를 들려 했지만……',
    ]);
    era.println();
    await tachyon.say_and_wait('움직이지 말게.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 여전히 ',
      me.get_colored_name(),
      '의 곁에 딱 붙은 채로, 두 사람은 추첨함 앞에서 다정하게 이야기를 나누었다.',
    ]);
    await era.printAndWait('이상하게도…… 왜 추첨함 앞을 떠나려 하지 않는 걸까……?');
    era.println();
    await tachyon.say_and_wait(['자, 이제 갈까, ', callname, '.']);
    era.println();
    await era.printAndWait('어라.');
    await era.printAndWait([
      '줄곧 곁에 머물던 온기가 갑자기 사라지자, ',
      me.get_colored_name(),
      '은(는) 서둘러 ',
      tachyon.get_colored_name(),
      '의 뒤를 따라 상점가를 빠져나갔다.',
    ]);
    await era.printAndWait([
      '상점가를 벗어난 ',
      tachyon.get_colored_name(),
      '이 왼쪽 눈에서 무언가를 빼내는 모습이 보였다.',
    ]);
    era.println();
    await tachyon.say_and_wait('후우, 이제 좀 살 것 같군.');
    era.println();
    await era.printAndWait([
      '…………? ',
      tachyon.get_colored_name(),
      '의 눈이……?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 자세히 ',
      tachyon.get_colored_name(),
      '의 얼굴을 살피자, 원래 ',
      tachyon.sex,
      '의 붉은 그라데이션 안구 중 한쪽이 어딘가 미묘하게 옅어 보인다는 사실을 깨달았다.',
    ]);
    era.println();
    await me.say_and_wait('……컬러 렌즈?');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 그런 것을 착용할 사람이라고는 생각하기 어려웠다.',
    ]);
    era.println();
    await tachyon.say_and_wait('후후…… 이건 말이지, 샤커 군과 내가 공동 개발한 물건이라네.');
    await tachyon.say_and_wait(
      '우선 내 약물 처리를 통해 이 렌즈에 비생물 투시 능력을 부여했지.',
    );
    await tachyon.say_and_wait(
      '그리고 샤커 군이 관측된 정보를 바탕으로 운동 궤적을 분석하는 기능을 넣었어. 본래는 레이스 중 주자들의 움직임을 분석하기 위한 용도였지만.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 쉴 새 없이 설명을 늘어놓는 통에 ',
      me.get_colored_name(),
      '은(는) 머리가 어질어질했다.',
    ]);
    await era.printAndWait('하지만……');

    era.printButton('「설마…… 이게 그 투시 안경 같은 거야?」', 1);
    await era.input();
    await tachyon.say_and_wait('뭐, 비슷하네…… 다만 약간의 결함이 있어서 말이야.');
    await tachyon.say_and_wait(
      '예를 들면 이걸 착용하고 있을 때는 왜곡된 시야에 익숙해지기 전까지는 한 발짝도 걷기 힘들다거나,',
    );
    await tachyon.say_and_wait(
      '멋모르고 남용했다간 과도한 정보량 때문에 뇌가 혼수 상태에 빠질 수도 있지.',
    );
    await tachyon.say_and_wait(
      '그래서 샤커 군과 나는 이 물건을 봉인해두기로 했었네만, 후후, 설마 여기서 도움이 될 줄이야……',
    );
    era.println();
    await era.printAndWait('도움이 됐다니……?');
    await era.printAndWait('투시와 궤적 분석………');
    await era.printAndWait('움직이지 못하니까 경품 추첨함 앞에 서 있었던 것……');
    await me.say_and_wait('아!');
    era.printButton('「방금 그 뽑기!」', 1);
    era.printButton('「타키온, 설마 네가……」', 2);
    await era.input();
    await tachyon.say_and_wait('쉿.');
    era.println();
    await era.printAndWait([tachyon.sex, '는 입술 위에 손가락을 올리며 조용히 하라는 신호를 보냈다.']);
    era.println();
    await tachyon.say_and_wait('내가 말하지 않았나? 이건 자네에게 주는 선물이라고.');
    era.println();
    await tachyon.say_and_wait('신령님도 아니고, 정체 모를 운도 아니야.');
    await tachyon.say_and_wait([
      '나, ',
      tachyon.get_colored_name(),
      '이 내 사랑하는 이에게 보내는 새해 선물이라네.',
    ]);
    await tachyon.say_and_wait([
      '새해 복 많이 받게나, ',
      me.get_colored_actual_name(),
      ' 군.',
    ]);
    era.println();
    await era.printAndWait(
      '이전까지 새해라고 하면 머릿속에 수많은 잊지 못할 추억들이 떠오르곤 했다.',
    );
    await era.printAndWait(
      '가족이 둘러앉은 코타츠, 단란한 모임, 명절 음식 혹은 TV에서 틀어주는 지루한 신춘 프로그램 같은 것들 말이다.',
    );
    await era.printAndWait(
      '하지만 오늘부터는 새해라는 단어를 들으면 가장 먼저 떠오르는 이미지는 단 하나뿐이게 될 것이다.',
    );
    await era.printAndWait([
      '점점 밝아지는 가로등 아래에서, 마치 도둑 고양이처럼 계획이 성공했다는 미소를 짓고 있는 ',
      tachyon.sex,
      '의 모습.',
    ]);
    era.println();
    await era.printAndWait('그리고 그 입맞춤의 맛.');
    await era.printAndWait([
      '그 입맞춤은 감미로운 맛이었으며, ',
      tachyon.get_colored_name(),
      '이 타주는 홍차보다도 달콤했다.',
    ]);
    begin_and_init_ero(0, 32);
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();
  } else {
    await say_by_passer_by_and_wait('점주', '특별상! 온천 여행권 당첨!');
    era.println();
    await era.printAndWait('상점가 아저씨가 힘차게 종을 흔들었다.');
    await era.printAndWait('오늘의 최고 경품이 주인을 찾았음을 선포했다.');
    era.println();
    await era.printAndWait('특별상에 당첨되었다!');
    await era.printAndWait('무려 2인용 온천 여행권이다.');
    era.println();
    await tachyon.say_and_wait('오호라…… 온천 여행권이라니, 꽤 괜찮아 보이는데.');
    era.println();
    await era.printAndWait('기한은…… 내년 4월까지였다.');
    await era.printAndWait('이거라면 URA 파이널스가 끝난 뒤가 딱 적당한 시기였다.');
    era.println();
    if (love >= 50) {
      era.printButton('「타키온, 같이 가자!」', 1);
      await era.input();
      await tachyon.say_and_wait('흐음…… 같이 가겠다고?');
      await tachyon.say_and_wait([
        callname,
        ', 자네는 보통 「함께 온천 여행을 가는」 사람들이 어떤 관계인지 이해하고 나에게 권유하는 건가?',
      ]);
      era.println();
      await era.printAndWait('보통 함께 온천 여행을 가는 사람들은……');
      era.printButton('부부', 1);
      era.printButton('연인', 2);
      era.printButton(
        `「……보통 ${tachyon.get_uma_sex_title()}와 트레이너라면 원래 자주 가는 거 아니야?」`,
        3,
      );
      switch (await era.input()) {
        case 1:
          await era.printAndWait('보통이라면…… 신혼부부겠지.');
          await era.printAndWait('신혼여행으로 온천에 가는 경우가 꽤 많지 않은가.');
          await me.say_and_wait('……나와 타키온이, 신혼부부……?', true);
          break;
        case 2:
          await era.printAndWait('아마도…… 연인이겠지.');
          await era.printAndWait(
            '그 정도로 친밀한 관계가 아니라면, 보통 둘이서만 온천 여행을 가지는 않을 테니까.',
          );
          await me.say_and_wait('나와 타키온이…… 연인인가?', true);
          break;
        case 3:
          await era.printAndWait([
            '……아니, 보통 ',
            tachyon.get_uma_sex_title(),
            '와 트레이너는 원래 자주 가는 거 아닌가?',
          ]);
          await era.printAndWait([
            '해마다 4월이면 많은 선배들이 담당 ',
            tachyon.get_uma_sex_title(),
            '와 함께 떠나곤 했다…… 게다가 다들 상점가에서 당첨된 것 같던데, 정말 신기한 일이다.',
          ]);
          await era.printAndWait(
            '하지만…… 역시 단둘이서 온천 여행을 가는 건, 조금 이상하게 보일지도 모르나……?',
          );
          era.println();
          await tachyon.say_and_wait([
            '그렇다면 자네는 그때 우리가 어떤 관계가 되어 있길 바라나? ',
            callname,
            '…… 내년 4월이라, 후후, 기대되는군.',
          ]);
          era.println();
          await me.say_and_wait('내년 4월, 나와 타키온의 관계라……', true);
      }
    } else if (relation >= 225) {
      await tachyon.say_and_wait(
        '음…… 같이 가겠나? 실험 장소로서는 확실히 나쁘지 않은 곳이군.',
      );
      await tachyon.say_and_wait(
        '온천 여관이라는 건 그거지? 어떤 돌발 사고가 일어나서 설령 사람이 죽는다 해도 전혀 이상하지 않은 장소 말일세.',
      );
      await tachyon.say_and_wait('그런 곳이라면 내가 무해한 실험을 조금 한다 해도 큰 문제는 없겠지……');
      era.printButton('「그게 아니야」', 1);
      await era.input();
      await era.printAndWait('실험이나 연구를 위한 장소로 가려는 게 아니었다.');
      await era.printAndWait('3년 동안의 이인삼각이 끝난 뒤에 갖는 두 사람만의 휴식이었다.');
      era.printButton('「훈련도 아니고, 실험도 아닌, 그저 순수한 휴식……은 안 될까?」', 1);
      await era.input();
      await tachyon.say_and_wait('……내년 4월인가.');
      await tachyon.say_and_wait('후후, 그렇다면 모르모트 군에 대한 포상으로 해두지.');
      await tachyon.say_and_wait(
        '내년 4월, 우리의 꿈이 일단락되었을 때…… 그때까지 자네가 여전히 내 곁에 남아 있다면, 함께 가도록 하세.',
      );
      era.printButton('「응!」', 1);
      await era.input();
      await tachyon.say_and_wait('하지만, 포상을 약속했으니……');
      await tachyon.say_and_wait('남은 1년 동안 자네도 제대로 힘내야 할 거야.');
      await tachyon.say_and_wait([
        '고분고분 실험을 받고, 매일 밥을 해주고, 또 ',
        sys_get_colored_callname(32, 25),
        '이 도망치려 하면 ',
        tachyon.sex,
        '를 붙잡아서 내 실험실로 데려오는 것까지……',
      ]);
      era.println();
      await era.printAndWait('잠깐 잠깐! 마지막 건 분명히 무리라고!');
      era.println();
      await era.printAndWait([
        '농담을 주고받으며, ',
        me.get_couple_title(),
        '은 트레센 학원으로 돌아갔다.',
      ]);
      await era.printAndWait('내년 4월이라…… 정말 기대되는군.');
    } else {
      await era.printAndWait([
        '하지만…… ',
        tachyon.get_colored_name(),
        '이 나와 같이 가주려 할까?',
      ]);
      era.println();
      await tachyon.say_and_wait('URA 파이널스가 끝난 뒤의 온천 여행이라…… 괜찮은 제안이군.');
      era.println();
      await era.printAndWait('오? 의외로 흔쾌히 수락했다.');
      await era.printAndWait('번거롭다며 거절할 줄 알았는데 말이다.');
      era.println();
      await tachyon.say_and_wait(
        '온천 여관이라는 건 그거지? 어떤 돌발 사고가 일어나서 설령 사람이 죽는다 해도 전혀 이상하지 않은 장소 말일세. 그런 곳이라면 내가 무해한 실험을 조금 한다 해도 큰 문제는 없겠지……',
      );
      era.println();
      await era.printAndWait('…………그냥, 지금 당장 온천권을 돌려주고 올까?');
    }
  }
};