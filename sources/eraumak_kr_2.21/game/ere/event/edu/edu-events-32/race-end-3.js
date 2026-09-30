const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { add_event, cb_enum } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.arim_kin] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    edu_marks,
  ) => {
    if (era.get('cflag:32:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    const coffee = get_chara_talk(25);
    if (!edu_marks.plan_b) {
      await print_event_name('한계를 넘어서', tachyon);
      await tachyon.say_and_wait('하아…… 하아……');
      era.println();
      await tachyon.print_and_wait('발걸음이 무겁고, 둔하다.');
      await tachyon.print_and_wait('원인은…… 명확하다.');
      await tachyon.print_and_wait('등 뒤의 사냥개로부터 뿜어져 나오는 강렬한 압박감 때문이다.');
      era.println();
      await tachyon.print_and_wait([
        sys_get_colored_callname(32, 25),
        '이 달릴 때, 전후방의 ',
        tachyon.get_uma_sex_title(),
        '들이 느끼게 되는 극심한 압박감.',
      ]);
      await tachyon.print_and_wait([
        '그리고 ',
        tachyon.sex,
        '의 친구를 포함해, 모든 것이 자신의 과학으로는 설명할 수 없는 것들이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……왔나!');
      era.println();
      await tachyon.print_and_wait([coffee.get_colored_name(), '가 등 뒤를 바짝 쫓는다.']);
      await tachyon.print_and_wait([
        '뒷덜미의 솜털이 곤두서며, 마치 ',
        tachyon.sex,
        '의 콧결이 느껴질 것만 같다.',
      ]);
      await tachyon.print_and_wait('바로 지금, 이곳이다.');
      era.println();
      await tachyon.print_and_wait([
        '만약 ',
        tachyon.get_colored_name(),
        '이 가진 것이 차원을 넘어서는 속도라면,',
      ]);
      await tachyon.print_and_wait([
        '그렇다면 ',
        coffee.get_colored_name(),
        '는 차원을 넘나드는 기묘함 그 자체다.',
      ]);
      await tachyon.print_and_wait(
        '어디서 나타날지 알 수 없는, 마치 거울 속 세계에서 튀어나온 듯한 이형의 모습이다.',
      );
      era.println();
      await tachyon.print_and_wait([
        '그 칠흑 같은 환영이, 순식간에 ',
        tachyon.get_colored_name(),
        '을 추월했다.',
      ]);
      era.drawLine();
      await coffee.say_and_wait('……미안해요.');
      era.println();
      await coffee.print_and_wait('자신의 꿈을 이루기 위해, 타인의 꿈을 짓밟는다.');
      await coffee.print_and_wait('하물며, 상대는……');
      await coffee.print_and_wait('무엇이었을까?');
      await coffee.print_and_wait(
        '친구? 숙적? 타고난 상극? 연구자와 실험체?',
      );
      await coffee.print_and_wait([
        '마지막 선택지를 머릿속에서 지워버린 채, ',
        coffee.get_colored_name(),
        '는 계속해서 앞으로 내달렸다.',
      ]);
      await coffee.print_and_wait(
        '꿈으로 향하는 길 위에서는, 아무리 깊은 감정이라 해도 기껏해야 이런 사과 한마디로 변할 뿐이다.',
      );
      era.println();
      await coffee.print_and_wait(
        '이곳만 넘어선다면, 그다음, 다음 목표는 「그 뒷모습」이다……!',
      );
      era.println();
      await coffee.print_and_wait(['하지만, ', coffee.sex, '는 한 가지 가능성을 간과했다.']);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '에게 아직 여력이 남아있을 가능성.',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '이 처음부터 전력을 다하지 않았을 가능성.',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '이 기다리고 있었던 것이 바로 이 타이밍일 가능성.',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        '앞서가는 ',
        tachyon.get_uma_sex_title(),
        '…… 선두에서 달리는 도주 ',
        tachyon.get_uma_sex_title(),
        ', 그리고 ',
        coffee.get_colored_name(),
        '.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '에게 가장 적합한 위치, 마치 실험실 안에 있는 것처럼 안락한 위치.',
      ]);
      await tachyon.print_and_wait('바로 지금, 이곳이다.');
      era.println();
      await tachyon.print_and_wait('시간이 정지하고, 세계가 변했다.');
      era.println();
      await tachyon.print_and_wait('눈앞에는 끝없이 넓고 아득한 검은 공간이 펼쳐졌다.');
      await tachyon.print_and_wait('수식과 공식들로 가득 찬 수리의 공간이다.');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '를 추월하고 싶다——변수 숙적 추가.',
      ]);
      await tachyon.print_and_wait('자신에게 가장 적합한 환경——변수 포지셔닝 추가.');
      await tachyon.print_and_wait('단련과 재능의 결합——변수 속도 추가.');
      await tachyon.print_and_wait('그리고……');
      era.println();
      await tachyon.print_and_wait('등 뒤에서, 미미한 온기와 홍차의 향기가 느껴졌다.');
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 뒤돌아보지 않았다.',
      ]);
      await tachyon.print_and_wait('뒤돌아볼 필요는 없다. 그것은 상대에 대한 불신이기 때문이다.');
      await tachyon.print_and_wait([
        '앞을 바라보며, 그리고…… 상대를 기다리며, ',
        me.sex,
        '가 반드시 자신을 쫓아와 함께 달릴 것임을 믿는다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '김이 모락모락 피어오르는 홍차가 ',
        tachyon.get_colored_name(),
        '의 앞에 놓였다.',
      ]);
      await tachyon.print_and_wait('마치 일상의 실험실 풍경처럼.');
      await tachyon.print_and_wait('모든 것이 지극히 당연하게 느껴졌다.');
      era.println();
      await tachyon.print_and_wait([
        me.sex,
        '는 당연하다는 듯이 ',
        tachyon.get_colored_name(),
        '의 곁을 지킬 것이다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(당연하다는 듯이 눈앞의 모든 난제를 해결할 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('마지막 해는 이것이다……');
      era.println();
      await tachyon.print_and_wait('마치 칠판 같은 공간 속에 U=MA2라는 공식을 새겨 넣었다.');
      await tachyon.print_and_wait('순간, 어두운 공간 속의 모든 수식이 빛을 발하기 시작했다.');
      await tachyon.print_and_wait([
        '이것이 바로, ',
        tachyon.get_colored_name(),
        '의 최종해다.',
      ]);
      await say_by_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '이 쫓아옵니다!',
        tachyon.get_colored_name(),
        '이 쫓아옵니다!',
      ]);
      await say_by_passer_by_and_wait('해설', [
        '가장 앞서던 도주 ',
        tachyon.get_uma_sex_title(),
        '는 이미 힘이 다했습니다! 마지막 격전은 역시 이 두 사람입니다!',
      ]);
      await say_by_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '! ',
        coffee.get_colored_name(),
        '! 거의 나란히 최종 직선에 진입합니다!',
      ]);
      if (check_aim_race(RaceHistory.get(25).get(), race_enum.kiku_sho, 1, 1)) {
        await say_by_passer_by_and_wait('해설', [
          '『최강의 ',
          tachyon.get_uma_sex_title(),
          '』와 『최속의 ',
          tachyon.get_uma_sex_title(),
          '』가 여기에서 승부를 가립니다!',
        ]);
      }
      await tachyon.print_and_wait('아아.');
      await tachyon.print_and_wait('분명 레이스 중임에도.');
      await tachyon.print_and_wait('이토록…… 상쾌한 기분이 들다니.');
      era.println();
      await tachyon.print_and_wait('자신이 인정한 숙적과 함께.');
      await tachyon.print_and_wait('자신의 전력을 다한다.');
      await tachyon.print_and_wait('하지만…… 아직 부족하다.');
      era.printButton('「한계를 넘어서!」', 1);
      await era.input();
      await tachyon.print_and_wait('몇 차례의 인터뷰를 거치며,');
      await tachyon.print_and_wait([
        '한계 돌파는 어느샌가 ',
        tachyon.get_colored_name(),
        '의 팬들 사이에서 「',
        tachyon.get_colored_name(),
        ' 최강」, 「',
        tachyon.get_colored_name(),
        ' 필승」 등을 넘어서는 구호가 되어 있었다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 그런 소란스러운 응원 소리조차, ',
        me.sex,
        '의 말 한마디에 비하면 너무나도 희미하게 들릴 뿐이었다.',
      ]);
      era.println();
      await tachyon.print_and_wait('음, 그래. 맞다.');
      await tachyon.print_and_wait('바로 지금이다.');
      era.println();
      await tachyon.print_and_wait('영역보다도 한 단계 더 높은 곳의 한계.');
      await tachyon.print_and_wait('한계를 뛰어넘어라.');
      await tachyon.print_and_wait([
        tachyon.get_uma_sex_title(),
        '의 한계를 넘어서.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 한계를 넘어서.',
      ]);
      await tachyon.print_and_wait('모든 것을 초월하여, 그 너머에 있는.');
      await tachyon.print_and_wait('더욱 머나먼 피안을 향해—————손을 뻗는다.');
      await say_by_passer_by_and_wait('해설', [
        '골————인! 기, 기록 경신입니다! 올해의 최종 결선! 승자는 ',
        tachyon.get_colored_name(),
        '! 신기록을 세우며 오늘 나카야마 경기장을 제패한 것은 ',
        tachyon.get_colored_name(),
        ' 입니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('끝났다.');
      await tachyon.print_and_wait('끝……난 건가?');
      era.println();
      await tachyon.print_and_wait('끝난 것이 맞을 터였다.');
      await tachyon.print_and_wait('전광판에는 이미 성적이 정렬되어 있으니까.');
      await tachyon.print_and_wait(
        '하지만 몸의 열기는 전혀 레이스가 끝난 것 같지 않았다.',
      );
      await tachyon.print_and_wait('아드레날린이 마치 끓어오르는 것처럼 끊임없이 솟구치고 있었다.');
      era.println();
      await say_by_passer_by_and_wait('관중A', '해냈구나!');
      era.println();
      await tachyon.print_and_wait(
        '갑작스러운 함성 소리에 깜짝 놀라며 현실로 돌아왔다.',
      );
      await say_by_passer_by_and_wait('관중B', '정말로, 정말로 기록을 갈아치웠어!');
      await say_by_passer_by_and_wait('관중C', '잘했다!');
      era.println();
      await tachyon.print_and_wait('경기장 전체가 환호성으로 진동했다.');
      await tachyon.print_and_wait('……그야말로, 승리한 본인보다도 다들 흥분해 있었다.');
      era.println();
      await tachyon.print_and_wait('응당, 대답해 주어야겠지.');
      await tachyon.print_and_wait('어찌 됐든, 사회적인 표현은 해야 한다.');
      await tachyon.print_and_wait('……아니, 이것은 순수한, 지지자들에 대한 감사의 마음이다.');
      await tachyon.print_and_wait('겉으로 표현해야 마땅하다.');
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait('한참을 망설이다가.');
      await tachyon.print_and_wait('겨우 손을 들어 올릴 수밖에 없었다.');
      await tachyon.print_and_wait('마치 온몸이 아직 꿈속에 잠겨 있는 것만 같았다.');
      era.println();
      await tachyon.print_and_wait('단지.');
      await tachyon.print_and_wait('그 가벼운 동작만으로도, 해일 같은 환호성을 불러일으키기엔 충분했다.');
      era.drawLine();
      era.printButton('「타키온…… 저건……!」', 1);
      await era.input();
      await era.printAndWait('함부로 단정 지을 수 없었다.');
      await era.printAndWait('본 적도 없는 것에 대해 확신을 가질 수 있는 사람은 아무도 없으니까.');
      await era.printAndWait(
        '만약 그것이 사실이라면, 이것은 그 누구도 도달한 적 없는 영역일 것이다————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait('마치 아직 꿈에서 깨어나지 못한 듯했다.');
      await era.printAndWait([
        '말로 설명하기는 어렵지만, 눈앞의 ',
        tachyon.get_colored_name(),
        '은 마치 몽유병 환자처럼 보였다.',
      ]);
      await era.printAndWait(['이런 상황이라면, ', tachyon.sex, '를 깨워야 하는 걸까?']);
      await era.printAndWait('하지만, 어떻게 해야 하지?');
      await era.printAndWait(
        '당신 자신조차 눈앞의 광경이 그저 꿈이 아닐까 의심하고 있었기 때문이다.',
      );
      await era.printAndWait(
        '이토록 길었던 3년이, 오늘 마침내 가장 완벽한 실험 결과로 마침표를 찍었다.',
      );
      era.println();
      await tachyon.say_and_wait('…………후훗.');
      await tachyon.say_and_wait('하하하하하하하!');
      era.println();
      await era.printAndWait('방금 전까지의 웃음소리가 드디어 정신을 차렸다는 안도감을 주었다면,');
      await era.printAndWait(
        '그다음에 이어진 광기 어린 웃음은 머리에 이상이라도 생긴 게 아닐까 의심케 했다.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 걱정스러운 마음에 상태를 확인하려 다가갔을 때……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '자네, 보았나? ……분명히 보았겠지! ',
        callname,
        '!',
      ]);
      await tachyon.say_and_wait(
        '이것이 바로 실험의 성과다…… 내가 보여주었어! 이것이 바로, 한계 너머의 세계다!',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 작년 11월에 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        '보답으로, 자네에게 더욱 넓은 세계를 보여주도록 하지.',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '는 정말로 해냈다.']);
      await era.printAndWait('매 레이스마다, 목표를 향해 한 걸음씩 다가갔다.');
      await era.printAndWait('그리고 지금.');
      await era.printAndWait('두 사람은 정말로 더 넓은, 한계 너머의 세계를 목격했다.');
      era.printButton('「응…… 우리 정말, 해냈어.」', 1);
      await era.input();
      await era.printAndWait([
        '이것은 ',
        me.get_colored_name(),
        '이 처음으로 목격한, 세상 그 무엇보다, 심지어 ',
        tachyon.get_colored_name(),
        '의 달리기보다도 더욱 눈부시게 빛나는 것이었다.',
      ]);
      await era.printAndWait([
        '그것은 바로 지금, ',
        tachyon.get_colored_name(),
        '의 얼굴에 피어난 미소였다.',
      ]);
    }
    add_event(
      event_hooks.week_end,
      new EventObject(32, cb_enum.edu).set_arg('ending'),
    );
  };
};