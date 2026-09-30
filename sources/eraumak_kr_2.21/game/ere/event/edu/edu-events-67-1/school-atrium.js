const era = require('#/era-electron');

const Edu67UntilRaceStart = require('#/event/edu/edu-events-67-1/race-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');

module.exports = class extends Edu67UntilRaceStart {
  async school_atrium(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 67) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new DaiyaEduMarks1();
    let wait_flag = false;
    if (event_marks.sos === 1) {
      event_marks.sos++;
      await print_event_name('딸꾹질 SOS', daiya);
      const mcqueen = get_chara_talk(13);
      await era.printAndWait(`방과 후, ${me.name}은(는) 메지로 맥퀸에게 달려가는 사토노 다이아몬드를 발견했다.`);
      await mcqueen.say_and_wait('……딸꾹!');
      await daiya.say_and_wait('맥퀸 씨, 이걸 드릴게요. 그러면 멈출지도 몰라요!');
      await mcqueen.say_and_wait('어머, 고마워요. 그럼 사양 않고 받을게요.');
      await mcqueen.say_and_wait('……딸꾹!');
      await mcqueen.say_and_wait('멈추질 않네요…… 곧 파티에서 연설도 해야 하는데 말이죠.');
      await mcqueen.say_and_wait(
        '지금 이 순간에도 시간은 계속 흐르고 있는데…… 어쩌면 좋죠……!',
      );
      await daiya.say_and_wait('맥퀸 씨……');
      await daiya.say_and_wait(
        '……저기, 파티 전까지 시간을 저에게 맡겨주시겠어요? 다른 방법을 시도해 보고 싶어요!',
      );
      await daiya.say_and_wait('……앗, 트레이너 선생님! 죄송하지만 부탁드릴 게 있어요!');
      await daiya.say_and_wait('학원 내 방송으로 옥상 출입을 엄격히 금지한다고 알려주세요!');
      era.printButton('「무슨 일을 하려고?」', 1);
      await era.input();
      await daiya.say_and_wait('지금은 설명할 시간이 없어요…… 제발 부탁드릴게요!');
      await mcqueen.say_and_wait('어, 어째 일이 커지는 것 같은 기분이……');
      await era.printAndWait(
        `${daiya.sex}의 부탁에 ${me.name}은(는) 어쩔 수 없이 안내 방송을 하러 갔다. 대체 무엇을 하려는 걸까……?`,
      );
      await mcqueen.say_and_wait('…………딸꾹. 이제 정말 파티 시간이 다 됐는데……');
      await daiya.say_and_wait('조금만 더 기다려 주세요…… 아, 왔다!');
      await me.say_and_wait('프로펠러 소리……!', true);
      await era.printAndWait(
        '의료진 「HQ! HQ! 트레센 학원에 도착했다! 지금부터 영애의 친구를 서포트한다!」',
      );
      await mcqueen.say_and_wait('헤, 헬리콥터!? 이게 대체 무슨 상황인가요……!?');
      await daiya.say_and_wait('저희 가문의 개인 의료팀을 불렀어요.');
      await me.say_and_wait('의료 기기 소리……!', true);
      await daiya.say_and_wait(
        '이건 ICU 등 최신 의료 설비를 갖춘 이동식 집중 치료 박스예요!',
      );
      await mcqueen.say_and_wait('그건 너무 과한 거 아닌가요!?');
      await daiya.say_and_wait('자, 어서 안으로 들어가세요! 그러면 딸꾹질도 멈출 거예요.');
      await mcqueen.say_and_wait('너, 너무 막무가내라니까요~!?');
      await mcqueen.say_and_wait(
        '……어라, 어머? 저기…… 너무 충격적인 상황이라 그런지, 딸꾹질이 멈춘 것 같아요.',
      );
      await daiya.say_and_wait('어머? 정말인가요? 즉, 딸꾹질과의 싸움에서 승리한 거네요!');
      await mcqueen.say_and_wait(
        '정말이지, 사람을 이렇게까지 놀라게 하지 말아 주세요. 하지만…… 고마워요, 사토노 씨.',
      );
      await daiya.say_and_wait(
        '아니에요, 이 정도쯤이야 아무것도 아니죠! 조금이라도 도움이 되었다면…… 전 정말 기뻐요!',
      );
      era.printButton('「열심히 했구나. 수고했어!」', 1);
      era.printButton('「상상을 초월하는 규모네……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('헤헤헤, 맥퀸 씨를 돕는 일이니까요♪');
        await daiya.say_and_wait(
          '또 무슨 문제가 생기면 말씀해 주세요! 제가 온 힘을 다해 도와드릴게요!',
        );
        await mcqueen.say_and_wait(
          '네, 네에…… 그때는 가급적 상식적인 범위 내에서 부탁드릴게요……',
        );
        await daiya.say_and_wait('후후후, 알겠어요!');
        await era.printAndWait(
          '전력을 다하는 사토노 다이아몬드의 모습은 평소보다 훨씬 듬직해 보였다.',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      } else {
        await daiya.say_and_wait('그렇군요, 역시 조금 더 겸허하게 행동하는 게 좋았겠어요.');
        await daiya.say_and_wait(
          '아, 맞다……! 전용기로 맥퀸 씨를 병원까지 모셔다드렸어야 했는데!',
        );
        await mcqueen.say_and_wait('……그, 그렇게 되는 건가요……');
        await era.printAndWait(
          `상식을 벗어난 사토노 다이아몬드의 발상에 ${me.name}은(는) 경악을 금치 못했다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      }
    } else if (event_marks.sweepy5 === 1) {
      event_marks.sweepy5++;
      await print_event_name('스위피 5☆입단 테스트!', daiya);
      const kita = get_chara_talk(68);
      const sweepy = get_chara_talk(44);
      const tachyon = get_chara_talk(32);
      await era.printAndWait(
        `${me.name}과(와) 사토노 다이아몬드가 복도를 걷고 있을 때의 일이었다.`,
      );
      await sweepy.print_and_wait('??? 「찾았다──────!!!!」');
      await sweepy.say_and_wait(
        '사토노! 오늘부터 널 『마법 소녀 · 다이아몬드』로 임명한다!',
      );
      await daiya.say_and_wait('네? 『마법 소녀 · 다이아몬드』……인가요?');
      await kita.say_and_wait(
        '『마법 소녀☆스위피 5』. 마법 소녀 · 블랙 등장! 헤헤♪',
      );
      await daiya.say_and_wait('와아, 키타짱까지 그런 말을!?');
      await kita.say_and_wait(
        '헤헤♪ 사실 스윕이 만든 『마법 소녀☆스위피 5』라는 유닛이야.',
      );
      await kita.say_and_wait('나도 얼마 전에 마법 소녀 · 블랙으로 임명받았어!');
      await kita.say_and_wait(
        '그래서 다이아짱도 같이 하면 좋을 것 같아서…… 어때?',
      );
      await sweepy.say_and_wait(
        '멤버는 나── 천재 마법 소녀 스윕이랑 마법 소녀 · 블랙, 그리고 타키온 박사야.',
      );
      await daiya.say_and_wait(
        '어머, 다 같이 마법 놀이를 하는 건가요? 재미있어 보여요♪ 꼭 참가하게 해주세요!',
      );
      await sweepy.say_and_wait(
        '정말!? 잘됐다♪ 그럼 당장 마법 연습부터 시작하자! 어디 보자──',
      );
      await sweepy.say_and_wait('──앗! 저기 있는 녀석! 저 녀석을 쓰러뜨려 봐!');
      era.printButton('「응!?」', 1);
      await era.input();
      await sweepy.say_and_wait(
        '적은 언제 나타날지 모르는 법이야. 제대로 연습해 둬야지!',
      );
      await daiya.say_and_wait(
        `트레이너 선생님을 쓰러뜨리라고요……? 하지만 어떻게 쓰러뜨려야 할까요?`,
      );
      await me.say_and_wait('내가 쓰러지는 게 전제구나……', true);
      await sweepy.say_and_wait('그건 내가 가르쳐줄게♪ 잘 봐. 나처럼 주문을 외우는 거야──');
      await tachyon.print_and_wait(
        '??? 「……후후후, 적을 쓰러뜨리는 방법이 마법만 있는 건 아니라네.」',
      );
      await tachyon.say_and_wait(
        '약물로 자신을 강화해서 쓰러뜨리는 방법도 있지. 그쪽을 택한다면 내가 도와주겠네.',
      );
      await sweepy.say_and_wait(
        '야, 지금 내 차례라고!! 사토노, 넌 타키온 말고 나한테 배우고 싶지!?',
      );
      await daiya.say_and_wait(
        '우후후, 둘 다 재미있을 것 같아요♪ 저기, 트레이너 선생님은 누구에게 배우는 게 좋다고 생각하세요?',
      );
      era.printButton('「스윕 토쇼에게 배우자」', 1);
      era.printButton('「아그네스 타키온에게 도움을 받자」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sweepy.say_and_wait(
          '흐흥~ 당연한 소릴! 그럼 내가 마법을 어떻게 쓰는지 보여줄게♪ 준비하시라──',
        );
        await sweepy.say_and_wait('러브러브 · 애정애정 · 사랑의 꽃☆별빛이여 내려라!');
        await era.printAndWait(
          '……아무 일도 일어나지 않았다. 하지만 포즈만큼은 완벽했다. 과연 자칭 마법 소녀답다.',
        );
        await sweepy.say_and_wait(
          '후후, 봤어? 이렇게 자기만의 스타일로 주문을 외우면 되는 거야♪',
        );
        await daiya.say_and_wait(
          '그렇군요, 자신만의 스타일로 주문을…… 좋아요, 저도 해볼게요!',
        );
        await kita.say_and_wait('파이팅! 다이아짱이라면 할 수 있을 거야!');
        await daiya.say_and_wait('보아라, 눈부신 다이아몬드의 빛! 고요한 광채여──!');
        await era.printAndWait(
          `그 순간, ${me.name}은(는) 정말로 눈부신 빛을 본 것 같은 기분이 들어 쓰러지기로 했다.`,
        );
        await sweepy.say_and_wait(
          '와아, 정말 반짝반짝해 보여……! 사토노, 제법인데♪',
        );
        await sweepy.say_and_wait(
          '마법 소녀 · 다이아몬드! 정식 입단을 허가한다! 이제부터 넌 『마법 소녀☆스위피 5』의 멤버야♪ 알겠지?',
        );
        await daiya.say_and_wait('네! 마법 소녀 · 다이아몬드, 앞으로 더욱 빛나겠어요!');
        await era.printAndWait(
          `마법에 대해서는 잘 모르겠지만, 또래 친구들이 즐겁게 노는 모습을 보니 ${me.name}의 입가에도 절로 미소가 지어졌다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
      } else {
        await tachyon.say_and_wait(
          '후후후, 탁월한 선택이다! 그럼 사토노, 우선 약물로 신체를 강화하지. 단숨에 들이기게나.',
        );
        await era.printAndWait(
          `아그네스 타키온이 기괴한 색깔의 약을 꺼내자, ${me.name}은(는) 불길한 예감이 들었다.`,
        );
        await kita.say_and_wait('색깔이 정말 장난 아닌데…… 다이아짱, 진짜 마실 거야?');
        era.printButton('「역시 관두자!」', 1);
        await era.input();
        await tachyon.say_and_wait('에이──! 뭔가── 이제 와서 무르기인가?');
        await daiya.say_and_wait(
          '아니요, 한번 결정한 일은 절대 굽히지 않아요. 트레이너 선생님이라 해도 제 결정을 바꿀 순 없어요!',
        );
        await me.say_and_wait('하지만—');
        await daiya.say_and_wait('사토노 다이아몬드, 단숨에 들이키겠습니다!');
        await era.printAndWait(
          `${daiya.sex}는 아그네스 타키온에게서 약을 받아 단숨에 마셨다.`,
        );
        await daiya.say_and_wait('음── 처음 먹어보는 맛이네요! 재미있어요!');
        await tachyon.say_and_wait(
          '오오──! 혈액 순환을 돕기 위해 캡사이신을 잔뜩 넣었는데, 아무런 반응이 없는 건가!',
        );
        await tachyon.say_and_wait(
          '후후후……대단한걸! 좋아, 그대로 한번 달려보고 오게나!',
        );
        await me.say_and_wait('캡사이신……!?', true);
        await sweepy.say_and_wait(
          '너, 너 제법이잖아……! 마법 소녀 · 다이아몬드! 오늘부터 정식으로 『마법 소녀☆스위피 5』의 멤버로 인정해 주지♪',
        );
        await era.printAndWait(
          `스윕 토쇼 일행이 떠난 후, ${me.name}은(는) 사토노 다이아몬드에게 다가갔다. 아까 마신 캡사이신이 걱정되었기 때문이다.`,
        );
        era.printButton('「방금 그거…… 맵지 않았어?」', 1);
        await era.input();
        await daiya.say_and_wait('……들켰나요?');
        await daiya.say_and_wait(
          '우후후, 사실 혀가 얼얼할 정도로 매웠지만, 친구들 앞에서 약한 모습을 보일 수는 없잖아요♪',
        );
        await era.printAndWait(
          `${daiya.sex}은(는) ${me.name}에게만 살짝 진실을 털어놓았다. 역시 무리하고 있었구나 싶어, 나잇대에 맞는 귀여운 모습에 ${me.name}은(는) 마음이 훈훈해졌다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 10, 0, 0], 15);
      }
    } else if (event_marks.high_dream === 1) {
      event_marks.high_dream++;
      await print_event_name('너무나 큰마음', daiya);
      const gold_ship = get_chara_talk(7);
      await era.printAndWait(
        `${me.name}과(와) 사토노 다이아몬드가 걷던 중, 심각한 표정의 골드 쉽을 발견했다.`,
      );
      await gold_ship.say_and_wait(
        '대략 이 정도 크기인가? 아니, 좀 더 넉넉하게……',
      );
      await daiya.say_and_wait('골드 쉽 씨, 무슨 고민이라도 있으신가요?');
      await gold_ship.say_and_wait('사토노냐…… 좋아, 너한테만 말해주지. 따라와 봐.');
      await gold_ship.say_and_wait(
        '내가 묻겠는데, 너는 이 수영장을 보고 무슨 생각이 드냐?',
      );
      await daiya.say_and_wait('글쎄요…… 평소 트레이닝할 때 자주 쓴다 정도일까요?');
      await daiya.say_and_wait(
        '그리고…… 음~ 조금 더 넓었으면 더 즐거웠을 것 같아요. 외국에서 아주 넓은 수영장에 가본 적이 있는데, 정말 즐거웠거든요!',
      );
      await gold_ship.say_and_wait('정답이다, 연금술사! 너에게 564점을 주지!');
      await daiya.say_and_wait('와아, 감사합니다♪');
      await gold_ship.say_and_wait(
        '이 수영장 크기가 트레이닝하기에는 충분할지도 모르지……',
      );
      await gold_ship.say_and_wait(
        `하지만 말이야, 나는 ${daiya.get_uma_sex_title()}의 가능성을 믿는다고! 드넓은 수영장의 해방감이 ${daiya.get_uma_sex_title()}에게 어떤 새로운 경지를 보여줄지, 내 눈으로 직접 확인하고 싶단 말이야!`,
      );
      await daiya.say_and_wait(
        `어머나! 골드 쉽 씨는 ${daiya.get_uma_sex_title()}들을 위해 그렇게까지 깊이 생각하고 계셨군요!`,
      );
      await gold_ship.say_and_wait('그래, 그래서 결심했어…… 나는──');
      await gold_ship.say_and_wait('이 수영장을 오호츠크해로 만들겠어!');
      await daiya.say_and_wait('오호츠크해! ……오호츠크해요? 그게 무슨 뜻인가요?');
      await gold_ship.say_and_wait(
        '오호츠크해를 통째로 이 수영장에 옮겨오겠다는 소리야! 그러면 마음껏 트레이닝할 수 있겠지!',
      );
      await daiya.say_and_wait(
        '그건 정말 엄청난 규모의 공사겠네요……! 정말 가능한 일인가요?',
      );
      await gold_ship.say_and_wait(
        '아마도! 전교생이 50년 동안 양동이 릴레이를 하면 가능하지 않겠냐!',
      );
      era.printButton('「난이도가 너무 높은데……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '하지만 현실적인 문제를 떠나서 생각한다면 아주 멋진 이상이라고 생각해요.',
      );
      await daiya.say_and_wait('……게다가 이야기를 듣고 나니 정말 기대되는걸요!');
      await gold_ship.say_and_wait('사토노…… 너 이 자식, 제법인데!');
      await daiya.say_and_wait('수영장 공간을 넓히는 건 저도 대찬성이에요.');
      await daiya.say_and_wait('함께 해봐요, 골드 쉽 씨! 저도 전력을 다해 돕겠어요!');
      era.printButton('「지금 크기로도 충분해」', 1);
      era.printButton('「학원에 이 아이디어를 제안해 보자!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '물론 지금도 충분하지만, 개조를 하면 더 좋은 환경이 되지 않겠어요?',
        );
        await me.say_and_wait('소중한 시간을 전부 양동이 릴레이에 써야 한다고?');
        await daiya.say_and_wait('앗……!? 그, 그건 그렇네요……');
        await gold_ship.say_and_wait(
          '곤란한걸…… 너희가 그렇게까지 말한다면 억지로 시킬 순 없지.',
        );
        await gold_ship.say_and_wait(
          '하지만 언젠가 반드시 실행할 거야. 정식으로 시작하기 전에 만반의 준비를 갖추고 송곳니를 갈아둬야지…… 강판으로 말이야.',
        );
        await daiya.say_and_wait('……네!');
        await era.printAndWait(
          `두 사람은 굳게 약속하며 악수를 나누었다. 정말로 실행에 옮기는 날이 오면…… ${me.name}이(가)필사적으로 말려야겠다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      } else {
        await daiya.say_and_wait('그렇다면…… 기획서를 작성해 보는 건 어떨까요?');
        await gold_ship.say_and_wait('좋은 생각인데! 구체적인 내용이 있으면 설득력이 더 높아지겠지!');
        await daiya.say_and_wait('후후후, 점점 재미있어지네요♪');
        await daiya.say_and_wait(
          '『트레센 학원 수영장을 오호츠크해로 만들기 프로젝트』 시동!',
        );
        await era.printAndWait(
          '비록 계획이 실현되지는 않았지만, 사토노 다이아몬드에게는 무척 값진 경험이 되었다!',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
      }
    } else if (event_marks.chase === 1) {
      event_marks.chase++;
      await print_event_name('동경을 쫓아서', daiya);
      const gold_ship = get_chara_talk(7);
      const mcqueen = get_chara_talk(13);
      await era.printAndWait(`어느 날, ${me.name}이(가) 광장을 걷고 있을 때──`);
      await daiya.say_and_wait('…………');
      era.printButton('「무슨 일이야?」', 1);
      await era.input();
      await daiya.say_and_wait('트레이너 선생님!?');
      await daiya.say_and_wait('쉿──! 지금 맥퀸 씨를 조사하는 중이에요……!');
      await mcqueen.say_and_wait('……');
      await mcqueen.say_and_wait('시선이 느껴지는데? ……아니요, 기분 탓이겠죠.');
      await daiya.say_and_wait('……후우. 정말 아슬아슬했네요……!');
      await daiya.say_and_wait(
        '맥퀸 씨의 강함에 숨겨진 비밀을 밝혀내기 전까진, 몰래 관찰하고 있다는 걸 들켜선 안 돼요.',
      );
      await me.say_and_wait(`그냥 직접 물어보는 게 어때?`);
      await daiya.say_and_wait('안 돼요! 직접 조사하는 게 훨씬 더 즐거운걸요!');
      await daiya.say_and_wait('……어라? 맥퀸 씨가 사라졌어요!?');
      await daiya.say_and_wait('잠깐 한눈판 사이에…… 어디로 가신 걸까요?');
      era.printButton('「노래 연습실에 갔을지도 몰라」', 1);
      era.printButton('「식당에서 머리를 싸매고 고민 중일 것 같아」', 2);
      era.printButton(`「분명 트랙에서 훈련 중일 거야!」`, 3);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('알겠어요, 그럼 그쪽으로 가봐요!');
        await daiya.say_and_wait('연습실이 여러 군데네요. 어디부터 찾아야──');
        await mcqueen.print_and_wait('??? 「오오~ 불타올라라~!」');
        await daiya.say_and_wait('노랫소리…… 이 방에서 들려오네요.');
        await mcqueen.say_and_wait('꿈을 싣고, 아── 우리의~ 승리를……♪');
        await daiya.say_and_wait('와아~! 맑으면서도 힘이 넘치는 노랫소리…… 정말 멋져요♪');
        await mcqueen.say_and_wait('사토노 양!? 어라? 저기, 어떻게 여기에……?');
        await mcqueen.say_and_wait(
          '설마…… 방음이 된다고 생각해서 저도 모르게 너무 크게 불렀나 봐요……!',
        );
        await daiya.say_and_wait(
          '후후, 덕분에 발견할 수 있었는걸요! 맥퀸 씨의 비밀.',
        );
        await mcqueen.say_and_wait(
          '비, 비밀이라니요!? 무슨 말씀인지 모르겠네요. 바, 방금 건 그저 기분 전환을 하려고 부른 것뿐이라……!',
        );
        await daiya.say_and_wait('……아니요, 전부 알고 있어요. 맥퀸 씨, 사실은──');
        await daiya.say_and_wait(
          '노래로 자신을 고무시켜서 퍼포먼스 능력을 끌어올리는 거군요!',
        );
        await mcqueen.say_and_wait(
          '……네? 아, 아아…… 뭐, 그렇죠. 오, 오호호호~',
        );
        await daiya.say_and_wait(
          '저기…… 저에게도 가르쳐 주세요. 아까 그 가슴이 뜨거워지는 노래를요……!',
        );
        await mcqueen.say_and_wait('가슴이 뜨거워진다고요……? 그 말은…… 마음에 들었다는 건가요?');
        await daiya.say_and_wait(
          '네. 멜로디가 정말 열정적이어서 저도 모르게 즐거워졌어요──',
        );
        await daiya.say_and_wait('이 노래에 담긴 마음을 더 깊이 알고 싶어요!');
        await mcqueen.say_and_wait('……!');
        await mcqueen.say_and_wait(
          '……미리 두 가지 일러둘게요. 첫째, 오늘 일은 절대 비밀로 할 것.',
        );
        await mcqueen.say_and_wait('둘째── 제 지도는 꽤 엄격하답니다.');
        await daiya.say_and_wait('……! 알겠습니다!');
        await mcqueen.say_and_wait('자, 가슴을 펴고! 하늘을 뚫을 듯한 성량으로…… 하나, 둘, 셋.');
        await daiya.say_and_wait('불타올라라~!');
        await era.printAndWait(
          '사토노 다이아몬드는 한계까지 목소리를 높여 노래하며, 초열혈 가창법을 터득했다.',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      } else if (ret === 2) {
        await daiya.say_and_wait(
          '후후후, 저도 모르게 그 광경을 상상해 버렸네요. 그럼 가볼까요.',
        );
        await mcqueen.say_and_wait('팬케이크, 과일 타르트…… 고구마 맛탕이랑 행인두부까지……!');
        await mcqueen.say_and_wait(
          '어느 것 하나 매력적이지 않은 게 없네요…… 하지만 칼로리 오버는 반드시 피해야 해요! 머리를 굴려요…… 깊이 생각하는 거예요……!',
        );
        await daiya.say_and_wait(
          '설마 맥퀸 씨가 디저트를 고를 때 이렇게까지 진지하고 신중할 줄이야……!',
        );
        await daiya.say_and_wait('……알 것 같아요. 맥퀸 씨의 강함에 숨겨진 비밀을요.');
        await daiya.say_and_wait(
          '일상의 아주 사소한 일이라도 진지하게 마주하고 고민하는 것. 매 순간 신중하게 행동하는 게 중요한 거였군요……!',
        );
        await daiya.say_and_wait('맥퀸 씨!');
        await mcqueen.say_and_wait(
          '꺄악! 사, 사토노 양……!? 설마…… 다, 다 보신 건가요……!?',
        );
        await daiya.say_and_wait(
          '네, 아주 진지하고 엄격한 표정을 봤어요…… 정말 멋졌답니다, 맥퀸 씨!',
        );
        await mcqueen.say_and_wait(
          '그, 그렇게 말씀하시니…… 기뻐해야 할지 부끄러워해야 할지 모르겠네요……!',
        );
        await daiya.say_and_wait('저도 맥퀸 씨처럼 신중하고 진지하게 디저트를 골라보겠어요.');
        await daiya.say_and_wait('음~ 어디 보자…… 어라?');
        await daiya.say_and_wait(
          '지금 마침…… 『희귀 디저트 전람회』를 하고 있네요! 전 이걸로 하겠어요♪',
        );
        await mcqueen.say_and_wait(
          '『오징어 먹물 치즈 케이크』, 『푸딩 초밥』…… 이게 대체 무슨 메뉴인가요!?',
        );
        await mcqueen.say_and_wait(
          '저기, 사토노 양…… 방금 신중하고 진지하게 고른다고 하지 않았나요?',
        );
        await daiya.say_and_wait(
          '그럼요! 이렇게나 다양하고 신비로운 디저트들…… 먹어볼 가치가 충분하지 않나요♪',
        );
        await mcqueen.say_and_wait(
          '……! 놀라운 탐구심이네요……! 이건 디저트와의 정면 승부군요?',
        );
        await mcqueen.say_and_wait('……저도 도전하겠어요! 『희귀 디저트 전람회』에!');
        await daiya.say_and_wait('맥퀸 씨……! 함께 디저트의 새로운 경지를 개척해 봐요.');
        await daiya.say_and_wait('그럼…… 이 『버섯 몽블랑』은 어떠신가요?');
        await mcqueen.say_and_wait('……으음, 사토노 양. 그건 조금 더 고민해 봐도 될까요?');
        await era.printAndWait(
          '두 사람은 함께 고심 끝에 디저트를 골라 맛있게 나누어 먹었다!',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(
          67,
          [0, 0, 0, 0, 10],
          0,
          JSON.parse('{"체력":100}'),
        );
      } else {
        await daiya.say_and_wait('비밀 특훈의 필수 코스네요. 가볼까요……!');
        await mcqueen.say_and_wait('저기…… 트랙 한복판에서 뭘 하고 계신 건가요?');
        await gold_ship.say_and_wait(
          '난 지금 관문 놀이를 하는 중이야. 통과하고 싶으면 나를 웃겨봐.',
        );
        await mcqueen.say_and_wait(
          '다른 분들에게 방해가 되잖아요. 어서 비켜주세요, 골드 쉽 씨.',
        );
        await gold_ship.say_and_wait('……응? 그거 웃기려고 한 연기야?');
        await mcqueen.say_and_wait(
          '연기 같은 거 안 했거든요! 정말이지, 그럼 힘으로라도……!',
        );
        await mcqueen.say_and_wait('영차── 읏!!');
        await gold_ship.say_and_wait('오와!? 내가 힘에서 밀리다니……!?');
        await gold_ship.say_and_wait(
          '그러고는 그냥 가버렸네…… 힘이 장난 아니구만. 저 녀석 보통이 아니야.',
        );
        await daiya.say_and_wait(
          '저기, 방금 두 분이서 뭘 하신 건가요? 마치 스모를 하는 것 같았는데……',
        );
        await gold_ship.say_and_wait(
          '그래, 아주 중요한 장면을 목격했구나. 이 고루시님이 속수무책으로 당했다고.',
        );
        await daiya.say_and_wait(
          '맥퀸 씨가 강한 비결은 바로 단단하게 단련된 허리와 다리였군요……!?',
        );
        await daiya.say_and_wait('……골드 쉽 씨. 저랑도 스모 한 판 해주실 수 있나요? 부탁드려요!');
        await gold_ship.say_and_wait(
          '후우…… 너는 아직 멀었어. 일단 웃기는 법부터 배우고 오라고.',
        );
        await daiya.say_and_wait('웃기는 법이요……?');
        await mcqueen.say_and_wait('……후우, 기록이 좀처럼 오르질 않네요.');
        await mcqueen.say_and_wait(
          '아까 힘을 너무 많이 써서 그런 걸까요. 골드 쉽 씨가…… 또 누구에게 민폐를 끼치지 말아야 할 텐데.',
        );
        await mcqueen.say_and_wait('……어라? 저건?');
        await gold_ship.say_and_wait('근육, 근육──');
        await gold_ship.say_and_wait('가자미근!!');
        await daiya.say_and_wait('가자미근!');
        await gold_ship.say_and_wait(
          '안 돼, 안 돼! 허리 힘을 전혀 못 쓰고 있잖아! 맥퀸은 너보다 훨씬 진지했다고!',
        );
        await daiya.say_and_wait('……네!!');
        await mcqueen.say_and_wait('제가 언제 그런 걸 했나요!');
        await daiya.say_and_wait('맥퀸 씨!?');
        await daiya.say_and_wait('저기, 그게 그러니까── 어라, 골드 쉽 씨가 사라졌어요?');
        await era.printAndWait(
          '사토노 다이아몬드는 기묘한 개그 훈련을 통해, 의외의 근육 단련 효과를 얻었다!',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};