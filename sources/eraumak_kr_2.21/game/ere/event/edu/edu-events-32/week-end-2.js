const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 47] = async (tachyon, me, callname) => {
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('흐릿해진 광휘', tachyon);
    era.println();
    await tachyon.say_and_wait(['그나저나, 내일이면 벌써 아리마 기념이군 그래, ', callname, '.']);
    era.println();
    await era.printAndWait([
      '달빛 아래에서 훈련하던 ',
      tachyon.get_colored_name(),
      '이 무심하게 ',
      me.get_colored_name(),
      '에게 말을 건넸다.',
    ]);
    await era.printAndWait([
      '국화상이 끝난 이래로, ',
      me.get_couple_title(),
      '은 줄곧 밤마다 트레이닝 및 지도를 이어가는 관계를 유지해 왔다.',
    ]);
    await era.printAndWait([
      '처음의 어색했던 대화는 두 달간의 접촉과 소통을 거치며 점차 예전처럼 친숙하게 돌아와 있었다.',
    ]);
    await era.printAndWait(
      '조금 과한 말일지도 모르지만, 현재의 상태에 대해 스스로 어떤 기분을 느끼느냐고 묻는다면.',
    );
    await era.printAndWait('그것은 아마도 즐거움이리라.');
    await era.printAndWait([
      '낮에는 ',
      coffee.get_colored_name(),
      '를 위해 노력하고, 밤에는 ',
      tachyon.get_colored_name(),
      '의 회복을 돕는다.',
    ]);
    await era.printAndWait([
      '업무량은 이전보다 늘어났지만, 국화상 전의 ',
      me.get_colored_name(),
      '과(와) 비교하면 심리적인 부담은 하루하루 가벼워지고 있었다.',
    ]);
    await era.printAndWait([
      '…………그 때문인지, ',
      me.get_colored_name(),
      '은(는) 시간의 흐름을 거의 잊고 있었다.',
    ]);
    era.println();
    if (sys_reg_race(25).curr.race === race_enum.arim_kin) {
      await tachyon.say_and_wait([
        '내일은 드디어 ',
        t_call_c,
        '의 올해 마지막 레이스군.',
      ]);
    } else {
      await tachyon.say_and_wait('내일로 올해의 시즌도 끝이로군.');
    }
    era.println();
    await era.printAndWait(['아리마 기념이 끝나면.']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 차마 마주하기 두려워했던, 내년이 찾아온다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '내년에…… ',
      t_call_c,
      '이 출주하려는 레이스라면…… 나는 전력을 다해 하나도 빠짐없이 따라붙을 생각이네.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 눈동자를 바라보았다. 그 안에는 ',
      coffee.get_colored_name(),
      '를 위해 타오르는 각오와 열정이 서려 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……그러니, 내년에도 부디 잘 부탁하네.');
    era.println();
    await era.printAndWait('광채는 없었다.');
    await era.printAndWait([
      '지금껏 ',
      me.get_colored_name(),
      '의 두 눈을 태울 듯했던 ',
      tachyon.get_colored_name(),
      '의 눈 속 광채는, 이제는 거의 보이지 않을 정도로 흐릿해져 있었다.',
    ]);
    era.printButton('「내년에도 부디…… 잘 부탁해.」', 1);
    await era.input();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 아리마 기념 직후 기자회견을 열 예정이다.',
    ]);
    await era.printAndWait('레이스 복귀 선언 소식은 아마 사회적으로 큰 파장을 불러일으킬 것이다.');
    await era.printAndWait([
      '하지만 그런 후폭풍은 지금의 ',
      me.get_couple_title(),
      ' 두 사람에게는 아무런 상관도 없는 일이었다.',
    ]);
  };

  handlers[95 + 15] = async (tachyon, me, callname, flags) => {
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    await print_event_name('깜빡이는 광자', tachyon);
    await era.printAndWait('심야의 훈련장.');
    await era.printAndWait('아무도 없어야 할, 아니 있어서는 안 될 이 시간에……');
    era.println();
    await tachyon.say_and_wait('……하하, 사람이 정말 많군 그래……');
    era.println();
    await era.printAndWait('의외로 경기장에는 자율 트레이닝을 하는 사람들로 가득했다.');
    await era.printAndWait([
      'G1 전선이 시작되면서 긴장한 ',
      tachyon.get_uma_sex_title(),
      '들이 제멋대로 훈련에 매진하는 것은 이 시기 트레센의 흔한 풍경이었다.',
    ]);
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '아, 타키온 선배…… 어라, 트레이너 ',
      me.get_adult_sex_title(),
      '!?',
    ]);
    era.println();
    await era.printAndWait([
      '멀리서 ',
      tachyon.get_colored_name(),
      '을 보고 인사를 하려 다가오던 후배는, ',
      tachyon.sex,
      '의 등 뒤에 숨어있던 ',
      me.get_colored_name(),
      '을(를) 발견하자마자 걸음을 멈추고 굳어버렸다.',
    ]);
    await era.printAndWait('아무리 그래도 자율 트레이닝은 권장되는 행위가 아니니까……');
    await era.printAndWait([
      '하지만 담당 ',
      tachyon.get_uma_sex_title(),
      '의 자율 트레이닝에 동행한 ',
      me.get_colored_name(),
      ' 역시 ',
      tachyon.sex,
      '들을 나무랄 자격은 딱히 없었다.',
    ]);
    era.printButton('「쉬잇.」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 쓴웃음을 지으며 ',
      tachyon.sex,
      '에게 조용히 하라는 손짓을 보내자, ',
      tachyon.sex,
      '도 눈치껏 ',
      me.get_colored_name(),
      '을(를) 못 본 척하며 다시 ',
      tachyon.get_colored_name(),
      '과 대화를 이어갔다.',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '타키온 선배! 저 올해 드디어 클래식에 들어갔어요! 사츠키상은 아쉽게 나가지만, 더비는 정말 열심히 할게요!',
    );
    await tachyon.say_and_wait('하하, 그거 참 열심히 노력해야겠군.');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '으아~~ 본격화가 너무 늦는 바람에 트레이너님이 사츠키상은 회피하자고 하셔서…… 본격화 속도를 앞당길 방법 같은 건 없을까요?',
    );
    await tachyon.say_and_wait(
      '순리에 맡기는 게 가장 좋네…… 억지로 발육시키면 어떻게든 후유증이 남기 마련이니까……',
    );
    era.println();
    await era.printAndWait([
      '후배와 대화할 때의 ',
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '의 예상보다 훨씬 온화했다.',
    ]);
    await era.printAndWait([
      '심지어 ',
      tachyon.get_colored_name(),
      '의 입에서 나온 말이라고는 믿기 힘들 정도였다.',
    ]);
    await era.printAndWait('……하지만 곰곰이 생각해보면, 그 또한 타키온다운 일이었다.');
    await era.printAndWait([
      '가능성을 무엇보다 소중히 여기는 ',
      tachyon.get_colored_name(),
      '이 눈앞의 성적을 위해 ',
      tachyon.get_uma_sex_title(),
      '의 가능성을 희생하는 것을 용납할 리 없었다.',
    ]);
    await era.printAndWait('특히 상대가 더 큰 가능성을 품은 후배라면 더더욱.');
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '아…… 벌써 시간이 이렇게 됐네요, 타키온 선배! 저 먼저 들어갈게요!',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '그리고…… 봄 텐노상 말이에요, 카페 선배가 정말 강하긴 하지만, 저는 타키온 선배가 꼭 이길 거라고 믿어요!',
    ]);
    era.println();
    await era.printAndWait(['동경으로 가득 찬 ', tachyon.sex, '의 눈동자가 반짝이며 빛났다.']);
    era.drawLine();
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 강하다. 그것은 당연한 사실이었다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 자신의 보조가 없더라도, ',
      coffee.get_colored_name(),
      '는 충분히 강했다.',
    ]);
    await era.printAndWait([
      '정상적으로 경쟁한다 해도 ',
      tachyon.get_colored_name(),
      '은 분명 고전해야 할 상대였다.',
    ]);
    await era.printAndWait('그뿐만 아니라……');
    if (attr_names.findIndex((e) => era.get(`base:32:${e}`) < 1200) === -1) {
      await era.printAndWait([
        '능력치는 충분할지 모르나, 레이스 경험이나 수개월간 전선을 이탈해 있던 공백을 생각하면 ',
        tachyon.get_colored_name(),
        '은 결코 ',
        coffee.get_colored_name(),
        ' 보다 우위에 있지 않았다.',
      ]);
    } else {
      await era.printAndWait([
        '능력 면에서 지금의 ',
        tachyon.get_colored_name(),
        '은 사츠키상이나 더비 시절의 ',
        tachyon.sex,
        '보다도 못했다.',
      ]);
    }
    await era.printAndWait('전력을 다해 회복하려 해도, 능력의 한계는 분명 존재했다.');
    era.println();
    await era.printAndWait([
      '게다가, ',
      tachyon.get_colored_name(),
      '이 출주하는 목적은…… 승리하기 위함이 아니었다.',
    ]);
    await era.printAndWait([
      '오직 ',
      coffee.get_colored_name(),
      '를 더 높은 정점으로 이끌기 위함이었다.',
    ]);
    await era.printAndWait('승패가 중요하지 않은 것이 아니라…… 이겨서는 안 되고, 이기기를 바라지도 않는 상태였다.');
    await era.printAndWait([
      '만약 이겨버린다면, 그것은 ',
      tachyon.get_colored_name(),
      '의 꿈이자 마지막 희망인 ',
      coffee.get_colored_name(),
      '조차 ',
      tachyon.get_colored_name(),
      '의 한계에 패배했다는 뜻이 되기 때문이었다.',
    ]);
    await era.printAndWait('그러니까……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait('그래서, 대답하기 어려웠을 것이다.');
    await era.printAndWait('자신을 신뢰하는 후배에게 그런 말을 할 수 있을까?');
    await era.printAndWait(['텐노상(봄)은 결코 이길 수 없노라고.']);
    await era.printAndWait(
      '갑자기 얼어붙은 분위기에 동경하던 눈빛이 점차 당혹감으로 변해가는 후배를 앞에 두고, 정말 그렇게 말할 수 있을까?',
    );
    era.println();
    await era.printAndWait([
      '이론적으로는 이때 나서서 ',
      tachyon.get_colored_name(),
      '의 난처함을 풀어주어야 할 ',
      me.get_colored_name(),
      '(이)였지만, 어째서인지 그 자리에서 못박힌 듯 움직일 수도, 입을 뗄 수도 없었다.',
    ]);
    await era.printAndWait([
      '어쩌면 ',
      me.get_colored_name(),
      ' 자신도 어떤 답을 기다리고 있었기 때문일지도 모른다.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 정말 승부에 관심이 없는 걸까?',
    ]);
    await era.printAndWait('정말로 승리를 기꺼이 양보할 생각인 걸까?');
    await era.printAndWait('자신이 중시하는 가능성 앞에서 포기라는 말을 내뱉을 수 있을까?');
    era.println();
    await era.printAndWait('얼마나 시간이 흘렀을까.');
    await era.printAndWait([
      '자율 트레이닝을 하던 다른 ',
      tachyon.get_uma_sex_title(),
      '들이 모두 돌아가고, 침묵이 밤의 일상이 되었을 무렵.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      t_call_c,
      '은 정말로 강력한 상대라네.',
    ]);
    era.println();
    await era.printAndWait('……역시나.');
    await era.printAndWait('그것이 당연한 반응이었다.');
    era.println();
    await era.printAndWait([
      '애당초 ',
      tachyon.get_colored_name(),
      '이 정말로 이번 승부를 따내려 했다면, 가장 골치가 아파질 사람은 당신이었을 터였다.',
    ]);
    await era.printAndWait([
      '이런 소동 같은 제안에 처음 응했던 것도, 결국 이것이 ',
      coffee.get_colored_name(),
      '와 ',
      tachyon.get_colored_name(),
      ' 모두에게 윈-윈인 방안이었기 때문이 아니었던가.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 영광을 얻고, ',
      tachyon.get_colored_name(),
      '은 ',
      tachyon.sex,
      '가 원하던 실험 결과를 얻는다.',
    ]);
    await era.printAndWait([
      '만약 ',
      tachyon.get_colored_name(),
      '이 이제 와서 마음을 바꾼다면, 진퇴양난에 빠지는 것은 바로 ',
      me.get_colored_name(),
      ' 자신이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '하지만…… 내가 이길 걸세. ',
      t_call_c,
      '이 아무리 강하다 해도, 승리하는 것은 바로 나야.',
    ]);
    era.println();
    await era.printAndWait('!');
    await era.printAndWait('설마…… 뒤통수를 치는 건가?');
    await era.printAndWait('이거 상황이 좋지 않은데……');
    await era.printAndWait([
      '비록 후배를 달래기 위한 빈말이라 할지라도, 이런 대답은 분명 ',
      tachyon.get_colored_name(),
      '의 마음이 흔들리고 있다는 증거였다.',
    ]);
    await era.printAndWait('게다가 단순히 둘러대기 위한 말이었다면, 왜 아까 그렇게 오랫동안 침묵했겠는가.');
    await era.printAndWait('이렇게 되면…… 자신은 대체 어떻게 해야 한단 말인가.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 ',
      sys_get_callname(25, 0),
      ', ',
      tachyon.get_colored_name(),
      '의 ',
      callname,
      '.',
    ]);
    await era.printAndWait('대체 어느 쪽을 선택해야 하는가?');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '네! 저 그날 꼭 타키온 선배 응원하러 갈게요!',
    );
    era.println();
    await era.printAndWait([
      '경쾌한 발소리가 멀어지고, 고요한 훈련장에는 별빛을 벗 삼아 ',
      me.get_couple_title(),
      ' 두 사람만이 남겨졌다.',
    ]);
    era.println();
    await era.printAndWait([
      '만약 ',
      tachyon.get_colored_name(),
      '을 선택한다면, 애초에 플랜 B를 선택했던 자신은 대체 무엇이 된단 말인가?',
    ]);
    if (era.get('love:25') >= 50) {
      await era.printAndWait([
        '계속해서 ',
        tachyon.get_colored_name(),
        '을 돕는다면, 온 힘을 다해 지지해 주었던 그 ',
        tachyon.get_teen_sex_title(),
        '에게 면목이 서는 일인가? ',
        tachyon.sex,
        '가 타준 커피에 보답하는 길인가?',
      ]);
    }
    era.println();
    await era.printAndWait([
      '그러니, ',
      coffee.get_colored_name(),
      '를 도와야 한다.',
    ]);
    await era.printAndWait([
      '그러니, ',
      tachyon.get_colored_name(),
      '에게 확인해야 한다. ',
      tachyon.sex,
      '가 방금 한 말이 후배를 위해 한 겉치레였을 뿐이라고.',
    ]);
    await era.printAndWait('그러니…… 이런 상황에서 마음이 기뻐해서는 안 되는 것 아닌가?');
    era.println();
    await era.printAndWait('어째서, 지금 이토록 마음이 설레는 것일까.');
    await era.printAndWait('설마, 자신이 처음부터 진심으로 선택하고 싶었던 것은 플랜 A였던 것일까?');
    await era.printAndWait([
      '설마, ',
      coffee.get_colored_name(),
      '를 돕는 것이 본심에 어긋나는 행위였던 걸까.',
    ]);
    await era.printAndWait('……아니, 그것만은 절대 아니라고 단언할 수 있었다.');
    await era.printAndWait(
      '그런데 왜…… 분명 무척이나 곤혹스러워야 할 상황인데도, 심장 박동은 멈출 줄을 모르는 것일까.',
    );
    await era.printAndWait([
      '불현듯, ',
      me.get_colored_name(),
      '이(가) 입을 열어 물었다.',
    ]);
    era.printButton('「타키온…… 방금 한 말, 진심은 아니지?」', 1);
    era.printButton('「타키온…… 방금 한 말은 당연히 농담이었겠지?」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '물론이네. 승패에 연연하는 것은 어린아이의 권리지…… 우리에게 필요한 것은 오직 실험 데이터, 그뿐이라네.',
    );
    await era.printAndWait('말은 사람을 속인다.');
    await era.printAndWait('목소리도 사람을 속인다.');
    await era.printAndWait('영원히 이성적이라 자부하는 사람일수록, 자신의 이익을 위해 타인을 속인다.');
    await era.printAndWait('하지만…… 감정은 거짓말을 하지 않는다.');
    era.println();
    await era.printAndWait([
      '방금 그 말의 몇 퍼센트가 진실이고 거짓인지, ',
      me.get_colored_name(),
      '은(는) 알 수 없었다.',
    ]);
    await era.printAndWait([
      '하지만…… ',
      tachyon.sex,
      '의 눈동자 속에서 수개월 전 거의 사라졌던 광채가.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 눈을 멀게 할 만큼 강렬했다가, 감동 속에 꺼져버렸던 그 빛이.',
    ]);
    await era.printAndWait('오늘 밤, 다시금 희미한 불꽃을 지피고 있었다.');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
  };

  handlers[95 + 18] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
  ) => {
    edu_marks.tenn_spr = 0;
    await print_event_name('다시 피어나는 광자', tachyon);
    await era.printAndWait('더 이상 이대로 둘 수는 없었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 벌써 몇 번째인지 모를 정도로 ',
      me.get_colored_name(),
      '과(와)의 대화를 회피하자, ',
      me.get_colored_name(),
      '은(는) 결심을 굳혔다.',
    ]);
    await era.printAndWait('훈련에는 꼬박꼬박 나오고 실험도 정상적으로 진행하고 있었지만.');
    await era.printAndWait([
      '훈련이 멈추기만 하면, ',
      tachyon.sex,
      '와 텐노상 때의 일에 대해 이야기를 나누려 하면 즉시 현장에서 도망쳐버렸다.',
    ]);
    await era.printAndWait('언제 어디서든, 심지어 실험 도중이라도 예외는 없었다.');
    era.println();
    await era.printAndWait('이대로는 안 된다.');
    await era.printAndWait([
      tachyon.sex,
      '의 표정이 하루하루 파리해지고, 심지어 주눅 들어가는 것을 지켜보며.',
    ]);
    await era.printAndWait([tachyon.get_colored_name(), '은 이래서는 안 된다고 생각했다.']);
    await era.printAndWait([tachyon.get_colored_name(), '이 이런 모습이어선 안 되었다.']);
    era.println();
    await era.printAndWait('겨우 눈속의 빛을 되찾았는데.');
    await era.printAndWait('이런 일로 다시 꺼지게 두는 것은 결코 있을 수 없는 일이었다.');
    await era.printAndWait('회피하는 이유라면 대강 짐작이 갔다.');
    if (relation <= 75) {
      await era.printAndWait('비록 아직 알 수 없는 부분이 남아있긴 했지만.');
    }
    await era.printAndWait('그러니……');
    era.printButton(`반드시 ${tachyon.sex}에게 확실히 말해줘야 해.`, 1);
    await era.input();
    era.drawLine();
    const t_call_c = sys_get_colored_callname(32, 25);
    await tachyon.print_and_wait('……벌써 몇 주째 도망만 다니고 있군.');
    await tachyon.print_and_wait(['텐노상이 끝난 이래로, 계속해서 ', me.sex, '를 피하고 있어.']);
    await tachyon.print_and_wait('나를 위해 모든 것을 희생한 그 사람을 피하고 있단 말이지.');
    await tachyon.print_and_wait([
      '이성적으로 생각하면, 달리고 싶어 하지도 않고 미래도 없는 ',
      tachyon.get_uma_sex_title(),
      '를 계속 담당하는 것은 아무런 의미도 없는, 자원과 시간의 낭비일 뿐인데.',
    ]);
    await tachyon.print_and_wait([
      '감성적으로 보자면, ',
      me.sex,
      '의 꿈을, ',
      me.sex,
      '가 매료되었던 주법을 망가뜨려 놓고는, 그 위에 ',
      me.sex,
      '에게 황당무계한 플랜 B에 협력해 타인의 꿈을 위해 희생해달라고 요구한 셈이니까.',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '그럼에도 불구하고, ',
      me.sex,
      '는 망설임 없이 따라와 주었어.',
    ]);
    await tachyon.print_and_wait('나의 연구를 위해 기꺼이 실험체가 되어주고.');
    await tachyon.print_and_wait([
      '나의 이기심을 위해 ',
      t_call_c,
      '과 함께 사건에 휘말려 주었지.',
    ]);
    await tachyon.print_and_wait([
      '그 대가로 ',
      me.sex,
      '와 ',
      t_call_c,
      '에게 명예를 안겨주고 싶었어. 보잘것없는 보상으로서 말이야.',
    ]);
    await tachyon.print_and_wait('하지만……');
    era.println();
    await tachyon.say_and_wait('……음?');
    era.println();
    await tachyon.print_and_wait([
      '오늘도 마찬가지로, 의도적으로 ',
      me.sex,
      '와의 대화를 피하고 꼭 필요한 소통 외에는 거리를 두며 실험실로 돌아가려던 찰나.',
    ]);
    await tachyon.print_and_wait('하지만…… 이미 누군가가 실험실 밖에서 자신을 기다리고 있었다.');
    era.println();
    await tachyon.say_and_wait(['……', callname, '.']);
    era.println();
    await tachyon.print_and_wait('싫어.');
    await tachyon.print_and_wait('안 돼.');
    await tachyon.print_and_wait('지금은 아니야.');
    era.println();
    await tachyon.print_and_wait('방법은 간단하다.');
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '이 다가올 타카라즈카 기념에서 져버리면 그만이다.',
    ]);
    await tachyon.print_and_wait(['타카라즈카 기념에서 승리를 양보하기만 하면, 다시 처음으로 돌아가서……']);
    era.println();
    await tachyon.print_and_wait('아니, 이미 방법 따위는 없었다.');
    await tachyon.print_and_wait('달리고 싶다는 본능을 억누를 수가 없단 말었다.');
    await tachyon.print_and_wait('이것은 그저 자기기만이자, 현실 도피에 불과했다.');
    era.println();
    await tachyon.print_and_wait('눈앞의 실루엣이 복도 한복판에 서 있었다.');
    await tachyon.print_and_wait('전신을 가늘게 떨고 있었다…… 당연하겠지, 분명 화가 났을 거다.');
    await tachyon.print_and_wait('잘못을 저질러 놓고 계속 도망만 다니는 멍청이에게 말이야.');
    await tachyon.print_and_wait('됐어, 이제 각오는 끝났어.');
    await tachyon.print_and_wait('모든 분노를…… 쏟아내 줘.');
    era.println();
    await tachyon.say_and_wait(['……', callname, '.']);
    era.drawLine();
    const coffee = get_chara_talk(25);
    await era.printAndWait('우선, 무엇부터 말해야 할까?');
    await era.printAndWait([
      '먼저 입을 열어 말해줘야겠지. ',
      tachyon.sex,
      '를 탓할 마음은 조금도 없다고.',
    ]);
    await era.printAndWait([
      '애당초 상대가 봐준 덕분에 얻은 승리 같은 건, ',
      coffee.get_colored_name(),
      ' 역시 결코 기뻐하지 않을 터였다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '를 더 높은 정점에 닿게 하겠다는 목적은 훼손되지 않았다.',
    ]);
    await era.printAndWait([
      '오히려, ',
      coffee.get_colored_name(),
      '를 완전히 손아귀에 넣고 주무를 수 있을 거라 생각했던 이전의 자신의 생각이 너무나 오만했다.',
    ]);
    await era.printAndWait(
      '이제부터는 계속해서 전력을 다해 레이스에 임하며 서로를 채찍질하는 것만이 플랜 B의 가장 완벽한 이행 방법이었다.',
    );
    await era.printAndWait('그러니까……');
    await era.printAndWait('그래, 그렇게 말하자.');
    era.printButton('「타키온……」', 1);
    era.printButton('「텐노상 레이스, 정말 대단했어!」', 2);
    await era.input();
    await tachyon.say_and_wait('……어?');
    era.println();
    await era.printAndWait('맞다.');
    await era.printAndWait('복잡한 이론이나 논리보다는 이런 말이 자신에게 더 어울렸다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 주법에 미쳐버려, 그것을 위해서라면 무엇이든 희생할 각오가 된 모르모트 말이다.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 웬일인지 멍하니 당신의 눈을 빤히 들여다보았다.',
    ]);
    await era.printAndWait('처음 만났을 때처럼, 그리고 사츠키상과 더비 전처럼.');
    await era.printAndWait([
      '대체 당신의 눈이 무슨 색이길래, ',
      tachyon.sex,
      '는 매번 그런 감탄 섞인 표정을 짓는 것일까.',
    ]);
    era.println();
    await tachyon.say_and_wait('……하지만, 그렇게 되면 플랜 B는……');
    era.printButton(
      `「타키온이 봐줘야만 이길 수 있는 카페가, 정말로 ${tachyon.get_uma_sex_title()}의 한계를 넘어서는 게 가능하겠어?」`,
      1,
    );
    await era.input();
    await tachyon.say_and_wait('……');
    era.println();
    await era.printAndWait('꿈에 눈이 멀었기 때문일까?');
    await era.printAndWait(['아니면 ', coffee.get_colored_name(), '에 대한 집착 때문일까.']);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 가장 중요한 사실을 잊고 있는 듯했다.',
    ]);
    if (love >= 75) {
      await era.printAndWait([
        '이런 모습을 보니 어쩌면 결혼 후에 ',
        tachyon.get_colored_name(),
        '은 의외로 아이를 끔찍이 아끼는 성격이 될지도 모르겠다는 생각이 들었다.',
      ]);
    }
    era.println();
    await tachyon.say_and_wait([
      '……그건 ',
      tachyon.get_colored_name(),
      '의 트레이너로서의 의견이겠지? 그럼 ',
      coffee.get_colored_name(),
      '의 트레이너로서는 어쩔 셈인가?',
    ]);
    if (relation <= 75) {
      era.println();
      await era.printAndWait([
        '……순간적인 충격에 ',
        me.get_colored_name(),
        '은(는) 할 말을 잃었다.',
      ]);
      await era.printAndWait([
        '도무지 이해할 수 없었던 ',
        get_chara_talk(32).get_colored_name(),
        '이 자신을 피하던 이유.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게 죄책감을 느끼는 거라면 몰라도, 대체 왜 자신을 피한단 말인가.',
      ]);
      await era.printAndWait([
        get_chara_talk(32).get_colored_name(),
        '은…… 나를 걱정하고 있었던 건가……?',
      ]);
    }
    await era.printAndWait([
      '그렇다면, ',
      coffee.get_colored_name(),
      '의 트레이너로서 그에 마땅한 대답을 해주어야 했다.',
    ]);
    const { winner, loser } =
      (RaceHistory.get(32).get_result(95 + race_infos[race_enum.takz_kin].date)
        ?.rank || 20) <
      (RaceHistory.get(25).get_result(95 + race_infos[race_enum.takz_kin].date)
        ?.rank || 20)
        ? { loser: '카페', winner: '타키온' }
        : { loser: '타키온', winner: '카페' };
    era.printButton(`「무척 분해…… ${loser}과(와) 함께 승리를 따내지 못해서.」`, 1);
    era.printButton(
      `「그러니, 타카라즈카 기념에선 ${loser}이(가) 반드시 지금보다 강해져서 ${winner}을(를) 뛰어넘게 할 거야!」`,
      2,
    );
    await era.input();
    await tachyon.say_and_wait('……분하다고…… 하였나?');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 그 말을 곱씹는 듯했다. 하지만 해야 할 말은 아직 남아있었다.',
    ]);
    era.printButton(`「하지만, ${winner}의 트레이너이기도 하니까!」`, 1);
    era.printButton(
      `「결코 ${winner}이(가) ${loser}에게 지게 두진 않을 거야. 타카라즈카도 반드시 ${winner}의 승리다!」`,
      2,
    );
    await era.input();
    await era.printAndWait('틀린 말이 아니었다.');
    await era.printAndWait([
      '이것이 바로 ',
      tachyon.get_colored_name(),
      '의 트레이너 「이자」 ',
      coffee.get_colored_name(),
      '의 트레이너로서 내놓은 해답이었다.',
    ]);
    await era.printAndWait('이유? 텐노상 때 이미 말하지 않았던가.');
    await era.printAndWait(['나 자신이, ', tachyon.sex, '들의 주법을 깊이 사랑하고 있으니까.']);
    if (love >= 75 && era.get('love:25') >= 75) {
      await era.printAndWait(['나 자신이, ', tachyon.sex, '들을 깊이 사랑하고 있으니까.']);
    }
    era.println();
    await tachyon.say_and_wait(['……', callname, '.']);
    era.println();
    await era.printAndWait('낮게 읊조리는 부름.');
    await era.printAndWait('그리고 이어지는 긴장감 넘치는 침묵.');
    await era.printAndWait('긴 침묵이 흐른 뒤...');
    era.println();
    await tachyon.say_and_wait(['……', callname, ', 자네는 그렇게나 내 주법이 좋은가?']);
    era.println();
    await era.printAndWait('대답은 필요 없었다. 당신의 표정과 눈빛이 이미 모든 것을 말해주고 있었으니까.');
    era.println();
    await tachyon.say_and_wait('…………그럼, 나와 함께 조금 더 먼 길을 가볼 생각이 있는가?');
    await tachyon.say_and_wait('나와 함께, 프랑스로 낭만적인 여행을 떠나보지 않겠나?');
    era.println();
    await era.printAndWait('……어?');
    flags.wait_flag = get_attr_and_print_in_event(32, undefined, 10);
    flags.wait_flag = sys_change_motivation(32, 1) || flags.wait_flag;
  };

  handlers[95 + 32] = async (
    tachyon,
    me,
    callname,
    flags,
    edu_marks,
    relation,
    love,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('역할 교대 실험', tachyon);
    await era.printAndWait('그렇게 즐거웠던 여름 합숙 시간도 흘러갔다.');
    await era.printAndWait([
      me.get_couple_title(),
      '은 학원 버스를 타고 학원으로 돌아갈 준비를 마쳤다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '타…… 타키온 선배! 자, 잠깐만 기다려 주세요!',
    );
    era.println();
    await era.printAndWait('음?');
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 동시에 의아해하며 뒤를 돌아보았다. 그곳에는 머리카락 사이로 커다란 유성 모양이 있는 어린 ',
      tachyon.get_uma_sex_title(),
      '가 서 있었다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '올해 가을에…… 저 ',
      race_infos[race_enum.kobe_hai].get_colored_name(),
      '에 출주해요! 타키온 선배…… 그때 절 응원하러 와주실 수 있나요!',
    ]);
    await tachyon.say_and_wait('응원...말인가?');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '네! 타키온 선배님이 제 달리는 모습을 꼭 봐주셨으면 좋겠어요!',
    );
    era.println();
    await era.printAndWait([
      race_infos[race_enum.kobe_hai].get_colored_name(),
      '는 9월 하순의 레이스였다. 단순히 관전만 하는 것이라면 중요한 일정에 지장을 줄 정도는 아니었다.',
    ]);
    await era.printAndWait([
      '결국 모든 문제는, ',
      tachyon.get_colored_name(),
      ' 본인이 수락하느냐 마느냐에 달려 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('음…… 좋네. 그 시기라면 아직 딱히 다른 일정은 없으니까.');
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '정말요!? 아싸! 꼭 우승할 수 있도록 열심히 할게요!',
    );
    era.println();
    await era.printAndWait([
      '어린 ',
      tachyon.get_uma_sex_title(),
      '는 신나서 자리에서 벌떡 일어나더니, 방금 억지로 약을 들이켰던 모습은 온데간데없이 쏜살같이 달려 나갔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……참으로 눈부시군 그래, 이 아이들의 가능성이란.');
    era.printButton('「무슨 말투가 꼭 노인네 같아.」', 1);
    era.printButton('「하지만 내 눈엔 타키온이 가장 눈부셔!」', 2);
    await era.input();
    if (love >= 75) {
      await tachyon.say_and_wait(
        '그런가? 그럼…… 한눈팔지 말고 계속 나만 지켜봐 주게나. 나의 가능성은 이미 자네 없이는 성립될 수 없으니까 말이야♡',
      );
      await era.printAndWait([
        '여름 합숙 종료, 다음은 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '! ……하지만 그전에, ',
        race_infos[race_enum.kobe_hai].get_colored_name(),
        ' 관전이 기다리고 있다!',
      ]);
    } else if (love >= 50) {
      await tachyon.say_and_wait('그럼…… 똑똑히 지켜보게나, 나의 가능성이 도달할 그곳을.');
    } else if (relation >= 225) {
      await tachyon.say_and_wait(
        '하하, 당연한 소릴. 그 아이들이 나를 뛰어넘으려면 아직 한참 멀었지!',
      );
    } else if (relation >= 0) {
      await tachyon.say_and_wait('자네…… 그런 닭살 돋는 소리를 안 하면 입안에 가시라도 돋는 건가?');
    } else {
      await tachyon.say_and_wait('자네 같은 사람에게 기대받다니…… 정말 기분 나쁘군.');
    }
  };
};