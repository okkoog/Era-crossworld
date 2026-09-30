const era = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { adaptability_colors } = require('#/data/color-const');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  /** @this CustomizedEdu */
  handlers.palace = async function (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) {
    await CustomizedEdu.common_palace(tachyon, me);
    if (era.get('item:용도불명안경')) {
      era.drawLine();
      const coffee = get_chara_talk(25);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 함께한 3년이 끝났다.',
      ]);
      era.println();
      await era.printAndWait([
        '졸업식 후, ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '에게 향후 계획을 물어본 적이 있었다.',
      ]);
      if (edu_marks.plan_b) {
        await era.printAndWait([
          '「또 만나게 될 걸세, ',
          callname,
          '」 ',
          tachyon.sex,
          '는 오직 그 한마디만을 남겼다.',
        ]);
        era.println();
        await era.printAndWait([
          '그리고, ',
          tachyon.get_colored_name(),
          '은(는) 떠나버렸다.',
        ]);
        await era.printAndWait('트레센 학원을 떠나, 이 나라를 떠나.');
        await era.printAndWait('마치 세상에서 사라져 버린 것만 같았다.');
        await era.printAndWait(['지금 ', tachyon.sex, '는 대체 어디에 있는 것일까.']);
        await era.printAndWait([
          me.get_colored_name(),
          '도 가끔 그런 의문을 품곤 했다.',
        ]);
        await era.printAndWait('밥은 잘 챙겨 먹고 있을까.');
        await era.printAndWait('잠은 제대로 자고 있을까.');
        await era.printAndWait([
          '혼자 남겨진 ',
          tachyon.sex,
          '가 정말로 자신을 제대로 돌볼 수나 있을까.',
        ]);
        era.println();
        await era.printAndWait('상대는 이미 성인인데도, 여전히 걱정을 멈출 수 없었다.');
        await era.printAndWait('하지만…… 사실 마음속으로는 알고 있었다.');
        await era.printAndWait('이런 걱정은 기우에 불과하다는 것을.');
        await era.printAndWait([tachyon.get_colored_name(), '은 천재다.']);
        await era.printAndWait('그 누구도 부정할 수 없는, 태어날 때부터 모든 것을 깨우친 천재였다.');
        await era.printAndWait([
          '그런 ',
          tachyon.sex,
          '라면, 어느 곳에 있든 반드시 빛을 발하고 있을 것이다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 행방을 알 수 없는 ',
          tachyon.get_colored_name(),
          '에 대한 기대를 품으며 집 문을 열었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['이런, ', callname, ', 오늘은 꽤 일찍 귀가했군.']);
        era.println();
        await era.printAndWait([
          '소파에 누워 다리를 까닥거리고 있는 어느 폐인 ',
          tachyon.get_uma_sex_title(),
          '를 무시했다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '맞다, 저녁 식사 저녁 식사…… ',
          callname,
          ', 오늘은 자네 차례지?~~',
        ]);
        era.println();
        await era.printAndWait([
          '당신의 마음속에서 천재였던 ',
          tachyon.get_uma_sex_title(),
          ', 초광속의 입자, ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait([
          '분명 세계 어느 구석에서 ',
          tachyon.get_uma_sex_title(),
          '의 미래와 직결된 연구를 하고 있을 터였다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '아 맞다, 오늘 새로운 메일이 왔더군…… 트레이너 세미나…… 무려 3일 동안!? 삭제, 삭제하게. 이런 곳에 참가하는 게 무슨 의미가 있겠나.',
        );
        era.println();
        await era.printAndWait(
          '절대로, 저기 저 졸업하고도 학원 폐교실에 눌러앉아 떠나지 않는 사람이 아니다.',
        );
        await era.printAndWait(
          '졸업 당일 짐을 싸 들고 멋대로 당신의 집에 침입해 들어온 사람이 아니다.',
        );
        await era.printAndWait('지금은 완전히 당신의 집을 자신의 영역으로 여기고 있었다.');
        await era.printAndWait([
          '지금도 당신의 프라이버시를 마음껏 침해하고 있는 이 한 마리 고등어 같은 ',
          tachyon.get_uma_sex_title(),
          '.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '? ',
          callname,
          '~~~~ 나 좀 봐주게나~~~~',
        ]);
        await me.say_and_wait('그러니까 대체 왜 타키온이 우리 집에 눌러앉아 있는 거냐고!');
        era.println();
        await era.printAndWait('결국, 상대를 더는 무시할 수 없었다.');
        await era.printAndWait(
          '첫날부터 가슴 속에 묻어두었지만, 상대의 너무나도 당연하다는 태도에 차마 꺼내지 못했던 의문을 터뜨렸다.',
        );
        era.println();
        await tachyon.say_and_wait('에이--- 그게 뭐 어때서 그러나?');
        await tachyon.say_and_wait(
          '게다가 내가 아예 집안일을 안 하는 것도 아니지 않나. 청소나 걸레질이라든가, 저녁 식사도 가끔 분담해서 돕고 있고 말이야~~',
        );
        era.println();
        await era.printAndWait([
          '확실히, 지금의 ',
          tachyon.get_colored_name(),
          '이 과거에 비해 발전한 점이 있다면.',
        ]);
        await era.printAndWait('그것은 생활 능력의 성장일 것이다.');
        await era.printAndWait([
          '예전처럼 모든 일을 대신 해줘야 했던 ',
          tachyon.get_colored_name(),
          '과는 달랐다.',
        ]);
        await era.printAndWait([
          '지금의 ',
          tachyon.get_colored_name(),
          '은 확실히 진보하고 있었다.',
        ]);
        await era.printAndWait('식사 후 설거지를 하는 것부터, 일상적인 청소와 걸레질을 돕기까지.');
        await era.printAndWait('비록 아주 미세한 차이였지만, 확실히 나아지고 있었다…….');
        await era.printAndWait(
          '하지만, 왜인지 집안일을 시작한 딸을 지켜보는 아버지처럼 아련하고 뿌듯한 기분이 드는 걸까.',
        );
        await era.printAndWait(
          '아니지, 하마터면 넘어갈 뻔했다…… 핵심은 왜 여기에 사느냐는 거잖아!',
        );
        era.println();
        await tachyon.say_and_wait('그런 사소한 일은 신경 쓰지 말게, 괜찮으니.');
        await tachyon.say_and_wait('이런, 아니면 설마 그건가? 돈 문제인가?');
        await tachyon.say_and_wait(
          '확실히 생활의 분담은 집안일뿐만이 아니지…… 생활비 역시 마땅히 분담해야 하는 법.',
        );
        await tachyon.say_and_wait('그럼 이번 달 생활비부터 같이 부담하도록 하지.');
        await tachyon.say_and_wait(
          '다행히 상금은 차치하더라도, 예전에 신청해 둔 특허 같은 게…… 특허료 정도로 아마 충분할 걸세.',
        );
        era.println();
        await era.printAndWait('중요한 건 돈이 아니야…… 아니, 돈은 중요하지만 지금 논점은 그게 아니라고.');
        await era.printAndWait([
          '애초에…… ',
          tachyon.get_colored_name(),
          '은 진학하지 않는 거야? 아니면 유학이라든가……?',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          ', 정해진 순서대로 진학하는 것이 나에게 정말로 어떤 도움이라도 된다고 생각하나?',
        ]);
        await tachyon.say_and_wait(
          '그런 집단 교육은 자신의 길을 정하지 못한 범인들에게나 편리한 것이지. 나 같은 천재에게는 스스로 내린 결정이 최고의 선택이라네.',
        );
        era.println();
        await era.printAndWait('일전에는 인정하고 싶지 않았지만.');
        await era.printAndWait([tachyon.get_colored_name(), '은 확실히 천재였다.']);
        await era.printAndWait([
          '어쩌면 당신은 ',
          tachyon.sex,
          '의 선택에 이의를 제기할 자격이 없을지도 모른다.',
        ]);
        await era.printAndWait(
          '하지만 그 외에도 문제는 많잖아. 예를 들면…… 가족이라든가……?',
        );
        era.println();
        await tachyon.say_and_wait([
          '이보게, ',
          callname,
          '…… 나도 이제 성인이라네? 법적으로는 완전한 행위능력자니, 거처를 스스로 선택할 권리가 있지 않겠나?',
        ]);
        await me.say_and_wait(
          '남의 집을 자기 집처럼 사용하는 행위를 법이 보장해 줄 리는 없다고 보는데.',
        );
        await tachyon.say_and_wait(
          '뭐 어떤가, 공간도 꽤 넓은데 내가 좀 낀다고 해서 어떻게 되진 않잖나.',
        );
        await tachyon.say_and_wait('……그보다, 자네가 정말 나를 떠나보낼 수 있을 것 같나?');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 장난기 어린 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 빤히 바라보았다.',
        ]);
        await era.printAndWait('매번 이런 식이었다.');
        await era.printAndWait('마치 뱀 앞에 선 모르모트가 된 기분이었다.');
        await era.printAndWait('모든 것을 빨아들이는 심연을 마주하는 기분이었다.');
        await era.printAndWait([
          '매번 ',
          tachyon.get_colored_name(),
          '의 저런 눈동자와 마주칠 때마다, 더 이상의 반박은 입 밖으로 나오지 않았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('나를 이토록 사랑하는 자네가, 정말 매정하게 나를 보낼 수 있겠나?');
        await tachyon.say_and_wait('나에게 이토록 사랑받는 자네가, 정말 내 사랑을 거절할 셈인가?');
        era.println();
        await era.printAndWait('입안이 바짝 말라 왔다.');
        await era.printAndWait([
          '어느덧 ',
          tachyon.get_colored_name(),
          '이 코앞까지 다가와 있었다.',
        ]);
        await era.printAndWait(['마치 국화상 때의 ', tachyon.sex, '처럼.']);
        await era.printAndWait('하지만 그때와는 달리, 이번에는 정말로 어떤 예감이 들었다.');
        await era.printAndWait('「먹혀버릴 것 같다」는 실감이 전신을 감쌌다.');
        era.println();
        await era.printAndWait('아아.');
        await era.printAndWait('결국 이것도 내가 선택한 길일 것이다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 온천 여행 때 ',
          tachyon.get_colored_name(),
          '과 나누었던 대화를 떠올렸다.',
        ]);
        era.println();
        await era.printAndWait([
          '그때 이미 결심했었다. 비록 ',
          tachyon.sex,
          '가 마지막에 어떤 가능성을 선택하더라도, 끝까지 함께하겠노라고.',
        ]);
        await era.printAndWait('심연을 들여다보는 자는 반드시 심연에 잡아먹히는 법이다.');
        await era.printAndWait([
          me.get_colored_actual_name(),
          '은(는) 아마 평생 ',
          tachyon.sex,
          '의 눈동자 속에 담긴 심연에서 도망칠 수 없을 것이다.',
        ]);
        era.set('flag:현재위치', location_enum.gate);
        await print_event_name('플랜 B의 미래', tachyon);
        era.set('flag:현재위치', location_enum.office);
      } else {
        await tachyon.say_and_wait('학생으로서 가장 중요한 본분은 학습이 아니겠나?');
        await era.printAndWait([
          tachyon.sex,
          '는 그저 웃으며 ',
          tachyon.sex,
          '답지 않은 대사를 내뱉었다.',
        ]);
        era.println();
        await era.printAndWait('하지만 이번만큼은 진심인 듯했다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그해 대학 공통 테스트 수험자 명단에서 ',
          tachyon.sex,
          '의 이름을 발견했다.',
        ]);
        await era.printAndWait([
          '믿기지 않았지만, ',
          tachyon.sex,
          '는 진학을 선택한 모양이었다.',
        ]);
        era.println();
        await era.printAndWait('오늘은 각 대학의 입학식이 있는 날이다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 몇 달 전 합격자 발표가 났던 날을 회상했다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '가 합격했다는 소식을 들었을 때 ',
          me.get_colored_name(),
          '의 심정은 말로 표현하기 힘들었다.',
        ]);
        await era.printAndWait([
          '가능성으로 가득 찼던 ',
          tachyon.sex,
          '도 결국은 평범한 사람의 길을 걷게 되는구나.',
        ]);
        await era.printAndWait(
          '보통 사람들처럼 진학하고, 보통 사람들처럼 졸업하고, 보통 사람들처럼 취직하고.',
        );
        await era.printAndWait([
          '그러다 보면 언젠가 ',
          tachyon.sex,
          '도 자신처럼 지루한 어른이 되어버리는 걸까.',
        ]);
        await era.printAndWait([
          '단둘이서 했던 그 축하 파티에서 ',
          me.get_colored_name(),
          '이(가) ',
          tachyon.sex,
          '에게 무슨 말을 했는지, ',
          tachyon.sex,
          '가 ',
          me.get_colored_name(),
          '에게 무슨 말을 했는지 이제는 가물가물했다.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '와 작별한 자신 역시 원래의 일상으로 돌아가, 다음 ',
          tachyon.get_uma_sex_title(),
          '를 담당하며 ',
          tachyon.sex,
          '의 꿈을 서포트해야 한다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          tachyon.sex,
          '처럼 ',
          me.get_colored_name(),
          '의 시선을 불태울 듯이 강렬한 빛을 내뿜는 ',
          tachyon.get_uma_sex_title(),
          '는…… 아마 다신 만날 수 없겠지.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 어느새 무의식적으로 과거 이과 준비실이었고, 나중에는 실험실이 되었으며, 이제는 다시 평범한 이과 준비실로 돌아갈 빈 교실로 발걸음을 옮겼다.',
        ]);
        era.println();
        await me.say_and_wait('온 김에 조금 정리나 해둘까.');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 문을 열자 그곳에는 평소처럼 실험에 몰두하는 ',
          tachyon.get_colored_name(),
          '과 자기 자리에서 커피를 마시는 ',
          coffee.get_colored_name(),
          '가…… 있을 리가 없었다.',
        ]);
        await era.printAndWait([
          '졸업식 이후 아무도 들어오지 않은 이 교실은 ',
          me.get_couple_title(),
          '이 마지막으로 사용했을 때의 모습 그대로였다.',
        ]);
        await era.printAndWait([
          '실험대 위에 놓인 빈 시험관, 내용물이 말라붙은 플라스크, 그리고 탁자 위의 홍차 얼룩까지. 세월의 흔적은 ',
          me.get_colored_name(),
          '의 3년간의 추억을 불러일으켰다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['……아, ', callname]);
        era.println();
        await era.printAndWait([
          '등 뒤에서 익숙한 목소리가 들려왔고, ',
          me.get_colored_name(),
          '은(는) 고개를 돌렸다.',
        ]);
        await era.printAndWait([
          '그곳에는 ',
          me.get_colored_name(),
          '이(가) 간절히 그리워하던 ',
          tachyon.sex,
          '가 서 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('왔으면 어서 짐 옮기는 것 좀 도와주게나.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '을(를) 보자마자 평소와 다름없는 미소를 지어 보였다. 그 미소가 너무나도 선명해서 ',
          me.get_colored_name(),
          '은(는) 마치 ',
          me.get_couple_title(),
          ' 사이에 아무것도 변하지 않았다는 착각에 빠졌다.',
        ]);
        await era.printAndWait(
          '하긴, 졸업했으니 여기 있는 실험 기구들도 당연히 옮겨야겠지.',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 아무 말 없이 묵묵히 ',
          tachyon.get_colored_name(),
          '의 뒤를 따랐다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 당연히 ',
          tachyon.sex,
          '가 짐을 자기 집이나 지금 다니는 학교로 옮기거나, 혹은 폐기 처분하러 가는 줄 알았다.',
        ]);
        await era.printAndWait([
          '그런데 의외로 ',
          tachyon.sex,
          '는 모든 기구를 바로 옆방으로 옮겨놓았다.',
        ]);
        era.println();
        await tachyon.say_and_wait('좋아, 이걸로 다 됐군……');
        era.println();
        await era.printAndWait([
          '마지막 짐을 옮긴 ',
          tachyon.sex,
          '는 이제 다시는 돌아오지 않을 교실 문 앞에 서서 쓸쓸한 미소를 지었다.',
        ]);
        await era.printAndWait(['그러고는 다시 ', me.get_colored_name(), '을(를) 바라보았다.']);
        era.println();
        await tachyon.say_and_wait([callname, ', 그럼 오늘의 실험을 시작해볼까!']);
        era.println();
        await era.printAndWait([tachyon.sex, '의 눈에는 여전히 광기 어린 빛이 일렁이고 있었다.']);
        await era.printAndWait([
          '지난 3년간 매일같이 들었던, ',
          tachyon.sex,
          '와 만날 때마다 들었던 인삿말 그대로였다.',
        ]);
        await era.printAndWait([
          '어느새 ',
          me.get_colored_name(),
          '도 미소를 지었다. 웃음이 멈추지 않아 크게 소리 내어 웃었고, 심지어 눈물까지 찔끔 났다.',
        ]);
        await era.printAndWait('아마 이 3년이라는 시간 동안, 정말로 영원히 변하지 않는 것이 있는 모양이다.');
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '의 관계, ',
          tachyon.sex,
          '의 구도심, 그리고 ',
          me.get_colored_name(),
          '이(가) ',
          tachyon.sex,
          '에게 품은 감정, 또한 ',
          tachyon.sex,
          '가 ',
          me.get_colored_name(),
          '에게 품은 감정 같은 것들 말이다.',
        ]);
        await era.printAndWait([
          '복도를 타고 불어온 바람이 마치 ',
          me.get_colored_name(),
          '의 말에 대답하듯 속삭였다.',
        ]);
        await era.printAndWait('창밖으로 낙엽이 떨어지고, 어느덧 가을이 찾아왔다.');
        era.drawLine({ content: '3일 후'});
        era.printButton('「……잠깐만!? 그날 사실 작별 인사하러 온 거 아니었어!?」', 1);
        await era.input();
        await tachyon.say_and_wait([
          '…………',
          callname,
          '? 3일이나 지나서야 이제야 반응하다니, 자네 좀 둔한 거 아닌가.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 실험실…… 아니, 바로 옆의 새 실험실이었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 「마지막으로 한 번만 더 장단에 맞춰주자」는 생각으로 ',
          tachyon.sex,
          '의 「마지막」 실험에 동참했었다.',
        ]);
        await era.printAndWait('그런데 그 마지막 실험이 무려 3일이나 이어질 줄은 몰랐다.');

        era.printButton('「대학에 간다며!?」', 1);
        await era.input();
        await tachyon.say_and_wait('그렇다네. 트레센 대학부에 입학했지.');
        era.println();
        await me.say_and_wait('트레센에 대학부가 어디 있어!? 금시초문인데!?');
        era.println();
        await tachyon.say_and_wait(
          '작중 스토리에서는 언급되지 않았을지 몰라도, 공식 설정상 트레센 학원에는 대학부도 존재한다네.',
        );
        era.printButton('「공식 설정은 또 뭔 소리야!?」', 1);
        era.printButton(
          '「백번 양보해서 정말 있다고 쳐도, 너 수업은 안 들어도 되는 거야!?」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 자네 대학을 다녀보긴 한 건지 의심스럽군. 대학생 중에 누가 그렇게 성실하게 수업을 다 듣나.',
        ]);
        era.println();
        await era.printAndWait(
          '반박하고 싶었지만, 고등학교 수업조차 제멋대로 빼먹던 녀석이 눈앞에 있으니 반박할 기운이 싹 사라졌다.',
        );
        era.printButton('「그럼 왜 갑자기 교실은 옮긴 거야!?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '아…… 그건 내가 말하기 좀 그렇네만, 그 교실이 지난 몇 년간 우리의 사용 탓에……',
        );
        await tachyon.say_and_wait('안전상에 약간의 문제가 생겨서 말이지……');
        await tachyon.say_and_wait(
          '그래서 점검이랑 유지보수가 필요하다네…… 한 일주일 정도면 다시 돌아갈 수 있을 거야.',
        );
        era.printButton('「고작 일주일 비우는 거면서 왜 그렇게 감상적인 분위기를 잡은 거야!?」', 1);
        await era.input();
        await tachyon.say_and_wait([
          '아, ',
          callname,
          '너무하군. 그 교실은 우리 3년간의 학…… 사용 기록이 담긴 곳인데, 감사 인사 정도는 해도 괜찮지 않나.',
        ]);
        era.println();
        await era.printAndWait('할 말이 없었다.');
        await era.printAndWait([
          '돌이켜보니 정말 모든 것이 ',
          tachyon.sex,
          '의 말대로였다.',
        ]);
        await era.printAndWait('결국 자신 혼자 북 치고 장구 치며 감상에 젖어있었던 건가.');
        era.println();
        await tachyon.say_and_wait(
          '합격자 발표 날에 이미 어느 학교에 가는지랑, 앞으로의 실험도 계속 자네에게 부탁하겠다고 말했건만……',
        );
        await tachyon.say_and_wait(
          '전부 잊어버리다니…… 역시, 그날 음료에 넣은 약이 좀 과했던 모양이군.',
        );
        era.println();
        await era.printAndWait(
          '그날 일이 기억 안 나는 게 예술적인 미화가 아니라 진짜로 약 때문에 필름이 끊긴 거였다고!?',
        );
        era.println();
        await tachyon.say_and_wait([
          '자자, 잡담은 이쯤 해두고, ',
          callname,
          ', 어서 가세. 오늘 배합한 약에 문제가 없다면……',
        ]);
        await tachyon.say_and_wait([
          '…어쩌면 전체 ',
          tachyon.get_uma_sex_title(),
          '의 세계를 뒤엎어버릴지도 모른다네.',
        ]);
        era.println();
        await era.printAndWait('세계를…… 뒤엎는다니……?');
        era.drawLine();
        await era.printAndWait([
          '타키온의 발명이 세계를 멸망시킬 124가지 가능성을 머릿속으로 시뮬레이션해 본 뒤, ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '를 따라 운동장으로 향했다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 평소와 같으면서도 한 번도 본 적 없는 약물을 꺼냈다.',
        ]);
        await era.printAndWait('평소와 같은 것은, 여느 때처럼 빛이 난다는 점이었고.');
        await era.printAndWait(
          '본 적 없는 것은, 그 빛이 평소 보던 어떤 색과도 달랐기 때문이었다.',
        );
        await era.printAndWait(
          '굳이 말하자면…… 청색과 백색이 뒤섞인 빛이었는데, 단순한 혼합광과는 또 달랐다.',
        );
        await era.printAndWait('어쩌면, 이 약은 정말로 온 세상을 뒤엎을지도 모른다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 문득 그런 확신이 들었다.',
        ]);
        await era.printAndWait([
          '하지만 그 변화가 좋은 것인지 나쁜 것인지는 ',
          me.get_colored_name(),
          '(으)로서는 아직 알 길이 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('그럼, 마시겠네.');
        era.println();
        await era.printAndWait([
          '미처 말릴 틈도 없이, ',
          tachyon.get_colored_name(),
          '은 재빨리 병을 따서 약물을 들이켰다.',
        ]);
        era.println();
        await tachyon.say_and_wait('그리고……');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '가 갑자기 달리기 시작했다. 모든 것이 순식간에 일어난 일이라 ',
          me.get_colored_name(),
          '은(는) 아무런 대응도 할 수 없었다.',
        ]);
        era.println();
        await era.printAndWait([
          '정해진 훈련량을 전부 소화한 ',
          tachyon.sex,
          '는 숨 하나 흐트러지지 않은 채로 ',
          me.get_colored_name(),
          '의 곁으로 돌아왔다.',
        ]);
        await era.printAndWait([
          '이 정도 운동은 지금의 ',
          tachyon.sex,
          '에게는 일도 아니었을 것이다.',
        ]);
        await era.printAndWait([
          '아니, ',
          me.get_couple_title(),
          '이 당초 측정했던 수치에 따르면, 지금의 ',
          tachyon.sex,
          '는 진작에 ',
          tachyon.get_uma_sex_title(),
          '로서의 한계점에 도달했어야 했다……',
        ]);
        era.println();
        await era.printAndWait([
          '거기까지 생각이 미치자, ',
          me.get_colored_name(),
          '의 머릿속에 어떤 가설이 스쳤다.',
        ]);
        await era.printAndWait([
          '미친 소리 같지만 만약 정말 그렇다면…… ',
          tachyon.sex,
          '의 행동이, 이 모든 상황이 설명된다.',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 떨리는 손으로 주머니를 뒤져, 예전에 ',
          tachyon.sex,
          '이 주었던 그 안경을 꺼냈다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '어떤가, ',
          callname,
          '? 지금 자네 눈에 보이는 나는 『얼마』인가?',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '의 눈에 비친 ',
          tachyon.sex,
          ', 그 머리 위의 숫자와 기호는 한계를 상징하는 「SS+ 1200」이 아니라……',
        ]);
        await era.printAndWait('「UG 1205」', {
          color: adaptability_colors.at(-1),
        });
        era.drawLine();
        await tachyon.print_and_wait([
          me.get_colored_actual_name(),
          '의 표정을 보고, ',
          tachyon.get_colored_name(),
          '은 웃음을 터뜨렸다.',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '는 도구의 관측 따위 없어도 자신의 변화를 알고 있었다. 이 세상 그 누가 ',
          tachyon.sex,
          '보다 자신의 몸을 더 잘 알겠는가.',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          '가 진정 원했던 것은, 바로 눈앞의 ',
          me.get_colored_actual_name(),
          '이(가) 짓고 있는 이 표정이었다.',
        ]);
        era.println();
        await tachyon.print_and_wait('그와 함께 걸어온 3년.');
        await tachyon.print_and_wait('꿈을 위해 온 힘을 다했던 그 시간들.');
        await tachyon.print_and_wait('두 사람의 노력이, 땀과 눈물이 흐르고 흘러 마침내 뚫고 지나온 것은.');
        era.println();
        await tachyon.print_and_wait('한계라는 이름의 장벽이었다.');
        era.println();
        await tachyon.print_and_wait('놀라운가? 기쁜가? 전율이 돋나?');
        await tachyon.print_and_wait([
          '점점 ',
          tachyon.get_colored_name(),
          '은 자신의 표정을 제어할 수 없게 되었다.',
        ]);
        await tachyon.print_and_wait(
          '아아, 분명 이 대사는 좀 더 덤덤하게 내뱉고 싶었건만.',
        );
        await tachyon.print_and_wait('입꼬리는 억제할 수 없이 위로 올라가고.');
        await tachyon.print_and_wait('눈가에는 통제되지 않는 눈물이 맺힌다.');
        await tachyon.print_and_wait('이것이 바로 기쁨의 눈물이라는 것일까.');
        await tachyon.print_and_wait('안 되겠군, 더 이상 참을 수 없어.');
        era.println();
        await tachyon.say_and_wait([
          '오게나, ',
          callname,
          '! 우리 함께 탐구해보세, 한계 너머에 존재하는 세계를!',
        ]);
        era.println();
        await tachyon.print_and_wait('안 돼, 지금 내 표정은 분명 엄청나게 한심하겠지.');
        await tachyon.print_and_wait(
          '정말이지, 이런 얼굴을 하고 협상을 하러 가다니 누가 믿어주겠나.',
        );
        await tachyon.print_and_wait(
          '만약 이런 어리석은 표정을 짓는 자를 믿어주는 이가 있다면……',
        );
        era.println();
        await tachyon.print_and_wait('후후, 그건 분명 미치광이거나 광인일 것이다.');
        await tachyon.print_and_wait([
          '이를테면, 눈앞에서 똑같이 어리석은 표정을 짓고는 여전히 눈동자 속에 광기 어린 빛을 품고 있는 ',
          me.get_colored_actual_name(),
          '처럼 말이야.',
        ]);
        era.println();
        await era.printAndWait(
          '미친 과학자와 광신적인 모르모트가 자신들에게 가장 어울리는 결말을 맞이했다.',
        );
        era.set('flag:현재위치', location_enum.gate);
        await print_event_name('한계의 저편', tachyon);
        era.set('flag:현재위치', location_enum.office);
      }
    } else {
      await CustomizedEdu.common_palace_relation(tachyon, me);
    }
  };
};