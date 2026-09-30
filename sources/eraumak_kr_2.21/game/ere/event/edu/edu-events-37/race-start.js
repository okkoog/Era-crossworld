const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const { race_enum } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} flash
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {RaceStartParams} extra_flag
 * @param {function} super_race_start
 */
module.exports = async function (
  flash,
  me,
  callname,
  hook,
  extra_flag,
  super_race_start,
) {
  const edu_weeks = era.get('cflag:37:육성턴수합산'),
    your_name = me.name;
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('모든 일의 시작 · 1', flash);
    await era.printAndWait('드디어 에이신 플래시가 데뷔할 때가 왔다.');
    await flash.say_and_wait('후우…… 레이스 시작까지 앞으로 15분 남았네요.');
    await era.printAndWait(
      `대기실 안, ${your_name}은(는) 에이신 플래시가 레이스를 위해 마지막 준비를 하는 모습을 지켜보았다.`,
    );
    era.printButton('「긴장돼?」', 1);
    await era.input();
    await flash.say_and_wait('네.');
    await era.printAndWait(`${your_name}의 예상과는 조금 다르게, 에이신 플래시는 고개를 끄덕였다.`);
    await flash.say_and_wait('긴장되는 감정은 분명 피할 수 없는 것이니까요.');
    await flash.say_and_wait(
      '앞으로 마주할 레이스는 트윙클 시리즈라는 길에 발을 들일 수 있을지를 결정하는 데뷔전, 그야말로 모든 일의 시작이니까요.',
    );
    await flash.say_and_wait(
      '아무리 마음을 억누르려 해도, 분명 조금은 동요가 생기기 마련이겠죠?',
    );
    era.printButton('「자연스러운 현상이야.」', 1);
    await era.input();
    await flash.say_and_wait(
      '맞아요. 그러니 긴장이 앞으로 일어날 일에 영향을 주지는 않을 거예요. 하물며……',
    );
    await era.printAndWait(
      `그렇게 말하며, ${your_name}은(는) 에이신 플래시의 얼굴에 옅은 미소가 번지는 것을 보았다.`,
    );
    await flash.say_and_wait('모든 것이 계획대로 진행되고 있잖아요, 그렇죠?');
    era.printButton('「!」', 1);
    await era.input();
    await flash.say_and_wait(
      `달리기 위해 해온 트레이닝도, 레이스를 위해 공부한 전략도. 저와 ${callname}은 담당 계약을 맺은 그 순간부터 오늘까지 정말 많은 일을 함께해 왔습니다.`,
    );
    await flash.say_and_wait(
      '그런 관점에서 보면 데뷔전도 그저 우리 성과를 확인하는 하나의 테스트일 뿐이에요.',
    );
    era.printButton('「그렇구나.」', 1);
    await era.input();
    await era.printAndWait(
      `자신만만한 표정의 에이신 플래시를 보며, ${your_name}은(는) ${flash.sex}의 어깨를 두드리며 격려의 눈빛을 보냈다.`,
    );
    era.printButton('「그럼 네 성적을 경기장의 모든 이에게 보여주자고.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await era.printAndWait(
      `에이신 플래시는 힘차게 고개를 끄덕였고, 고양된 투지가 ${flash.sex}의 몸에서 뿜어져 나왔다.`,
    );
    await flash.say_and_wait('레이스 시작까지 10분, 그럼 다녀올게요.');
  } else if (extra_flag.race === race_enum.keis_hai) {
    await print_event_name('뜻밖의 기쁨', flash);
    await era.printAndWait(
      '케이세이배. 클래식 3관 중 하나인 사츠키상의 전초전으로, 사츠키상과 같은 코스, 같은 거리에서 열린다.',
    );
    await era.printAndWait(
      '그렇기에 에이신 플래시는 계획 수립 단계부터 이곳을 왕도에 오르기 위한 사전 연습 무대로 삼았고, 이는 매우 적절한 판단이었다.',
    );
    await say_by_passer_by_and_wait(
      '행인A',
      '그러고 보니 오늘 레이스, 너는 어떤 우마무스메가 유망해 보여?',
    );
    await say_by_passer_by_and_wait(
      '행인B',
      `에? 그걸 말이라고 해? 역시 에이신 플래시가 아닐까.`,
    );
    await era.printAndWait(
      `${your_name}과(와) ${flash.sex} 모두 예상치 못했던 일이지만, 정식으로 레이스에 참여하기도 전에 뜻밖의 기쁨을 맛보게 되었다.`,
    );
    await say_by_passer_by_and_wait(
      '행인A',
      '그렇네, 확실히 지난번 보여준 활약도 대단했으니까.',
    );
    await say_by_passer_by_and_wait(
      '행인B',
      `게다가 대진표를 봐도 ${flash.sex}를 응원할 수밖에 없잖아?`,
    );
    await say_by_passer_by_and_wait(
      '행인A',
      `다른 아이들에게는 좀 미안한 말이지만…… 뭐, 어쨌든 이따가 같이 ${flash.sex}를 응원하자고.`,
    );
    await say_by_passer_by_and_wait('행인B', '응응, 힘내라! 에이신 플래시!!');
    era.drawLine({ content: '레이스 당일, 대기실' });
    await flash.say_and_wait('……설마 제가 인기 1위일 줄은 몰랐네요.');
    await era.printAndWait(
      `오늘자 신문의 레이스 예측을 보며, ${your_name}은(는) 에이신 플래시의 미간이 살짝 찌푸려진 것을 발견했다.`,
    );
    era.printButton('「기쁘지 않아?」', 1);
    await era.input();
    await flash.say_and_wait(
      '아뇨, 기쁘지 않다기보다는 정확히 말해 기분이 조금 묘하네요.',
    );
    await flash.say_and_wait(
      '제가 인기 1위가 된 건, 다른 참가자들이 그다지 신뢰받지 못하고 있다는 점이 크니까요……',
    );
    era.printButton('「하지만 반대로 말하면, 그만큼 사람들이 너에게 기대를 걸고 있다는 증거 아닐까?」', 1);
    await era.input();
    await flash.say_and_wait('………');
    await era.printAndWait(
      `${your_name}의 말에 에이신 플래시는 몇 초간 침묵했다. 그리고 이내 천천히 고개를 끄덕였다.`,
    );
    await flash.say_and_wait(
      '선생님 말씀이 맞아요. 스스로의 능력이 뛰어나지 않다면 타인의 시선을 끌 수도 없었겠죠.',
    );
    await flash.say_and_wait(
      '그러니 이 기대가 실망으로 바뀌지 않도록, 전력을 다해 보답해야겠어요.',
    );
    await era.printAndWait(
      `말을 마친 에이신 플래시의 얼굴에 진지한 표정이 서렸다. ${your_name}은(는) ${flash.sex}가 팬들의 기대를 매우 소중히 여기고 있음을 알 수 있었다.`,
    );
    await flash.say_and_wait('……그뿐만 아니라, 저 자신에게도 보답해야 해요.');
    await flash.say_and_wait(
      '케이세이배와 사츠키상은 코스와 거리가 같습니다. 즉, 이 레이스에서조차 만족스럽지 못한 결과를 낸다면 앞으로의 길은 더욱 험난해지겠죠.',
    );
    era.printButton('「할 일을 다하고, 스스로에게 부끄럽지 않게.」', 1);
    await era.input();
    await flash.say_and_wait('네! 선생님 말씀이 옳아요.');
    await flash.say_and_wait(
      '제가 할 수 있는 모든 것을 최선으로 해낸다면, 합당한 결과는 자연스럽게 제 손에 들어오겠죠.',
    );
    await flash.say_and_wait(`후우…… 좋아요! 다녀올게요, ${callname}.`);
    era.printButton('「파이팅!」', 1);
    await era.input();
    await era.printAndWait('말을 마친 에이신 플래시는 자신감 넘치는 모습으로 경기장으로 향했다.');
    await era.printAndWait(
      `${your_name}은(는) 떠나가는 ${flash.sex}의 뒷모습을 보며, 적어도 이번 레이스에서 ${flash.sex}의 활약은 매우 대단할 것이라 확신했다.`,
    );
  } else if (extra_flag.race === race_enum.sats_sho) {
    await print_event_name('해야할 일 · 1', flash);
    await era.printAndWait('클래식 3관의 첫 번째 관문인 사츠키상이 드디어 다가왔다.');
    await say_by_passer_by_and_wait(
      '행인A',
      '이번 레이스, 누구 응원할 거야?',
    );
    await say_by_passer_by_and_wait(
      `행인B`,
      `음, 원래는 에이신 플래시를 응원하려고 했어. 케이세이배 때 ${flash.sex}의 활약이 정말 눈부셨거든.`,
    );
    await say_by_passer_by_and_wait(
      `행인A`,
      `에이신 플래시라, 하지만 듣기로는 ${flash.sex}가 며칠 전에 꽤 심한 병치레를 했다던데. 회복은 했다지만 이런 상태로 출주해서 제대로 달릴 수 있을까?`,
    );
    await say_by_passer_by_and_wait(
      '행인B',
      '맞아, 바로 그 점이 걱정이야. 사츠키상은 G1급 중상 레이스라 압박감도 상대의 수준도 지난번 케이세이배와는 비교도 안 되잖아.',
    );
    await say_by_passer_by_and_wait(
      `행인A`,
      `응, 사츠키상의 경쟁은 너무 치열해서 가장 빠른 ${flash.get_uma_sex_title()}만이 승리할 수 있다고 하니까.`,
    );
    await say_by_passer_by_and_wait(
      '행인B',
      '그래. 게다가 병의 영향도 있을 텐데, 지금의 에이신 플래시가 정말 자기 실력을 다 발휘할 수 있을지 의문이야.',
    );
    era.drawLine();
    if (
      check_aim_and_get_entry(
        era.get('cflag:37:육성성적'),
        race_enum.keis_hai,
        1,
        1,
      )
    ) {
      await era.printAndWait(
        `사회자 「다음 입장을 환영해주십시오! 바로 올해 케이세이배의 우승자, 이번 레이스 인기 3위— 에이신 플래시!!」`,
      );
    } else {
      await era.printAndWait(
        `사회자 「다음 입장을 환영해주십시오! 올해 케이세이배에서 눈부신 활약을 보여준, 이번 레이스 인기 3위— 에이신 플래시!!」`,
      );
    }
    await flash.say_and_wait('………');
    await flash.say_and_wait('후우……');
    era.printButton('「플래시?」', 1);
    await era.input();
    await era.printAndWait('사츠키상 당일, 대기실.');
    await era.printAndWait(
      `${your_name}은(는) 안내 방송에도 반응하지 않고 고개를 숙인 채 생각에 잠겨 있는 에이신 플래시를 의아한 듯 불렀다.`,
    );
    await flash.say_and_wait('아. 걱정 마세요, 괜찮아요.');
    await era.printAndWait('에이신 플래시는 자리에서 일어나 고개를 저었다.');
    await flash.say_and_wait(
      '그저 조금 감회가 새로워서요. 케이세이배에서 나름 잘 달렸다고 생각했는데, 사츠키상 인기는 그때의 활약이 전혀 반영되지 않은 느낌이라.',
    );
    era.printButton('「며칠 전 앓았던 병의 영향 때문이겠지.」', 1);
    await era.input();
    await era.printAndWait(
      `이런 반응이 나오는 이유를 ${your_name}은(는) 이미 잘 알고 있었다.`,
    );
    await era.printAndWait(
      '지난주, 에이신 플래시는 비를 맞고 감기에 걸려 심한 고열에 시달렸다.',
    );
    await era.printAndWait(
      `며칠간의 휴식 끝에 ${flash.sex}의 몸 상태는 순조롭게 회복되었고 간신히 출주할 수 있게 되었지만.`,
    );
    await era.printAndWait(
      '그럼에도 불구하고 병마가 남긴 미세한 허약함은 여전히 몸에 남아 있는 듯했다.',
    );
    await era.printAndWait(
      '이런 상황에서 에이신 플래시의 사츠키상 활약을 기대하는 사람이 줄어든 것은 합리적인 현상이었다.',
    );
    era.printButton('「어쨌든, 네 페이스를 유지하면 돼.」', 1);
    await era.input();
    await era.printAndWait(`눈앞의 소녀가 동요할까 걱정된 ${your_name}은(는) 위로를 건넼다.`);
    await flash.say_and_wait('……네, 클래식 3관 도전은 제가 반드시 수행해야 할 계획입니다.');
    await era.printAndWait(
      `${your_name}의 말에 에이신 플래시는 잠시 침묵했다. 이윽고 ${your_name}은(는) ${flash.sex}가 천천히 주먹을 꽉 쥐는 것을 보았다.`,
    );
    await flash.say_and_wait('타인의 지지가 있든 없든, 전 끝까지 밀고 나갈 거예요.');
    era.printButton('「……해야 할 일을 하고, 할 수 있는 힘을 다해.」', 1);
    await era.input();
    await era.printAndWait(
      `레이스에 과도하게 몰입하는 에이신 플래시의 태도에 ${your_name}은(는) 살짝 미간을 찌푸렸지만, 지금의 ${flash.sex}에게 이것이 나쁜 것만은 아니었다.`,
    );
    await flash.say_and_wait(`네! 그럼 준비하고 다녀올게요, ${callname}.`);
    era.printButton('「조심해서 다녀와.」', 1);
    await era.input();
    await era.printAndWait(
      `그래서 ${your_name}은(는) 그저 ${flash.sex}에게 가볍게 손을 흔들어주며 무사히 돌아오길 빌어주었다.`,
    );
  } else if (extra_flag.race === race_enum.toky_yus) {
    await print_event_name('해야할 일 · 3', flash);
    await era.printAndWait(
      '클래식 3관의 두 번째 레이스— 일본 더비가 드디어 오늘 막을 올렸다.',
    );
    await flash.say_and_wait('그럼, 다녀오겠……');
    await era.printAndWait('「띠링.」');
    await flash.say_and_wait('어라.');
    await era.printAndWait(
      '대기실 안, 레이스 전 마지막 준비를 마치고 경기장으로 향하려던 에이신 플래시가 갑작스러운 핸드폰 알림음에 시선을 빼앗겼다.',
    );
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await flash.say_and_wait('아, 별거 아니에요.');
    await era.printAndWait(
      `주머니에서 핸드폰을 꺼내 화면을 몇 초간 응시하던 ${flash.sex}의 얼굴에 기쁜 미소가 떠올랐다.`,
    );
    await flash.say_and_wait('어머니께서 보내신 메시지예요.');
    await flash.say_and_wait(
      `『내 ${
        flash.sex_code - 1 ? '딸' : '아들'
      }이 일본 더비에 출주하게 될 줄은 정말 꿈에도 몰랐구나.』`,
    );
    await flash.say_and_wait(
      '『부디 네가 만족할 수 있는 결과를 남기길 바란다. 아빠랑 여기서 응원하고 있을게.』',
    );
    era.printButton('「부모님의 축복이네.」', 1);
    await era.input();
    await flash.say_and_wait('기대해주시고 계시네요.');
    await era.printAndWait('말을 마친 에이신 플래시는 핸드폰을 집어넣었다.');
    await flash.say_and_wait('………');
    await era.printAndWait(
      `머나먼 타국에서 전해진 부모님의 마음을 받은 ${flash.sex}에게서 묘한 변화가 느껴졌다.`,
    );
    await flash.say_and_wait('단순히 이기는 것보다 더 중요한 감정을 찾는 것…… 인가요?');
    era.printButton('「……플래시?」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 작은 혼잣말을 들었다. ${your_name}이(가) 무슨 고민이 있냐고 물어보려던 찰나.`,
    );
    await flash.say_and_wait('후우……');
    await flash.say_and_wait(`${callname}!`);
    era.printButton('「응.」', 1);
    await era.input();
    await era.printAndWait(`마주친 것은 ${flash.sex}의 확신에 찬 눈빛이었다.`);
    await flash.say_and_wait('제가 이 레이스를 이길 수 있을까요?');
    era.printButton('「난 항상 그렇게 믿고 있어.」', 1);
    await era.input();
    await flash.say_and_wait('좋아요!');
    await era.printAndWait(
      `${your_name}의 말에 에이신 플래시는 고개를 끄덕였고, 자신감 넘치는 미소가 ${flash.sex}의 얼굴에 번졌다.`,
    );
    await flash.say_and_wait('그럼, 다녀올게요.');
  } else if (extra_flag.race === race_enum.kiku_sho) {
    await print_event_name('국화상을 향해', flash);
    await flash.say_and_wait('클래식 3관의 마지막 레이스— 국화상.');
    await flash.say_and_wait('한때 목표에서 제외하기도 했었지만, 결국 출주하게 되었네요.');
    era.printButton('「몸이 예상보다 빨리 회복되어서 정말 다행이야.」', 1);
    await era.input();
    await flash.say_and_wait('네.');
    await flash.say_and_wait('하지만 지금은 새로운 목표를 향해 노력하고 있으니까요.');
    await flash.say_and_wait(
      '더 이상 클래식 3관에 집착할 필요는 없어요. 국화상도 다른 레이스와 다를 바 없죠.',
    );
    await flash.say_and_wait('그러니 제가 할 일도 평소와 같습니다.');
    await flash.say_and_wait('모든 것을 완벽하게 해내고, 자연스럽게 따라올 결과를 받아들이는 것뿐이에요.');
  } else if (extra_flag.race === race_enum.japa_cup && edu_weeks < 96) {
    await print_event_name('도전의 길 · 1', flash);
    await era.printAndWait(
      '재팬 컵. 트윙클 시리즈 최고 영예를 상징하는 레이스 중 하나답게 쟁쟁한 실력자들이 대거 모였다.',
    );
    await say_by_passer_by_and_wait(
      `관객A`,
      '이번 재팬 컵 대진표 봤어?',
    );
    await say_by_passer_by_and_wait('관객B', '응응, 정말 예상 밖인걸.');
    await say_by_passer_by_and_wait(
      `관객A`,
      `젠노 롭 로이, 스페셜 위크…… 한동안 보이지 않던 ${flash.get_uma_sex_title()}들인데, 이번 레이스에서 다시 ${
        flash.sex
      }들의 활약을 보게 될 줄이야.`,
    );
    await say_by_passer_by_and_wait(
      `관객B`,
      `그뿐만이 아니야. 놀라운 건 ${flash.sex}들 모두 이전에 재팬 컵을 우승했던 경험이 있다는 거지.`,
    );
    await say_by_passer_by_and_wait(
      '관객B',
      '이런 우연이라니, 마치 미리 약속이라도 한 것 같아.',
    );
    await say_by_passer_by_and_wait(
      '관객A',
      '하지만 그렇게 되면 경험 차이가 너무 크잖아. 클래식급에게는 정말 가혹한 시련이겠어.',
    );
    era.drawLine();
    await flash.say_and_wait('재팬 컵이 곧 시작되겠네요.');
    await era.printAndWait('레이스 전, 대기실.');
    await era.printAndWait('에이신 플래시는 심호흡을 하며 컨디션을 최상으로 끌어올렸다.');
    await flash.say_and_wait(
      '예상대로 참가자 명단에 노련한 선배님들이 많이 보이네요.',
    );
    era.printButton('「긴장돼?」', 1);
    await era.input();
    await flash.say_and_wait('네, 아무래도 전 『도전자』니까요.');
    await era.printAndWait(
      `${flash.sex}는 고개를 끄덕였지만, ${your_name}은(는) ${flash.sex}의 눈빛에서 은근한 기대를 읽어냈다.`,
    );
    await flash.say_and_wait(
      '지난번 미스터 시비 양과의 병주에서 정말 많은 것을 배웠고 큰 도움이 되었어요. 그러니 이번 재팬 컵도 마찬가지일 거예요. 결과가 어떻든 레이스 도중에 분명 깨닫는 것이 있겠죠.',
    );
    await era.printAndWait(
      `의욕 넘치게 말하는 에이신 플래시의 얼굴에 자신감 있는 미소가 떠올랐다.`,
    );
    await flash.say_and_wait(
      '뭐, 그렇다고 해서 승리를 쉽게 양보할 생각은 전혀 없지만요.',
    );
    await flash.say_and_wait('그동안 잘 쉰 덕분에 몸은 완전히 회복되었으니까요.');
    era.printButton('「드디어 아무 걱정 없이 달릴 수 있겠네.」', 1);
    await era.input();
    await flash.say_and_wait(`네! 그럼 다녀올게요, ${callname}.`);
    era.printButton('「파이팅!」', 1);
    await era.input();
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
    await print_event_name('도전의 길 · 3', flash);
    await era.printAndWait(
      '아리마 기념. 한 해를 마무리하는 큰 축제로서, 세간에는 『1년에 단 한 레이스를 본다면 그것은 아리마 기념이다』라는 말이 돌 정도다.',
    );
    await era.printAndWait(
      `팬 투표로 출주자가 결정되는 규칙 덕분에, 올해 눈부신 활약을 펼친 ${flash.get_uma_sex_title()}만이 이 무대에 설 자격을 얻는다.`,
    );
    await era.printAndWait(
      '그리고 일본 더비 우승자인 에이신 플래시가 그 명단에 포함된 것은 당연한 일이었다.',
    );
    await say_by_passer_by_and_wait(`관객A`, `어이, 이거 봤어?`);
    await say_by_passer_by_and_wait(
      '관객B',
      '말도 안 돼. 스페셜 위크랑 젠노 롭 로이가 다시 나오는 것만으로도 대단한 일이라고 생각했는데.',
    );
    await say_by_passer_by_and_wait(
      '관객A',
      '참가자 중에 에어 그루브랑 후지 키세키까지 있어!',
    );
    await say_by_passer_by_and_wait(
      '관객B',
      '아무리 아리마 기념이라지만 진용이 너무 화려한 거 아냐……?',
    );
    await say_by_passer_by_and_wait(
      `관객A`,
      `지금도 그렇고 지난번 재팬 컵도 그렇고. 유명한 ${flash.get_uma_sex_title()}들이 연달아 복귀하다니.`,
    );
    await say_by_passer_by_and_wait(
      '관객A',
      '마치 앞으로 엄청난 일이 벌어질 것만 같은 기분이라 정말 기대돼.',
    );
    await say_by_passer_by_and_wait(
      '관객B',
      '하지만 그게 클래식급 아이들에게 정말 좋은 일일까?',
    );
    era.drawLine();
    await flash.say_and_wait('정말…… 놀랍네요.');
    await era.printAndWait(
      '레이스 전, 대기실. 에이신 플래시는 이번 레이스 대진표를 보며 미간을 살짝 찌푸렸다.',
    );
    await flash.say_and_wait(
      '스페셜 위크 양과 젠노 롭 로이 양만으로도 충분히 강력한 적이라고 생각했는데.',
    );
    await flash.say_and_wait('에어 그루브 양과 후지 키세키 양까지 참여할 줄은 몰랐어요.');
    era.printButton('「레이스가 매우 험난할 것으로 예상되네.」', 1);
    await era.input();
    await flash.say_and_wait(
      '그렇네요. 하지만 애초에 도전하는 마음으로 참가한 거니까요. 강한 상대를 많이 만날수록 제가 얻는 수확도 그만큼 커질 거예요.',
    );
    await flash.say_and_wait('하물며……');
    await era.printAndWait('에이신 플래시는 주먹을 꽉 쥐며 두려움 없는 눈빛을 보였다.');
    await flash.say_and_wait(
      '이미 수많은 장애물을 함께 뛰어넘어 온 우리의 실력도 결코 얕볼 수준은 아니니까요.',
    );
    era.printButton(`「그들에게 네 힘을 똑똑히 보여주자.」`, 1);
    await era.input();
    await flash.say_and_wait('네!');
    await flash.say_and_wait('정점에 도달할 때까지, 계속해서 달려나가겠어요.');
    era.println();
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name('도전의 길 · 5', flash);
    await era.printAndWait('봄 시니어 3관의 첫 번째 관문— 오사카배가 곧 시작된다.');
    await flash.say_and_wait(
      '그럼 레이스 시작 전에 주의해야 할 상대를 다시 한번 확인해 볼까요.',
    );
    await era.printAndWait('레이스 전, 대기실.');
    await era.printAndWait('에이신 플래시는 출주 명단을 꺼내 들었다.');
    await flash.say_and_wait(
      `우선 후지 키세키 양입니다. 오사카배가 ${flash.sex}가 가장 잘하는 거리는 아니지만, 뛰어난 실력을 갖춘 만큼 분명히 전황을 뒤흔들 수 있는 존재예요.`,
    );
    await flash.say_and_wait(
      `다음은 맨하탄 카페 양입니다. 레이스 전 인터뷰에서 한 달 뒤에 있을 봄 텐노상에 운명적인 예감을 느낀다고 하더군요. 오사카배가 그 레이스의 전초전인 만큼, ${flash.sex} 역시 여기서 상당히 무서운 실력을 보여줄 겁니다.`,
    );
    era.printButton('「세 번째는 에이신 플래시……」', 1);
    await era.input();
    await flash.say_and_wait('어라.');
    await flash.say_and_wait('후후후.');
    await era.printAndWait(`${your_name}의 갑작스러운 농담 섞인 말에 에이신 플래시는 즐겁게 웃었다.`);
    await flash.say_and_wait(
      '설마 정말 그럴지도 모르겠네요. 작년에 비하면 저도 꽤 성장했으니까요.',
    );
    await flash.say_and_wait(
      '강적과 대결하고, 지식을 깨닫고, 경험을 쌓는다. 그리고 다음 레이스에서 그 모든 것을 쏟아부어 달림으로써 진보를 이뤄낸다.',
    );
    await flash.say_and_wait(
      '지금껏 겪어온 모든 도전이 그래왔듯, 오늘 오사카배도 예외는 아닐 거예요.',
    );
    era.printButton('「높은 벽이란 네가 더 높이 오르기 위한 계단일 뿐이야.」', 1);
    await era.input();
    await flash.say_and_wait('네.');
    await era.printAndWait('에이신 플래시는 고개를 끄덕였다.');
    await flash.say_and_wait('당당하게 장애물을 넘어서고, 결국 꿈을 이루어 돌아오겠어요……');
    await flash.say_and_wait(`다녀올게요! ${callname}.`);
    era.println();
  } else if (extra_flag.race === race_enum.tenn_spr && edu_weeks > 95) {
    await print_event_name('도전의 길 · 6', flash);
    await era.printAndWait('봄 시니어 3관의 두 번째 관문— 봄 텐노상.');
    await era.printAndWait(
      '장거리 G1 레이스로서 3200m라는 엄청난 길이를 자랑하며, 에이신 플래시가 이전에 뛰었던 아리마 기념보다 무려 700m나 더 길다.',
    );
    await era.printAndWait(`의심할 여지 없이 ${flash.sex}의 지구력을 시험하는 거대한 시련이다.`);
    await flash.say_and_wait('정말 강하네요, 맨하탄 카페 양은.');
    await era.printAndWait('레이스 전, 대기실.');
    await era.printAndWait('에이신 플래시의 목소리가 드물게 무거워졌다.');
    era.printButton(`「${flash.sex}가 가장 잘하는 분야니까.」`, 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 당연히 ${flash.sex}가 무엇을 걱정하는지 알고 있었다.`,
    );
    await era.printAndWait(
      '장거리 경험이 부족한 에이신 플래시와 달리, 맨하탄 카페는 장거리에서 명성을 떨친 우마무스메이기 때문이다.',
    );
    await era.printAndWait(
      `국화상, 아리마 기념, 봄 텐노상까지 모두 ${flash.sex}가 이전에 쟁취한 영광들이다.`,
    );
    await era.printAndWait(
      '즉 이번 봄 텐노상은 자신의 약점으로 상대의 강점을 공략해야 하는 셈이다.',
    );
    await era.printAndWait('이런 상황에서 레이스의 위험함을 느끼는 것은 지극히 당연한 일이었다.');
    await flash.say_and_wait('그렇다고 해서 포기할 이유는 되지 못하죠.');
    await era.printAndWait(
      `에이신 플래시는 고개를 저었다. 어떤 상황이 닥치더라도 ${flash.sex}는 결코 물러서지 않는다.`,
    );
    era.printButton('「그러고 보니.」', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 문득 한 가지 일이 떠올랐다.`);
    era.printButton('「어떤 기자가 이번 레이스가 끝나면 널 인터뷰하고 싶다고 하더라고.」', 1);
    await era.input();
    await flash.say_and_wait('어라, 인터뷰요?');
    era.printButton('「가제는 『최강의 세대에서 피어난 눈부신 섬광』이었던 것 같아.」', 1);
    await era.input();
    await era.printAndWait(
      '작년 재팬 컵부터 지난 오사카배까지 쟁쟁한 선배들을 상대로 보여준 에이신 플래시의 활약은 대단했기에, 이번 레이스 결과를 미리 점치며 화제성을 선점하려는 기자의 의도는 충분히 이해할 만했다.',
    );
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}에게 그 제목의 의미를 상세히 설명해주었다.`,
    );
    await flash.say_and_wait('눈부신 섬광이라……');
    await era.printAndWait(
      `${your_name}의 말을 들은 에이신 플래시는 깊이 생각하듯 고개를 끄덕였다.`,
    );
    await flash.say_and_wait('정말 간결하고 명확한 요약이네요.');
    await era.printAndWait(`${flash.sex}가 가볍게 웃었다.`);
    await flash.say_and_wait('하지만……');
    await era.printAndWait(
      `순식간에 ${your_name}은(는) ${flash.sex}의 표정이 엄숙하게 변하는 것을 보았다.`,
    );
    await flash.say_and_wait('저는 금방 사라지는 섬광과는 다릅니다.');
    await flash.say_and_wait('마지막 순간까지, 누구보다 찬란하게 계속해서 달려나가겠어요.');
  } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks > 95) {
    await print_event_name('찬란한 가을 · 1', flash);
    await era.printAndWait('만중의 기대를 한 몸에 받는 가을 텐노상이 드디어 시작되었다.');
    await era.printAndWait('관객：「오오오오——!!」');
    await say_by_passer_by_and_wait(
      '플래시의 어머니',
      '어머나, 이것이 일본의 G1 레이스인가요. 정말 열정적이네요.',
    );
    await say_by_passer_by_and_wait(
      `플래시의 아버지`,
      `가을 텐노상, 역사가 깊은 레이스 같군. 그리고 우리 Schatzi, ${flash.sex}는……`,
    );
    await say_by_passer_by_and_wait(
      `에이신 플래시의 어머니`,
      `${flash.sex}를 믿으세요. 힘내렴, 플래시!`,
    );
    era.drawLine();
    await flash.say_and_wait('부모님께서 무사히 경기장에 도착하신 것 같네요.');
    await era.printAndWait(
      `레이스 전 대기실, 에이신 플래시는 무사히 도착했다는 부모님의 메시지를 확인하며 안심한 듯 미소 지었다.`,
    );
    await flash.say_and_wait(
      '이걸로 모든 것이 계획대로 진행되고 있어요. 제 컨디션도 아주 좋으니, 남은 건……',
    );
    era.printButton('「플래시의 이름을 걸고, 이 레이스를 승리하자.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await era.printAndWait('에이신 플래시는 힘차게 고개를 끄덕이며 자신감 넘치는 표정을 지었다.');
    await flash.say_and_wait(
      '지난날 겪은 모든 일은 오늘 이 레이스의 결과를 위한 밑거름이었어요.',
    );
    await flash.say_and_wait('그러니 오늘만큼은.');
    await flash.say_and_wait('반드시 이겨야만 해요!');
    era.printButton('「모든 이에게 네 신념을 증명해 보여!」', 1);
    await era.input();
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks > 95) {
    await print_event_name('미래의 일 · 4', flash);
    await era.printAndWait(
      '트윙클 시리즈 매년 최고의 열기를 자랑하는 행사, 아리마 기념이 오늘 개최된다.',
    );
    await flash.say_and_wait('후우…… 레이스가 곧 시작되겠네요.');
    await era.printAndWait(
      `레이스 전 대기실. 에이신 플래시는 시간을 확인한 뒤 자리에서 일어나 ${your_name}에게 인사를 건넸다.`,
    );
    await flash.say_and_wait(
      '후후. 그러고 보니 처음이네요. 자신의 꿈을 전제로 하지 않고 레이스에 참가하는 건.',
    );
    await era.printAndWait(
      `그러더니 이내 ${flash.sex}는 장난스럽게 미소를 지어 보였다.`,
    );
    era.printButton('「한 달간의 휴가는 어땠어?」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 어깨를 두드리며 다정하게 물었다.`,
    );
    await era.printAndWait(
      '꿈을 이룬 뒤여서일까, 레이스에 대한 집착이 조금은 옅어진 듯했다. 에이신 플래시는 원래 예정했던 재팬 컵에 나가는 대신, 한 달간의 여유 시간을 이용해 멀리서 오신 부모님과 일본 곳곳을 여행하며 즐겁게 보냈다.',
    );
    await flash.say_and_wait('네, 몸과 마음이 완전히 재충전된 느낌이에요.');
    await era.printAndWait('에이신 플래시는 고개를 끄덕이며 시선을 멀리 옮겼다.');
    await flash.say_and_wait(
      '아마 지금 부모님께서도 집에서 이 아리마 기념의 결과를 지켜보고 계시겠죠.',
    );
    era.printButton('「부모님이 보시는 앞에서 다시 한번 승리를 거머쥐자고.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await era.printAndWait(`${flash.sex}는 자신 있게 대답하고는 문밖으로 향했다.`);
    await flash.say_and_wait(`그러고 보니, ${callname}.`);
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await era.printAndWait(
      `하지만 완전히 떠나기 전, ${flash.sex}는 ${your_name}에게 아직 할 말이 남은 듯했다.`,
    );
    await flash.say_and_wait(
      '다시 한번 말씀해 주시겠어요? 작년 사츠키상 전, 대기실에서 제게 해주셨던 그 말을요.',
    );
    era.printButton('「사츠키상 때 한 말?」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 눈을 깜빡이다가 이내 에이신 플래시가 무엇을 말하는지 알아차렸다.`,
    );
    await era.printAndWait(
      `${your_name}이(가) ${flash.sex}에게 해준 말은 무수히 많았지만, 격려든 이정표든 지금 이 순간 가장 어울리는 말은 오직 이것뿐이었다.`,
    );
    era.printButton('「해야 할 일을 하고……」', 1);
    await era.input();
    await flash.say_and_wait('할 수 있는 힘을 다해라.');
    await flash.say_and_wait('후후후.');
    era.printButton('「하하.」', 1);
    await era.input();
    await era.printAndWait(`문장 이어 말하기에 성공하자, ${your_name}와 플래시는 동시에 웃음을 터뜨렸다.`);
    await flash.say_and_wait('그럼, 다녀오겠습니다.');
    await era.printAndWait(
      `그렇게 유쾌한 분위기 속에서 ${flash.sex}는 힘차게 발걸음을 내디뎌 경기장으로 향했다.`,
    );
    era.printButton('「파이팅!」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 떠나가는 ${flash.sex}의 뒷모습을 보며 힘차게 손을 흔들었다.`,
    );
    await era.printAndWait('참으로 아름다운 광경이었다.');
    await era.printAndWait(
      `약속한 대로, ${your_name}은(는) 서로를 지켜보는 이 관계가 앞으로도 오랫동안 계속될 것임을 믿어 의심치 않았다.`,
    );
  } else {
    return await super_race_start.call(
      this,
      flash,
      me,
      callname,
      hook,
      extra_flag,
    );
  }
};