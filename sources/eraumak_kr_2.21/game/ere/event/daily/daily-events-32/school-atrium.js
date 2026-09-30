const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = 0;
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);

  if (edu_marks.plan_b && era.get('cflag:32:육성턴수합산') <= 47 + 44) {
    buffer.push(
      () =>
        era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 데리고 고목나무 구멍 앞으로 왔다. ',
          tachyon.sex,
          '는 자진해서 고목나무 구멍 가에 엎드렸다.',
        ]),
      async () => {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 고목나무 구멍 가에 기대어 안을 향해 무언가 외치고 싶어 하는 듯했으나, 한참을 망설이다 결국 포기했다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 모습을 보며 ',
          me.get_colored_name(),
          '은(는) 왠지 모를 슬픔과 약간의 안도감을 느꼈다.',
        ]);
      },
    );
  } else {
    buffer.push(async () => {
      await tachyon.say_and_wait('고민을 나무 구멍에 대고 외치라고? 그런다고 무엇이 변하겠나.');
      await tachyon.say_and_wait('……무료하군. 불평을 늘어놓기보다는 현상을 바꾸려 노력하는 편이 낫네.');
      await tachyon.say_and_wait(
        '『소리치고 나면 마음속 응어리가 풀려 훨씬 편해진다』고? 내 곁에 있는데 자네가 스트레스받을 일이 대체 어디 있다고 그러는 건가? 잠깐, 그 쓴웃음은 무슨 의미지?',
      );
    });

    !edu_marks.evil &&
      buffer.push(async () => {
        edu_marks.evil = 1;
        await me.say_and_wait('타키온———?');
        era.println();
        await era.printAndWait([
          '오늘따라 웬일인지 아침부터 ',
          tachyon.get_colored_name(),
          '의 모습이 보이지 않았다.',
        ]);
        await era.printAndWait([
          '언제나 연구에만 몰두하던 ',
          tachyon.sex,
          '가 오늘은 대체 어디로 사라진 것일까.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 교내를 이리저리 찾아다니다, 결국 지나가던 학생으로부터 ',
          tachyon.sex,
          '가 고목나무 구멍 근처에 있다는 제보를 들었다.',
        ]);
        await era.printAndWait([
          '고목나무 구멍이라니…… ',
          tachyon.sex,
          '에게도 어딘가 털어놓고 싶은 고민이 있는 걸까?',
        ]);
        await era.printAndWait('트레이너로서 담당의 기분 변화를 알아채지 못하다니 실책이었다.');
        era.drawLine();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 안뜰에 도착했다. 수업 시간이라 그런지 사람은 거의 없었고, 아무도 없는 틈을 타 감정을 분출하러 온 소수의 ',
          tachyon.get_uma_sex_title(),
          '들만이 있을 뿐이었다.',
        ]);
        await era.printAndWait([
          '사람의 발길이 뜸한 덕분에, ',
          me.get_colored_name(),
          '은(는) 「그것」을 직접 목격하게 되었다.',
        ]);
        await era.printAndWait([
          tachyon.get_uma_sex_title(),
          '들에게 접근하는, ',
          tachyon.sex,
          '들의 나약한 내면의 틈새를 파고드는 검은 그림자를.',
        ]);
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '으아아아앙! 난 너무 약해…… 왜, 왜 아무리 해도 이길 수 없는 거냐고……!',
        );
        await tachyon.say_as_unknown_and_wait('……힘을 얻고 싶은가?');
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '……힘?',
        );
        await tachyon.say_as_unknown_and_wait(
          '그 누구보다 강해질 수 있는, 모든 이를 압도할 수 있는 힘이라네……',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}A`,
          '……정, 정말이야? 대가는 뭔데?',
        );
        await tachyon.say_as_unknown_and_wait(
          '후후후…… 알고 싶다면 구 이과 실험실로 오게나……',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}B`,
          '어째서…… 도저히 용기를 내서 고백할 수가 없어…… 그 둔탱이…… 왜 이 정도까지 해줬는데도 눈치를 못 채는 거야……!',
        );
        await tachyon.say_as_unknown_and_wait(
          '자신의 진심을 솔직하게 전하고 싶은가? 굳이 입 밖으로 내뱉지 않아도 그가 자네의 마음을 알게 하고 싶은가?',
        );
        await say_by_passer_by_and_wait(
          `${tachyon.get_uma_sex_title()}B`,
          '다, 당신은……!',
        );
        await tachyon.say_as_unknown_and_wait(
          '구 이과 실험실로 오게. 그곳에 자네가 원하는 모든 것이 있을 테니……',
        );
        await me.say_and_wait('……저 녀석 대체 뭐 하는 거야', true);
        await era.printAndWait([
          '고목나무 구멍 근처에서 마치 사람의 마음을 유혹하는 악마처럼 중얼거리고 있는 것은 의심할 여지 없이 ',
          me.get_colored_name(),
          '의 담당 ',
          tachyon.get_uma_sex_title(),
          '인 ',
          tachyon.get_colored_name(),
          '이었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 고민 때문에 고목나무 구멍 앞에서 한탄하던 사람들 앞에 나타나, 타락을 유도하는 감언이설을 내뱉고 있었다. 마치 신화 속의 악마처럼.',
        ]);
        await era.printAndWait([
          '이때 ',
          tachyon.sex,
          '도 ',
          me.get_colored_name(),
          '을(를) 알아차렸다.',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', 마침 잘 왔네. 손님을 맞이할 준비를 하러 돌아가야겠어.',
        ]);
        await me.say_and_wait('손님?');
        await tachyon.say_and_wait([
          '물론 고민에 빠진 ',
          tachyon.get_uma_sex_title(),
          '들 말일세.',
        ]);
        await tachyon.say_and_wait(
          '아차, 내가 예전엔 정말 결례를 범했군. 고목나무 구멍 같은 건 존재할 가치가 없는 장소라고 생각했었는데 말이야.',
        );
        await tachyon.say_and_wait([
          '지금 다시 생각해보니 이곳은 나를 위해 맞춤 제작된 듯 하네. 마음의 의지가 약한 ',
          tachyon.get_uma_sex_title(),
          '들을 능동적으로 선별해주는 최적의 장소가 아닌가.',
        ]);
        await era.printAndWait('의지가 굳건하지 못하기에 감정을 분출하기 위한 외부의 인도에 의존한다.');
        await era.printAndWait('의지가 굳건하지 못하기에 목적을 달성하기 위해서라면 악마: 타키온에게 영혼을 팔아넘기기도 쉽다.');
        await era.printAndWait([
          '어떤 의미에서 보자면, 불순한 의도를 가진 자들에게 이곳의 ',
          tachyon.get_uma_sex_title(),
          '들은 분명 그들의 표적이 되기 가장 쉬운 무구한 아이들일지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          tachyon.get_colored_name(),
          '이 ',
          tachyon.sex,
          '들을 해치지는 않겠……지?',
        ]);
        await tachyon.say_and_wait(['그건 그렇고 ', callname, ', 어서 가세나.']);
        await era.printAndWait('왜 이렇게 갑자기…… 설마 양심의 가책 같은 건 아니겠지?');
        await tachyon.say_and_wait(
          '자네마저 눈치챘으니, 학생회 녀석들도 곧 이쪽으로 들이닥칠 게 뻔하네. 붙잡혀서 설교 듣기 전에 얼른 뜨자고, 가세!',
        );
        await era.printAndWait([
          '…………가끔은 ',
          tachyon.sex,
          '가 붙잡혀서 혼나는 모습을 구경하는 것도 나쁘진 않을 것 같다.',
        ]);
      });

    if (love > 80) {
      tachyon.sex_code - 1 &&
        me.sex_code > 0 &&
        buffer.push(async () => {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '을(를) 데리고 고목나무 구멍 앞으로 왔다. ',
            tachyon.sex,
            '는 자진해서 고목나무 구멍 가에 엎드렸다.',
          ]);
          await era.printAndWait([
            '하지만 오늘 할 놀이는 이게 아니다. ',
            me.get_colored_name(),
            '은(는) 고개를 젓고는 ',
            tachyon.get_colored_name(),
            '의 어깨에 기대었다.',
          ]);
          await me.say_and_wait(
            '하소연이나 스트레스를 발산하기 위한 곳이니, 너도 뭔가 분한 일들을 외쳐봐.',
          );
          await era.printAndWait([
            '말이 끝나기 무섭게 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 엉덩이를 찰싹 때리며, ',
            me.get_colored_name(),
            '이(가) 듣고 싶어 하는 게 무엇인지 암시했다.',
          ]);
          await era.printAndWait([
            '눈치가 빠른 천재 ',
            tachyon.get_uma_sex_title(),
            '는 순식간에 ',
            me.get_colored_name(),
            '의 의도를 파악했다.',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '는 나무라는 듯한 눈빛으로 ',
            me.get_colored_name(),
            '을(를) 한 번 쳐다보고는, 고목나무 구멍을 향해 『분함』을 외치기 시작했다.',
          ]);
          await tachyon.say_and_wait([
            '매번 유두를 ',
            callname,
            '한테 꼬집힐 때마다 바로 가버리는 거, 너무 분해❤️',
          ]);
          await tachyon.say_and_wait([
            '보지가 너무 허접이라 ',
            callname,
            '이 대충 만지기만 해도 애액을 쏟아내는 거, 너무 분해❤️',
          ]);
          await tachyon.say_and_wait([
            callname,
            '의 냄새를 맡기만 해도 머릿속이 섹스 생각뿐인 치녀가 되어버리는 거, 너무 분해❤️',
          ]);
          await tachyon.say_and_wait([
            '육봉을 물기만 하면 ',
            callname,
            '의 평생 오나홀이 되고 싶어지는 거, 너무 분해❤️',
          ]);
          await tachyon.say_and_wait([
            '참으라는 명령을 받았는데도 매번 ',
            callname,
            '이 사정할 때마다 참지 못하고 삼켜버려서 벌 받는 거, 너무 분해❤️',
          ]);
          await tachyon.say_and_wait(
            '섹스할 때마다 약에 의존하는데, 결국엔 자지님을 이기지 못하는 거, 너무 분해❤️',
          );
          await tachyon.say_and_wait(
            '매번 자지님을 만족시키기도 전에 나부터 먼저 가버리는 거, 너무 분해❤️',
          );
          await era.printAndWait([
            '외침이 하나 끝날 때마다 ',
            me.get_colored_name(),
            '은(는) 포상으로 ',
            tachyon.sex,
            '의 엉덩이를 찰싹 때려주었다. 매를 맞을 때마다 ',
            tachyon.sex,
            '의 허리는 더욱 격하게 흔들렸고, 더욱 노골적인 『분함』을 외쳐댔다.',
          ]);
          await era.printAndWait([
            '결국 주변 ',
            tachyon.get_uma_sex_title(),
            '들의 얼굴을 붉히게 만드는 시선 속에서, ',
            me.get_colored_name(),
            '은(는) 다리가 떨려 제대로 걷지도 못하는 ',
            tachyon.get_colored_name(),
            '을 부축해 실험실로 돌아갔다.',
          ]);
        });

      buffer.push(async () => {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 고목나무 구멍에 엎드려 멍하니 안쪽을 바라보고 있었다.',
        ]);
        await era.printAndWait([
          '밖으로 삐죽 솟아오른 ',
          tachyon.sex,
          '의 엉덩이를 보자, ',
          me.get_colored_name(),
          '은(는) 솟구치는 욕정을 억누르기 힘들었다.',
        ]);
        await tachyon.say_and_wait([callname, '……히익❤️']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 앙증맞은 엉덩이를 손바닥으로 내리쳤다. 옷감 너머로 느껴지는 탄력적인 촉감이 ',
          me.get_colored_name(),
          '이(가) 가한 힘을 고스란히 ',
          me.get_colored_name(),
          '의 손바닥으로 되돌려주었다.',
        ]);
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 여기 울림이…… 아주 크다네❤️…… 돌아가서, 돌아가서 마저 하게, 응?❤️',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 애원을 무시하고 한 번 더 힘껏 내리쳤다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 급히 자신의 입을 틀어막았으나, 결국 참지 못한 신음이 새어 나왔다.',
        ]);
        await tachyon.say_and_wait('으으읏❤️❤️❤️');
        await tachyon.say_and_wait('으음……❤️');
        await tachyon.say_and_wait('으으……❤️');
        await tachyon.say_and_wait('잠깐, 쑤셔 넣으면 안 돼애애애❤️❤️❤️');
        await era.printAndWait([
          '마지막으로 ',
          me.get_colored_name(),
          '은(는) 고목나무 구멍 위에서 녹초가 되어 얼굴을 붉히고 있는 ',
          tachyon.get_colored_name(),
          '을 품에 안고 트레이닝실로 데려갔다.',
        ]);
        await era.printAndWait([
          '길을 지나던 학생들은 모두 어쩔 수 없이 ',
          me.get_colored_name(),
          ' 일행에게 주목의 시선을 보냈다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '에게 있어서 이런 시선 따위는 이미 익숙한 것이었다.',
        ]);
        await era.printAndWait([
          '품 안의 ',
          tachyon.get_colored_name(),
          '은…… 주변의 시선은 아랑곳하지 않고 힘 빠진 두 팔로 끊임없이 포옹을 갈구하고 있었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '를 만족시켜주기 전까지는, 아마 이런 것들을 신경 쓸 겨를도 없을 것이다.',
        ]);
      });
    }

    if (love > 75) {
      buffer.push(async () => {
        await tachyon.say_and_wait([
          '으음…… ',
          callname,
          '❤️…… 남들이 감정을 털어놓는 나무 구멍 앞에서 이런 짓이라니…… 누가 듣기라도 하면 어쩔 셈인가❤️',
        ]);
        await tachyon.say_and_wait('성욕을 푸는 것도 감정을 털어놓는 거라고?');
        await tachyon.say_and_wait('정말이지❤️…… 나중에 들켜도 난 모른다네❤️');
      });
    }
  }

  await get_random_entry(buffer)();
};