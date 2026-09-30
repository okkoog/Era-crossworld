const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const plana = require('#/event/edu/edu-events-32/week-start-10-plana');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { common_future } = require('#/event/edu/edu-events-32/snippets');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 48] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    era.set('cflag:32:축제이벤트표시', 0);
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await print_event_name('성탄 전야의 약속', tachyon);
      era.println();
      await era.printAndWait([
        '최근 ',
        tachyon.get_colored_name(),
        '의 상태가 어딘지 모르게 평소와 달랐다.',
      ]);
      await era.printAndWait([
        '줄곧 혼자서 울적해 보였고, ',
        coffee.get_colored_name(),
        '의 훈련에도 따라오지 않았으며, 심지어 실험조차 거의 하지 않았다.',
      ]);
      await era.printAndWait([
        '실험의 최대 피해자인 ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '의 입장에서는 딱히 나쁜 일이라고는 할 수 없었지만, 그래도 역시 조금 걱정이 되었다.',
      ]);
      await era.printAndWait([
        '문득, 상점가에서 흘러나오는 캐럴 소리가 ',
        me.get_colored_name(),
        '의 귀에 닿았다.',
      ]);
      await era.printAndWait([
        '좋아, 크리스마스를 핑계 삼아 ',
        tachyon.sex,
        '에게 외출해서 이야기 좀 하자고 불러내 보자.',
      ]);
      era.drawLine();
      await era.printAndWait('성탄 전야의 상점가는 평소보다 훨씬 밝게 빛나며 열기로 가득했다.');
      await era.printAndWait('그 이유는 단순히 크리스마스 때문만이 아니라……');
      await say_by_passer_by_and_wait('상점가 아저씨', [
        '아리마 기념 예측! 내일 열릴 아리마 기념의 직전 예측입니다!',
      ]);
      await say_by_passer_by_and_wait('관광객A', [
        '내일 아리마 기념은 어떻게 되려나…… 그래도 이기는 건 역시 ',
        coffee.get_colored_name(),
        '겠지?',
      ]);
      await say_by_passer_by_and_wait('관광객B', [
        '재팬 컵 때의 모습은 정말 너무 강했어! ……사상 최강이라고 해도 과언이 아니지.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('계속 침묵을 지키는 것도 방법은 아니었다. 이럴 때는 뭐라도 말을 거는 게 좋겠지.');
      era.printButton('「내일이 아리마 기념이네. 하지만 카페라면 문제없을 거야.」', 1);
      era.printButton('「저쪽의 하치미가 크리스마스 특가 판매를 하는 모양이야.」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, '는 여전히 아무 말도 하지 않았다.']);
        await era.printAndWait([
          '분위기가 어색해진 것을 느낀 ',
          me.get_colored_name(),
          '은(는) 어쩔 수 없이 ',
          coffee.get_colored_name(),
          '의 최근 훈련 상황에 대해 계속 이야기를 이어갔다.',
        ]);
      } else {
        await tachyon.say_and_wait('……그럼, 한 잔 마셔볼까.');
        era.println();
        await era.printAndWait([
          '가장 달콤한 하치미를 마시자 ',
          tachyon.get_colored_name(),
          '의 기분이 조금은 풀린 듯 보였다.',
        ]);
        await era.printAndWait([
          '덧붙여서 ',
          me.get_colored_name(),
          '도 분위기를 맞추기 위해 가장 단 것을 주문했지만……',
        ]);
        await era.printAndWait([
          '단 한 모금만으로 ',
          me.get_colored_name(),
          '은(는) 이가 아려오는 것을 느꼈다.',
        ]);
        await era.printAndWait([
          '기쁘게 하치미를 마시는 ',
          tachyon.get_colored_name(),
          '의 모습을 보며, ',
          me.get_colored_name(),
          '은(는) 조만간 기회를 봐서 ',
          tachyon.sex,
          '를 치과에 데려가야 할지 고민하기 시작했다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '얼마 지나지 않아 ',
        me.get_couple_title(),
        '은 상점가 중앙의 크리스마스트리 앞에 도착했다.',
      ]);
      await era.printAndWait([
        '갑자기 불어온 강풍이 주변에 있던 아리마 기념 관련 보도 기사를 ',
        me.get_couple_title(),
        '의 앞으로 날려 보냈다.',
      ]);
      await era.printAndWait([
        '신문에는 재팬 컵 당시의 ',
        coffee.get_colored_name(),
        '의 모습이 늠름하게 실려 있었다.',
      ]);
      era.printButton(
        '「재팬 컵…… 그때의 카페는 정말 대단했지. 가당치 않은 생각이지만, 만약 타키온과……」',
        1,
      );
      era.printButton('「타키온! 저기 솜사탕 가게가 정말 대단해 보여!」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await era.printAndWait([
          '방금 전 아리마 기념 이야기를 꺼냈을 때 ',
          tachyon.get_colored_name(),
          '의 기분이 별로 좋지 않아 보였다.',
        ]);
        await era.printAndWait([
          '그래서 ',
          me.get_colored_name(),
          '은 화제를 돌려 재팬 컵 이야기를 꺼냈다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 숙원이 이루어진 날의 이야기라면 분명 ',
          tachyon.get_colored_name(),
          '의 기운을 북돋아 줄 수 있을 것이라 생각했다.',
        ]);
        await era.printAndWait('하지만……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 여전히 아무 말도 하지 않았다.',
        ]);
        await era.printAndWait('이것도 아니었던 걸까……');
      } else {
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 크리스마스트리 옆의 솜사탕 가게를 바라보았다. 장인의 솜씨 아래에서 여러 가지 모양의 푹신푹신한 동물들이 순식간에 만들어지고 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……아니, 나는……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 말을 마치기도 전에, 가게 주인은 크고 푹신한 모르모트 모양 솜사탕을 ',
          tachyon.get_colored_name(),
          '의 손에 쥐여주었다.',
        ]);
        await get_chara_talk(33).say_as_unknown_and_wait(
          '기분이 좋지 않을 때는 기억해 둬. 오직 푹신푹신한 것만이 너를 배신하지 않아.',
        );
        if (era.get('cflag:33:모집상태') === recruit_flags.yes) {
          await era.printAndWait('가게 주인이 왠지 모르게 낯이 익었다.');
          await era.printAndWait('……아마 그냥 착각이겠지.');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 멍하니 솜사탕 모르모트를 받아들었고, 돌려주지도 무엇이라 말하지도 않았다.',
        ]);
        await era.printAndWait([
          '그러고는 ',
          tachyon.sex,
          '는 입술을 살짝 열어 아주 조금 베어 물었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……푹신푹신하네.');
        era.println();
        await era.printAndWait([
          '어째서인지 가게 주인은 그 말을 듣고 자랑스럽게 가슴을 폈다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '마침내 ',
        me.get_couple_title(),
        '은 상점가 끝자락까지 걸어갔다.',
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        '은 길가에 있는 서점을 보았다. 가게 안의 가장 눈에 띄는 곳에는 지난 잡지 몇 권이 진열되어 있었다.',
      ]);
      await era.printAndWait('지난 잡지라고 해도…… 아주 오래된 것은 아니었다.');
      await era.printAndWait(
        '레이스 정보로서는 유효 기간이 지났을지 모르지만, 시간상으로는 고작 두 달 전의 잡지였다.',
      );
      await era.printAndWait([
        '———— 그것은 ',
        tachyon.get_colored_name(),
        '의 개선문상 우승 후 인터뷰가 실린 잡지였다.',
      ]);
      await say_by_passer_by_and_wait('서점 주인', '어서 오세요!');
      era.printButton('「이건……」', 1);
      era.printButton('「개선문상 특집 잡지인가요?」', 2);
      await era.input();
      await era.printAndWait([
        '서점 주인은 ',
        me.get_colored_name(),
        '의 뒤에서 고개를 숙이고 있는 ',
        tachyon.get_colored_name(),
        '을 눈치채지 못했다.',
      ]);
      await era.printAndWait('주인은 잡지를 보며 신나게 떠들기 시작했다.');
      await say_by_passer_by_and_wait('서점 주인', [
        '오! 이 잡지들 말인가요? 제가 특별히 여기에 진열해 둔 겁니다!',
      ]);
      if (check_aim_race(RaceHistory.get(32).get(), race_enum.prix_lat, 2, 1)) {
        await say_by_passer_by_and_wait('서점 주인', [
          '정말 대단했죠. 일본의 ',
          tachyon.get_uma_sex_title(),
          '가 드디어 세계의 개선문상을 제패했으니까요! 당연히 기념으로 장식해 둬야죠!',
        ]);
      }
      await say_by_passer_by_and_wait('서점 주인', [
        '내가 보기엔 바깥 사람들은 아무것도 몰라요. ',
        tachyon.get_colored_name(),
        '이야말로 최강이라고요! 은퇴하지만 않았어도 저 ',
        coffee.get_colored_name(),
        ' 같은 애들은 ',
        tachyon.sex,
        '의 상대도 안 됐을 텐데!',
      ]);
      era.printButton('「그건 모르는 일이죠……」', 1);
      era.printButton('「당연하죠, 타키온이 최강입니다.」', 2);
      if ((await era.input()) === 1) {
        edu_marks.chris++;
        await era.printAndWait(['재팬 컵 이전이었다면 확실히 그랬을지도 모른다.']);
        await era.printAndWait([
          '하지만 재팬 컵 이후의 ',
          coffee.get_colored_name(),
          '는 이미 ',
          tachyon.get_colored_name(),
          ' 조차 인정한 완성체였다.',
        ]);
        await era.printAndWait([
          '그런 상태의 ',
          coffee.get_colored_name(),
          '와 ',
          tachyon.get_colored_name(),
          '이 만약 다시 한번 승부를 겨룬다면…… 승패는 정말 알 수 없었을 것이다.',
        ]);
        await era.printAndWait([
          '그렇다, 비록 ',
          coffee.get_colored_name(),
          '가 한계를 뛰어넘었다고 해도…… 내심 믿고 있었다. ',
          tachyon.get_colored_name(),
          '이라면 분명 ',
          tachyon.sex,
          '와 대등하게 겨룰 수 있을 것이라고.',
        ]);
        await era.printAndWait([
          '결코 ',
          tachyon.sex,
          ' 스스로 말하던 걸림돌 같은 존재가 아니라고 말이다.',
        ]);
        await say_by_passer_by_and_wait(
          '서점 주인',
          '쳇, 뭘 좀 아는 손님이 온 줄 알았더니만, 이 사람도 아무것도 모르는구먼.',
        );
        era.println();
        await era.printAndWait([
          '가게 주인의 말을 들으며 ',
          me.get_colored_name(),
          '은(는) 쓴웃음을 지을 수밖에 없었다.',
        ]);
        await era.printAndWait([
          '그때 문득 ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이(가) 잡지 더미로 다가가는 것을 보았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……아저씨, 이거 한 권 주세요.');
        await say_by_passer_by_and_wait('서점 주인', [
          '오오, ',
          tachyon.sex_code - 1 ? '아가씨' : '총각',
          ', 보는 눈이 있네!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 자신의 진짜 목소리를 들키지 않으려 애써 목소리를 낮게 깔았다.',
        ]);
        await era.printAndWait(
          '하지만 이 잡지는…… 분명 당시에 샘플을 받았을 텐데, 왜 굳이 다시 사는 걸까?',
        );
        era.println();
        await tachyon.say_and_wait(
          '……어쩔 수 없지. 이 잡지의 가치를 모르는 사람이 있으니, 나라도 소중히 간직해야겠어.',
        );
        era.println();
        await era.printAndWait('에?');
        await era.printAndWait([
          '자신을 향해 분노가 섞인 눈길을 몰래 보내는 ',
          tachyon.get_colored_name(),
          '을 보며, ',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 자신이 또 무엇을 잘못 말한 것인지 고민하기 시작했다.',
        ]);
      } else {
        era.println();
        await tachyon.say_and_wait('……!');
        era.println();
        await era.printAndWait('그걸 굳이 물어볼 필요가 있을까?');
        await era.printAndWait('비록 가정이 무의미하다 할지라도.');
        await era.printAndWait([
          '그렇기에 더욱 가정을 멈출 수 없게 만드는 ',
          tachyon.get_uma_sex_title(),
          '였다.',
        ]);
        await era.printAndWait([
          '무한한 가능성과 상상을 불러일으키는 ',
          tachyon.get_uma_sex_title(),
          '.',
        ]);
        await era.printAndWait(['그것이 바로 ', tachyon.get_colored_name(), '이었다.']);
        await say_by_passer_by_and_wait('서점 주인', [
          '역시! 손님이 들어올 때부터 내 느낌이 왔어. 이분은 분명 제대로 아는 분이라고 말이야!',
        ]);
        await say_by_passer_by_and_wait('서점 주인', [
          '내 말이 그 말입니다! ',
          tachyon.get_colored_name(),
          '이야말로 최강이죠! 저 ',
          coffee.get_colored_name(),
          ' 따위는 상대도 안 됐을 겁니다!',
        ]);
        await say_by_passer_by_and_wait('서점 주인', [
          '사실대로 말하자면, 저는 작년 사츠키상 때부터 ',
          tachyon.get_colored_name(),
          '을 지켜봐 왔습니다! 그 주법은…… 정말이지 ',
          tachyon.get_uma_sex_title(),
          '의 한계라고 해도 과언이 아니었죠!',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) 주인은 흥에 겨워 ',
          tachyon.get_colored_name(),
          '의 레이스에 대해 한참 동안 대화를 나누었다.',
        ]);
        await era.printAndWait([
          '결국 뒤에 서 있던 ',
          tachyon.get_colored_name(),
          '이 참다못해 ',
          me.get_colored_name(),
          '을(를) 잡아끌며 가게 밖으로 나가려 했다.',
        ]);
        await era.printAndWait([
          '어째서인지 ',
          tachyon.sex,
          '의 얼굴이 조금 붉어 보였지만…… 아마 조명 탓이겠지.',
        ]);
      }
      era.println();
      if (edu_marks.chris >= 2) {
        await era.printAndWait([
          '어느덧 ',
          me.get_couple_title(),
          '은 강둑 근처에 다다랐다.',
        ]);
        await era.printAndWait(
          '어둡고 고요한 강가는 멀리 보이는 상점가의 불빛, 그리고 캐럴 소리와 대조를 이루고 있었다.',
        );
        era.println();
        await tachyon.say_and_wait('……눈이 내리네.');
        era.println();
        await era.printAndWait('확실히 주변에는 가느다란 눈송이가 흩날리기 시작했다.');
        await era.printAndWait(
          '……이렇게 늦은 밤, 그것도 눈이 내리는 날 이런 곳까지 오는 건 역시 조금 위험할지도 모르겠다.',
        );
        await era.printAndWait([
          '비록 ',
          tachyon.get_colored_name(),
          '이 우울해하던 원인은 알아내지 못했지만, 오늘은 너무 늦었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 오늘은 이만 돌아가자고 제안하려던 찰나……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………후우.');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '에게 포옹당했다.',
        ]);
        await era.printAndWait('아무런 전조도 없는, 너무나도 갑작스러운 포옹이었다.');
        era.printButton('「타키온……?」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 무엇인가 말하려 했지만, 품 안에서 미세하게 떨리는 몸, 그리고 어깨에 기댄 머리와 어딘지 모르게 뜨겁게 젖어오는 어깨의 감촉을 느끼고, 지금은 입을 열지 말아야 한다는 것을 깨달았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('미안하네…… 하지만…… 잠시만, 아주 잠시만이라도 좋으니……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 멍한 상태로 ',
          tachyon.get_colored_name(),
          '이 품 안에서 흐느끼게 두었다.',
        ]);
        await era.printAndWait('머릿속은 온통 의문으로 가득했다.');
        await era.printAndWait([tachyon.get_colored_name(), '에게 대체 무슨 일이 있었던 것일까.']);
        era.drawLine();
        await tachyon.print_and_wait('사실 이미 짐작하고 있었다.');
        await tachyon.print_and_wait('이번 외출은 그저 자신의 짐작을 다시 한번 확인하기 위함이었다.');
        await tachyon.print_and_wait('하지만 실제로 마주하게 되니 가슴 한구석이 찌릿하게 아파왔다.');
        era.println();
        await tachyon.print_and_wait('조금 전까지 나누었던 대화만 보더라도 알 수 있었다.');
        await tachyon.print_and_wait([
          me.sex,
          '의 화제는 세 마디를 넘기지 못하고 늘 ',
          t_call_c,
          '의 이야기로 돌아갔고, 눈동자는 ',
          tachyon.sex,
          '에 대한 기대감으로 가득 차 있었다.',
        ]);
        await tachyon.print_and_wait([
          '언제나 모든 일을 ',
          tachyon.get_colored_name(),
          '을 최우선으로 생각하던 ',
          callname,
          '은 이제 더 이상 존재하지 않았다.',
        ]);
        await tachyon.print_and_wait([
          '지금의 ',
          me.sex,
          '는 ',
          t_call_c,
          '의 「',
          sys_get_colored_callname(25, 0),
          '」인 것이다.',
        ]);
        await tachyon.print_and_wait('이성적으로나 도의적으로나 그것이 가장 올바른 선택이었다.');
        await tachyon.print_and_wait(
          '자신은 그저 주법을 이용해 그를 매혹하고 편리한 도구처럼 대했던 비겁한 마녀일 뿐이니까.',
        );
        await tachyon.print_and_wait([
          '온갖 역경을 딛고 끝내 한계를 넘어선 ',
          coffee.get_uma_sex_title(),
          '.',
        ]);
        await tachyon.print_and_wait([
          '자신의 달리기로 마녀가 ',
          me.sex,
          '에게 걸었던 저주를 풀고, 마침내 두 사람이 행복하게 살아가는 이야기.',
        ]);
        await tachyon.print_and_wait('이것이야말로 이야기의 가장 완벽한 결말임이 틀림없었다.');
        era.println();
        await tachyon.print_and_wait('그러니……');
        era.println();
        await tachyon.say_and_wait('마지막으로…… 나를, 마지막으로 한 번만 사랑해 주게.');
        await tachyon.say_and_wait([
          '단 한 번이면 되네…… 그 후로는 자네와 ',
          t_call_c,
          '의 사이를 절대 간섭하지 않을 테니.',
        ]);
        era.println();
        await tachyon.print_and_wait('온갖 핑계와 이유를 대며 그저 하룻밤의 유희만을 갈구한다.');
        await tachyon.print_and_wait(
          '비참하게도 마지막까지 자신은 이런 식의 핑계밖에 댈 수 없었다.',
        );
        await tachyon.print_and_wait([
          '마치 협박과도 같은 어조로 ',
          me.sex,
          '가 마지막 자비를 베풀어 주기를 바랐다.',
        ]);
        await tachyon.print_and_wait('딱 한 번이면 충분했다.');
        await tachyon.print_and_wait([
          '그러면 자신은 깨끗이 포기하고 진심으로 ',
          me.sex,
          '들을 축복해 줄 수 있을 것이다.',
        ]);
        await tachyon.print_and_wait(
          '머릿속에서 들려오는 「정말 네가 포기할 수 있을 것 같으냐」라는 속삭임을 무시한 채.',
        );
        await tachyon.print_and_wait('그런 식으로 스스로를 설득하고 있었다.');
        era.println();
        await era.printAndWait([
          '그런 ',
          tachyon.get_colored_name(),
          '을 보며, ',
          me.get_colored_name(),
          '은(는) 선택했다.',
        ]);
        era.printButton('「껴안는다」', 1);
        era.printButton('「입을 맞춘다」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait('순간, 더 뱉어내려던 말들이 가로막혔다.');
          await tachyon.print_and_wait(['……', me.sex, '가 자신을 역으로 껴안아 주었다.']);
          await tachyon.print_and_wait('하고 싶었던 말들이 목구멍에 걸려 나오지 않았다.');
        } else {
          await tachyon.print_and_wait('순간, 더 뱉어내려던 말들이 가로막혔다.');
          await tachyon.print_and_wait('……다정하고, 따스한 감촉이었다.');
          await tachyon.print_and_wait('마치 겨울의 추위를 완전히 녹여버리는 듯한 크리스마스의 입맞춤이었다.');
        }
        era.println();
        await tachyon.print_and_wait('아니…… 자신의 뜻은 이런 것이 아니었다.');
        await tachyon.print_and_wait([
          '아니면…… ',
          tachyon.get_colored_name(),
          '은 이제 사랑받을 자격조차 남지 않은 것일까?',
        ]);
        await tachyon.print_and_wait('자포자기하는 심정으로 그런 생각이 문득 머릿속을 스쳤다.');
        era.println();
        await tachyon.say_and_wait(['으응…… ', callname]);
        era.println();
        await tachyon.print_and_wait('그렇게 생각하던 바로 그 순간.');
        await tachyon.print_and_wait([
          '마치 자신의 마음속 잡념을 쫓아버리려는 듯, ',
          me.sex,
          '는 포옹의 힘을 더 굳건히 했다.',
        ]);
        era.printButton('「적어도, 내일 아리마 기념까지는 지켜봐 줘.」', 1);
        era.printButton('「반드시 타키온에게 제대로 설명해 줄게.」', 2);
        await era.input();
        await tachyon.print_and_wait('설명…… 대체 어떤 설명인가.');
        await tachyon.print_and_wait('관계의 종말을 알리는…… 그런 설명인 것일까?');
        await tachyon.print_and_wait([
          me.sex,
          '의 눈동자를 똑바로 바라보았지만, 그 어떤 의미도 읽어낼 수 없었다.',
        ]);
        era.println();
        await tachyon.print_and_wait('……그것도 나쁘지 않겠지.');
        await tachyon.print_and_wait([
          '만약 마지막으로 다시 한번 ',
          me.sex,
          '의 그 뜨거운 눈빛을 볼 수만 있다면.',
        ]);
        await tachyon.print_and_wait([
          '……비록 그 시선이 향하는 대상이 더 이상 ',
          tachyon.get_colored_name(),
          '이 아닐지라도.',
        ]);
        era.println();
        flags.wait_flag = sys_like_chara(32, 0, -20, true, 10);
      } else {
        await tachyon.say_and_wait('……아, 눈이 오네.');
        era.println();
        await era.printAndWait('문득 하늘에서 하얀 눈송이가 흩날리기 시작했다.');
        await era.printAndWait([
          '이제 그만 돌아가야 하는 건 아닐까…… ',
          me.get_colored_name(),
          '이(가) 그런 생각을 하던 찰나, ',
          tachyon.get_colored_name(),
          '이 ',
          me.get_colored_name(),
          '의 옷자락을 잡아당겼다.',
        ]);
        era.println();
        await tachyon.say_and_wait('어디 가서 좀 앉아 있지.');
        era.println();
        await era.printAndWait('그렇지, 오늘의 목표를 아직 달성하지 못했다.');
        await era.printAndWait([
          '가게를 찾아 잠시 앉아서 ',
          tachyon.get_colored_name(),
          '이 기분이 좋지 않은 이유를 물어보자.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 스스로를 다독였다.']);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '? 안 앉는 건가?']);
        era.printButton('「……아니, 저기 말이야.」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '그렇게 우물쭈물하는 건 자네답지 않은걸…… 아니면, 무슨 말 못 할 사정이라도 있는 건가?',
        );
        era.println();
        await era.printAndWait('아니, 말 못 할 사정이라기보다는……');
        era.printButton('「학생이랑 같이 선술집에 들어가는 건 역시 NG겠지.」', 1);
        era.printButton('「미성년자랑 선술집에 들어가는 건 불법이잖아.」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 ',
          me.get_colored_name(),
          '을(를) 데리고 들어가려는 곳은 다름 아닌 상점가 끝자락의 선술집이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '이미 은퇴했으니 상관없지 않나…… 나도 이런 곳은 처음이긴 하지만, 별문제 없을 거네.',
        );
        await tachyon.say_and_wait([
          '아니면 ',
          callname,
          ', 자네는 그 나이 먹도록 선술집조차 들어갈 용기가 없는 건가?',
        ]);
        era.printButton('「문제는 은퇴 여부가 아니라 학생이라는 점이라고!」', 1);
        era.printButton('「……도발해도 소용없어.」', 2);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 거절하고 ',
          tachyon.get_colored_name(),
          '을 데리고 돌아가려 했을 때, ',
          tachyon.get_colored_name(),
          '은 이미 주저 없이 가게 안으로 들어가 버렸다.',
        ]);
        era.println();
        await tachyon.say_and_wait('자자, 어서 오게. 야식이라도 먹는 셈 치고…… 뭐 그런 거지.');
        await say_by_passer_by_and_wait('점주', '어서 오세요~~');
        era.println();
        await era.printAndWait([
          '가게 문이 열리자 안쪽의 훈훈한 온기가 바깥의 찬 공기와 대비되며 ',
          me.get_colored_name(),
          '의 발길을 붙잡았다.',
        ]);
        era.printButton('「……잠시 앉아 있는 정도는 괜찮을지도.」', 1);
        await era.input();
        await era.printAndWait([
          '가게 안으로 들어온 ',
          me.get_colored_name(),
          '은(는) 뜻밖의 사실을 발견했다.',
        ]);
        await era.printAndWait(
          '바쁘게 움직이는 주인장의 뒤편으로 길고 밤색인 꼬리가 보였다.',
        );
        era.println();
        await tachyon.say_and_wait('……호오, 이런 곳에……');
        era.println();
        await say_by_passer_by_and_wait(
          '점주',
          '어서 오세요! ……근데 손님, 아무래도 학생 같은데?',
        );
        era.println();
        await tachyon.say_and_wait(
          '어라, 그렇게 보이나? 하지만 난 이미 은퇴한 몸이라네.',
        );
        era.println();
        await era.printAndWait('아니, 은퇴했다고 해서 학생이 아닌 건 아니잖아.');
        await era.printAndWait('태클을 걸고 싶었지만, 점주는 고개를 끄덕이며 그럼 괜찮다고 말했다.');
        await era.printAndWait('아니…… 뭐가 괜찮다는 건데.');
        era.println();
        await say_by_passer_by_and_wait(
          '점주',
          '게다가 옆에 계신 분은 트레이너인 것 같네. 트레이너가 동행한다면 문제없지.',
        );
        await tachyon.say_and_wait('……오, 딱 보면 아는 건가?');
        era.println();
        await era.printAndWait([
          '문제투성이지만…… 그것보다 ',
          me.get_colored_name(),
          '도 주인이 어떻게 자신이 트레이너라는 걸 알아챘는지 궁금했다.',
        ]);
        await say_by_passer_by_and_wait('점주', [
          me.sex,
          '의 눈빛 말이야. 우리 남편이랑 똑같거든. 자기 담당 우마무스메만 보면 정신을 못 차리는 그 눈빛.',
        ]);
        era.println();
        await era.printAndWait('그, 그게 무슨 소리야?');
        await era.printAndWait('내가 무슨 변태라도 된다는 건가.');
        await say_by_passer_by_and_wait(
          '점주',
          '후후, 그런 눈빛이야말로 좋은 남편의 필수 조건이지~~ 절대 놓치지 말라고.',
        );
        era.println();
        await era.printAndWait('점주는 말을 마치고 다른 손님을 맞이하러 갔다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 전전긍긍하며 ',
          tachyon.get_colored_name(),
          '을 바라보았다. 분명 ',
          tachyon.sex,
          '에게 비웃음을 살 것이라 생각하며……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('무슨 생각을 하고 있는 것일까.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 표정은 마치 넋이 나간 것처럼 보였다.',
        ]);
        era.printButton('「타키온?」', 1);
        await era.input();
        await tachyon.say_and_wait('……아, 응, 흠흠. 아무것도 아니네.');
        era.println();
        await era.printAndWait([
          '정신을 차린 뒤 ',
          tachyon.get_colored_name(),
          '의 얼굴은 마치 시간차로 가열되는 도시락처럼.',
        ]);
        await era.printAndWait([
          '순식간에 붉게 달아올랐고, ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 얼굴에서 증기가 뿜어져 나오는 것을 본 것만 같았다.',
        ]);
        await era.printAndWait([
          '민망함을 감추기 위해 ',
          tachyon.sex,
          '는 가게 안의 분위기로 시선을 돌렸다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '도 그쪽으로 눈길을 보냈다.']);
        era.println();
        await era.printAndWait('점주는 이리저리 바쁘게 움직이며 손님들을 대접하고 있었다.');
        await era.printAndWait([
          '가게 안의 손님들은 아리마 기념 이야기를 나누기도 했지만, 그것이 주된 화제는 아니었다.',
        ]);
        await era.printAndWait('매일의 날씨처럼, 심심할 때 한두 마디 주고받는 가벼운 주제일 뿐이었다.');
        await era.printAndWait([
          '그 증거로, 지금까지 그 누구도 ',
          tachyon.get_colored_name(),
          '을 알아보지 못했다.',
        ]);
        await era.printAndWait([
          '트레센 학원 근처의 상점가이면서, 올해 상반기 가장 유명했던 ',
          tachyon.get_uma_sex_title(),
          '를 알아보지 못한다는 것은 지극히 이례적인 상황이었다.',
        ]);
        era.println();
        await era.printAndWait([
          '그 모습을 보며 ',
          me.get_colored_name(),
          '은(는) 문득 ',
          tachyon.get_uma_sex_title(),
          '인 점주를 떠올렸다.',
        ]);
        await era.printAndWait([
          '남편이 트레이너라고 했다면, 아마 ',
          tachyon.sex,
          '도 예전에는 레이스 ',
          tachyon.get_uma_sex_title(),
          '였을 것이다.',
        ]);
        await era.printAndWait('은퇴 후에 이렇게 레이스와는 거의 무관한 삶을 살아가고 있다.');
        await era.printAndWait('참으로 평범하고, 지루하며, 그리고…… 평온한 삶이다.');
        era.println();
        await tachyon.say_and_wait('……이것도, 하나의 가능성인 걸까.');
        era.println();
        await era.printAndWait([tachyon.get_uma_sex_title(), '의 가능성.']);
        await era.printAndWait([
          '그것은 ',
          tachyon.get_colored_name(),
          '이 늘 입에 담던 말이었다.',
        ]);
        await era.printAndWait([
          '……하지만, ',
          tachyon.get_uma_sex_title(),
          '라고 해서 모두가 레이스 ',
          tachyon.get_uma_sex_title(),
          '가 되는 것은 아니다.',
        ]);
        await era.printAndWait([
          '설령 레이스 ',
          tachyon.get_uma_sex_title(),
          '였다 하더라도, 경기장이 아닌 다른 길을 걷는 것을 선택할 수 있다.',
        ]);
        era.println();
        await era.printAndWait([
          '그렇다면, 이런 가능성도 ',
          tachyon.get_colored_name(),
          '에게 적용될 수 있는 것일까?',
        ]);
        await era.printAndWait([
          '순간 ',
          me.get_colored_name(),
          '은 ',
          tachyon.get_colored_name(),
          '이(가) 소침해졌던 이유를 이해할 수 있었다.',
        ]);
        await common_future(tachyon, callname);
        await era.printAndWait(['그녀와 함께 꾸려나가는 두 사람만의 생활.']);
        await era.printAndWait('……하지만, 지금은 안 된다.');
        era.printButton('「……내일 아리마 기념이 끝날 때까지 기다려 줄래?」', 1);
        era.printButton('「내일 아리마를 다 보고 나서 다시 한번 물어봐 줘.」', 2);
        await era.input();
        await era.printAndWait('경기장을 떠나는 것 자체도 선택할 수 있는 하나의 가능성이다.');
        await era.printAndWait([
          '하지만 결코 ',
          tachyon.get_colored_name(),
          '의 지금 모습처럼, 도망치듯 멀어지는 식이어선 안 된다.',
        ]);
        await era.printAndWait('……부디 내일의 아리마 기념이 그녀의 생각을 바꿔놓기를 바랄 뿐이었다.');
        flags.wait_flag = sys_like_chara(32, 0, 100, true, 20);
      }
    } else {
      await plana(tachyon, me, callname, relation, love);
      flags.wait_flag = get_attr_and_print_in_event(
        32,
        undefined,
        0,
        JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.4}}`),
      );
      flags.wait_flag = sys_like_chara(32, 0, 100);
    }
  };
};