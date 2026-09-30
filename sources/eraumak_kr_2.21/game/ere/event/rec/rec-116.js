/**
 * @file 젠틸돈나 - 招募
 * @author AraP
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');
const know_me = require('#/event/rec/rec-events-116/know-me');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async footprint(donna, me) {
    if (era.get(`cflag:${this.id}:모집상태`) === -1) {
      if (await this.check_before_rec()) {
        return;
      }
      era.set(`cflag:${this.id}:모집상태`, recruit_flags.no);
      era.set(`cflag:${this.id}:무작위모집`, 0);
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
      );
      era.set('flag:대상물색', 116);
      new EventMarks(0).add(event_hooks.week_end);
      return;
    }
    const verxina = get_chara_talk(90);
    await print_event_name('발자국', donna);
    era.drawLine({ content: `${me.name}의 시점` });
    await era.printAndWait(['바라는 것은 손에 꼽을 만큼 적으나, 스쳐 지나가는 것들은 모래알처럼 많다.']);
    await era.printAndWait([
      '선발 레이스, 하루 열두번. 아침부터 밤까지 쉴 틈 없이 배정되어 있으며, 기대받는 ',
      donna.get_uma_sex_title(),
      '일수록 보통 더 늦은 시간대의 경기에 출전한다.',
    ]);
    await era.printAndWait([
      '트레센은 선발 레이스조차 상업적인 정규 레이스 규칙을 그대로 따른다. 즉 다시 말해——',
    ]);
    await me.say_and_wait(['선발 레이스까지 이렇게 꽉 막혔다니, 사람 피 말려 죽이겠네'], true);
    era.println();
    await era.printAndWait([{ content: '"12R 15:30"', fontWeight: 'bold' }], {
      align: 'center',
      isParagraph: true,
    });
    era.println();
    await era.printAndWait(['LED가 갱신되는 순간, 즉시 게시판에 핏발 선 눈을 박아 넣었다.']);
    era.println();
    await me.say_and_wait(['앞에서 다섯 번째 줄, 관찰하기에 가장 편한 위치를 잡았다'], true);
    era.println();
    await era.printAndWait([
      '방해꾼들에게 이 자리를 뺏기지 않기 위해 불필요한 과정은 전부 생략했다. 아침, 굶었다. 점심, 굶었다.',
    ]);
    await era.printAndWait([
      '생수도 진작에 다 마셔버렸다. 물을 달라고 조르는 우마무스메를 매몰차게 거절하지 못한 나약함이 부른 인과응보다. 하지만 절반쯤은 해야만 했던 일이라 생각한다. 낯선 사람에게서 받은 물을 마셨을 때, 그 안에 뭐가 들어있을지 어떻게 알겠는가?',
    ]);
    await era.printAndWait([
      '오전 10시부터 지금까지 물 한 모금 마시지 못했다. 30분 전에는 추적추적 내린 비로 경기장 상태는 내 꼴처럼 최악이었지만, 수분만큼은 듬뿍 머금고 있어 진심으로 부러웠다.',
    ]);
    era.println();
    await me.say_and_wait(['하지만 상관없어, 전부 견딜 수 있으니.']);
    era.println();
    await era.printAndWait(['내가 무엇을 원하는지 알고 있으니까.']);
    era.println();
    await era.printAndWait([
      '————나는 어떤 발자국을 쫓고 있다. 그 사진. 철저하고, 압도적이며, 유일무이한 거대한 힘으로 잔디밭에 낙인처럼 찍힌 발자국. 내가 놓쳤던 어느 선발 레이스에서 남겨진 것이다.',
    ]);
    era.println();
    await era.printAndWait([
      '경기장이 술렁이기 시작했다. 모르는, 모르는, 모르는, 모르는, 모르는, 모르는 ',
      donna.get_uma_sex_title(),
      '들이 붉은 리본을 단 달걀처럼 하나둘씩 지하 통로에서 게이트로 굴러 들어갔다.',
    ]);
    await era.printAndWait([
      '아마 내 물 반 병을 마셔버린 그 ',
      donna.get_uma_sex_title(),
      '도 저기 끼어 있겠지. 나는 그녀들에게 별 기대가 없다.',
    ]);
    await era.printAndWait([
      '그리고, 가스레인지 불꽃이나 청금석이 떠오르는 머리색, 그 유명한 훌륭한 언니, ',
      verxina.get_colored_name(),
      '가 입장했다!',
    ]);
    await era.printAndWait([
      '교수대에 매달려 있던 마음이 비로소 해방되었다! 이 순간부터 나는 남색을 사랑하게 되었다. 남색의 정의가 부정확해도 상관없다. 내가 기다리던 건 ',
      donna.get_colored_name(),
      '——그 발자국의 주인이니까!',
    ]);
    await era.printAndWait([
      '발자국의 주인을 알아내는 건 매우 간단했다. 학원 내에서 우연을 가장해 마주치는 것도 간단했고, 출주 명단이 미공개였던 이 선발 레이스 전에 미리 다가가 영입 제의를 하는 것은 더더욱 간단했다.',
    ]);
    await era.printAndWait([
      '하지만, ',
      sys_filter_chara('cflag', '모집상태', recruit_flags.yes).length <= 1
        ? '트레이너로서의 경력이 새하얀 백지장처럼 깨끗함에도 불구하고, '
        : '',
      '지금까지의 삶과 일 속에서 불행히도 탄생해 버린 나의 또 다른 심리적 기벽이, 이 선발 레이스가 열리기만을 편집증적으로 기다리게 만들었다.',
    ]);
    await era.printAndWait([
      '그리고 모든 것이 명확해졌다. ',
      donna.get_colored_name(),
      '는 온다, ',
      donna.get_colored_name(),
      '는 반드시 출주한다!',
    ]);
    await era.printAndWait([
      '그 발자국만 봐도 알 수 있다. 그것을 만들어낸 자! 타고난 엄청난 힘과 그 자질에 걸맞은 투쟁심을 지니고 있다. 비록 ',
      verxina.get_colored_name(),
      '가 그녀와 같은 수준의 상대는 아닐지라도, 온다! 반드시 올 것이다!',
    ]);
    await era.printAndWait([donna.get_colored_name(), '가 왔다!']);
    era.println();
    await donna.say_and_wait([
      '어머, ',
      sys_get_colored_callname(116, 90),
      '. 무슨 일이시죠?',
    ]);
    era.println();
    await era.printAndWait([
      '이것은 예정된 사실이었다. 그리고 ',
      verxina.get_colored_name(),
      '가 앞으로 나아갔다——예상했던 바다. 이전에도 몇 번이나 ',
      donna.get_colored_name(),
      '의 손에 패배했을 때도, ',
      donna.sex,
      '는 이렇게 도전을 걸어왔다——어떻게 실패하든 다시 일어나 ',
      donna.get_colored_name(),
      '의 앞으로 온다. ',
      verxina.sex,
      '는 이렇게 말할 것이다.',
    ]);
    era.println();
    await me.say_and_wait(['——다시 한번 당신에게 도전하겠어.'], true);
    await verxina.say_and_wait(['——다시 한번 당신에게 도전하겠어.']);
    era.println();
    await era.printAndWait([
      '나도 모르게 관중석에서 벌떡 일어났다! 하지만 다른 사람들의 시야를 가리지 않기 위해 도중에 다시 자리에 앉았다——됐다! ',
      donna.sex,
      '가 왔다! ',
      donna.get_colored_name(),
      '는 굳이 먼저 ',
      verxina.get_colored_name(),
      '와 소통하려 하지 않지만, 부자연스럽게 시간을 끌며 ',
      donna.sex,
      '가 선전포고하러 오기를 기다렸다. 이것은 매우 훌륭하게 통제된 투쟁심이다! 내 추론은 틀리지 않았다.',
    ]);
    await era.printAndWait([
      '양손이 떨리고, 다섯 손가락이 굳어버린 듯 감각이 마비되는 것을 느꼈지만, 트레이너에겐 지극히 일상적인 일이다. 길고 긴 구상 끝에 식음을 전폐하고 책상에 엎드려 일할 때도 이러지 않았던가.',
    ]);
    await era.printAndWait([
      '이럴 때의 신체 반응은 대충 주무르며 넘기면 된다. 버텨라. 게이트 입장이 완료되었다. 한순간, 경기장 전체에 정적이 내려앉았다. 저것은 ',
      donna.get_colored_name(),
      '와 ',
      verxina.get_colored_name(),
      '의 위용 때문인가? 갑자기 오른손에 쥐가 나며, 손가락 뼈 몇 개가 뒤로 꺾이며 끔찍한 파열음을 냈지만, 허벅지로 짓눌러 관절을 제자리로 돌려놓을 수밖에 없었다! 빠가각! 그와 동시에 게이트가 열렸다! 늦은 출발은 없다——마치 곱씹을 가치가 있는 경기의 시작을 축하하듯, 관중석에서 우레와 같은 환호가 터져 나왔다!',
    ]);
    era.println();
    await era.printAndWait([
      '나와는 상관없는 일들이지만, 확실히 흥분되긴 했다. 2000m의 선발 레이스. 내 눈에는, 모든 ',
      donna.get_uma_sex_title(),
      '들이 (어느 정도는) 물리 법칙에 따라 자신만의 시간-속도라는 서술형 문제를 풀고 있는 것으로 보였다. 이해할 수 있고, 해석할 수 있고, 예측할 수 있다. 출제자의 의도를 짐작해 보자. 왜 2000m인가?',
    ]);
    era.println();
    await me.say_and_wait([
      '이건 오만함인가? 선발 레이스나 데뷔전이나 거리는 제한되어 있는데, 두 사람은 투쟁심이 강해 굳이 가장 긴 거리를 택해 힘을 겨루려는 건가, 아니면 어느 한쪽이 2000m 적성이 가장 뛰어나다고 자부하는 건가. 그것도 아니면 사정거리가 그 정도인 건가?',
    ]);
    era.println();
    await era.printAndWait([
      '옆 사람들은 가나가와 해변의 파도처럼 손을 흔들고, 모래폭풍처럼 환호성을 지른다. 참으로 피가 끓어오르는 경기다! 잡음은 점차 격려와 환호로 통일되며, 「',
      verxina.get_colored_name(),
      '!」, 「',
      donna.get_colored_name(),
      '!」——순식간에 응원의 물결로 합쳐졌다! 선발 레이스의 응원은 중상 레이스만큼 웅장하고 너그럽지는 않지만, 이 역시 레이스에 영향을 미친다. 예측을 수정해야 하나? 아니, 그럴 필요 없다!',
    ]);
    await era.printAndWait([
      '거리 문제의 정답은 하나가 아니다. 하지만 저 두 사람의 투쟁심이 하늘을 찌른다는 것만은 확실하다. 레이스 전개가 내 손가락에 쥐가 나는 속도보다 훨씬 빠르다——분석을 계속하자——이번엔 왼손에 쥐가 나서, 독하게 마음먹고 방금 편 오른손으로 차례차례 물리적 교정을 가했다. 1분처럼 길게 느껴지는 스펙터클한 20초의 초반부. 비록 저 ',
      donna.get_colored_name(),
      '가 내 기대에 어긋난다 하더라도, 이 레이스 녹화본은 아주 훌륭한 식재료가 될 것이다.',
    ]);
    era.println();
    await me.say_and_wait([
      '도주, 선행, 선입, 추입으로 나누기 애매하군. 압도적인 힘으로 여기서부터 무식하게 페이스를 이끄는 ',
      donna.get_colored_name(),
      '에게는 그 말이 가장 적합하고, 뒤쳐져 있지만 후방 그룹과는 거리를 유지하는 ',
      verxina.get_colored_name(),
      '는 어떨까. 선입과 추입을 자유자재로 오가는 게 아니라, 겁을 먹고 따라잡을지 힘을 비축할지 갈팡질팡하고 있군. 나머지 녀석들은…… 아쉽지만 내겐 가치 있는 인재라 볼 수 없다. 난 가치 없는 재료는 연구하지 않는다.',
    ]);
    era.println();
    await era.printAndWait([
      '승부는 났다. 동시에 트레이너의 경련도 전부 교정되었다——허벅지로 짓눌러 고정시키는 치료법으로 말이다. 옆 사람은 흥이 깨진 듯 교토 사투리로 조그맣게 「기운도 좋네 총각」 하고 욕을 내뱉었지만, 내 귀엔 저 등신 같은 소리가 안 들릴 리 없었다. 한순간 집중이 흐트러졌으나 굳이 따지고 들고 싶지 않았다. 아아, 언덕 없는 평탄한 코스, 5초 후면 최종 코너에 진입하고 바로 직선으로 이어진다. 지금까지 6마신 차이가 벌어진 ',
      verxina.get_colored_name(),
      '의 앞——승부는 확실히 결정났다. 왜냐면……',
    ]);
    era.println();
    await era.printAndWait([
      '언덕도 없고, 다리 힘 차이도 명확한데다 포화 마장 상태에서 ',
      donna.get_colored_name(),
      '와 맞붙었다. 코너에서 차지한 우위도 부족하고, 최종 직선의 라스트 스퍼트로도 이미 벌어진 격차를 좁힐 수 없다. ',
      verxina.get_colored_name(),
      '는 졌다. 만약 ',
      donna.get_colored_name(),
      '가 지금 저 여유로운 모습을 연기하고 있는 게 아니라면———',
    ]);
    era.println();
    await era.printAndWait([
      { content: '「——!!!!」', fontSize: '1.5rem', fontWeight: 'bold' },
    ]);
    era.println();
    await era.printAndWait([
      {
        content: '웅장하고 무거운 대지를 뒤흔드는 소리!',
        fontWeight: 'bold',
        fontStyle: 'italic',
      },
    ]);
    era.println();
    await era.printAndWait([{ content: '————', fontWeight: 'bold' }]);
    await era.printAndWait([{ content: '——', fontWeight: 'bold' }]);
    await era.printAndWait([{ content: '—', fontWeight: 'bold' }]);
    era.println();
    await era.printAndWait([
      '내 의식은 정면으로 날아가 버렸고, 고향의 단독주택에 벼락이 떨어졌던 순간으로 돌아갔다. 초등학교 때인지, 중학교 때인지, 대학교 때인지, 아니면 애초에 일어나지도 않았던 일인지 혼란스러워 분간할 수 없었다.',
    ]);
    await era.printAndWait([
      '좁고 강제적으로 소박했던 그 방. 하얀 페인트에 검은 때가 탄 벽이 곰팡이 핀 코르크 바닥을 에워싸고, 옆에는 철제 싱글 침대, 날카로운 모서리의 책상. 그리고 경첩이 완전히 녹슬어버린 창틀 너머로 커튼조차 가리지 못하는 섬광이 폭발했다!',
    ]);
    await era.printAndWait(['——귀청이 터질 듯한 천둥소리가 울려 퍼졌다!']);
    era.println();
    era.printButton('커튼을 젖힌다', 1);
    await era.input();
    era.println();
    await era.printAndWait(['경첩은 진작에 녹슬어 붙어버렸다.']);
    era.println();
    era.printButton('창틀을 밀어본다', 1);
    await era.input();
    era.println();
    await era.printAndWait(['미동도 하지 않는다']);
    era.println();
    era.printButton('「수리비 비싼데……」', 1);
    await era.input();
    era.println();
    await era.printAndWait(['하지만 이번만큼은, 무슨 수를 써서라도 이 광경을 놓치고 싶지 않다!']);
    era.println();
    await me.say_and_wait(['네가 방해하는 건 참아도, 내가 기회를 놓치는 건 참을 수 없어!']);
    era.println();
    await era.printAndWait(['나는 몸을 돌려 의자를 집어 들고, 시체를 내던지듯 바깥쪽으로 집어 던져 유리를 박살 냈다!']);
    era.println();
    era.printButton('몸을 내민다!', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      '망설임 없이 창밖으로 몸을 내밀었다. 손으로 창틀을 부여잡자, 날카로운 파편에 베이는 고통이 전해졌다! 하지만 경치, 그 지루하고 변함없던 경치가 흐르기 시작했다! 화창한 푸른 하늘에서 훈련장 옆으로 길게 뻗은 산맥, 마침내 거센 파도처럼 끊임없이 잔디색 물보라를 튀기는 코스로——느리지만 절망적으로 격차를 벌려가는 ',
      donna.get_colored_name(),
      '를 향해, 트레이너는 목청껏 울부짖었다! ',
      verxina.get_colored_name(),
      '는 내 안중에도 없었다. 이건 이미 경기 분석이 아니라, 광란의 축제였다:',
    ]);
    era.println();
    await me.say_and_wait([
      '가라——',
      donna.get_colored_name(),
      '!!! 이대로 단숨에 뚫고 지나가버려!!!',
    ]);
    era.println();
    await era.printAndWait(['……']);
    era.println();
    await era.printAndWait([
      '그 방의 환영이 완전히 사라지기까지는 오랜 시간이 걸렸다. 트레이닝실에서 나는 ',
      donna.get_colored_name(),
      '가 트레이너들에게 둘러싸여 권유를 받는 소리를, 그리고 신인, 고참 가릴 것 없이 그들 모두를 말문 막히게 만드는 그 기세를 들으며 기뻐서 펄쩍 뛰고 바닥을 뒹굴었다. 「저거야! 바로 저거야! 저 발자국을 만들어낼 수 있는 ',
      donna.get_uma_sex_title(),
      '! 절대적인 힘!」 나는 곰팡내 나는 널판지를 뜯어내며 외쳤다. 「난 아무것도 필요 없어! 상금은 최소한만 받으면 돼! 시상식에서 ',
      donna.sex,
      ' 옆에 서지 않아도 좋아! 심지어 기념 앨범에서 내 이름이 지워진대도 상관없어——나는 ',
      donna.sex,
      '를 내 담당 ',
      donna.get_uma_sex_title(),
      '로 만들겠어!」',
    ]);
    era.println();
    await era.printAndWait([
      '방의 환영이 사라지고, 몸이 휘청이는 것을 느꼈다. 엉덩이가 플라스틱 의자와 함께 앞으로 주욱 미끄러지며, 허리와 엉덩방아를 호되게 찧었다! 하지만 나는 흥분하며 기어서라도 일어났다. 레이스가 끝났다!',
    ]);
    await era.printAndWait(['대지를 뒤흔드는 그 소리가 머릿속을 떠나지 않았다. 경기장 정리까지는 아직 시간이 남아있다!']);
    await era.printAndWait([
      '나는 관중석을 뛰쳐내려가 외곽 펜스를 넘고 내곽 펜스로 뛰어들어 최종 코너 앞으로 질주했다! 한 번 넘어졌지만 곧바로 잔디 부스러기를 털어내고 다시 기고 뛰며 그곳으로 돌진했다——나는 보았다, 그 발자국을! 사진으로만 보았던 그 발자국과 비교하자면, 마치 모니터 화면과 루브르 박물관에 걸린 진품 모나리자를 보는 것 같은 차이였다! 그래, 이 발자국이야!',
    ]);
    era.println();
    await verxina.say_as_unknown_and_wait('저기요, 선생님……');
    await era.printAndWait('누군가 나를 부축해 일으켰다.');
    await verxina.say_as_unknown_and_wait('안색이 안 좋아 보이셔서 걱정했는데——');
    era.println();
    era.printButton('「내 힘으로 일어날 수 있어.」', 1);
    await era.input();
    era.printButton('「이거 봐, 이 발자국 보이지?」', 1);
    await era.input();
    era.println();
    await verxina.say_and_wait(['……보는 것뿐만 아니라, 직접 몸으로 뼈저리게 체험했죠.']);
    era.println();
    era.printButton('「이것보다 끝내주는 건 본 적이 없어! 미안, 난 지금 바빠서——」', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      '나는 일어나서 펄쩍펄쩍 뛰며 경기장 출구로 돌진했다. 한순간도 지체할 수 없다. 지금 이 순간부터 ',
      donna.sex,
      '를 내 담당 ',
      donna.get_uma_sex_title(),
      '로 만들 때까지, 내가 ',
      donna.sex,
      '의 트레이너가 되는 그날까지, 1분 1초를 이 목표만을 위해 쓰겠다!',
      {
        color: verxina.color,
        content: `「${sys_get_callname(90, 0)}! ${me.actual_name} ${me.get_adult_sex_title()}!」`,
      },
      verxina.get_colored_name(),
      '의 목소리가 등 뒤로 멀어졌고, ',
      verxina.sex,
      '는 깜짝 놀라 그 자리에 굳어버렸다.',
    ]);
    era.println();
    await verxina.say_and_wait([
      '물은 감사했어요. 그리고 이기지 못해서 죄송…… 아, 벌써 멀리 가버렸네.',
    ]);
    await verxina.say_and_wait(['……하아.']);
    await verxina.say_and_wait(['어쩔 수 없는 분이시네요.']);

    era.drawLine();

    await me.say_and_wait(['잠깐 기다려.']);
    await era.printAndWait([
      '나는 계단 위에서 속으로 감탄을 금치 못했다——',
      donna.get_colored_name(),
      ', 저 ',
      donna.get_uma_sex_title(),
      '는 정말이지 경이로운 자태를 지녔다. 표정은 일반적인 의미의 아름다움과는 거리가 멀고 오히려 어찌할 바를 모르게 만드는 늠름하고 날카로운 기백이 숨어 있었지만,',
    ]);
    await era.printAndWait([
      '하지만, 인내심 역시 예의의 일환이다. 남이 나에게 항상 적절한 감정으로 대해주길 바랄 수는 없다. 최소한 예의를 갖춰 대답해주는 것만으로도 다행이지 않은가.',
    ]);
    await era.printAndWait([
      donna.sex,
      '는 계단 한가운데 멈춰 서서 가볍게 목례를 하곤, 약간 불쾌한 기색을 띠며 인사했다:',
    ]);
    era.println();
    await donna.say_and_wait([
      '……지금 별로 기분이 좋지 않군요. 만약 당신도 다른 동료들처럼 지저귀며 담당을 모집하러 온 것이라면, 그 바람에 걸맞은 능력을 갖추고 있길 바랍니다.',
    ]);
    era.println();
    era.printButton(
      `「오늘은 널 영입하려고 온 게 아니야.」`,
      1,
    );
    await era.input();
    era.println();
    await donna.say_and_wait(['……']);
    await donna.say_and_wait(['하지만 제의를 받지 않겠다고 한 적도 없습니다만.']);
    era.println();
    await era.printAndWait([
      donna.sex,
      '의 짧은 초조함을 엿본 나는 속으로 미소를 지었다. 저 아이는 자존심이 높은 것이지, 안하무인인 것은 아니라고 확신했다. 한순간 그런 반응이 오히려 귀엽게 느껴지기까지 했다,',
    ]);
    era.println();
    era.printButton(
      '「오늘은 영입할 생각이 없다고 했잖아. 단지 내 열정을 전하러 왔을 뿐이야.」',
      1,
    );
    await era.input();
    era.println();
    await donna.say_and_wait(['열정이라? 호오…… 제가 어쨌다는 거죠? 전부 말씀해 보시죠.']);
    await me.say_and_wait([
      '그럼 실례 좀 할게. 두 사람이 처음 만나 대화를 나눌 때는 반드시 특정한 핵심 단어 몇 가지가 나와야, 앞으로의 관계가 발전할 여지가 생기는 법이지.',
    ]);
    era.println();
    era.printButton('「힘 있는 달리기. 이렇게 말하고 싶네. 압도적인 힘.」', 1);
    await era.input();
    era.println();
    await me.say_and_wait([
      '압도적인 힘. 단순하고 직관적인 첫인상이든, 아니면 너의 실질적인 고유성과 강점이든 간에, 산을 무너뜨리고 바다를 엎을 듯한 힘을 언급하지 않을 수 없어.',
    ]);
    await me.say_and_wait([
      '다른 특징들은 그 힘의 근원이거나, 혹은 그 힘의 산물이자 표면적인 징후일 뿐이지.',
    ]);
    await me.say_and_wait([
      '멘탈과 동기가 부족한 ',
      donna.get_uma_sex_title(),
      '는 그런 상태를 유지할 수 없어. 아무리 전문적인 스태프를 붙여도, 심지어 ',
      donna.get_uma_sex_title(),
      ' 본인들에게 단체 훈련을 맡겨 환경을 조성하더라도, 결국 사람들은 무의식적으로 힘과 속도를 대립적인 것으로 생각하게 되거든. 이건 오해야,',
    ]);
    await me.say_and_wait([
      '하지만 너는 놀랍게도 너만의 버릇을 유지하면서, 동시에 최고 수준의 성적을 내고 있지.',
    ]);
    await me.say_and_wait([
      '넌 단순히 재능만 있는 게 아냐…… 대체 무엇이 네게 그런 동기를 부여한 걸까?',
    ]);
    await donna.say_and_wait(['♪～']);
    era.println();
    await era.printAndWait([
      donna.sex,
      '의 귀 끝이 기분 좋게 쫑긋거렸다. 그것은 겉으로는 딱딱하게 껍질을 두르고 있지만, 속은 아직 부드럽고 따뜻한 시기의 ',
      donna.get_uma_sex_title(),
      '가 보여주는 징후다.',
    ]);
    await era.printAndWait([
      '하지만 한편으로는 ',
      donna.sex,
      '가 기분 좋게 듣고 있으며, 내 추론이 전부 맞았다는 뜻이기도 하다. 여기서 상식선으로 발언권을 넘겼다간 오히려 성공률만 떨어질 것이다…… 나는 정신을 바짝 차렸다.',
    ]);
    era.println();
    await me.say_and_wait(['좋아, 그럼 내 열정이 어디서 비롯되었는지도 말해주지.']);
    era.println();
    era.printButton(
      '「모든 건 그 발자국에서 시작됐어. 트랙에 난도질을 해놓은 것 같은 발자국 사진을 한 장 받았거든.」',
      1,
    );
    await era.input();
    era.println();
    await me.say_and_wait(['마치 트랙에 억지로 상처를 낸 것 같은 발자국 사진을 한 장 받았지.']);
    await me.say_and_wait([
      '선발 레이스, 그리고 지금 이렇게 이야기 나누는 것, 그리고 너에 대한 내 흥미까지. 오늘의 모든 것은 그 발자국 하나에서 시작된 거야.',
    ]);
    era.println();
    await era.printAndWait([
      '시간이 문제다. ',
      donna.sex,
      '는 30초만 지나면 금세 흥미를 잃을 것이다. 좀 더 자극적인 미끼를 던져야만 한다.',
    ]);
    era.println();
    era.printButton('「네 발자국은 박력 넘치지만, 동시에 달리는 속도를 깎아 먹고 있어.」', 1);
    await era.input();
    era.println();
    await era.printAndWait([
      donna.sex,
      '는 단박에 흥미가 동한 듯, 입술선을 거의 V자로 그리며 웃었다. 눈동자부터 시작해 머리 전체가 내게 과시하듯 귀엽게 동참하고 있었다,',
    ]);
    await donna.say_and_wait([
      '당신이란 분은…… 후훗. 일주일 전 이맘때쯤이었죠. 비가 와서 잔디가 미끄러웠으니, 힘을 좀 더 쓰지 않으면 발이 미끄러져서 어떻게 제대로 달릴 수 있었겠습니까?',
    ]);
    era.println();
    await me.say_and_wait(['반박하지 않고 화제를 돌리자.'], true);
    await me.say_and_wait(
      [
        donna.get_colored_name(),
        '가 자신의 문제점을 전혀 몰랐다면, 적어도 약간의 반감을 표하거나 격렬하게 내게 반박했을 거야.',
      ],
      true,
    );
    await me.say_and_wait(
      [
        '허, 그러니까 ',
        donna.get_colored_name(),
        '는 멘탈과 강인한 자아를 가졌을 뿐만 아니라, 자신의 문제를 발견하고, 인정하고, 대처하는 자신만의 방법론까지 갖추고 있다는 거군.',
      ],
      true,
    );
    era.println();
    await era.printAndWait([
      '젠장…… 스펙이 정말 말도 안 되게 화려한 ',
      donna.get_uma_sex_title(),
      '잖아.',
    ]);
    await era.printAndWait([
      '하지만 이건 내가 지금 제대로 된 길을 걷고 있다는 뜻이기도 하다. 나는 계속해서 화제를 밀어붙였다——',
    ]);
    era.println();
    await me.say_and_wait([
      '하지만 너무 과했어. 발자국이 트랙 깊숙이 파고들어 흙과 풀뿌리까지 파헤칠 정도라면, 그 과정 자체가 가속과 속도 유지를 방해할 테니까.',
    ]);
    era.println();
    await me.say_and_wait([
      '우리…… 트레센에서 선발 레이스를 여는 경기장은 추위에 강하고 수분을 잘 머금지만 내구성이 약한 서양 잔디가 깔려 있지. 하지만 정식 경기라면, 홋카이도 쪽으로 가지 않는 이상 대부분 포복경이 많아 잔디밭이 단단해지는 ',
      { content: '노시바', fontWeight: 'bold' },
      ' 품종일 거야.',
    ]);
    era.println();
    await me.say_and_wait([
      '거기선 발이 덜 빠지겠지만, 그래도 내 조언을 진지하게 생각해 봐. 데뷔하기 전까지 그…… 땅을 파고드는 버릇을 고치는 게 좋아. 편의상 그렇게 부를게.',
    ]);
    era.println();
    await era.printAndWait(['마음속에서 마치 자물쇠가 열리는 듯한, 찰칵 하는 소리가 울렸다.']);
    await era.printAndWait(['나는 무의식중에 방황하던 시선을 다시 젠틸돈나에게 고정시켰다——']);
    era.println();
    await me.say_and_wait(['……아, 웃는 모습이 아까보다 더 귀여워졌네.'], true);
    era.println();
    await era.printAndWait(['……내 대답은 틀리지 않았다.']);
    era.println();
    await me.say_and_wait(
      [
        '아름다워. ',
        donna.sex,
        '는 정말 아름다워. 내가 마음속으로 그리던 ',
        donna.get_teen_sex_title(),
        ' 그 자체야. 난 이제 ',
        donna.sex,
        '의 목 아래 탄탄한 근육뿐만 아니라 목 위에 달린 얼굴도 아주 마음에 들어졌어.',
      ],
      true,
    );
    era.println();
    await donna.say_and_wait(['……']);
    await me.say_and_wait(['……']);
    era.println();
    await era.printAndWait([
      '침묵 속에서 흥미로운 것이라도 발견한 듯. ',
      donna.sex,
      '는 입을 가리며 웃음을 터뜨렸다:',
    ]);
    era.println();
    await donna.say_and_wait(['저를 지명하시길 기다리고 있었습니다만. 무엇을 기다리시는 거죠?']);
    era.printButton('「……그럼 난 어떻게 해야 하지?」 (영입 보류)', 1);
    era.printButton('지명을 시작한다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '그렇게 말했을 때. 봄날의 호수처럼 잔잔하던 미소에, 약간의 조롱이 섞여 들었다. ',
        donna.get_colored_name(),
        '는 우아하게 고개를 세 번 저었다,',
      ]);
      await donna.say_and_wait([
        '온도를 펄펄 끓게 만들어놓고선, 갑자기 그렇게 김빠지는 소리를 하시다니, 본인의 태도가 어떻다고 생각하십니까?',
      ]);
      await donna.say_and_wait([
        '제가 보기엔, 분위기를 완전히 망친 데다가 유머 감각마저 최악이군요.',
      ]);
      await donna.say_and_wait([
        '하지만 자신을 자랑스러워해도 좋습니다. 전문성과 경기에 대한 직감만큼은 제게 걸맞았고, 당연히 다른 ',
        donna.get_uma_sex_title(),
        '들에게도 통할 테니까요. 누구와 파트너가 되든 큰 성공을 거두실 겁니다.',
      ]);
      await donna.say_and_wait([
        '당신처럼 훌륭한 분이…… 방금 전 왜 그리 머뭇거리셨는지 감히 짐작조차 가지 않습니다만, 혹시 제가 처음 무의식중에 당신을 얕잡아본 것에 대한 보복인가요? 하하! 오히려 제가 당신의 흥을 깨버린 것일지도 모르겠군요.',
      ]);
      await era.printAndWait([
        '계단을 오르고, 한 계단, 또 한 계단, 코너를 돌아 계속해서 위로, ',
        donna.get_colored_name(),
        '의 모습이 시야에서 사라졌다.',
      ]);
      era.println();
      await me.say_and_wait(['……']);
      await me.say_and_wait(
        [
          donna.sex,
          '는 확실히 내 제안을 기대하고 있었지만, 상황이 틀어져 결국 무산되어도 마치 아무 일도 없었다는 듯 조금도 동요하지 않는군.',
        ],
        true,
      );
      era.println();
      await era.printAndWait([
        '내가 속으로 조용히 ',
        donna.sex,
        '를 칭찬하려던 찰나, 계단 위쪽에서 불쑥 ',
        donna.get_colored_name(),
        '의 목소리가 들려왔다,',
      ]);
      era.println();
      await donna.say_and_wait(['아직 안 가셨습니까?']);
      await me.say_and_wait(['아직 여기 있어.']);
      await donna.say_and_wait(['……']);
      await donna.say_and_wait([
        '당신의 마음에 들었다니, 참으로 기쁘기 그지없습니다. 하지만 전 일반적인 지명 풍습에 따를 생각은 없습니다.',
      ]);
      await donna.say_and_wait([
        '어차피 각자의 속내를 무시한 채 겉보기에 순조롭다고, 혹은 기분에 휩쓸려 계약을 맺어봤자, 결국엔 서로를 원망하게 될…… 수도 있으니까요.',
      ]);
      await donna.say_and_wait([
        '그럼 이만! 언젠가 다시 저를 영입하고 싶어지신다면 기꺼이 환영하겠습니다만, 만약 당신만의 기준으로 다른 누군가를 선택하신다면……',
      ]);
      await donna.say_and_wait([
        '——당신이 키운 학생과 힘을 겨뤄, 철저하게 박살 낸 뒤, 그 승리마저 제 영광의 길을 장식할 한 송이 꽃으로 삼겠습니다. 그럼 안녕히, 트레이너님.',
      ]);
      await me.say_and_wait(['……']);
      era.println();
      await era.printAndWait([
        donna.get_colored_name(),
        '는 떠났다. 나는 계단에서 턱을 두어 번 긁적였다,',
      ]);
      era.println();
      await me.say_and_wait([
        '영입이 무산된 걸 엄청 신경 쓰면서도 겉으론 철저히 이성을 유지하고, 심지어 그런 말까지 남길 여유가 있다니.',
      ]);
      await me.say_and_wait([
        '내가 과연 ',
        donna.sex,
        '와 어울리는 사람인지 의심스러워지기 시작할 정도야.',
      ]);
      await me.say_and_wait([
        '나는…… 일단 원래 계획대로 돌아가서 일주일간 준비를 더 해야겠어. 만약 그때 가서도 내가 ',
        donna.sex,
        '의 트레이너가 될 자격이 있다고 느껴진다면, 내게 기대를 걸 만한 성과를 보여줄 수 있다면——',
      ]);
      await me.say_and_wait([
        {
          content: `그녀의 트레이너는 나일 수밖에 없을 테니까.`,
          fontWeight: 'bold',
          fontStyle: 'italic',
        },
      ]);
      era.set(`cflag:${this.id}:모집상태`, -1);
    } else {
      await me.say_and_wait([
        '아니, 널 반드시 지명할 거야. 여기 ',
        { content: '오른쪽 가슴을 두드리며', fontWeight: 'bold', fontStyle: 'italic' },
        ' 이 정도의 결심은 서 있으니까.',
      ]);
      era.println();
      await donna.say_and_wait(['그럼 대체 무엇을 애타게 기다리고 계신 거죠? Time is power.']);
      await me.say_and_wait(['하지만, 아직 준비가 부족해.']);
      await me.say_and_wait(['널 지명하고 육성해서, 더 거대한 목표를 이루기 위해서 말이야.']);
      await donna.say_and_wait(['……♪～']);
      era.println();
      await era.printAndWait(['——짝, 짝!']);
      await era.printAndWait([
        donna.get_colored_name(),
        '가 보내는, 아주 흡족해하는 박수 소리. 고막이 징징 울릴 정도였다. 이게 비꼬는 건지, 아니면 인정한다는 건지 확신할 수 없었다. 하지만 나는 말을 이었다——나는 오늘을 위한 준비를 끝냈고, 그러니까 내겐 그럴 자격이 충분하다고.',
      ]);
      await era.printAndWait(['내가 아니면 안 된다.']);
      await era.printAndWait(['나는 숨을 깊게 들이마셨다.']);
      era.println();
      await me.say_and_wait([
        '그래서 네 잠재력을 위해서든, 방금 말한 목표를 위해서든, 지금 내 준비는 한참 모자라. 완전 부족해. 계약금은커녕 성의를 보였다고 할 수준도 아니지.',
      ]);
      await me.say_and_wait(['반드시 완벽해야만 해.']);
      await donna.say_and_wait(['마치 운명처럼 말씀하시는군요.']);
      await me.say_and_wait(['넌 네 자신이 훨씬 더 완벽한 영입 제안을 받을 가치가 있다고 생각하지 않아?']);
      await donna.say_and_wait([
        '물론 가치가 있죠. 지금의 당신은 분명 감당할 수 없을 테고요…… 그래서, 앞으로 어떻게 하실 작정이신지?',
      ]);
      era.println();
      await era.printAndWait([
        '계단을 오르고, 한 계단, 또 한 계단, 코너를 돌아 계속해서 위로. ',
        donna.sex,
        '의 모습이 시야에서 사라졌다.',
      ]);
      era.println();
      await donna.say_and_wait([
        '기다리겠습니다. 당신에겐 그럴 가치가 있으니까요. 만약 그때 가서 제 생각이 바뀌어 당신이 최선의 선택이 아니게 된다면, 그것도 예약이 안고 있는 위험성일 뿐이겠죠.',
      ]);
      await donna.say_and_wait(['좋은 소식을 기다리겠습니다.']);
      era.println();
      await era.printAndWait(['내가 아니면 안 된다……']);
      era.println();
      await me.say_and_wait(['일주일 뒤에 아주 적당한 타이밍에 널 찾아갈게.']);
      era.println();
      await me.say_and_wait(['내가 아니면 안 되니까.'], true);
      await era.printAndWait(['발소리가 완전히 사라졌다.']);
      era.println();
      await me.say_and_wait(['내가 아니면 안 돼.']);
      await donna.say_and_wait([
        '어머머? 열정이 활활 타오르시는군요. 그럼 다음번에 만날 때는 말할 때 시선이 방황하는 버릇부터 고치시길.',
      ]);
      await donna.say_and_wait([
        '차라리 허세를 부리며 무례한 곳을 뚫어져라 쳐다보신다 한들…… 당신처럼 훌륭한 분이 제 앞에서 그토록 부끄러운 약한 모습을 보이는 건 결코 보고 싶지 않으니까요!',
      ]);
      era.println();
      await me.say_and_wait(['반드시 나여야만 해.']);
      era.set('flag:대상물색', 116);
      new EventMarks(0).add(event_hooks.week_end);
    }
    era.set(`cflag:${this.id}:무작위모집`, 0);
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.recruit).set_arg('good_news'),
    );
  }

  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async good_news(donna, me) {
    if (era.get(`cflag:${this.id}:모집상태`) === -1) {
      era.set(`cflag:${this.id}:무작위모집`, 1);
      return;
    }
    await print_event_name('좋은 소식', donna);
    era.drawLine({ content: `${me.name}의 시점` });
    await era.printAndWait([
      '사실 그날 대화를 나눈 이후로 나는 ',
      donna.get_colored_name(),
      '와 단 한 번도 교류하지 않았다. 침낭, 식수, 갈아입을 옷만 챙겨 동아리실을 하나 빌린 뒤, 깨어있을 때는 책상에 코를 박고 일했고, 불안과 초조함이 덮쳐오면 약을 먹고 잠들었다.',
    ]);
    await era.printAndWait([
      '무슨 수를 써서라도, ',
      donna.sex,
      '를 내 담당으로 지명하고야 말겠다는 이 강렬한 욕망을 도저히 억누를 수가 없었다.',
    ]);
    era.println();
    await era.printAndWait([
      '6일째…… 아니 5일째였나? 이젠 헷갈린다. 분명 교실 문을 잠그고 문틈까지 천으로 막아뒀는데. 갑자기 철컥 하는 소리와 함께 문이 열리며, 복도의 차가운 형광등 불빛이 비현실적으로 밀려 들어와 짙은 남색 침낭을 비추었다.',
    ]);
    await era.printAndWait([
      '오랜만에 보는, 덩치 작고 훌륭하신 내 선배가, 이 계절에도 여전히 정장 차림으로 내 눈앞에 나타났다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait('선배', [
      '……아, 안녕, ',
      me.actual_name,
      '. 출장에서 돌아오는 길에 기념품을 좀 사 왔는데, 내일 전해줄게.',
    ]);
    await me.say_and_wait(['여긴 어쩐 일이세요?']);
    await say_by_passer_by_and_wait('선배', [
      '어떻게 오긴…… 네 소문이 내 귀까지 들어왔으니까. 교문에서부터 사무실까지, 아주 평범해 보이는 트레이너 하나가, 엄청난 자질을 가졌지만 성질은 기괴한 미데뷔 ',
      donna.get_uma_sex_title(),
      '를 지명했다는 소문이 쫙 깔렸더만.',
    ]);
    await say_by_passer_by_and_wait('선배', [
      '그런데 공식 자료를 확인해 보니까, ',
      donna.get_colored_name(),
      '의 담당 트레이너란에는 아무 이름도 없더라고. 마침 그때 동아리실 관리하시는 할머니한테서 전화가 왔어. 누가 교실을 하나 빌리더니 며칠째 코빼기도 안 보인다고…… 놀라 자빠지는 줄 알았다. 출장 돌아오자마자 장례식부터 치를 뻔했잖아.',
    ]);
    await me.say_and_wait([
      '할머니 눈이 침침하신 거겠죠. 화장실 가거나 씻을 때는 밖으로 나갔거든요.',
    ]);
    await say_by_passer_by_and_wait('선배', [
      '네가 하도 처박혀 있으니까 할머니가 무서워서 마스터키로 문도 못 열어보셨다더라. 이렇게 하자, 내가 선물을 좀 준비해 줄 테니 나중에 할머니한테 사과드려. 그래야 다음에도 교실 빌려 쓰기 편하지.',
    ]);
    await say_by_passer_by_and_wait('선배', [
      '아무리 규정 내라곤 하지만, 이번엔 네가 좀 심했어, ',
      me.actual_name,
      '.',
    ]);
    await me.say_and_wait([
      '선배는 규정 안팎 가릴 것 없이 항상 일을 엄청 과장해서 하시잖아요…… 그런 면에선 저한테 뭐라 하실 자격 없으신데요.',
    ]);
    era.println();
    await era.printAndWait([
      '선배의 짙은 눈썹이 이마 위에서 흉터처럼 꿈틀거렸다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait('선배', [
      '우린 포지션이 완전 다르잖아…… 그래도 예고 하나 해주지. 조만간 분명히 좋은 일이 생길 거야.',
    ]);
    await me.say_and_wait(['좋은 일이요? 어떤 거요?']);
    await say_by_passer_by_and_wait('선배', [
      '음…… 너랑 나한테 좋은 일이라면, 내가 출장 때문에 미뤄뒀던 개인적인 일과, 네가 목숨 걸고 있는 영입이 전부 뜻대로 이루어진다는 뜻이지.',
    ]);
    await me.say_and_wait(['……말씀만이라도 감사합니다.']);
    await say_by_passer_by_and_wait('선배', [
      '빈말이 아니야. 솔직히 나 지금 너한테 꽤 감탄하고 있거든. 요즘 트레센 트레이너들이 뛰어난 담당을 얻으려면 열에 아홉은 ',
      donna.get_uma_sex_title(),
      ' 본인한테 역지명을 받는 미신 같은 행운에 기대야 하는 실정인데 말이야.',
    ]);
    const tazuna = get_chara_talk(301);
    await say_by_passer_by_and_wait('선배', [
      '그래서 출장에서 돌아와 교문을 딱 넘어서자마자, 기분이 묘하게 좋아 보이는 ',
      {
        color: tazuna.color,
        content: `하야카와 ${tazuna.get_adult_sex_title()}`,
        fontWeight: 'bold',
      },
      '가 어떤 트레이너의 지명 이야기를 꺼내더라고. 그리고 마지막에 뭐라고 했는지 알아?……글쎄, ',
      donna.get_colored_name(),
      '가 최근 며칠 동안 자신에게 쏟아진 지명과 영입 제의를 모조리 거절했다는 거야!',
    ]);
    await say_by_passer_by_and_wait('선배', [
      '단 한 치의 여지도 안 남기고 말이야! 절차상으로는 재차 권유하거나 지명을 시도해도 문제는 없지만, 그건 사실상 이후의 모든 2차 영입 제의를 거절하겠다는 선언이나 다름없지.',
    ]);
    await era.printAndWait(['어떤 감정이 내 정신을 순식간에 환기시켰다.']);
    era.println();
    era.printButton(`「……내 결의가 전해졌군요.」`, 1);
    await era.input();
    era.println();
    await say_by_passer_by_and_wait('선배', [
      '됐어, 됐어! 더 말하면 방해만 되겠네…… 가기 전에 하나만 조언하자면, 샤워하고 옷 갈아입는 건 잊지 마. 대신 향수는 뿌리지 말고. 알겠지?',
    ]);
    await say_by_passer_by_and_wait('선배', [
      '아무튼 간에, 네 지명이 성공하기를 축복하마. 부디 원하는 바를 이루길.',
    ]);
    era.println();
    await era.printAndWait([
      '선배는 쓰레기봉투 절반을 대신 챙겨 들고 문을 닫고 나갔다. 멀어지는 비닐봉지 바스락거리는 소리가 그의 발소리나 문 닫는 소리보다 훨씬 컸다…… 나는 그가 여전히 그런 좋은 습관을 유지하고 있다는 사실에 왠지 기분이 좋아졌다.',
    ]);
    await era.printAndWait([
      '나는 다시 스카우트 교섭 준비에 몰두했다——난제는 여전히 난제지만, 해결해야 할 문제들이 얼마 남지 않았다.',
    ]);
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.recruit).set_arg('know_me'),
    );
  }

  /**
   * @param {CharaTalk} donna
   * @param {CharaTalk} me
   */
  async know_me(donna, me) {
    await know_me.call(this, donna, me);
  }

  async recruit(stage, event_object) {
    const donna = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (stage === event_hooks.recruit) {
      await this.footprint(donna, me);
    } else if (
      event_object !== undefined &&
      this[event_object.arg] !== undefined
    ) {
      await this[event_object.arg].call(this, donna, me);
    }
  }
};