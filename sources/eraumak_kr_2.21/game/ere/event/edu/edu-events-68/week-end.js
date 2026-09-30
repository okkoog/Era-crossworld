const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kita, me, hook, event_object) => {
  const event_arg = event_object?.arg,
    event_marks = new KitaEduMarks();
  let wait_flag = false;
  if (event_arg === 'beginning') {
    add_event(event_hooks.week_start, event_object);
    await print_event_name(`${kita.name} 등장`, kita);
    await era.printAndWait(
      '새 학기가 시작되기 전 마지막 날, 봄기운이 완연하고 화창한 날씨다.',
    );
    await era.printAndWait(
      `트레센 학원에서도, 새로운 생애의 시작을 알리는 맑은 하늘 아래 우마무스메들의 모습은 무척이나 즐거워 보였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 복장을 정돈하고 인사말을 되새기며, 담당 우마무스메와 함께 전력으로 달려 나갈 3년을 맞이할 준비를 마쳤다.`,
    );
    await era.printAndWait(`그리고 그 ${kita.sex}의 이름은 바로————`);
    await kita.say_and_wait(`잘 부탁드려요! ${sys_get_callname(68, 0)}!`);
    await era.printAndWait(
      `키타산 블랙은 마치 깍듯한 기백을 보여주듯 ${me.name}을(를) 향해 깊숙이 고개를 숙였고, 검은 단발머리가 그 큰 동작에 맞춰 찰랑거렸다.`,
    );
    await era.printAndWait(
      `그 건강한 모습에 ${me.name}은(는) 만족스럽게 고개를 끄덕였다. 탄탄한 신체는 승리의 결실을 맺기 위한 기초이며, 고된 훈련은 바로 그 기초 위에서 완성되는 법이다.`,
    );
    await era.printAndWait(
      `이 몸상태라면, ${me.name}은(는) 이 ${kita.get_teen_sex_title()}의 힘을 믿기에 충분하다고 확신했다.`,
    );
    await era.printAndWait(
      '햇살이 내리쬐는 훈련장은 눈부시게 빛났고, 푸른 잔디 코스에서 풍겨오는 풀내음이 가슴을 설레게 했다.',
    );
    await era.printAndWait(
      `사춘기 본격화에 접어든 ${kita.get_uma_sex_title()}와 어떻게 지낼 것인가? 앞으로의 훈련과 레이스 일정은? 실패했을 때는 어떻게 담당을 마주해야 할까? 그런 고민은 미래의 자신에게 맡기기로 했다!`,
    );
    await era.printAndWait(
      `지금의 ${me.name}에게 필요한 것은, 코스 위에서 힘차게 달려 나가는 ${kita.name}의 모습을 지켜보는 것, 오직 그것뿐이었다!`,
    );
    await kita.say_and_wait(
      `그럼 트레이너 선생님, 저 달려갈게요! 제대로 지켜봐 주세요!`,
    );
    await era.printAndWait(
      `축제와도 같은 기운을 품은 우마무스메가 코스에 서서 ${me.name}에게 손을 흔들었다. 그녀는 몸을 굽혀 작은 체구를 긴장시키더니, ${me.name}의 눈앞에서 아낌없이 발걸음을 내디디며 질주하기 시작했다.`,
    );
    await era.printAndWait(
      `심장을 울리는 발소리와 축제 같은 열정은, 마치 이른 아침에 피어나는 나팔꽃처럼 ${me.name}의 눈앞에서 화려하게 만개했다.`,
    );
    await era.printAndWait(`그렇게 ${kita.name}의 이야기가 시작되었다.`);
    era.println();
  } else if (event_arg === 47 + 32 || event_arg === 95 + 32) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:68:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('여름 합숙 종료', kita);
    await era.printAndWait(
      `한 달간의 합숙 훈련 계획 아래, ${kita.name}의 능력은 눈에 띄는 속도로 향상되었다.`,
    );
    await era.printAndWait(
      `정점의 순간에 폭발하는 기세, 트레이너의 지도 아래 얻은 용기, 그리고 한순간의 소홀함도 없었던 혹독한 단련.`,
    );
    await era.printAndWait(
      `우마무스메를 강하게 만드는 요소들은 마치 물과 섞인 밀가루 반죽처럼, 눈앞에서 발효되고 형태를 갖추며 놀라운 열기를 내뿜고 있었다.`,
    );
    await era.printAndWait(
      `여름 합숙이 막바지에 다다르자, ${me.name}은(는) 이 맛있게 익은 작은 ${kita.get_uma_sex_title()}에게 휴식 시간을 주기로 했다.`,
    );
    await era.printAndWait(`${kita.sex}에게 푹 쉴 수 있는 시간을 주자.`);
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    wait_flag = get_attr_and_print_in_event(68, attr_change, 0) || wait_flag;
  } else if (event_arg === 95 + 10) {
    event_marks.senior_valentine++;
    await print_event_name('포상', kita);
    await era.printAndWait(
      `화이트데이 아침, 담당에게 선물을 주기 위해 일찍 트레이닝실을 찾았다.`,
    );
    await era.printAndWait(
      `초콜릿 같은 평범한 단것을 원할 거라 생각했지만, ${me.name}은(는) 키타산에게 혹시 따로 원하는 포상이 있는지 물었다.`,
    );
    await kita.say_and_wait(`포상이요? 그냥 평범한 초콜릿…… 아니, 그게…… 포상이라면……`);
    await kita.say_and_wait(`다른 방식으로, 상을 주실 수 있나요?`);
    era.drawLine({ content: '밤' });
    await kita.say_and_wait(`트레이너 선생님…… 학원 안에서 이러는 거… 아무도 안 보겠죠…♡`);
    await era.printAndWait([
      '깊은 밤, 트레센 학원의 복도에서 ',
      me.get_colored_name(),
      '과(와) 실오라기 하나 걸치지 않은 ',
      kita.get_colored_name(),
      '이 오늘만의 데이트를 즐기고 있다.',
    ]);
    await era.printAndWait(
      `암컷 냄새가 진동하는 개목줄이 우마무스메의 새하얀 목에 꽉 조여져 있었고, 그 목줄에 연결된 리드줄은 ${me.name}의 손에 쥐여 있었다.`,
    );
    await era.printAndWait(
      `분홍빛 혀가 음란하고 색기 있게 입 밖으로 나와 있었고, ${kita.get_teen_sex_title()}의 거친 숨소리에 맞춰 달콤한 침이 끊임없이 뚝뚝 떨어졌다.`,
    );
    await era.printAndWait(
      `평소의 자부심 넘치고 귀여웠던 ${kita.get_teen_sex_title()}은, 지금 이 순간 비치는 검은 거즈 안대로 두 눈이 가려진 채 ${me.name}의 바짓가랑이에 얼굴을 비비고 있었다.`,
    );
    if (kita.sex_code - 1) {
      await era.printAndWait(
        `우마무스메의 가슴 위로 리본 하나가 두 개의 크고 분홍색인 유두를 한데 묶고 있었고, 가슴의 무게 때문에 바닥에 끌리며 마찰을 일으키고 있었다.`,
      );
    }
    await kita.say_and_wait(
      `학원 안에서 트레이너 선생님께 목줄이 잡히다니… 정말 애완견이 된 기분이에요… 하아…♡ 복도에서 이런 짓을 한다고 생각하니까… 아랫배 깊은 곳이… 뜨거워져서… 대단해요…♡`,
    );
    await era.printAndWait(
      `만약 ${me.name}의 담당이 노출 자위나 즐기는 변태라는 사실이 알려진다면, ${me.name}은(는) 분명 감옥에 가게 될 것이다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 리드줄을 팽팽하게 당겨 목줄을 가볍게 채찍질했다. ${kita.get_teen_sex_title()}은 신음 섞인 숨을 내뱉으며 목의 압박감에 수치심으로 얼굴을 붉혔고, ${me.name}의 신발에 얼굴을 비비며 기쁘게 꼬리를 흔들었다.`,
    );
    await era.printAndWait(
      `어쩔 수 없지…… 그런 생각을 하며, ${me.name}은(는) ${kita.name}을 데리고 근처 빈 방으로 들어갔다.`,
    );
    await era.printAndWait(
      `잠시 후, 도저히 ${kita.name}의 것이라고는 믿기지 않는 방탕한 교성과 살을 맞대는 소리가 남자 화장실 쪽에서 여과 없이 새어 나왔다.`,
    );
    begin_and_init_ero(0, 68);
    const part = kita.sex_code - 1 ? '질구' : '음경';
    era.set('palam:68:피학쾌감', era.get('tcvar:68:피학쾌감상한'));
    era.set(`palam:68:${part}쾌감`, era.get(`tcvar:68:${part}쾌감상한`));
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(68, part_enum.anal),
      false,
    );
    end_ero_and_train(false);
    era.println();
    sys_like_chara(68, 0, 5, true, 5);
    add_jewel_reward(68, ['피학쾌감', '순종', '수치'], [100, 100, 50]);
    wait_flag = true;
  } else if (event_arg === 95 + 48) {
    await print_event_name(`${kita.name}과 함께하는 바에서의 시간`, kita);
    await era.printAndWait(`담당 우마무스메와 어느 바에서 만나기로 약속했다.`);
    await era.printAndWait(
      `${kita.name}과 3년이라는 시간을 함께 보낸 후, ${me.get_couple_title()}은 마침내 피날레를 맞이했다. 아마 이번 달이 ${kita.sex}과 함께 보내는 마지막 시간이 될지도 모른다.`,
    );
    await era.printAndWait(
      `그런 애틋한 생각을 품은 채, ${me.name}은(는) 검은 고양이 문패가 걸린 지하 바의 문을 열고 들어갔다.`,
    );
    await kita.say_and_wait(
      `아, 트레이너 선생님…… 어서…… 어서 오세요~`,
    );
    await era.printAndWait(
      `문을 열자 텅 빈 바 안에는 교복 차림의 ${kita.name}만이 홀로 카운터석에 앉아 있었다.`,
    );
    await era.printAndWait(
      `${kita.get_teen_sex_title()}은 빈 잔을 이리저리 흔들며 뺨을 살짝 붉히고 있었지만, 그 곁에는 그저 따지 않은 탄산음료 병만이 놓여 있었다.`,
    );
    await kita.say_and_wait(
      `저기…… 하하…… 이 바는 어머니 지인분이 크리스마스에 고향에 내려가신다고 해서, 마침 조용한 곳을 찾다가 빌리게 됐어요.`,
    );
    await kita.say_and_wait(
      `그러니까…… 술 같은 건 없답니다, 트레이너 선생님~ 아하하하~`,
    );
    era.println();
    era.printButton(`「키타산과 같이 있으면 술은 필요 없으니까……」`, 1);
    await era.input();
    await kita.say_and_wait(`그렇네요……`);
    await era.printAndWait(
      `창가 자리에 앉아 와인 잔에 담긴 탄산음료를 마시며, 키타산은 창밖의 적막한 거리 풍경을 멍하니 바라보고 있었다.`,
    );
    await era.printAndWait(
      `검은 귀가 차가운 유리에 닿아, 규칙적으로 가볍게 파닥거렸다……`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 이런 고요한 느낌 좋아하세요?`,
    );
    era.println();
    era.printButton(`「고요함?」`, 1);
    await era.input();
    await kita.say_and_wait(
      `네. 창문을 두드리는 눈송이, 인적 없는 거리, 희미하게 들려오는 바람 소리 같은 거요.`,
    );
    await kita.say_and_wait(`이런 느낌, 저 꽤 기대하고 있었거든요……`);
    await era.printAndWait(
      `언제나 활발했던 ${kita.name}이 이런 정경을 좋아한다니, 조금 의외였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${kita.name}과 함께 유리에 몸을 기대고, 크리스마스 밤의 정적과 냉기를 즐겼다.`,
    );
    await era.printAndWait(`마지막 며칠을 장식하기엔 나쁘지 않은 시간이었다.`);
    era.println();
    wait_flag = sys_like_chara(68, 0, 50) || wait_flag;
  } else if (event_arg === 144) {
    const love = era.get('love:68'),
      relation = era.get('relation:68:0');
    if (love === 100 && relation > 375) {
      await print_event_name('오직 당신만을 위한 검은 석양', kita);
      await era.printAndWait(
        `3년의 시간이 쏜살같이 지나가고, ${me.name}과(와) ${kita.name}은 이제 작별의 날을 앞두고 있다.`,
      );
      await kita.say_and_wait(
        `이제 며칠 뒤면 트레이너 선생님과 떨어져야 하네요. 왠지 마음 한구석이 텅 빈 것 같아요.`,
      );
      await kita.say_and_wait(
        `트레이너 선생님께서는 몇 달 뒤면 새로운 아이를 맞이해서, 그 아이만의 전속 트레이너가 되시겠죠.`,
      );
      await kita.say_and_wait(`헤헤, 조금 심술이 나네요……`);
      await era.printAndWait(
        `트레이닝실에 두었던 책과 물건들을 챙기며, ${kita.get_teen_sex_title()}는 못내 아쉬운 표정을 지었다.`,
      );
      await era.printAndWait(
        `황혼이 깃든 고요함 속을 나란히 걸어간다. 텅 빈 교실 사이로 키타산의 발소리가 복도에 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `수없이 함께 걸었던 길인데도 오늘따라 유독 길게 느껴졌다.`,
      );
      await era.printAndWait(`어쨌든, ${kita.name}은 이미 고향으로 돌아가기로 예정되어 있었다.`,);
      await era.printAndWait(
        `연로하신 아버지께 안부를 전하러 가는 것뿐이라 다시 돌아오지 않는다는 법은 없지만, 트레센에 돌아오더라도 ${kita.get_teen_sex_title()}가 계속 당신과 함께 일하게 될지는 미지수였다.`,
      );
      await kita.say_and_wait(`저, 트레이너 선생님을 좋아해요.`);
      await era.printAndWait(
        `모퉁이를 돌며, ${kita.get_teen_sex_title()}는 덤덤하게 말을 꺼냈다.`,
      );
      await era.printAndWait(
        `석양이 키타산의 앳된 얼굴을 비추었고, 따스한 미소를 평소와는 다른 빛깔로 물들였다.`,
      );
      await kita.say_and_wait(
        `사실은 트레이너 선생님을 가장 사랑해요. 당신의 반려자가 되어 언제까지나 함께하고 싶을 정도로요.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 키타산의 얼굴에 감도는 붉은 기운이 따스한 석양 때문만은 아니라는 것을 눈치챘다. 곱게 관리된 ${kita.sex}의 검은 머리카락이 부드럽게 흘러내렸고, 미세하게 향수 냄새까지 풍겨왔다.`,
      );
      await era.printAndWait(
        `${kita.get_teen_sex_title()}는 수줍은 표정을 지었다. 평소의 활기찬 모습과는 정반대로, 떨리는 목소리에 기대와 간절함을 담아 ${kita.name}이 ${me.name}에게 물었다.`,
      );
      await kita.say_and_wait(
        `트레이너 선생님, 계속 저를 좋아해 주실 수 있나요?`,
      );
      await era.printAndWait(`뚜벅, 뚜벅, 뚜벅.`);
      await era.printAndWait(
        `적막한 복도에 두 사람의 발소리만이 들려온다. 붉게 물든 석양의 여운은 좀처럼 가실 기미가 보이지 않았다.`,
      );
      era.println();
      era.printButton('「키타산」', 1);
      await era.input();
      await kita.say_and_wait(`네.`);
      era.println();
      era.printButton('「나도, 줄곧 가장 좋아하고 있었어.」', 1);
      await era.input();
      await era.printAndWait(
        `그 순간 발소리가 멎었고, 석양빛을 닮은 심장 소리만이 더욱 세차게 고동치기 시작했다.`,
      );
    } else if (love >= 75 && relation > 225) {
      await print_event_name(`${kita.name}의 작은 축제`, kita);
      await era.printAndWait(
        `어린 우마무스메 A 「우와! 키타산 ${
          kita.sex_code - 1 ? '언니' : '오빠'
        }가 왔다! 도망쳐!」`,
      );
      await kita.say_and_wait(`거기 서! 거기 서라고!`);
      await era.printAndWait(
        `초등학교 운동장에서 ${
          kita.name
        }이 까르르 웃으며 어린 우마무스메들을 쫓아다니며 장난을 치고 있다.`,
      );
      await era.printAndWait(
        `이것은 지방 학원을 대상으로 한 공익 레이스 간담회로, ${kita.name}의 레이스 일정이 끝난 뒤 트레센의 주도로 진행되는 공익 프로젝트였다.`,
      );
      await era.printAndWait(
        `낙후 지역에 경비를 지원할 뿐만 아니라, 트레이너나 우마무스메가 되고 싶어 하는 인재를 발굴하기 위한 일환이었다.`,
      );
      await era.printAndWait(
        `그리고 그 홍보 대사로서 지방 학원을 시찰할 적임자로 키타산 블랙이 선정된 것이다.`,
      );
      await era.printAndWait(
        `무명에서 시작해 혜성처럼 등장한 지난 3년은 그야말로 '키타산 극장'이라 불러도 과언이 아니었고, 민간에서 쌓은 인기는 키타산에게 거물급 인사들도 함부로 대하지 못할 권위를 실어주었다.`,
      );
      await era.printAndWait(
        `하지만 그런 공적인 일 외에도, 키타산은 아이들과 즐겁게 뛰어노는 시간을 가장 좋아했다.`,
      );
      await era.printAndWait(
        `키타산은 워낙 뛰어난 우마무스메였기에, 느린 아이도 빠른 아이도 모두 즐거워했고 선생님들도 덕분에 잠시 숨을 돌릴 수 있었다.`,
      );
      await kita.say_and_wait(
        `후아아! 헤헤~ 정말 사랑스러운 아이들이네요, 트레이너 선생님.`,
      );
      await era.printAndWait(
        `수건으로 이마의 땀을 닦으며, ${kita.name}은 싱글벙글 웃으며 아이들을 데리고 다가왔다.`,
      );
      await era.printAndWait(
        `외부인을 봐서 신이 났는지 아이들이 저마다 한마디씩 떠들기 시작했다.`,
      );
      await era.printAndWait(
        `꼬마 우마무스메 B 「저기 저기! 트레이너 선생님랑 키타산 ${
          kita.sex_code - 1 ? '언니' : '오빠'
        }는 사귀는 사이에요?」`,
      );
      await era.printAndWait(`어떤 아이가 이런 말을 꺼내기 전까지는 분위기가 참 좋았는데……`);
      await kita.say_and_wait(`엣!? 그게, 저기…… 엣, 사귀냐고요?`);
      await kita.say_and_wait(`그게, 아하하…… 뭐라고 해야 할까…… 제 입으로 말하기는 좀 쑥스럽네요……`);
      await kita.say_and_wait(
        `하지만 저랑 트레이너 선생님은 매일매일 함께 있으니까, 그런 셈이라고 할까요?`,
      );
      await era.printAndWait(
        `아이들의 머리를 부드럽게 쓰다듬으며, ${kita.name}은 조금 멋쩍은 듯 미소를 지었다.`,
      );
      await era.printAndWait(
        `대답하기 곤란한 질문은 피해야지…… ${me.name}은(는) 아이들의 관심을 돌리기 위해 키타산의 훈련 시절 에피소드를 들려주기 시작했다.`,
      );
    }
  }
  wait_flag && (await era.waitAnyKey());
};