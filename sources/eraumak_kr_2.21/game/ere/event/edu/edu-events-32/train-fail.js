const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {boolean} [plan_b]
 */
async function train_fail_common(tachyon, me, plan_b) {
  era.drawLine();
  await tachyon.say_and_wait('아…… 넘어지겠군.', true);
  era.println();
  if (plan_b) {
    await tachyon.say_and_wait('역시, 이제는 포기하는 게 좋을지도 모르겠군.', true);
    await tachyon.say_and_wait(
      ['어차피, ', sys_get_colored_callname(32, 25), '도 충분히 성장했지 않나?'],
      true,
    );
    await tachyon.say_and_wait('비록 아쉽긴 하지만……', true);
  } else {
    await tachyon.say_and_wait('역시, 이대로라면 포기하는 수밖에 없겠군.', true);
    await tachyon.say_and_wait('괜찮아, 플랜 B가 준비되어 있으니까……', true);
    await tachyon.say_and_wait('분하긴 해도……', true);
  }
  era.println();
  await me.say_and_wait('타키온! 괜찮아!?');
  era.println();
}

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function train_fail_common2(tachyon, me) {
  await tachyon.print_and_wait('……어째서 이렇게 조급한 걸까.');
  await tachyon.print_and_wait('만약, 정말로 내 꿈을 믿어주는 사람이 없었다면 상관없었겠지.');
  await tachyon.print_and_wait([
    '하지만…… 오직 ',
    me.sex,
    '만은, ',
    me.sex,
    '의 기대만은……',
  ]);
  await tachyon.print_and_wait(
    '관두자. 조금 더 노력해 보겠어…… 이 몸이, 어디까지 버텨줄 수 있는지 확인해 보자고.',
  );
}

/**
 * @this CustomizedEdu
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {boolean} fumble
 * @param {number} train
 */
