const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (tachyon, me, callname, extra_flag) => {
    await print_event_name('미지 요인', tachyon);
    await say_by_passer_by_and_wait('해설', [
      tachyon.get_colored_name(),
      '! 새로운 해의 G1 연전이 초광속의 종소리를 울립니다!',
      tachyon.get_colored_name(),
      ' 멋지게 결승점을 통과합니다!',
    ]);
    era.println();
    await tachyon.print_and_wait('오, 이겼군.');
    await tachyon.print_and_wait([
      '비록 무례하게 들릴지도 모르겠지만, 이것이 바로 ',
      tachyon.get_colored_name(),
      '의 솔직한 생각이었다.',
    ]);
    await tachyon.print_and_wait([
      '이 경기장에서 ',
      tachyon.get_colored_name(),
      '을 막을 수 있는 것은 오직 ',
      tachyon.sex,
      ' 자신의 부상뿐이었다.',
    ]);
    await tachyon.print_and_wait([
      '부상에서 벗어난 지금, 설령 자만이라 불려도 상관없다. ',
      tachyon.get_colored_name(),
      '은 누구에게도 패배할 수 없었다.',
    ]);
    era.println();
    await tachyon.print_and_wait([tachyon.sex, '가 유일하게 신경 쓰는 것은 실험의 결과뿐이었다.']);
    await tachyon.print_and_wait('하지만……');
    era.println();
    await tachyon.say_and_wait(
      '환호성이 없군…… 그럴 만도 하지, 이런 임시방편적인 환심 사기가 통할 리가…… 역시 시간이 더 필요하겠어.',
      true,
    );
    await tachyon.print_and_wait(
      '애초에 환호성이 있다고 한들, 레이스에 어떤 영향을 줄 수 있을 리 없지 않나.',
    );
    await tachyon.print_and_wait('그렇지 않다면 레이스는 그저 인기 순으로 순위를 매기면 그만일 테니 말이야.');
    await tachyon.print_and_wait('레이스는 종료됐군…… 그럼, 모르모트 군을 찾으러……');
    era.println();
    await say_by_passer_by_and_wait('관객 A', '대단하다!');
    era.println();
    await tachyon.say_and_wait('…………?');
    await say_by_passer_by_and_wait('관객 B', [
      '엄청난 달리기야…… 저게 바로 ',
      tachyon.get_colored_name(),
      '인가?',
    ]);
    await say_by_passer_by_and_wait(
      '관객 C',
      '미디어의 보도 때문에 문제아인 줄로만 알았는데…… 설령 진짜 문제아라고 해도, 경기장에서는 성적으로 승부하는 법이지!',
    );
    await say_by_passer_by_and_wait('관객 D', [
      '원래 클래식 시즌 전적도 역대급이었는데, 이런 ',
      tachyon.get_uma_sex_title(),
      '가 대체 왜 트윙클 시리즈에서 무쌍을 찍고 있는 거야. 설령 드림 트로피에서 누가 온다고 해도 이기지 못하겠는데!',
    ]);
    await say_by_passer_by_and_wait(
      '관객 E',
      '클래식 때부터 계속 지켜봤지만, 몇 번을 봐도 역시 너무 강해!',
    );
    era.println();
    await tachyon.say_and_wait('이것은……', true);
    era.println();
    await tachyon.print_and_wait('마치 정적 속에 갇혀 있었던 것처럼, 결승선을 통과하고 한참 뒤에야 울려 퍼졌다.');
    await tachyon.print_and_wait('경기장 전체를 메우는 환호성이었다.');
    await tachyon.print_and_wait('과장되고, 부풀려지고, 아무런 근거 없는 찬사며 터무니없는 부추김이었다.');
    await tachyon.print_and_wait('……이상하군, 이번 레이스에 뭔가 특별한 점이라도 있었나?');
    era.println();
    await tachyon.say_and_wait(
      '아니…… 언제나 이랬던 거군. 그저…… 여태껏 눈치채지 못했을 뿐이야.',
      true,
    );
    await tachyon.print_and_wait('다리가 무너질까 봐 걱정하느라.');
    await tachyon.print_and_wait('실험이 실패할까 봐 걱정하느라.');
    await tachyon.print_and_wait('걸음이 멈출까 봐 걱정하느라.');
    await tachyon.print_and_wait('그래서…… 존재하지 않았던 게 아니라, 들리지 않았던 것이다. 중요하지 않았으니까.');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + ' A',
      '타키온 선배 너무 멋져요!',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + ' B', [
      '역시 타키온 선배가 최강의 ',
      tachyon.get_uma_sex_title(),
      '에요!',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + ' C',
      '타키온 선배 필승!',
    );
    await tachyon.print_and_wait('사실은, 줄곧 존재하고 있었다.');
    await tachyon.print_and_wait([
      '사츠키상 때, 그 사람은 분명히 「빛의 속도를 추월해, ',
      tachyon.get_colored_name(),
      '!」이라고 외쳤을 것이다.',
    ]);
    await tachyon.print_and_wait([
      '일본 더비 때, 그 사람은 분명히 「나에게 ',
      tachyon.get_uma_sex_title(),
      '의 가능성을 보여줘!」라고 외쳤을 것이다.',
    ]);
    await tachyon.print_and_wait([
      '국화상 때, 그 사람은 분명히 「나에게 증명해 줘, ',
      tachyon.get_uma_sex_title(),
      '의 부상은 극복될 수 있다는 것을!」이라고 외쳤을 것이다.',
    ]);
    era.println();
    await tachyon.print_and_wait('그리고…… 오사카배였다.');
    await me.say_and_wait([
      tachyon.get_colored_name(),
      '의 가능성은, 결코 3관에서 끝나지 않아!',
    ]);
    era.println();
    await tachyon.print_and_wait('아아.');
    await tachyon.print_and_wait('이번에야말로, 드디어 들렸다.');
    era.println();
    await tachyon.print_and_wait([
      '원래부터 ',
      tachyon.get_colored_name(),
      '은 줄곧 사랑받고 있었던 것이다.',
    ]);
    await tachyon.print_and_wait('팬들에게, 후배들에게, 그리고 세계에게.');
    await tachyon.print_and_wait('그리고…… 관객석 맨 앞줄에 있는.');
    await tachyon.print_and_wait('빛나고 있지는 않지만, 누구보다도 눈부신 바로 그 사람에게.');
    era.println();
    await tachyon.print_and_wait('정말이지, 이 바보가.');
    await tachyon.print_and_wait('레이스 중에는 그런 말을 잘도 외치면서.');
    await tachyon.print_and_wait('어째서 마주 보고 있을 때는 그런 서투른 칭찬밖에 못 하는 걸까?');
    await tachyon.print_and_wait('만약 내가 듣지 못했더라면 어쩔 뻔했지.');
    await tachyon.print_and_wait('이 응원들이 전부 헛수고가 되지 않았겠어?');
    await tachyon.print_and_wait(
      '응원…… 원래 응원이란 것은 누군가에게 들려주기 위해서 외치는 것이 아니었던가?',
    );
    await tachyon.print_and_wait(
      '……그렇다면, 들려주는 것이 목적이 아님에도 외치게 되는 것, 그것이야말로 진정한 응원인 걸까?',
    );
    era.drawLine();
    await tachyon.say_and_wait(['다녀왔네…… ', callname]);
    era.printButton('「어서 와, 타키온. 다리는 아무 문제 없지!」', 1);
    era.printButton('「오늘 달리기도 정말, 정말 대단했어!」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '……응원에 대한 정의를 명확히 세울 수 있을 것 같았는데, 자네 때문에 또다시 처음부터 조사해야겠군.',
    );
    era.println();
    await me.say_and_wait('에엣— 어째서!?');
    era.println();
    await tachyon.say_and_wait(
      '벌칙으로…… 오늘의 약은 뇌의 고등 인지 판단 능력을 방해하는 약이다……',
    );
    await tachyon.say_and_wait(
      '혹은 좀 더 통속적인 표현으로 자백제라고도 부르지. 이걸 마시고 오늘 레이스에 대한 감상을 제대로 이야기해 주게나.',
    );
    era.println();
    await me.say_and_wait('에에엣—!?');
    extra_flag.attr_change = [10];
  };

  handlers[race_enum.tenn_spr] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
    _,
    love,
  ) => {
    if (
      !edu_marks.plan_b ||
      sys_reg_race(25).curr.race !== race_enum.tenn_spr
    ) {
      return true;
    }
    const coffee = get_chara_talk(25);
    await print_event_name('이해합니다', tachyon);
    era.println();
    await era.printAndWait('아아, 과연 그렇군.');
    era.println();
    await era.printAndWait(['텐노상(봄)']);
    await era.printAndWait('최종 직선에서 펼쳐지는 저 두 사람의 다툼을 지켜보며.');
    await era.printAndWait('드디어, 깨달았다.');
    era.println();
    await era.printAndWait([
      '어째서 당초에 ',
      tachyon.get_colored_name(),
      '의 성과를 주춧돌로 삼을 것임을 알면서도 ',
      coffee.get_colored_name(),
      '를 지지했는지.',
    ]);
    await era.printAndWait([
      '어째서 그날 밤 ',
      tachyon.get_colored_name(),
      '의 대답에 기뻐했는지.',
    ]);
    era.println();
    await era.printAndWait([
      '빛의 속도를 뛰어넘는 저 모습과, 칠흑의 사냥개처럼 상대를 물어뜯는 저 주법을 보았을 때 마침내 이해했다.',
    ]);
    await era.printAndWait(['처음 ', tachyon.sex, '들이 달리는 모습을 보았을 때부터.']);
    await era.printAndWait([
      '자신은 이미 ',
      tachyon.sex,
      '들',
      era.get('love:25') >= 75 && love >= 75 ? '' : '의 주법',
      '을 깊이 사랑하고 있었음을.',
    ]);
    era.println();
    await era.printAndWait(['섬광처럼 빛나는 ', tachyon.get_colored_sex()]);
    await era.printAndWait(['칠흑의 그림자 같은 ', coffee.get_colored_sex()]);
    await era.printAndWait(['처음부터 이토록 간단한 일이었다.']);
    era.println();
    await era.printAndWait('그저 어린아이 같은 유치한 소망이었다.');
    await era.printAndWait('강약을 가리고 싶다기보다…… 아니, 그저 같은 경기장에서 경쟁하는 것을 보고 싶었을 뿐이었다.');
    await era.printAndWait([
      '강하고 약한 것은 중요하지 않았다. 그저 ',
      tachyon.sex,
      '들이 질주하는 모습을 보고 싶었을 뿐이었다.',
    ]);
    era.println();
    await era.printAndWait('결승점 앞의 이 직선이 영원히 끝나지 않기를 바랐다.');
    await era.printAndWait([
      '영원히 ',
      tachyon.sex,
      '들이 경기장에서 달리는 이 장면을 지켜볼 수 있기를 바랐다.',
    ]);
    await era.printAndWait(['어느샌가, ', me.get_colored_name(), '의 눈에서 눈물이 흘러내렸다.']);
    era.println();
    await era.printAndWait('빛인가, 그림자인가.');
    await era.printAndWait('모든 것을 비추는 빛이 그림자를 숨을 곳 없게 만드는가.');
    await era.printAndWait('아니면 모든 것을 삼키는 어둠이 빛을 먹어 치우는가.');
    era.println();
    await say_by_passer_by_and_wait('해설', [
      '마지막 순간까지 서로를 물어뜯는 대접전입니다! ',
      coffee.get_colored_name(),
      '! 아니면 ',
      tachyon.get_colored_name(),
      '! 초광속의 도주인가, 마천루의 체포인가! 지금, 결승선을 통과하는 것은……!',
    ]);
    era.drawLine();
    if (extra_flag.rank === 1) {
      await tachyon.say_and_wait('………이겼……나?');
    } else {
      await tachyon.say_and_wait('………졌……나?');
    }
    era.println();
    await tachyon.print_and_wait('이해할 수 없군.');
    await tachyon.print_and_wait('도리에 맞지 않아.');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '의 출주는 어디까지나 ',
      coffee.get_colored_name(),
      '의 성공을 돕기 위함이었다.',
    ]);
    await tachyon.print_and_wait([
      coffee.sex,
      '를 정점에 올리기 위해, 레이스 중에 ',
      coffee.sex,
      '가 가장 괴로워하는 부분을 자극하여 ',
      coffee.sex,
      '의 성장을 이끌어내려 했다.',
    ]);
    await tachyon.print_and_wait([
      '그리고…… 눈에 띄지 않게 무대 뒤로 물러나, ',
      tachyon.sex,
      '가 승리라는 이름의 보상을 만끽하게 하려 했다.',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait('결과는.');
      await say_by_passer_by_and_wait('해설', [
        '바로 ',
        tachyon.get_colored_name(),
        '! 빛의 속도를 추월하여 요도 언덕 위에 군림한 방패의 영광은 ',
        tachyon.get_colored_name(),
        '의 것입니다!',
      ]);
    } else {
      await tachyon.print_and_wait('분명히 이랬어야 했는데, 그런데……');
      era.println();
      await say_by_passer_by_and_wait('해설', [
        '바로 ',
        coffee.get_colored_name(),
        '! 초광속을 집어삼키고 요도 언덕 위에 군림한 방패의 영광은 ',
        coffee.get_colored_name(),
        '의 것입니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('어째서…… 지금 이 순간 이토록…… 분한 것인가!');
    }
    era.println();
    await tachyon.print_and_wait('처음에는 분명히 정상적이었다.');
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      '의 장점이자 단점은 그 안정성에 있었다.',
    ]);
    await tachyon.print_and_wait([
      '극도의 안정성 덕분에 ',
      tachyon.sex,
      '는 강인함이 가장 중요한 장거리 경기에서 언제나 우위를 점할 수 있었다.',
    ]);
    await tachyon.print_and_wait([
      '하지만 너무나 안정적인 탓에, ',
      tachyon.sex,
      '는 결정적인 순간의 폭발력이 부족했다.',
    ]);
    await tachyon.print_and_wait([
      '그래서 ',
      tachyon.sex,
      '의 쾌적한 상태를 파괴함으로써 한계를 돌파하도록 자극했다.',
    ]);
    era.println();
    await tachyon.print_and_wait('결과는 예상 밖이었다.');
    await tachyon.print_and_wait([
      tachyon.sex,
      '는 페이스를 되찾았을 뿐만 아니라 한층 더 진화하여 자신만의 주법을 완성해냈다.',
    ]);
    await tachyon.print_and_wait('이것으로 이번 레이스의 목적은 이미 달성되었어야 했다.');
    await tachyon.print_and_wait('하지만……');
    era.println();
    await tachyon.print_and_wait('그 이유는 굳이 생각하지 않아도 알 수 있었다.');
    await tachyon.print_and_wait('그날 밤 후배와의 대화가 가장 큰 원인이었다.');
    await tachyon.print_and_wait(['하지만……', tachyon.sex, '는 아무런 잘못이 없었다.']);
    await tachyon.print_and_wait(['문제가 있는 것은 바로 ', tachyon.get_colored_name(), ' 자신이었다.']);
    era.println();
    await tachyon.print_and_wait('마음에 망설임이 없었더라면, 그때 명확하게 대답할 수 있었을 것이다.');
    await tachyon.print_and_wait('그것이 적당히 둘러대는 말이었든, 정직한 대답이었든 말이다.');
    await tachyon.print_and_wait('마음속에 의구심이 없었더라면, 분명히 내뱉을 수 있었을 것이다.');
    era.println();
    await tachyon.say_and_wait('나는……');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 결국 한 명의 ',
      tachyon.get_uma_sex_title(),
      '였던 것이다.',
    ]);
    await tachyon.print_and_wait('질주하고 승리하고자 하는 본능을 끝내 거부할 수 없었다.');
    await tachyon.print_and_wait([
      tachyon.get_uma_sex_title(),
      '의 가능성에 대해서는 분명 다른 길도 많이 존재했다.',
    ]);
    await tachyon.print_and_wait('굳이 경기장에 집착할 필요도 없었다.');
    await tachyon.print_and_wait([
      '그럼에도 ',
      sys_get_colored_callname(32, 25),
      '을 선택하여, 설령 타인이 달리는 모습을 고통스럽게 지켜보기만 해야 할지라도 다른 길을 택하지 않은 이유가 있었다.',
    ]);
    await tachyon.print_and_wait([
      '왜냐하면…… ',
      tachyon.get_colored_name(),
      '은 달리는 것을 사랑하고 있었기 때문이다.',
    ]);
    era.println();
    await tachyon.print_and_wait('그렇게 생각하자 문득 마음이 가벼워졌다.');
    await tachyon.print_and_wait('아무리 그럴싸한 핑계와 이유로 포장해도 마찬가지였다.');
    await tachyon.print_and_wait([
      '아무리 노력해도 ',
      tachyon.get_uma_sex_title(),
      '로서의 본능에서 벗어날 수는 없었다.',
    ]);
    await tachyon.print_and_wait('……벗어나고 싶지도 않았다.');
    await tachyon.print_and_wait([
      '가장 빠르고 강한 ',
      tachyon.get_uma_sex_title(),
      '가 되고 싶었다.',
    ]);
    await tachyon.print_and_wait('적수와 마지막 순간까지 얽혀 사투를 벌이고 싶었다.');
    await tachyon.print_and_wait('자신을…… 증명하고 싶었다.');
    era.println();
    await tachyon.print_and_wait([
      '……하지만, 그렇다면 나는 대체 어떤 얼굴로 ',
      me.sex,
      '를 마주해야 하는 걸까.',
    ]);
    await tachyon.print_and_wait([
      '줄곧 자신을 도와주고 곁에서 지지해주었던 바로 그 사람을.',
    ]);
    await tachyon.print_and_wait(['어떤 낯짝으로 ', me.sex, ' 앞에 서야 하는 것일까.']);
    await tachyon.print_and_wait(['……설령 ', me.sex, '라 해도, 이번만큼은 분명 화를 내겠지.']);
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '의 전속 트레이너였던 그 사람에게.']);
    await tachyon.print_and_wait([
      '처음에 약속했었다. 레이스는 ',
      sys_get_colored_callname(32, 25),
      '에게 맡기고, 자신은 무대 뒤의 일에 전념하겠노라고.']);
    era.println();
    await tachyon.print_and_wait('결과는…….');
    if (extra_flag.rank === 1) {
      await tachyon.print_and_wait('이 통제 불능이고 불안정한 문제아가.');
      await tachyon.print_and_wait('한순간 욱하는 감정에 휩쓸려 모든 것을 망쳐버리고 말았다.');
    } else {
      await tachyon.print_and_wait([
        '이제 와서 ',
        me.sex,
        '에게, 자신은…… 역시 계속 달리고 싶다고 말해야 하는 것일까?',
      ]);
      await tachyon.print_and_wait('사람을 골탕 먹이는 것도 정도가 있는 법이다.');
    }
    era.println();
    await tachyon.print_and_wait('어느샌가.');
    await tachyon.print_and_wait([tachyon.get_colored_name(), '은 경기장에서 도망치듯 빠져나갔다.']);
    era.drawLine();
    await era.printAndWait([tachyon.get_colored_name(), '은 대기실로 돌아오지 않았다.']);
    await era.printAndWait(['경기장 그 어디에도 ', tachyon.sex, '의 모습은 보이지 않았다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 걱정스러운 마음에 기숙사 사감에게 전화를 걸어 확인했고, ',
      tachyon.get_colored_name(),
      '이 이미 트레센으로 돌아갔다는 소식을 듣고서야 겨우 안심했다.']);
    await era.printAndWait('……아니, 안심했다고는 할 수 없었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '에게 대체 무슨 일이 있었던 걸까…… 어째서 혼자 학원으로 돌아가 버린 것일까.']);
    await era.printAndWait(['기회가 되면 ', tachyon.sex, '와 이야기를 나누어 보아야겠다고 생각했다.']);
    extra_flag.motivation_change = -1;
  };

  handlers[race_enum.takz_kin] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (era.get('cflag:32:육성턴수합산') < 96) {
      return true;
    }
    if (edu_marks.plan_b) {
      if (sys_reg_race(25).curr.race !== race_enum.takz_kin) {
        return true;
      }
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('극한을 향하여', tachyon);
      era.println();
      await tachyon.say_and_wait(['하아…… 하아…… 카페…… ', t_call_c, '……!']);
      era.println();
      await tachyon.print_and_wait('온 힘을 다해 내뱉는 포효였다.');
      await tachyon.print_and_wait('레이스 중에 말을 하는 것.');
      await tachyon.print_and_wait(
        '이것은 실험적인 관점에서 보든, 혹은 경쟁적인 관점에서 보든 극도로 비상식적인 행위였다.',
      );
      await tachyon.print_and_wait([
        '그럼에도 ',
        tachyon.get_colored_name(),
        '은 소리를 내질렀다.',
      ]);
      era.println();
      await tachyon.print_and_wait('최종 직선에 들어서기 전, 마지막 스퍼트가 시작되기 직전이었다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 내뱉은, 상식을 뒤엎는 선언이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('따라잡을 수 있다면…… 어디 한번 해보게나!');
      era.println();
      await tachyon.print_and_wait(['앞서 달려 나가는 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait('자신의 뒤를 바짝 추격하는 사냥개를 향해 도발을 던졌다.');
      era.drawLine();
      await coffee.say_and_wait('……지루해요.');
      await coffee.say_and_wait('그런 짓을 한다고 누가 기뻐할 거라고 생각하는 건가요?');
      await coffee.say_and_wait(
        '당신이 봐주지 않아도, 저는 정정당당하게 당신을 추월하겠어요…… 그리고, 친구를 뛰어넘겠어요.',
      );
      era.println();
      await tachyon.print_and_wait(
        '레이스 전의 솔직한 고백은 아니나 다를까, 호된 질책으로 돌아왔다.',
      );
      await tachyon.print_and_wait('하지만…… 뭐, 이쪽이 훨씬 마음 편하군.');
      await tachyon.print_and_wait([
        callname,
        '처럼 무조건적으로 긍정해 주는 쪽이 오히려 더 걱정될 정도였으니 말이야.',
      ]);
      await tachyon.print_and_wait('그러니 오늘은 아무런 거리낌 없이, 온 힘을 다해 달릴 수 있었다.');
      era.println();
      await tachyon.print_and_wait('라이벌에 대한 예우.');
      await tachyon.print_and_wait('자신에 대한 갈망.');
      await tachyon.print_and_wait('지지자들에 대한 보답.');
      era.println();
      await tachyon.say_and_wait([
        '이 모든 것을 담아 바치는, ',
        tachyon.get_colored_name(),
        '의 일본 국내에서의 마지막 춤사위였다.',
      ]);
      await say_by_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '! 아니면 ',
        coffee.get_colored_name(),
        '! ',
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! ',
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! 지금, 두 사람이 동시에 결승선을 통과합니다———————————!',
      ]);
      era.println();
      await tachyon.print_and_wait('누가 이겼는가.');
      await tachyon.print_and_wait('누가 졌는가.');
      await tachyon.print_and_wait('아니, 그런 것은 이제 아무래도 좋았다.');
      era.println();
      await tachyon.print_and_wait('이것으로 모든 것이 끝났다.');
      await tachyon.print_and_wait([
        '오늘 레이스에서 ',
        tachyon.get_colored_name(),
        '은 자신의 최고 기록을 갱신했다.',
      ]);
      await tachyon.print_and_wait('다음 레이스도 이미 사정권 안에 들어와 있었다.');
      era.drawLine();
      era.printButton('「강해, 정말 빨라! 카페도…… 타키온도 전부……!」', 1);
      era.printButton('「너희들의 트레이너가 될 수 있어서…… 정말…… 다행이야!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '후후, 갑자기 그렇게 감상적인 말을 하다니, 마치 대단원이라도 맞이한 것 같군. 우리의 승부는 아직 끝나지 않았다고, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('아아, 그렇고말고.');
      era.println();
      await tachyon.say_and_wait('……기자회견이 곧 시작되겠군.');
      era.println();
      await era.printAndWait([
        '상반기 최강의 ',
        tachyon.get_uma_sex_title(),
        ' 결정전인 만큼, 이런 레이스에는 수많은 기자와 미디어가 모여들기 마련이었다.',
      ]);
      era.print('바로 이 무대 위에서, 앞으로의 목표를 선언하자.');
      era.printButton('「가자, 타키온.」', 1);
      era.printButton('「내가 언제나 네 뒤에 서 있을게.」', 2);
      await era.input();
      await tachyon.say_and_wait('……음, 다녀오겠네.');
      era.drawLine();
      await tachyon.say_and_wait([
        '이차저차하여, 저의 다음 레이스 예정 계획은 세계 최고봉, 개선문상입니다. 혹시 질문 있는 기자분 계십니까?',
      ]);
      era.println();
      await era.printAndWait('사방이 쥐 죽은 듯 조용해졌다.');
      await era.printAndWait([
        '기자회견 전부터 오늘 ',
        tachyon.get_colored_name(),
        ' 진영에서 중대 발표가 있을 것이라는 소문을 들었던 기자들조차도.']);
      await era.printAndWait('이 너무나도 엄청난 소식에 경악을 금치 못했다.');
      era.println();
      await tachyon.say_and_wait('———질문이 없으시다면, 오늘 인터뷰는 이것으로……');
      era.println();
      await era.printAndWait(
        '그제야 기자들은 마치 꿈에서 깬 듯 앞다투어 질문을 쏟아내기 시작했다.',
      );
      await era.printAndWait(
        '하지만 너무나 갑작스러운 전개 탓에, 미리 준비했던 질문들이 아무런 쓸모가 없게 되어버려 다들 임시방편으로 화젯거리를 찾기에 급급해 보였다.',
      );
      await era.printAndWait([
        '반면 ',
        tachyon.get_colored_name(),
        '은 여유로운 태도로 질문에 하나하나 대답해 나갔다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        '기자 A',
        '어째서 이렇게 갑작스럽게 결정을 내리신 겁니까? 정말로 충분한 숙고 끝에 내린 출주 계획입니까?',
      );
      await tachyon.say_and_wait(
        '이것은 트레이너 군과 상담하여 내린 결정이며, 이미 몇 달 전부터 정해져 있던 사항입니다. 갑작스럽지도 엉뚱하지도 않으며, 단지 미리 미디어에 알리지 않았을 뿐입니다.',
      );
      await say_by_passer_by_and_wait('기자 B', [
        '질문 드립니다, ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '. 작년에 불분명한 이유로 트윙클 시리즈 출주를 중단했던 원인은 무엇입니까……? 올해 개선문상에서는 설마 그런 일이……',
      ]);
      await tachyon.say_and_wait([
        '그 부분에 대해서는 노코멘트하겠습니다만, 이것 하나는 약속드릴 수 있습니다. 올해 개선문상에 저는 반드시 출주할 것입니다.',
      ]);
      await say_by_passer_by_and_wait('기자 B', [
        '……저기, 오늘 레이스가 매우 훌륭했습니다만, 혹시 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.get_adult_sex_title(),
        '께서 라이벌인 ',
        coffee.get_colored_name(),
        '에게 전하고 싶은 말씀이 있으십니까?',
      ]);
      await tachyon.say_and_wait(
        '음…… 그렇군. 그럼, 『너도, 네 친구도, 내가 개선문에서 한꺼번에 뛰어넘어 주마』라고 해두죠.',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 무대 뒤편에서, 기자회견장에서 별처럼 빛나고 있는 ',
        tachyon.sex,
        '를 지켜보았다.']);
      await era.printAndWait('한때 흐릿했던 광자는, 이제 그 누구보다도 찬란한 빛을 내뿜고 있었다.');
    } else {
      if (extra_flag.rank !== 1) {
        return true;
      }
      await print_event_name('신화 탄생', tachyon);
      await say_by_passer_by_and_wait('해설', [
        '상반기 결산 대회를 제패하며 신화가 된 것은 바로 ',
        tachyon.get_colored_name(),
        '입니다!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 당연하다는 듯이 가장 먼저 결승선을 통과했다.',
      ]);
      await era.printAndWait('경기장 전체에 우렁찬 박수와 환호가 울려 퍼졌다.');
      await era.printAndWait('하늘에는 꽃가루가 휘날렸고, 다시 한번 휘황찬란하고 멋진 레이스가 막을 내렸다.');
      era.println();
      await era.printAndWait('갑자기 관객석에서 비명 섞인 함성이 터져 나왔고, 소란은 더욱 뜨겁게 달아올랐다.');
      await era.printAndWait([
        '레이스 후에는 언제나 무심하게 손을 흔들며 서둘러 퇴장하던 ',
        tachyon.get_colored_name(),
        '이.']);
      await era.printAndWait('지금은 여전히 경기장에 남아, 팬들의 환호에 당당하게 화답하고 있었던 것이다.');
      await era.printAndWait('이 행동은 더욱 거대한 성원을 불러일으켰고, 그 목소리는 하늘을 찌를 듯했다.');
      era.drawLine({ content: '퇴장 후' });
      await tachyon.say_and_wait('……후후.');
      era.printButton('「타키온!」', 1);
      era.printButton('「오늘 정말 멋졌어!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '음? 오오, 그것보다 자네, ',
        callname,
        '! 이것 보게, 테스트 결과일세!',
      ]);
      await tachyon.say_and_wait([
        '이번 실험에서는 오사카배 때보다 훨씬 많은 환호성 변수를 도입했네. 레이스 종료 후의 데이터 분석 결과에 따르면.',
      ]);
      await tachyon.say_and_wait(
        '확실히 근육의 출력 강화에 도움이 되었어…… 그 출력 증가량은 평소의 감정 고조로 인한 진폭보다 컸다네……',
      );
      await tachyon.say_and_wait(
        '간단히 말해, 실험 성공일세! 관객의 응원은 확실히 영향을 줄 수 있는 요소였어, 하하하하하하!',
      );
      era.println();
      era.print('……정확히는 잘 모르겠지만, 어쨌든 실험은 성공한 모양이었다.');
      era.printButton('「축하해!」', 1);
      era.printButton('「이걸로 가능성에 한 걸음 더 다가갔네!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '후후…… 아직 몇 가지 의문점이 남아있긴 하지만, 실전에서 운용하는 데에는 이제 문제가 없겠어!',
      );
      await tachyon.say_and_wait(
        '그나저나…… 이렇게 보니, 나도 확실히 환호 소리에 기쁨을 느끼는 모양이군…… 역시 사회적 동물이라 이건가……',
      );
      era.printButton(
        '「다들 진심으로 타키온을 응원하고 있어. 타키온이 반응해 주면 다들 정말 기뻐할 거야.」',
        1,
      );
      era.printButton(
        '「나는 진심으로 타키온을 응원하고 있어. 타키온이 기뻐해 준다면 그걸로 충분해.」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '후후, 듣고 보니 그렇군…… 그럼 다음번에는 반응이라도 좀 해줘야겠어. 지원 보상 차원의 팬 서비스라고 생각하고 말이야.',
          );
          era.println();
          await era.printAndWait([
            '보상이 문제가 아닐 텐데……라고 말하고 싶었지만, ',
            tachyon.get_colored_name(),
            '은 아마 영원히 이해하지 못할 것이다.']);
        } else {
          era.println();
          await tachyon.say_and_wait('자네의 응원…… 음, 확실히 나에게 닿았다네……');
          await tachyon.say_and_wait(
            '그런데 말이야, 평소에는 그런 말을 잘도 하면서, 어째서 레이스가 끝나고 돌아올 때마다 하는 말은 그런 케케묵은 상투적인 문구뿐인가?',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '그렇다면 그 다들 안에는 당연히 자네도 포함되어 있겠지…… 자네는 내가 어떤 식으로 반응해 주길 바라나? 감사의 의미를 담아서 말이야♡',
          );
        } else {
          await tachyon.say_and_wait(
            '그렇군. 그렇다면, 나의 가장 열렬한 팬에게는 대체 무엇으로 보답해야 좋을까.',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 요염한 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 바라보았다.']);
        await era.printAndWait([
          '순간 ',
          me.get_colored_name(),
          '은(는) 할 말을 잃고 멍하니 서 있을 수밖에 없었다.']);
      }
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 타카라즈카 기념이 끝났다!']);
      extra_flag.attr_change = [0, 10];
      extra_flag.pt_change = 10;
    }
  };

  handlers[race_enum.prix_lat] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (
      !edu_marks.plan_b ||
      era.get('cflag:32:육성턴수합산') < 96 ||
      extra_flag.rank !== 1 ||
      sys_reg_race(25).curr.race === race_enum.prix_lat
    ) {
      return true;
    }
    await print_event_name('극한에서 멈추다', tachyon);
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), '이 세계의 정점에 우뚝 섰다.']);
    await era.printAndWait([
      '일본에서 온 ',
      tachyon.get_uma_sex_title(),
      '가 세계 기록을 갈아치웠다.']);
    await era.printAndWait(
      '자신의 두 눈마저 태워버릴 듯한 그 강렬한 주법이, 처음이자 마지막으로 세계 무대에서 가장 찬란한 빛을 발했다.',
    );
    era.println();
    await era.printAndWait([
      '레이스 후 대기실로 돌아온 ',
      tachyon.get_colored_name(),
      '은 별다른 말이 없었다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 평소처럼 먼저 ',
      tachyon.sex,
      '의 다리 상태를 체크하기 시작했다.']);
    era.println();
    await tachyon.say_and_wait(['……이제 그럴 필요 없지 않나, ', callname]);
    await tachyon.say_and_wait('자네도 이미 알고 있지 않은가?');
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 침묵에 빠졌다.']);
    await era.printAndWait('결말을 알고 있었음에도, 마음 한구석에서는 기적이 일어나길 바라고 있었다.');
    await era.printAndWait('하지만…….');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아무런 말 없이, 그저 ',
      tachyon.get_colored_name(),
      '의 다리에 약을 바르며 열기를 식히고 부담을 덜어주기 위해 애썼다.']);
    await era.printAndWait([
      '시상식 준비가 끝났다는 공식 통보가 오자, ',
      me.get_couple_title(),
      '은 천천히 무대를 향해 발걸음을 옮겼다.']);
    era.println();
    await tachyon.say_and_wait('……그래서, 어떤가? 이번 레이스, 자네를 만족시켰나?');
    era.println();
    await era.printAndWait('모든 것을 쏟아붓고, 자신의 다리를 불태웠다.');
    await era.printAndWait('그렇게 해서 얻어낸 승리였다.');
    await era.printAndWait('그 광경에 어찌 매료되지 않을 수 있으며, 어찌 열광하지 않을 수 있겠는가.');
    era.println();
    await era.printAndWait('자신은 분명 유능한 트레이너는 아닐 것이라 생각했다.');
    await era.printAndWait([
      '트레이너라면 이성적으로 ',
      tachyon.get_uma_sex_title(),
      '를 위해, ',
      tachyon.sex,
      '들에게 가장 최선의 선택지가 무엇인지 고민했어야 했다.']);
    await era.printAndWait([
      '하지만 자신은 그저 가장 아름다운 주법을, 가장 강렬한 달리는 모습을 보고 싶다는 욕망 하나로 자신이 담당하는 ',
      tachyon.get_uma_sex_title(),
      '가 이런 일을 벌이도록 방관하고 말았다.']);
    await era.printAndWait('다행히 지금 이 질문은 트레이너로서 대답해야 하는 것이 아니었다.');
    await era.printAndWait([
      '한 명의 팬으로서, ',
      tachyon.get_colored_name(),
      '의 가장 열광적인 광신도의 입장에서 대답하면 그만이었다.']);
    era.printButton('「내가 지금까지 본 레이스 중 가장 멋진 레이스였어.」', 1);
    await era.input();
    await era.printAndWait([tachyon.get_colored_name(), '이 아침 햇살 같은 미소를 지어 보였다.']);
    await era.printAndWait([
      tachyon.sex,
      '가 평소 내뿜던 광채보다는 조금 약하지만, 훨씬 부드럽고 따스한 빛이었다.']);
    era.drawLine();
    await tachyon.print_and_wait('은은하게 저려오는 다리.');
    await tachyon.print_and_wait('분명하게 느껴지는 발뒤꿈치의 통증.');
    await tachyon.print_and_wait('하지만 이 모든 것보다도 더 크게 느껴지는 것은 바로 아쉬움이었다.');
    era.println();
    await tachyon.print_and_wait('이미 알고 있었지만, 역시…….');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 마지막까지 결국 한계를 돌파하지는 못했다.']);
    era.println();
    await tachyon.print_and_wait('실망할 것은 없었다. 그저 원래 계획대로 진행될 뿐이었으니까.');
    era.println();
    await say_by_passer_by_and_wait('기자 A', [
      '타키온 ',
      tachyon.get_adult_sex_title(),
      '! 오늘 개선문상 우승을 진심으로 축하드립니다! 게다가 이번 개선문상은 역대 기록까지 갈아치우셨더군요!']);
    await say_by_passer_by_and_wait(
      '기자 A',
      '이번 승리에 대해, 라이벌들이나 일본에 있는 친지들에게 전하고 싶은 말씀이 있으십니까?',
    );
    era.println();
    await tachyon.say_and_wait('……후후.');
    await tachyon.say_and_wait('그럼 마지막으로…… 몇 마디만 하도록 하죠.');
    await say_by_passer_by_and_wait('기자 A', '마지막……이라고요?');
    await tachyon.say_and_wait([
      '저는 모든 ',
      tachyon.get_uma_sex_title(),
      '가 각자 자신만의 가능성을 품고 있다고 믿습니다.']);
    await tachyon.say_and_wait('그것이 어떤 높은 벽이라 할지라도, 반드시 뛰어넘을 수 있을 것이라고 말이죠.');
    await tachyon.say_and_wait('그러니…… 이 기록은 시작일 뿐, 끝이 아닙니다.');
    await tachyon.say_and_wait([
      '앞으로 더욱 많은 ',
      tachyon.get_uma_sex_title(),
      '들이 세계 무대에 서게 될 것이고, 그리고…… 한계를 뛰어넘을 것입니다.']);
    await tachyon.say_and_wait('저는 그렇게 믿고 있으며, 여러분을 고대하고 있겠습니다. 그리고……');
    era.println();
    await tachyon.print_and_wait(
      '후발주자들에 대한 기대를 내비치면서도, 오만하게도 자기 자신을 한계 그 자체로 정의 내리고 있었다.',
    );
    await tachyon.print_and_wait([
      '무대 아래의 사람들은 투지를 불태우며 무대 위의 ',
      tachyon.sex,
      '를 바라보았다.']);
    await tachyon.print_and_wait([
      '하지만 ',
      tachyon.sex,
      '의 눈동자가 향하는 곳은 여전히 관객석 구석에 숨어있는 바로 그 사람이었다.']);
    await tachyon.print_and_wait('무대는 이미 마련되었다.');
    await tachyon.print_and_wait('열기도 충분히 달아올랐다.');
    await tachyon.print_and_wait('자, 이제 자네는 이 모든 것을 뛰어넘을 방도가 있나?');
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '은 ',
      get_chara_talk(25).get_colored_name(),
      '에게 소리 없는 도전장을 던졌다.']);
    era.drawLine();
    await era.printAndWait(['개선문상 종료']);
    await era.printAndWait([
      '레이스가 끝난 후 ',
      me.get_colored_name(),
      '은(는) 즉시 ',
      tachyon.get_colored_name(),
      '을 데리고 병원으로 향해 정밀 검사를 받았다.']);
    await era.printAndWait('예상했던 대로였지만, 동시에 예상 밖이기도 했다.');
    await era.printAndWait('예상대로인 것은, 은퇴를 피할 수 없을 정도의 심각한 다리 부상이라는 점이었다.');
    await era.printAndWait('예상 밖인 것은, 부상이 생각했던 것만큼 아주 처참하지는 않았다는 점이었다.');
    await era.printAndWait('더 이상 예전처럼 전력으로 달릴 수 없다는 점을 제외하면, 다른 위중한 상태는 발견되지 않았다.');
    await era.printAndWait([
      '……하지만 ',
      tachyon.get_uma_sex_title(),
      '에게 있어서, 이보다 더 절망적인 상황은 없을 것이다.']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 은퇴 소식은 순식간에 전 세계를 충격에 빠뜨렸다.']);
    await era.printAndWait([
      '전속 트레이너였던 ',
      me.get_colored_name(),
      '에게 전 세계의 이목이 집중되었고, 그중에는 이번 일에 대한 원망 섞인 비난의 목소리도 적지 않게 흘러나왔다.']);
    extra_flag.love_change = 10;
    sys_change_fame(-20);
    sys_hurt_uma(32, 1);
    era.set('cflag:32:명예의전당', 1);
  };
};