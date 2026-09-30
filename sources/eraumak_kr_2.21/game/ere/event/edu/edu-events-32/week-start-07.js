const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('발렌타인데이', tachyon);
    era.set('cflag:32:축제이벤트표시', 0);
    if (love >= 75) {
      await tachyon.say_and_wait(['자, ', callname, ', 발렌타인 초콜릿이야.']);
      era.println();
      await era.printAndWait([
        '갑자기 트레이닝실로 들이닥친 ',
        tachyon.get_colored_name(),
        '이 무심하게 내뱉은 말을 듣고서야, ',
        me.get_colored_name(),
        '은(는) 오늘이 발렌타인데이라는 사실을 깨달았다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 훈련을 위해 온종일 이리저리 뛰어다니느라 시간 가는 줄도 모르고 있었던 것이다.',
      ]);
      era.println();
      await me.say_and_wait('그치만…… 타키온이 주는 초콜릿이라고?', true);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 등 뒤에서 꺼내 든 하트 모양 상자와, 그 안에 정성스레 담긴 작은 초콜릿들을 바라보았다.',
      ]);
      await era.printAndWait('이 안에 설마……');
      era.println();
      await tachyon.say_and_wait(
        '응? 뭐야, 그 표정은. 설마 내가 여기에 무슨 약이라도 넣었을 거라고 생각하는 건가?',
      );
      era.printButton('고개를 끄덕인다', 1);
      era.printButton('「설마 안 넣었어?」', 2);
      await era.input();
      await tachyon.say_and_wait('……너무한 처사로군. 반박할 순 없지만 말이야.');
      await tachyon.say_and_wait(
        '하지만 오늘만큼은…… 특별한 날이니까. 그런 짓은 하지 않는다고.',
      );
      await tachyon.say_and_wait('못 믿겠다면, 내가 먼저 한 알 먹어볼까?');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 초콜릿을 천천히 입안으로 밀어 넣는 것을 지켜보았다.',
      ]);
      await era.printAndWait('앞니에 맞닿은 초콜릿이, 살짝 벌어진 앵두 같은 입술 사이로 스며들었다.');
      await era.printAndWait('한 입, 두 입.');
      await era.printAndWait([
        '손가락으로 밀어 넣자, 초콜릿은 점차 ',
        tachyon.get_colored_name(),
        '의 입안으로 사라져 갔다.',
      ]);
      era.println();
      await era.printAndWait('이 정도라면…… 안심하고 먹어도 될 것 같았다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 손을 뻗어 책상 위의 초콜릿을 향했다.',
      ]);
      await era.printAndWait('그러나.');
      era.printButton('「……?」', 1);
      await era.input();
      await era.printAndWait('손을 뻗는 순간, 초콜릿 상자가 휙 치워졌다.');
      await era.printAndWait(['당황한 ', me.get_colored_name(), '이(가) 의아해하던 찰나.']);
      era.printButton('「!?」', 1);
      await era.input();
      await era.printAndWait('방심하고 있던 입술을 기습당했다.');
      await era.printAndWait('영리한 혀가 치열을 헤치고 들어오자, 달콤하고 걸쭉한 액체가 흘러들어왔다.');
      await era.printAndWait(
        '꼼짝달싹 못 하게 억눌린 혀와, 자신을 짓누르는 불청객이 가교가 되어 농밀한 액체를 계속해서 흘려보냈다.',
      );
      await era.printAndWait('달다, 너무나도 달다.');
      await era.printAndWait([
        '완전하게 ',
        tachyon.get_colored_name(),
        '의 취향에 맞춰진 초콜릿이 구강 내를 가득 채웠다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '에게는 지나치게 달아야 할 그 맛이, ',
        tachyon.get_colored_name(),
        '의 혀가 섞이자 어느덧 익숙해지기 시작했다.',
      ]);
      await era.printAndWait([
        '마치 자신의 신체가 개조되어, ',
        tachyon.get_colored_name(),
        '이 좋아하는 모습으로 조정당하는 듯한 감각이었다.',
      ]);
      await era.printAndWait('……아니, 조정이라는 단어는 그리 적절하지 않을지도 모르겠다.');
      era.println();
      await tachyon.say_and_wait(['……', callname, ', 초콜릿은 아직 많이 남아있어❤']);
      era.println();
      await era.printAndWait('눈앞에 있는 연인의 정욕과 독점욕이 가득한 눈빛을 바라보았다.');
      await era.printAndWait('아아…… 완벽하게 「요리」된 식재료는 이제 먹힐 준비를 해야 했다.');
      begin_and_init_ero(0, 32);
      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await print_ero_page(32, true);
      await end_ero_and_show_result();
    } else if (love >= 50) {
      await tachyon.say_and_wait(['이런, ', callname, ', 발렌타인데이 축하하네!']);
      era.println();
      await era.printAndWait([
        '화창한 어느 날, 고요한 아침의 정적을 깨고 문을 박차고 들어온 것은 커다란 봉투를 든 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      await era.printAndWait('……이상하군, 오늘이 크리스마스는 아닐 텐데.');
      era.println();
      await tachyon.say_and_wait([
        '응? 이거 말인가? 다른 ',
        tachyon.get_uma_sex_title(),
        '들에게 받은 선물이라네.',
      ]);
      await tachyon.say_and_wait(
        '정말이지…… 필요 없다고 말했는데도. 이런 것보다는 자진해서 실험체가 되어주는 편이 훨씬 기쁠 텐데 말이야……',
      );
      era.println();
      await era.printAndWait([
        '알고 보니 ',
        tachyon.get_colored_name(),
        '은…… 이렇게나 인기가 많았던 것인가.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 마음속에서 아주 작은 질투심이 솟아올랐다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그건 그렇고, 자 ',
        callname,
        ', 어서 내 초콜릿을 받게나!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 가방 안에서 크기가 제각각인 초콜릿들을 이것저것 뒤적거리기 시작했다.',
      ]);
      await era.printAndWait('설마…… 그냥 다른 사람에게 받은 걸 대충 넘겨주려는 건 아니겠지?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 그런 관계까지는 아니라고 생각하면서도, 내심 자신만은 특별한 대우를 받길 바라고 있었다.',
      ]);
      era.printButton('「그건…… 의리 초콜릿이야?」', 1);
      await era.input();
      await era.printAndWait('트레이너로서 물어봐서는 안 될 질문이라는 건 알고 있었다.');
      await era.printAndWait('하지만…… 역시.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 진심을 알고 싶었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '의 말을 들은 ',
        tachyon.get_colored_name(),
        '은 봉투를 뒤적이던 손을 멈추었다.',
      ]);
      await era.printAndWait([
        '고개를 들어 ',
        me.get_colored_name(),
        '의 눈을 똑바로 응시했다.',
      ]);
      await era.printAndWait([
        '그 아름다운 붉은 눈동자는 마치 ',
        me.get_colored_name(),
        '의 내면을 꿰뚫어 보는 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '이런, 그 말은 무슨 뜻일까나, ',
        callname,
        '?',
      ]);
      await tachyon.say_and_wait('만약 의리 초콜릿이라고 한다면, 어쩔 건가?');
      await tachyon.say_and_wait(['아니면 자네는…… 어떤 유형의 초콜릿이길 바라는 거지?']);
      era.printButton('「타키온이 특별히 주는 것이었으면 좋겠어」', 1);
      era.printButton('「타키온이 나에게만 주는 초콜릿이었으면 좋겠어」', 2);
      await era.input();
      await era.printAndWait('결국, 끝내 그 두 글자는 입 밖으로 내지 못했다.');
      await era.printAndWait([
        '어떻게 그럴 수 있겠는가. 트레이너인 자신이, 담당 ',
        tachyon.get_uma_sex_title(),
        '에게 자신을 향한 마음이 「진심」인지 묻다니.',
      ]);
      era.println();
      await tachyon.say_and_wait('그럼, 이걸 주지.');
      era.println();
      await era.printAndWait(
        '마침내, 봉투 가장 밑바닥에서 절대 잘못 볼 리 없는 무지개색의 작은 포장을 찾아낸 뒤.',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 초콜릿을 가슴팍의 작은 주머니에 찔러 넣었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '자, 사랑스러운 실험 동물에게 주는 지난 1년간의 감사의 표시…… 그리고, 감사 그 이상의 것❤',
      );
      await tachyon.say_and_wait('자네가 직접, 꺼내 가보게나.');
      era.println();
      if (era.get('exp:0:성관계횟수') === era.get('exp:0:수면간횟수')) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 대놓고 가슴을 내미는 동작을 취했다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '은(는) 파들거리는 손을 뻗었다.']);
        await era.printAndWait('가슴에 닿지 않도록 세심하게 주의하며 초콜릿을 꺼냈다.');
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 대놓고 가슴을 내미는 동작을 취했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 시원스럽게 손을 뻗어, 사양 않고 직접 초콜릿을 가져왔다.',
        ]);
        await era.printAndWait([
          '도중에 움켜쥐는 바람에, 눈앞의 ',
          tachyon.get_uma_sex_title(),
          '가 교성을 내지르게 만든 고깃덩어리?',
        ]);
        await era.printAndWait(
          '아마 착각일 것이다. 초콜릿을 올려둔 선반이 소리를 낼 리가 없으니까.',
        );
        begin_and_init_ero(0, 32);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.breast),
          false,
        );
        end_ero_and_train();
      }
      era.println();
      await era.printAndWait([
        '초콜릿 포장을 벗기고, ',
        me.get_colored_name(),
        '은(는) 초콜릿을 입에 물었다.',
      ]);
      await era.printAndWait('입안에 넣은 순간, 초콜릿은 곧장 녹아내렸다.');
      era.printButton('「!?」', 1);
      await era.input();
      await era.printAndWait('돼지고기, 양파, 소스……');
      await era.printAndWait([
        '초콜릿에서 도저히 날 리 없는 맛이 ',
        me.get_colored_name(),
        '의 입안에 퍼졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 표정이 왜 그렇게 이상한가?']);
      await tachyon.say_and_wait(
        '어서 어서, 어떤 효과가 있지? ……육체적으로는 변화가 안 보이는데, 설마 내면에서부터 작용하는 건가……',
      );
      await era.printAndWait([
        '조금 전까지의 묘한 분위기는 어디 가고, ',
        tachyon.get_colored_name(),
        '은 신이 나서 ',
        me.get_colored_name(),
        '이(가) 먹은 초콜릿의 반응을 물어왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '? 설마 내가 실험실에서 반나절 동안 고생하며 조합해 만든 초콜릿에 대해 평가를 안 해주려는 건 아니겠지?',
      ]);
      era.println();
      await era.printAndWait('…………이 녀석은 정말.');
    } else if (relation > 225) {
      await tachyon.say_and_wait(['하하하! ', callname, '!']);
      era.println();
      await era.printAndWait([
        '호탕한 웃음소리와 함께 트레이닝실 문을 박차고 들어온 것은, 뒤에 커다란 봉투를 든 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '메리 크리스마스? 해피 뉴 이어? 아무튼 무슨 기념일 축하하네. 자 자, 내 선물을 받게나!',
      );
      era.printButton('「……혹시, 발렌타인데이 말이야?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '음…… 중요하지 않아. 어쨌든 합법적으로 다른 이에게 음식을 먹일 수 있는 날 아닌가?',
      );
      era.println();
      await era.printAndWait('……그렇게 해석한다면 틀린 말은 아닐지도?');
      await era.printAndWait([
        '하지만 상대가 ',
        tachyon.get_colored_name(),
        '이라는 걸 생각하면……',
      ]);
      era.printButton('「……무슨 약을 넣었어?」', 1);
      era.printButton('「……몇 명한테나 돌린 거야?」', 2);
      await era.input();
      await tachyon.say_and_wait('그런 건 중요하지 않아! 어서 받게나, 나의 발렌타인 선물일세!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 가방 안을 뒤적거리더니 유독 큼직한 초콜릿 한 조각을 꺼내, ',
        me.get_colored_name(),
        '의 허락도 구하지 않고 ',
        me.get_colored_name(),
        '의 손에 쥐여주었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 숙련된 동작을 보니, 오는 길에 이미 꽤 많은 사람에게 뿌리고 온 모양이었다.',
      ]);
      await era.printAndWait('……내일 사방팔방으로 사과하러 다녀야겠군. 하지만 우선은 이 고비를 넘겨야 한다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 조심스럽게 초콜릿을 한 입 베어 물었다.',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await era.printAndWait('발광, 변형, 머리가 두 개 자라남, 등에서 날개가 돋아남, 액체화……');
      await era.printAndWait('그 어떤 변화도……… 일어나지 않았다.');
      await era.printAndWait('말하자면, 아마도, 어쩌면 그냥 평범한 초콜릿인 것 같았다.');
      await era.printAndWait([
        '하지만, 이것은 ',
        tachyon.get_colored_name(),
        ' 기준의 「정상」일 뿐.',
      ]);
      await era.printAndWait('평범한 사람의 기준에서 정상적인 초콜릿인가 하면……');
      era.printButton('왜…… 돼지고기 덮밥 맛이 나는 거야!?', 1);
      await era.input();
      await era.printAndWait('돼지고기, 양파, 소스……');
      await era.printAndWait([
        '초콜릿에는 있을 수 없는 맛이 ',
        me.get_colored_name(),
        '의 입안을 가득 채웠다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 표정이 왜 그렇게 이상한가?']);
      await tachyon.say_and_wait(
        '어서 어서, 어떤 효과가 있지? ……육체적으로는 변화가 안 보이는데, 설마 내면에서부터 작용하는 건가……',
      );
      era.println();
      await era.printAndWait('이 녀석…… 본인도 약효가 뭔지 모르면서 아무한테나 먹이고 다닌 건가.');
      await era.printAndWait([
        '다른 날이라면 몰라도, 커플들이 사방에서 염장을 지르는 이 날을 ',
        tachyon.get_colored_name(),
        '이 이런 식으로 망쳐놓다니…………',
      ]);
      await era.printAndWait([
        '이상하네, 어째서 갑자기 ',
        tachyon.get_colored_name(),
        '이 잘했다는 생각이 드는 거지.',
      ]);
      await era.printAndWait([
        '…………아무튼, ',
        tachyon.get_colored_name(),
        '에게 교훈을 좀 줘야겠다.',
      ]);
      era.printButton('「아무런 효과도 없는 것 같은데」', 1);
      era.printButton('「타키온도 한번 먹어봐」', 2);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 반응하기도 전에, ',
        me.get_colored_name(),
        '은(는) 한 입 베어 문 초콜릿을 ',
        tachyon.get_colored_name(),
        '의 입안에 밀어 넣었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('읍!? 끄윽!?');
      era.println();
      await era.printAndWait([
        '방심하고 있던 ',
        tachyon.get_colored_name(),
        '의 입안에 초콜릿이 가득 찼다.',
      ]);
      await era.printAndWait([
        '입을 열려던 ',
        tachyon.sex,
        '는 얼떨결에 입안의 초콜릿을 삼켜버렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['잠깐, 무슨 짓인가! ', callname, '!?']);
      await tachyon.say_and_wait('우엑…… 이게 무슨 맛이야!?');
      await tachyon.say_and_wait([
        '정말 이상한 맛이군!! 어째서 초콜릿에서 돼지고기 맛이 나는 건가!',
      ]);
      era.println();
      await era.printAndWait([
        '내일이면 아마 호되게 보복당하겠지만, 지금 이 순간 ',
        tachyon.get_colored_name(),
        '의 경악과 역겨움이 섞인 얼굴을 보니.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 가슴 한구석이 시원해지는 것을 느꼈다.']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 시끌벅적한 발렌타인데이가 끝났다.',
      ]);
    } else {
      await tachyon.say_and_wait([callname, '! 하하하, 발렌타인데이 축하하네!']);
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait([
        '유난히 들떠 보이는 ',
        tachyon.get_colored_name(),
        '을 보자, ',
        me.get_colored_name(),
        '은(는) 자기도 모르게 경계심이 생겼다.',
      ]);
      await era.printAndWait([
        '다른 이유가 아니라, 평소에는 늘 냉담하던 ',
        tachyon.get_colored_name(),
        '의 태도가 오늘따라 이상하게 고조되어 있었기 때문이다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '응? ',
        callname,
        '? 왜 그러나, 나에게 발렌타인 축하 인사를 안 해줄 텐가? 설마…… 내가 싫어진 건가…… 끄윽……',
      ]);
      await tachyon.say_and_wait('으으…… 윽…… 머리가…… 어지럽군……');
      era.println();
      await era.printAndWait([
        '이상하다, 아무래도 오늘 ',
        tachyon.get_colored_name(),
        '의 상태가…… 좀 이상하다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 얼굴을 자세히 관찰했다. 추운 날씨나 흥분 때문인 줄 알았던 발그레한 뺨과 몽롱한 눈빛이 그제야 ',
        me.get_colored_name(),
        '의 눈에 들어왔다.',
      ]);
      era.printButton('「……타키온, 너 술 마셨어?」', 1);
      await era.input();
      await tachyon.say_and_wait('으음…… 안 마셨네……');
      await tachyon.say_and_wait('그저…… 그저…… 실수로 아주 조금…… 에탄올 혼합물을 마셨을 뿐……');
      era.println();
      await era.printAndWait('에탄올 혼합물…… 그게 술이잖아!?');
      await era.printAndWait([
        '어쩐지 ',
        tachyon.get_colored_name(),
        '의 텐션이 왜 이렇게 이상한가 했다……',
      ]);
      await era.printAndWait('아무튼, 이래서는 오늘 훈련은 물 건너간 모양이다.');
      await era.printAndWait(['우선 ', tachyon.sex, '를 푹 쉬게 해줘야겠다.']);
      era.println();
      await era.printAndWait([
        '하지만 쉴 생각이 전혀 없어 보이는 ',
        tachyon.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 손을 피하더니.',
      ]);
      await era.printAndWait(
        '품속을 한참 뒤적거리다가, 늘 백의 안쪽 주머니에 넣어두던 약병 사이에서 실험용 여과지에 싸인 무언가를 겨우 찾아냈다.',
      );
      await era.printAndWait('포장을 열어보니, 안에는 무지개색 초콜릿 한 조각이 들어있었다.');
      era.println();
      await tachyon.say_and_wait(['으음…… 마…… 맞다…… ', callname, '……?']);
      await tachyon.say_and_wait('발…… 발렌타인…… 초콜릿이야……');
      era.drawLine();
      await era.printAndWait('이렇게나 불길한 발렌타인 선물은 난생처음 본다.');
      await era.printAndWait('정말로 이렇게 수상한 초콜릿을 먹어야 하는 걸까.');
      era.printButton('「이건…… 뭘로 만든 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait('뭘로……? 음…… 잊어버렸네……');
      await tachyon.say_and_wait(
        '아마…… 아마도…… 코코아 가루…… 우유…… 설탕…… 간장…… 양파…… 생돼지고기?',
      );
      era.println();
      await era.printAndWait(
        '마지막 몇 개는 초콜릿에 절대 들어가선 안 될 재료들 아닌가!?',
      );
      await era.printAndWait('그래도…… 독성 물질은 넣지 않았다는 점을 다행으로 여겨야 하나?');
      await era.printAndWait('맛은 분명 끔찍하겠지만.');
      era.println();
      await tachyon.say_and_wait('왜…… 왜 안 먹는 건가……');
      await tachyon.say_and_wait([
        '먹게나…… ',
        callname,
        '…… 자네…… 내 체면을 안 세워주는 건가……',
      ]);
      era.println();
      await era.printAndWait('왜 갑자기 술 권하는 아저씨 말투가 된 거야!?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '이(가) 좀처럼 손을 대지 않자, 아예 직접 초콜릿을 집어 들었다.',
      ]);
      await era.printAndWait('그리고…… 입에 물었다.');
      era.println();
      await tachyon.say_and_wait('음…… 이러케 함 머글 수 이짜나');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 초콜릿을 가볍게 입에 물었다.',
      ]);
      await era.printAndWait([
        '살짝 벌어진 앵두 같은 입술로, ',
        me.get_colored_name(),
        '에게 반대쪽을 베어 물라는 신호를 보냈다.',
      ]);
      await era.printAndWait('……에?');
      era.println();
      await tachyon.say_and_wait(
        '히히…… 이러먼 어쩌먼 뽀뽀할 기해가 잇을지두 모른다구',
      );
      era.println();
      await era.printAndWait('……이것이 술의 마력인가.');
      await era.printAndWait([
        '평소에는 늘 쌀쌀맞게 대하던 ',
        tachyon.get_colored_name(),
        '의 표정이, 믿을 수 없을 만큼 부드럽고 요염하게 변해있었다.',
      ]);
      await era.printAndWait([
        '홀린 듯이, ',
        me.get_colored_name(),
        '은(는) 다가가 초콜릿을 베어 물었다.',
      ]);
      era.println();
      await era.printAndWait('가깝다, 너무 가깝다.');
      await era.printAndWait([
        '직접적으로 ',
        tachyon.get_colored_name(),
        '의 숨결이 느껴질 만큼 가깝다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 눈을 바라보았다.',
      ]);
      await era.printAndWait('사람을 매료시키는, 지금은 조금 취기에 젖은 그 눈동자를.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 혹시라도 초콜릿을 다 먹으면 이 시간이 사라질까 봐, 아주 조금씩 베어 물었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '도 천천히 앞으로 다가왔고, 두 사람의 입술은 금방이라도 맞닿을 것 같았다…… 아니, 어쩌면 이미 닿았을지도 모른다.',
      ]);
      await era.printAndWait('하지만…… 초콜릿의 크기는 한정되어 있었다.');
      await era.printAndWait(
        '체온 때문이었을까, 아니면 누군가가 먼저 이 위태로운 연결을 끊어버린 것일까.',
      );
      await era.printAndWait([
        '초콜릿은 ',
        me.get_couple_title(),
        ' 두 사람의 입안에서 녹아 끊기며, 각각의 입속으로 사라졌다.',
      ]);
      era.printButton('「!?」', 1);
      await era.input();
      await era.printAndWait('……독은 없군.');
      await era.printAndWait([
        '그동안 ',
        tachyon.get_colored_name(),
        '의 위세에 눌려 수차례 생체 실험을 당해온 ',
        me.get_colored_name(),
        '은(는) 확실히 판단할 수 있었다. 적어도 독이 든 물건은 아니라는 것을.',
      ]);
      await era.printAndWait('하지만 이 맛은…… 이 맛은……');
      era.printButton('「어째서…… 돼지고기 덮밥 맛이……?」', 1);
      await era.input();
      await era.printAndWait('마지막의 그 정체불명의 재료들을 들었을 때부터 어느 정도 예상은 했지만.');
      await era.printAndWait('역시나 이 맛은 이해하기 힘들었다.');
      await era.printAndWait('도대체 어떻게 해야 이런 초콜릿을 만들 수 있는 건지……');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 바라보았지만, ',
        tachyon.get_colored_name(),
        '은 한동안 말이 없었다.',
      ]);
      await era.printAndWait('설마…… 무슨 문제라도 있는 건가……');
      era.println();
      await tachyon.say_and_wait('……………푸흡.');
      await tachyon.say_and_wait('하하하하! 이게 대체 무슨 맛이야! 너무 이상하잖아!');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 갑자기 크게 웃기 시작했다.']);
      await era.printAndWait('나만 모르는 웃음 포인트라도 있는 걸까?');
      await era.printAndWait([me.get_colored_name(), '은(는) 잠시 생각에 잠겼다.']);
      await era.printAndWait('돼지고기 덮밥 맛이 나는 초콜릿이라니.');
      await era.printAndWait('…………다시 생각해보니, 확실히 좀 웃기긴 했다.');
      era.println();
      await era.printAndWait([
        '어느덧 ',
        me.get_colored_name(),
        '도 함께 웃음을 터뜨리고 말았다.',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('드르렁…… 으음…… 푸우……');
      era.println();
      await era.printAndWait('정말이지…… 실컷 소동을 피워놓고는 멋대로 잠들어버리다니.');
      await era.printAndWait([
        '설마 ',
        tachyon.get_colored_name(),
        '에게 이런 술버릇 나쁜 주당의 잠재력이 있었을 줄이야……',
      ]);
      era.println();
      await tachyon.say_and_wait('음…… 모르모트…… 고마…… 푸우……');
      era.println();
      await era.printAndWait('………설마.');
      await era.printAndWait('부끄러워서 차마 말로 못 하니까 일부러……');
      await era.printAndWait([
        '아니, 무슨 생각을 하는 거야. ',
        tachyon.get_colored_name(),
        '이라면…… 십중팔구 정말로 사고였을……까?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 입가에 묻은 침을 닦아주었다.',
      ]);
      await era.printAndWait([
        '일단…… ',
        tachyon.sex,
        '가 깨어나면 나중에 다시 확인해봐야겠다. 부디…… ',
        tachyon.sex,
        '가 초콜릿에 넣어야 할 것과 넣지 말아야 할 것 정도는 구분할 줄 알게 되기를 바라며.',
      ]);
    }
    new TachyonLifeMarks().choco = 1;
  };

  handlers[95 + 14] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    await print_event_name('팬 대감사제', tachyon);
    era.set('cflag:32:축제이벤트표시', 0);
    if (edu_marks.plan_b) {
      await era.printAndWait([
        '신체의 준비가 아직 완벽하게 끝나지 않았기에, ',
        tachyon.get_colored_name(),
        '은 팬 대감사제 활동과 인터뷰를 모두 거절했다.',
      ]);
      await era.printAndWait([
        '이로 인해 주변에서는 「',
        tachyon.get_colored_name(),
        '의 복귀」에 대해 불안한 시선과 의구심이 쏟아져 나왔다.',
      ]);
      await era.printAndWait([
        '하지만 그런 것들은 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '에게는 아무런 상관이 없었다. 의혹 따위는……',
      ]);
      await era.printAndWait(
        '아니, 오히려 두 사람의 예정된 계획대로라면, 의혹이 커질수록 계획을 추진하기에 더 유리할지도 몰랐다.',
      );
      await era.printAndWait([
        '……그렇기에 사람들의 ',
        tachyon.get_colored_name(),
        '에 대한 비난을 들으면서도, ',
        me.get_colored_name(),
        '은(는) 묵묵히 입술을 깨물며 현장을 떠날 수밖에 없었다.',
      ]);
    } else {
      await tachyon.say_and_wait(['그리하여, 내 실험 결과에 따르면…… 오사카배 당시의 팬들이……']);
      await tachyon.say_and_wait(
        '그리고 어떤 이가 가진 열정이 힘을 만들어내어 내가 원래의 속도를 초월하게 했다네. 역시 감정에는 어느 정도의 힘이 깃들어 있는 거겠지.',
      );
      era.printButton('「타키온이 이런 유심론적인 개념을 믿을 줄은 몰랐는데」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '나는 진리와 가능성만을 믿네. 그 가능성이 있다면 무엇이든 걸 수 있지…… ',
        callname,
        ', 자네도 그렇지 않은가?',
      ]);
      await tachyon.say_and_wait([
        '유물론이든 유심론이든 상관없어. 나에게 도움이 되어 내가 한계를 초월하고 가능성의 끝에 도달할 수만 있다면…… 설령 ',
        sys_get_colored_callname(32, 25),
        '의 친구라도 기꺼이 빌려 쓸 생각이니 말이야.',
      ]);
      await tachyon.say_and_wait(
        '……뭐, 합리적으로 설명하자면 아마 대뇌 피질과 중추 신경의 활성도와 관련이 있겠지. 쉽게 말하자면…… 후후, 합법적인 흥분제랄까?',
      );
      era.printButton('「!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '후후, 농담일세…… 하지만 본질적으로 이런 흥분이 체력에 주는 보너스는 무의식 상태라면 그 한계치가 낮을 텐데.',
      );
      await tachyon.say_and_wait([
        '적어도 오사카배 당시에 측정된 수치만큼 높을 리가 없어…… 설마 내 정신적인 문제인 건가……',
      ]);
      era.printButton('「타키온?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……아니, 아무것도 아니야. 더 검증이 필요할 뿐이지. 그보다 나는 좀 더 깊이 연구해보고 싶네…… 『팬』이라는 개념을 말이야.',
      );
      era.printButton('「팬이라니……」', 1);
      era.printButton('「그 말은 즉……」', 2);
      await era.input();
      await tachyon.say_and_wait('그래…… 팬 대감사제에 참가해 볼 생각이네.');
      await tachyon.say_and_wait(
        '가까운 거리에서의 접촉…… 이번 목적은 두 가지야. 순조롭다면…… 한 번에 해결하고 싶군.',
      );
      era.drawLine();
      await say_by_passer_by_and_wait('팬A', [
        '타키온 ',
        tachyon.get_adult_sex_title(),
        '! 혹시 같이 사진 한 장 찍어주실 수 있을까요!',
      ]);
      await tachyon.say_and_wait('후후, 물론이지. 특별히 원하는 포즈라도 있는가?');
      await say_by_passer_by_and_wait(
        '팬A',
        '아뇨, 아뇨! 그냥 이렇게 팔짱을 껴주시기만 하면 돼요!',
      );
      await tachyon.say_and_wait('이렇게 말인가?');
      await say_by_passer_by_and_wait('팬A', '저, 정말 감사합니다!');
      era.println();
      await say_by_passer_by_and_wait(
        '팬B',
        '타키온 씨! 오래전부터 응원하고 있었어요! 타카라즈카 기념도 힘내세요!',
      );
      await tachyon.say_and_wait('그런가, 그런가? 격려해줘서 고맙네.');
      await say_by_passer_by_and_wait(
        '팬B',
        '네! 타키온 씨가 앞으로도 계속해서 사람을 매료시키는 멋진 레이스를 보여주시길 기대할게요!',
      );
      await tachyon.say_and_wait('물론이지, 하하하하!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 찾아오는 팬들에게 능숙하게 대응해 나갔다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 영업용 모드와 평소 모습 사이의 그 괴리감이란……',
      ]);
      await era.printAndWait([
        '가끔은 어느 쪽이 ',
        tachyon.sex,
        '의 본모습인지 의심이 갈 정도로 그 차이가 컸다.',
      ]);
      await era.printAndWait('그렇게 행사는 금방 마무리되었다.');
      era.println();
      await tachyon.say_and_wait('음…… 꽤 흥미로운 데이터를 수집했어.');
      await tachyon.say_and_wait(
        '오늘 악수나 사인, 사진 촬영을 하러 온 관중들——',
      );
      await tachyon.say_and_wait(
        '이하 『팬』이라고 칭하겠네. 그들의 관전 목적과 나를 대면했을 때의 심박수, 호흡, 맥박 반응 속도를 정리해봤지.',
      );
      await tachyon.say_and_wait('팬들의 다양한 발언을 토대로 결론을 내렸어.');
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        ', 즉 나는 이 팬들에게 있어 실험에서의 보상과 같은 존재더군.',
      ]);
      await tachyon.say_and_wait(
        '응원이라는 이름의 노력을 기울이고, 그에 대한 보상으로 응답을 받길 원하는……',
      );
      era.printButton('「……나는 그렇게 생각하지 않아」', 1);
      era.printButton('「타키온을 향한 응원은 그렇게 복잡한 게 아니야」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……음, 이 논설에서 가장 큰 허점은 바로 자네로군, ',
        callname,
        '. 자네의 지원은 도대체 무엇을 위한 것인가?',
      ]);
      await tachyon.say_and_wait([
        '사츠키상, 일본 더비, 국화상, 그리고 오사카배까지…… 자네는 늘 나를 응원해주었지.',
      ]);
      await tachyon.say_and_wait(
        '하지만 그들과는 달라…… 내 곁에 있었던 자네는 알 텐데. 당시의 내가 팬들의 지지를 특별히 고려해야 할 실험 변수로 취급하지 않았다는 사실을.',
      );
      await tachyon.say_and_wait(
        '그러니 자네의 응원과 지지는 아무런 보상을 얻을 수 없었지. 자네가 내 연구를 도와주는 것과는 결이 달라……',
      );
      await tachyon.say_and_wait(
        '연구를 지원함으로써 자네가 보고 싶어 하는 달리기와 레이스를 얻는 것과는 달리……',
      );
      await tachyon.say_and_wait('응원과 지지라는 측면에서는, 도무지 이해할 수가 없단 말이야.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 ',
        me.get_colored_name(),
        '은(는) 순간 말문이 막혔다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 답하는 것 자체는 어렵지 않았다.',
      ]);
      await era.printAndWait(
        '하지만…… 이런 감정적인 부분을 정말로 말이라는 수단을 통해 이해시킬 수 있는 것일까.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 대답이 없자, ',
        tachyon.get_colored_name(),
        '은 다시 말을 이어갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('이래서야 오늘 실험은 절반의 성공이라고밖에 할 수 없겠군……');
      await tachyon.say_and_wait([
        '이제 다음은 타카라즈카 기념이야. 그때는 팬들의 지지가 데이터에 주는 영향을 전체적으로 측정해봐야겠어.',
      ]);
      await era.printAndWait([
        '묘한 여운을 남긴 채, ',
        tachyon.get_colored_name(),
        '의 팬 대감사제가 끝났다.',
      ]);
      flags.wait_flag = sys_change_motivation(32, 1);
    }
  };
};