module.exports = async function (tachyon, me, callname, hook, fumble, train) {
  if (train === attr_enum.intelligence) {
    await CustomizedEdu.print_fail_info_in_train(tachyon, train, fumble);
    return;
  }
  const args = fumble ? fumble_result.fumble : fumble_result.fail,
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    relation = era.get('relation:32:0');
  await print_event_name('재정비 & 재출발', tachyon);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 경기장에서 훈련 중인 ',
    tachyon.get_colored_name(),
    '을 바라보았다.',
  ]);
  await era.printAndWait([
    '어쩐지, ',
    me.get_colored_name(),
    '은(는) 줄곧 가슴 한구석이 불안했다.',
  ]);
  await era.printAndWait([
    '분명 ',
    tachyon.get_colored_name(),
    '의 주법에는 아무런 문제가 없어 보였지만, 왠지 모르게 걱정이 앞섰다.',
  ]);
  await era.printAndWait([
    '제발 사고만 나지 않기를, ',
    me.get_colored_name(),
    '은(는) 간절히 기도했다.',
  ]);
  era.println();
  await era.printAndWait('그러나, 늘 그렇듯 이런 순간에 예기치 못한 일이 벌어졌다.');
  await era.printAndWait([
    me.get_colored_name(),
    '의 눈앞에서, ',
    tachyon.get_colored_name(),
    '의 발걸음이 돌연 비틀거렸다.',
  ]);
  era.print('금방이라도 고꾸라질 것 같은 찰나————');
  era.printButton('「타키온! 당장 멈춰!」(실패를 받아들인다)', 1);
  era.printButton('—————!(만회하려고 시도한다)', 2);
  if ((await era.input()) === 1) {
    const buffer = [];
    if (love >= 50) {
      edu_marks.train_fail = Math.min(edu_marks.train_fail + 1, 4);
      switch (edu_marks.train_fail) {
        case 1:
          await tachyon.say_and_wait([
            '아파라…… ',
            callname,
            ', 미안하지만 잠깐 발 좀 주물러 줄 수 있겠나?',
          ]);
          era.println();
          await era.printAndWait([
            '넘어진 ',
            tachyon.get_colored_name(),
            '의 곁으로 황급히 달려간 ',
            me.get_colored_name(),
            '은(는), 재빠른 손놀림으로 ',
            tachyon.sex,
            '의 신발과 양말을 벗겼다.',
          ]);
          era.println();
          await tachyon.say_and_wait('그래…… 발등…… 그리고 발바닥 쪽을……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 조심스럽게 ',
            tachyon.sex,
            '의 발에 있는 혈자리를 꾹꾹 눌러주었다.',
          ]);
          await era.printAndWait('이것은 분명, 지극히 정상적인 간호 행위여야 했다.');
          await era.printAndWait(
            '그러나…… 방금 막 달리기를 마친 탓에, 양말에 감싸여 후끈해진 발바닥은 자연스레 땀으로 젖어 있었다.'
          );
          await era.printAndWait([
            me.get_colored_name(),
            '의 마사지가 이어질수록, 끈적한 땀이 ',
            me.get_colored_name(),
            '의 양손을 적셔갔다.',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 이것이 그저 인체의 지극히 평범한 분비물일 뿐이라고 스스로를 다독였다.',
          ]);
          await era.printAndWait('하지만 손길은 자신도 모르게 점점 부드럽고 묘하게 변해갔다.');
          era.println();
          await tachyon.say_and_wait('음…… 으응……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이 때때로 내뱉는 얕은 신음은 ',
            me.get_colored_name(),
            '을(를) 더욱 자극했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 발바닥과 발등의 지압이 끝났으므로 마땅히 손을 떼어야 했지만, 손은 마치 별개의 의지를 가진 것처럼 멈추지 않았다.',
          ]);
          era.println();
          await tachyon.say_and_wait('잠깐…… 발가락 쪽은……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '의 손이 천천히 ',
            tachyon.sex,
            '의 발가락을 매만지기 시작했다.',
          ]);
          await era.printAndWait('보통 지압 마사지라면 오일을 발라 마찰을 줄여야 하겠지만.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 발을 적신 땀방울이 오일을 대신하여 매끄러운 윤활 작용을 하고 있었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(['잠깐만…… ', callname, '…… 앗, 아파!']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 외침이 ',
            me.get_colored_name(),
            '의 이성을 간신히 붙잡아주었다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 고개를 들어 ',
            tachyon.sex,
            '의 얼굴을 바라보자, ',
            tachyon.sex,
            '은(는) 얼굴을 붉게 물들인 채 마치 어떤 스위치가 켜진 듯한 표정을 짓고 있었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('……남은 건, 실내로 돌아가서 계속해 주지 않겠나?');
          break;
        case 2:
          await tachyon.say_and_wait('아파라~~♡');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 오늘 훈련 중에도 또 「실수로」 넘어지고 말았다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 잔디 위에 주저앉자마자 기다렸다는 듯 신발과 양말을 벗는 ',
            tachyon.sex,
            '을(를) 보며, 성욕과 허탈함이 뒤섞인 기분을 느꼈다.',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '~~ 어서 마사지해 주게나……♡♡']);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 움직이지 않자, ',
            tachyon.sex,
            '은(는) 어리광을 부리듯 맨발로 잔디를 툭툭 치며 ',
            me.get_colored_name(),
            '의 주의를 끌었다.',
          ]);
          await era.printAndWait(
            '하얗고 가냘퍼서 마치 예술품처럼 보이는 그 맨발은, 튀어 오른 흙먼지가 묻어 있기에 오히려 그 백치미가 더욱 돋보였다.'
          );
          era.println();
          await tachyon.say_and_wait('자, 얼른얼른. 기분 좋게 주물러달라고~~');
          era.println();
          await me.say_and_wait('이런 나쁜 습관을 계속 받아줄 수는 없는데……', true);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 조심스럽게 ',
            tachyon.sex,
            '의 발을 마사지하기 시작했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('응, 응♡…… 바로 거기야…… 아♡ 으윽♡ 하아♡');
          era.println();
          await era.printAndWait('여전히 뇌쇄적인 목소리였다.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이 입을 열어 내뱉는 소리는 매번 ',
            me.get_colored_name(),
            '의 욕망을 끝없이 자극하는 교성이었다.',
          ]);
          await era.printAndWait([tachyon.sex, '를 이대로 내버려 두어선 안 되겠다고 생각했다.']);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 손에 힘을 주는 방식을 바꾸었다.',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '……히익!?']);
          era.println();
          await era.printAndWait('방금까지의 부드럽고 애무하는 듯한 손길이 아니었다.');
          await era.printAndWait('찰나의 순간, 발을 통째로 으스러뜨릴 것 같은 강렬한 압박이 전해졌다.');
          era.println();
          await tachyon.say_and_wait([
            '아파! 잠깐, ',
            callname,
            '! 안 돼! 그만해! 발가락 부러지겠네! 아아아악!',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 비명에도 아랑곳하지 않고, 그저 묵묵히 거친 마사지를 이어갔다.',
          ]);
          await era.printAndWait([
            tachyon.get_uma_sex_title(),
            '를 위한 마사지 강도에 대해서라면, 이 세상에 트레이너보다 더 잘 아는 사람은 없었기 때문이다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 뼈가 상하지 않으면서도, ',
            tachyon.get_colored_name(),
            '이 충분히 고통을 느낄 수 있는 범위 내에서 힘 조절을 하며 마음껏 주물러댔다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '잠깐, 내가 잘못했네! 제발! 살려주게! 안 돼! 놓으라고! 아윽………!',
          );
          await tachyon.say_and_wait('으윽…… 하아…… 하아…… 하아……');
          era.println();
          await era.printAndWait([
            '얼마 지나지 않아 ',
            tachyon.get_colored_name(),
            '은 제대로 된 목소리조차 내지 못하고 고통 섞인 거친 숨소리만 내뱉게 되었다.',
          ]);
          await era.printAndWait([
            '하지만 이 정도로 그쳐선 안 된다. ',
            tachyon.sex,
            '가 철저하게 교훈을 얻게 해야 했다.',
          ]);
          era.println();
          await tachyon.say_and_wait('으음…… 윽…… 하아…… 응♡');
          await tachyon.say_and_wait('우으♡ 응…… 하아♡');
          era.println();
          await era.printAndWait('……기분 탓일까.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 목소리 톤이 어딘가 미묘하게 변한 것 같았다.',
          ]);
          await era.printAndWait([
            '적당히 끝낼 때를 아는 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '가 충분히 반성했을 거라 판단하고 손아귀의 힘을 풀었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('우으으으……');
          await tachyon.say_and_wait('방금 전까지 그렇게 아프게 하더니, 갑자기 이렇게 상냥하게…………');
          await tachyon.say_and_wait('안 돼…… 잠깐…… 가, 가버릴 것 같아……♡');
          era.println();
          await era.printAndWait('……당신은 분명히 마사지만 했을 뿐이었다.');
          await era.printAndWait('얼마 뒤, 마사지가 끝났다.');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 왠지 모르게 탈진해 버린 ',
            tachyon.get_colored_name(),
            '을 데리고 기숙사로 돌아갔다.',
          ]);
          await era.printAndWait(['이 정도면 ', tachyon.sex, '도 확실히 깨달았을 것이다.']);
          era.println();
          await era.printAndWait('…………정말로, 깨달았을까?');
          break;
        case 3:
          await tachyon.say_and_wait([
            '음~~ ',
            callname,
            ', 발 마사지 좀 해주게나~~',
          ]);
          await tachyon.say_and_wait('저기…… 「그쪽」 마사지로 말이야♡');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 자신의 다리를 쓰다듬으며 노골적인 태도로 ',
            me.get_colored_name(),
            '에게 속삭였다.',
          ]);
          await era.printAndWait('이 녀석…… 역시 전혀 배우질 못했군.');
          await era.printAndWait([
            '이번에야말로 정말 ',
            tachyon.sex,
            '가 정신을 차리게 해줘야 했다.',
          ]);
          await era.printAndWait([
            '…………그런데, 내「교육」이 ',
            tachyon.sex,
            '에게는 오히려 어떤 의미로 보상이 되고 있는 것 아닐까?',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 황급히 머릿속에 떠오른 불길한 생각을 털어버렸다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이 설마 그 정도로 망가졌을 리가 없었다.',
          ]);
          await era.printAndWait('…………그렇겠지?');
          break;
        case 4:
          await tachyon.say_and_wait(['아파라…… ', callname, '.']);
          await tachyon.say_and_wait('아니, 다리는 괜찮은 것 같군……');
          await tachyon.say_and_wait('하지만, 누군가의 하반신은 괜찮지 않은 모양이지?');
          await tachyon.say_and_wait('내가 양말을 벗을 때, 어째서 갑자기 허리를 숙인 건가?♡');
          await tachyon.say_and_wait('상처라도 나면 큰일이지…… 내가 한번 봐주겠네♡');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 말에 ',
            me.get_colored_name(),
            '은(는) 그 자리에 얼어붙었다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '을 살피러 다가가고 싶었지만, ',
            tachyon.sex,
            '가 정말로 무슨 짓을 저지를지 몰라 겁이 났다.',
          ]);
          era.println();
          await tachyon.say_and_wait('음…… 오지 않는 건가? 정말 아쉽구만~~');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 옷에 묻은 먼지를 툭툭 털고 스스로 자리에서 일어났다.',
          ]);
          await era.printAndWait('이 녀석…… 역시 아픈 척 연기했던 것이었다.');
      }
    } else if (relation > 525) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(['못 일어나겠네…… ', callname, ', 업어주게~~']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            me.get_colored_name(),
            '의 목소리를 듣자마자 엉덩이를 잔디에 붙이고 주저앉았다.',
          ]);
          await era.printAndWait([
            '눈물을 글썽이며 ',
            me.get_colored_name(),
            '을(를) 향해 소리쳤다.',
          ]);
          await era.printAndWait([
            '원래 ',
            tachyon.sex,
            '가 이렇게 어리광쟁이였던가……?',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 조금 어이가 없었지만, 어찌 됐든 오늘은 훈련을 더 진행할 상태가 아니라고 판단했다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('나 원 참…… 분명히 계속 뛸 수 있었는데……');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) ',
            tachyon.get_colored_name(),
            '의 다리를 살필 때, ',
            tachyon.get_colored_name(),
            '은 볼을 부풀리며 툴툴거렸다.',
          ]);
          era.println();
          await me.say_and_wait(
            '하지만 타키온이 위험한 짓을 하게 둘 순 없어…… 나에게는 타키온(의 다리)이 그 무엇보다 소중하니까.'
          );
          await tachyon.say_and_wait('!…………자네가 정 그렇게 말한다면야.');
          era.println();
          await era.printAndWait([
            '어째서인지 ',
            tachyon.get_colored_name(),
            '의 얼굴이 돌연 붉게 달아올랐다.',
          ]);
          await era.printAndWait('그래도 순순히 검사에 협조해주니 다행이었다.');
        },
        async () => {
          await tachyon.say_and_wait([
            '흐흥, 고작 한 번의 실험 실패일 뿐이네. 설마 이런 걸로 내가 꺾일 거라 생각한 건 아니겠지, ',
            callname,
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 걱정스러운 표정으로 ',
            tachyon.get_colored_name(),
            '의 다리를 확인했다.',
          ]);
          await era.printAndWait('결국, 이 지경이 되어서도 걱정하는 건 실험뿐인 건가?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 가슴 한구석에서 답답함과 노여움이 동시에 치밀었다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '게다가…… 나는 ',
            callname,
            ', 자네를 믿네. 자네는 절대로 나를 망가뜨리지 않을 테니까, 그렇지?',
          ]);
          era.println();
          await me.say_and_wait('…………');
          await era.printAndWait([
            '가만히 생각해보면, 만약 ',
            tachyon.sex,
            '가 이토록 꿈에 미쳐 있는 순수한 ',
            tachyon.get_uma_sex_title(),
            '가 아니었다면.',
          ]);
          await era.printAndWait([
            '자신 또한 ',
            tachyon.sex,
            '의 무모한 실험에 끝까지 동참하지 않았을 것이다.',
          ]);
          await era.printAndWait([
            '오직 꿈밖에 모르는 이 광기 어린 과학자가 폭주할 때마다, ',
            tachyon.sex,
            '의 발치에 있는 작은 구덩이를 살피고 막아주는 것.',
          ]);
          await era.printAndWait('그것이야말로 모르모트인 자신의 진정한 책무일지도 몰랐다.');
          era.println();
          await tachyon.say_and_wait(
            '그러니…… 돌아가서 검토를 마친 뒤, 내일부터 다시 실험을 재개하세!'
          );
          await me.say_and_wait('안 돼, 적어도 사흘은 쉬어야 해.');
          era.println();
          await era.printAndWait(
            '꿈이니 미래니 하는 거창한 이야기는 제쳐두더라도, 일단 며칠은 상태를 지켜보는 것이 우선이었다.'
          );
        },
      );
      await (await get_random_entry(buffer))();
    } else if (relation > 225) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([callname, '……아파라……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 눈가에 눈물을 머금은 채 잔디에 앉아 ',
            me.get_colored_name(),
            '에게 위로를 청했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 서둘러 ',
            tachyon.sex,
            '의 부상 부위를 살폈고, 큰 이상이 없음을 확인한 뒤에야 안도의 한숨을 내쉬었다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(
            '……상관없네, 고작 한 번의 실패일 뿐이야…… 실험을 처음부터 다시 구성하면……',
          );
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), '은 혼잣말을 중얼거렸다.']);
          await era.printAndWait('……이 와중에도 실험 생각뿐인 건가.');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 조금 허탈한 기분으로 ',
            tachyon.sex,
            '의 다리에 상처가 없는지 꼼꼼히 살폈다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(['윽…… ', callname, '…… 나, 나는 괜찮네.']);
          await era.printAndWait('잠깐 쉬기만 하면…… 하아.');
          era.println();
          await me.say_and_wait('안 돼.');
          await tachyon.say_and_wait('!?');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 가장 안정적인 자세로 ',
            tachyon.get_colored_name(),
            '의 목 뒷덜미와 무릎 안쪽을 받쳐 들어 품에 안았다.',
          ]);
          await era.printAndWait([
            '지금은 ',
            tachyon.sex,
            '의 고집을 받아줄 때가 아니었다. 당장 보건실로 가서 정밀 진단을 받아야만 했다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '잠깐! ',
            callname,
            '! 알았으니까! 보건실에 가겠네, 그러니 제발 내려주게!',
          ]);
          await me.say_and_wait('하지만 이쪽이 훨씬 효율적이지 않아?');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 저항을 무시하고, 주변의 시선을 한 몸에 받으며 ',
            tachyon.get_colored_name(),
            '을 보건실까지 안고 갔다.',
          ]);
        },
      );
      await (await get_random_entry(buffer))();
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('윽…… 역시 너무 무리했던 건가?');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 순순히 동작을 멈추었고, ',
            me.get_colored_name(),
            '은(는) 급히 다가가 ',
            tachyon.sex,
            '의 상태를 확인했다.',
          ]);
          await era.printAndWait('……오늘의 훈련은 여기서 마쳐야 할 것 같았다.');
        },
        async () => {
          await tachyon.say_and_wait('다리가…… 움직이지 않는군.');
          await tachyon.say_and_wait('실험은 실패로군……');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 몇 걸음 비틀거리다 멈춰 섰다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 다급히 달려가 ',
            tachyon.get_colored_name(),
            '의 상태를 살폈다.',
          ]);
          await era.printAndWait('다행히 발목을 살짝 삐었을 뿐, 큰 부상으로 이어지지는 않은 모양이었다.');
          await era.printAndWait('다만 보건실로 가서 휴식을 취하는 것이 급선무였다.');
        },
        async () => {
          await tachyon.say_and_wait('나의 한계는…… 겨우 여기까지였던가.');
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 지체 없이 달려가, ',
            tachyon.get_colored_name(),
            '이 쓰러지기 직전에 몸을 붙잡아 지탱해주었다.',
          ]);
          await era.printAndWait([
            '충동적인 행동이었고 자칫 ',
            tachyon.get_colored_name(),
            '에게 꾸지람을 들을 수도 있었지만, ',
            me.get_colored_name(),
            '은(는) 망설임 없이 몸을 던졌다.',
          ]);
          await era.printAndWait([
            '덕분에 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 작게 뇌까리는 소리를 들을 수 있었다.',
          ]);
          era.println();
          await me.say_and_wait('분명 더 강해질 수 있어…… 타키온의 한계는 절대 여기가 아니야.');
          await tachyon.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 아무런 대꾸도 하지 않았다. ',
            me.get_colored_name(),
            '의 말을 귀담아들었는지조차 알 수 없었다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            tachyon.sex,
            '은(는) 천천히 다시 발을 떼기 시작했고, ',
            me.get_colored_name(),
            '은(는) 곁에서 ',
            tachyon.sex,
            '을(를) 부축하며 보건실로 향했다.',
          ]);
        },
      );
      await (await get_random_entry(buffer))();
    }
    hook.arg = 0;
  } else if (Math.random() < args.ratio.fail_again) {
    const edu_weeks = era.get('cflag:32:육성턴수합산');
    if (edu_marks.plan_b && edu_weeks > 95) {
      await train_fail_common(tachyon, me, true);
      await train_fail_common2(tachyon, me);
    } else if (edu_weeks > 47 + race_infos[race_enum.toky_yus].date) {
      await train_fail_common(tachyon, me);
      await tachyon.print_and_wait('……이럴 순 없어.');
      await tachyon.print_and_wait('이미 돌아갈 수 없는 길을 왔단 말이야.');
      await tachyon.print_and_wait([me.sex, '의 지지가 있었기에 이 단계까지 올 수 있었어.']);
      await tachyon.print_and_wait('여기서 포기한다면 그것만큼 우스운 꼴이 어디 있겠어.');
      await tachyon.print_and_wait('나를 믿어주는 사람을 위해서라도…… 조금 더 버텨보겠어.');
    } else if (sys_reg_race(32).curr.race === race_enum.toky_yus) {
      await train_fail_common(tachyon, me);
      await train_fail_common2(tachyon, me);
    } else {
      await tachyon.say_and_wait('아파라.');
      await tachyon.say_and_wait('무섭군.');
      await tachyon.say_and_wait('역시…… 내 한계는 여기까지인 건가……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그제야 정신을 차리고 ',
        tachyon.get_colored_name(),
        '에게 달려갔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '는 마치 넋이 나간 듯 혼잣말을 반복할 뿐, 달려온 당신을 보지 못하는 것 같았다.',
      ]);
      await era.printAndWait([
        '한참 뒤에야 간신히 정신을 차린 ',
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 부축을 받으며 보건실로 향했다.',
      ]);
      await era.printAndWait('…………정말로 괜찮은 걸까. 몸도, 그리고 마음도.');
      await era.printAndWait([me.get_colored_name(), '은(는) 묻고 싶었다.']);
      await era.printAndWait([
        '하지만…… 사고가 나기 전 ',
        tachyon.sex,
        '에게 외쳐서 멈추지 못했던 자신에게는, 지금 그런 말을 건넬 자격조차 없을지도 몰랐다.',
      ]);
    }
    hook.arg = -1;
  } else {
    await era.printAndWait('미처 손을 쓸 틈도 없었다.');
    await era.printAndWait('미처 목소리를 낼 겨를조차 없었다.');
    await era.printAndWait([tachyon.get_colored_name(), '은(는) 이미 안정적으로 발걸음을 고쳐 밟았다.']);
    await era.printAndWait('마치 마음속 깊이 품고 있던 불안감을 단숨에 씻어내기라도 하려는 듯.');
    await era.printAndWait('다시금 힘차게 앞을 향해 다음 발걸음을 내디뎠다.');
    await era.printAndWait('그렇게 훈련이 끝날 때까지 멈추지 않고 계속 달려나갔다.');
    hook.arg = 1;
  }
};