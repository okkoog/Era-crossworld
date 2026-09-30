const era = require('#/era-electron');

const {
  common_talk_with_in_urara,
  common_talk_with_in_urara_end,
  common_talk_with_urara_48,
} = require('#/event/edu/edu-events-52/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const crazy_fans = require('#/data/event/crazy-fans');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function common1(urara, me, callname) {
  await era.input();

  await urara.say_and_wait(['좋아——! 응? ', callname, ', 저기 봐!']);

  era.printButton('「무슨 일이야?」', 1);
  await era.input();

  await urara.say_and_wait('상점가 사람들이 모두 와줬어!');
  await era.printAndWait([
    urara.get_colored_name(),
    '가 바라보는 방향을 따라가자, 평소 어린 ',
    urara.get_uma_sex_title(),
    '와 친분이 두터웠던 상점가 이웃들이 모두 모여 있는 것이 보였다.',
  ]);
}

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function common2(urara, me, callname) {
  await era.printAndWait([
    '모두가 한마음으로 보내는 축복에 허를 찔린 듯, ',
    me.get_colored_name(),
    '은(는) 당황한 기색으로 멍하니 제자리에 섰다.',
  ]);
  await era.printAndWait(
    '아니, 어쩌면 정말로 겁을 먹은 것일지도 모른다. 다시 생각해보면, 예전에 이토록 기대를 받아본 경험이 있었던가?',
  );
  await era.printAndWait([
    '그리고 곧바로 ',
    me.get_colored_name(),
    '의 어쩔 줄 몰라 하는 모습을 알아챈 ',
    urara.get_colored_name(),
    '가 웃으며 ',
    me.get_colored_name(),
    '의 손을 잡고는, ',
    me.get_colored_name(),
    '에게 기운을 불어넣어 주기 시작했다.',
  ]);
  await urara.say_and_wait([callname, '! 이 기회에 모두에게 한마디 해줘!']);
}

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    if (era.get('cflag:52:육성턴수합산') === 23) {
      if (extra_flag.rank === 1) {
        await print_event_name('첫 승리!', urara);
        await in_urara.say_as_unknown_and_wait([
          '비록 이제 막 데뷔했을 뿐이지만 정말 쉽지 않았네요. ',
          urara.get_colored_actual_name(),
          '라는 이름의 어린 ',
          urara.get_uma_sex_title(),
          '가, 당당히 1등을 차지했습니다——',
        ]);
        era.drawLine();
        await era.printAndWait([
          urara.get_colored_name(),
          '가 결승선을 통과하는 순간, ',
          me.get_colored_name(),
          '은(는) 몸의 피로도 잊은 채 벌떡 일어나 경기장 관중석 맨 앞줄로 달려나갔다.',
        ]);
        await era.printAndWait(
          '마음속의 짐이 내려가고, 근육통과 1착 확정 전의 긴장감도 담당이 다가옴에 따라 함께 씻겨 내려갔다.',
        );
        await era.printAndWait([
          '팽팽했던 정신이 이완되자, ',
          urara.get_colored_name(),
          '를 마구 쓰다듬어주고 싶다는 생각이 억눌려 있던 곳에서 해방되어 튀어나왔다.',
        ]);
        await era.printAndWait([
          '그렇게 남들의 시선은 아랑곳하지 않고, 축하의 말과 함께 ',
          me.get_colored_name(),
          '의 손은 ',
          urara.get_colored_name(),
          '의 부드러운 뺨과 귀를 향해 뻗어 나갔다.',
        ]);
        await era.printAndWait([
          '땀에 젖은 체육복에서는 ',
          urara.get_teen_sex_title(),
          '의 청초한 향기가 났지만, 처음 만났을 때와는 달리 오늘의 향기에는 승리의 꽃향기가 섞여 있었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 손길에 ',
          urara.get_colored_name(),
          '도 작은 동물처럼 조그만 손을 내밀어 살며시 ',
          me.get_colored_name(),
          '을(를) 붙잡았고, 땀방울이 맺힌 앳된 얼굴에는 수줍은 홍조가 감돌았다.',
        ]);
        await era.printAndWait([
          '할 수만 있다면 ',
          me.get_colored_name(),
          '은(는) 지금 당장 이 부드럽고 귀여운 아이를 품에 안고 만끽하고 싶었으나, 간신히 남아있던 이성이 ',
          me.get_colored_name(),
          '을(를) 제지했다.',
        ]);
        await me.say_and_wait(
          '역시 너무 무리한 건가? 그나저나, 왜 이렇게 머리가 어질어질하지……',
          true,
        );
        era.println();
        if (era.get('relation:52:0') > 150) {
          await urara.say_and_wait([
            '에헤헤~ ',
            callname,
            ', 일단 좀 놔봐! 간지러워!',
          ]);
          await era.printAndWait([
            '흥분한 나머지 멈출 줄 모르는 ',
            me.get_colored_name(),
            '의 양손을 부끄러워하며 떼어내고, ',
            urara.get_colored_name(),
            '는 꼬리를 세차게 흔들며 진심 어린 기쁨이 담긴 미소를 지어 보였다.',
          ]);
          await urara.say_and_wait([
            '나, 1등이야! 태어나서 처음으로 앞에 아무도 없는 채로 달렸어! 우승자 구역에 서 보는 것도 처음이야!',
          ]);
        } else {
          await urara.say_and_wait([callname, '! 이러지 마! 다들 보고 있단 말이야!']);
          await era.printAndWait([
            '부끄러운 듯 입술을 삐죽이며 제멋대로 쓰다듬던 ',
            me.get_colored_name(),
            '의 손을 툭 쳐서 떼어내자, ',
            urara.get_colored_name(),
            '의 수줍은 얼굴에 마침내 환한 미소가 피어올랐다.',
          ]);
          await urara.say_and_wait([
            '헤헤, 그래도 고마워 ',
            callname,
            '! 오늘의 나는 정말로 1등이라구~!',
          ]);
        }
        era.println();
        era.printButton('「1착의 기분은 어때? 눈앞의 경치, 아주 예뻤지?」', 1);
        await era.input();

        await urara.say_and_wait(
          '응! 상상했던 것보다 훨씬 더 즐거워! 앞으로도 1등을 더 많이 하고 싶어!',
        );
        await urara.say_and_wait(
          '앞으로 우리 더 많은 레이스에 나가는 거지? 나 더 열심히 할게!',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '의 승부욕이 점차 깨어나는 듯 보였다. 이대로 계속 나아간다면, 언젠가 질적인 변화를 맞이할 계기를 만날 수 있으리라.',
        ]);
        await era.printAndWait([
          '그렇게 된다면, 경기장 밖의 사람들뿐만 아니라 ',
          urara.sex,
          '가 타인과의 경쟁 속에서 스스로가 진정으로 추구하고 싶은 소망을 찾을 수 있을 것이다.',
        ]);
        await era.printAndWait([
          '어째서인지 마비된 듯한 관자놀이를 문지르며, ',
          me.get_colored_name(),
          '은(는) 트레이너로서의 사고를 계속해서 가동했다.',
        ]);
        await era.printAndWait(
          '앞으로 실력을 더 키우기 위해, 우선은 레이스 경험을 최대한 쌓는 것을 목표 중 하나로 삼는 것도 나쁘지 않을 것 같았다.',
        );

        era.printButton('「좋아! 그럼 이제부터 레이스가 많아질 텐데, 괜찮겠어?」', 1);
        await common1(urara, me, callname);
        await era.printAndWait(
          '상점가 사람 「우라라가 이쪽을 봤다! 여러분, 준비——!」',
        );
        await era.printAndWait('상점가 사람들 「우라라! 무사히 데뷔한 걸 축하해!」');
        await era.printAndWait(
          '축복의 목소리가 사방에서 터져 나오자, 상점가 주민들은 바람을 맞으며 「우라라, 데뷔 축하해」라고 적힌 현수막을 펼쳐 들었다.',
        );
        await era.printAndWait(
          '상점가 사람 「우라라! 데뷔전에서 1등까지 따내다니 정말 대단해!」',
        );
        await era.printAndWait(
          '상점가 사람 「앞으로도 마음껏 달리렴! 우리도 계속 응원할게!」',
        );
        await era.printAndWait([
          '그저 데뷔에 성공했을 뿐인데도 마치 축제라도 열린 듯 기뻐하는 사람들을 보며, ',
          urara.get_colored_name(),
          '에 대한 이들의 애정을 알고 있음에도 ',
          me.get_colored_name(),
          '은(는) 깜짝 놀라고 말았다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 하마터면 눈앞을 가릴 뻔한 「땀」을 몰래 훔치고는, 환한 미소와 함께 모두에게 전력을 다해 화답했다.',
        ]);
        await urara.say_and_wait('고마워요 여러분! 앞으로! 계속, 계속해서 달려나갈게요!');
        await era.printAndWait('상점가 사람들 「오오! 힘내라——!」');
        await era.printAndWait(
          '상점가 사람 「앞으로도 우라라를 잘 부탁하네! 트레이너도 힘내라고!」',
        );
        await common2(urara, me, callname);

        era.printButton('「에? 나? 하지만 대체 뭘……」', 1);
        await era.input();

        await urara.say_and_wait(
          '괜찮아! 그냥 마음속에 있는 말을 힘껏 외치면 돼! 힘내!',
        );
        await era.printAndWait([
          '상황이 이렇게 된 이상, 모두의 기대에 부응하지 않을 수 없었다. ',
          urara.get_colored_name(),
          '의 초롱초롱한 시선 속에서 ',
          me.get_colored_name(),
          '은(는) 깊게 숨을 들이마셨다——',
        ]);
        await era.printAndWait([
          '그러나 첫 마디를 떼기도 전에, 너무 힘을 준 나머지 뇌 속의 마지막 의식의 끈이 끊어지며 ',
          me.get_colored_name(),
          '은(는) 그대로 뒤로 고꾸라졌다.',
        ]);
        await urara.say_and_wait([
          '응? ',
          callname,
          ', 왜 그래…… 에? 에엣! ',
          callname,
          '! ',
          callname,
          '——!',
        ]);
        await era.printAndWait([
          '전하지 못한 감사의 마음을 품은 채, ',
          urara.get_colored_name(),
          '와 주변 사람들의 비명 속에서 체력이 바닥난 ',
          me.get_colored_name(),
          '은(는) 다시 한번 정신없이 쓰러지고 말았다.',
        ]);
        await era.printAndWait([
          '젠장, 분명 감동적인 장면이었는데 왜 이렇게 된 거지? 스스로도 어이가 없어 웃음이 터지는 것을 참으며, ',
          me.get_colored_name(),
          '은(는) 웃으며 눈을 감았다……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait('스으……');
        await in_urara.say_as_unknown_and_wait('에헴, 저기…… 데뷔전 수고하셨어요?');
        await in_urara.say_as_unknown_and_wait(
          '결국 이건 체력으로 해결될 문제가 아니네요. 앞으로는 부디 몸조심하세요……',
        );
        extra_flag.relation_change = 50;
      } else {
        await print_event_name('계속해서 전진!', urara);
        await in_urara.say_as_unknown_and_wait(
          '우려했던 일이 결국 일어나고 말았네요. 기죽지 마세요, 당신이라면 다음에는 분명……',
        );
        era.drawLine();
        await era.printAndWait([
          urara.get_colored_name(),
          '가 비록 1착은 하지 못했지만, 예상 범위 내의 진보를 보인 것을 확인하자 ',
          me.get_colored_name(),
          '은(는) 안도의 한숨을 내쉬었다. 몸을 짓누르던 피로도 한결 가벼워진 듯했다.',
        ]);
        await era.printAndWait(
          '모두의 노력이 결실을 보고 있었다. 시작이 반이라는 말처럼, 이것도 꽤 괜찮은 출발이었다.',
        );
        await era.printAndWait([
          '지속적인 긴장으로 인해 머리가 지끈거렸지만, ',
          urara.get_colored_name(),
          '의 데뷔에 비하면 이 정도는 아무런 문제도 되지 않았다.',
        ]);
        await era.printAndWait([
          '트랙 옆에서 땀을 닦고 있는 ',
          urara.get_colored_name(),
          '를 바라보며, ',
          me.get_colored_name(),
          '은(는) 천천히 일어나 인파를 헤치고 ',
          urara.get_colored_name(),
          '와 가장 가까운 앞자리로 향했다.',
        ]);

        era.printButton('「수고했어, 데뷔 첫 레이스인데 기분이 어때?」', 1);
        await era.input();

        era.println();
        if (era.get('relation:52:0') > 150) {
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 손을 흔드는 모습을 보자, ',
            urara.get_colored_name(),
            '는 기운을 내어 평소처럼 웃으며 달려왔다.',
          ]);
          await urara.say_and_wait([
            '고마워 ',
            callname,
            '! 그리고 나 하나도 안 힘들었어! 달리는 건 역시 즐거우니까!',
          ]);
          await urara.say_and_wait(
            '하지만…… 결국 1등은 못 했네…… 그래도 이번엔 끝까지 제대로 달렸어!',
          );
          await era.printAndWait([
            '목소리에는 아쉬움이 묻어났지만, ',
            urara.get_colored_name(),
            '는 찰나의 순간에 스스로 실망감을 털어냈다.',
          ]);
          await urara.say_and_wait([
            callname,
            '! 나중에 1등을 하게 되면, 더 많은 레이스에 나갈 수 있는 거지?',
          ]);
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            '의 모습을 발견한 ',
            urara.get_colored_name(),
            '는 얼굴에 맺힌 짭짤한 물방울을 닦아내며 ',
            me.get_colored_name(),
            '의 곁으로 달려왔다.',
          ]);
          await urara.say_and_wait([
            '고마워 ',
            callname,
            '. 그래도 나 그렇게 힘들진 않았어. 게다가 달리는 건 여전히 즐거워!',
          ]);
          await urara.say_and_wait(
            '다만…… 결과적으로 1등은 못 했지만…… 이번엔 마지막까지 힘차게 달렸어!',
          );
          await era.printAndWait([
            '목소리에 담긴 아쉬움을 숨길 수는 없었으나, ',
            urara.get_colored_name(),
            '는 금세 다시 미소를 되찾았다.',
          ]);
          await urara.say_and_wait(
            '나는 계속 달리고 싶어! 이제 데뷔전도 나가 봤으니까, 나중에는 1착도 할 수 있겠지?',
          );
        }
        era.println();
        await era.printAndWait([
          urara.get_colored_name(),
          '의 승부욕이 깨어나기 시작한 것 같았다. 이 마음을 간직한다면, 훗날 분명 비약적인 성장의 계기를 마주하게 될 것이다.',
        ]);
        await era.printAndWait([
          '그렇게 된다면, 응원해주는 사람들뿐만 아니라 ',
          urara.sex,
          '가 경쟁을 통해 경기장 안에서 스스로가 이루고자 하는 목표를 찾게 될 것이다.',
        ]);
        await era.printAndWait([
          '여전히 은은하게 통증이 느껴지는 관자놀이를 주무르며, ',
          me.get_colored_name(),
          '은(는) 트레이너로서의 전략을 구상했다.',
        ]);
        await era.printAndWait(
          '하지만 무엇보다 앞으로 더 많은 레이스에 출주하기 위해서는, 하루빨리 첫 승리를 확보하는 것이 급선무였다.',
        );

        era.printButton('「좋아! 그럼 새로운 특훈을 시작할 텐데, 문제없지?」', 1);
        await common1(urara, me, callname);
        await era.printAndWait(
          '상점가 사람 「우라라! 1등은 아니어도 정말 대단했어!」',
        );
        await era.printAndWait(
          '상점가 사람 「앞으로도 힘껏 달리렴! 우리가 늘 응원할게!」',
        );
        await era.printAndWait(
          '비록 1착조차 하지 못했지만, 사람들은 마치 큰 잔치라도 벌인 것처럼 기뻐하고 있었다.',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '는 눈을 적실 뻔한 「땀」을 몰래 훔치고는, 밝은 미소로 모두에게 화답했다.',
        ]);
        await urara.say_and_wait(
          '고마워요 여러분! 다음번엔 꼭 1착을 해서 모두에게 보여줄게요!',
        );
        await era.printAndWait('상점가 사람들 「오오! 힘내라——!」');
        await era.printAndWait(
          '상점가 사람 「트레이너도 고생 많았네! 우리 우라라를 잘 돌봐줘서 고마워!」',
        );

        await common2(urara, me, callname);

        era.printButton('「아? 나? 하지만 난 딱히……」', 1);
        await era.input();

        await urara.say_and_wait([
          '괜찮아! 다음엔 우리 꼭 할 수 있으니까, ',
          callname,
          '도 지금 마음속의 말을 크게 외쳐봐!',
        ]);
        await era.printAndWait([
          '이토록 열렬한 기대에 부응하지 않을 수는 없었다. ',
          urara.get_colored_name(),
          '의 반짝이는 눈동자를 마주하며, ',
          me.get_colored_name(),
          '은(는) 크게 숨을 들이켰다——',
        ]);
        await era.printAndWait([
          '그러나 한 마디도 내뱉기 전에, 과도하게 긴장한 탓에 뇌 속의 의식이 끊어지며 ',
          me.get_colored_name(),
          '은(는) 그대로 뒤로 넘어갔다.',
        ]);
        await urara.say_and_wait([
          '응? ',
          callname,
          ', 왜 그래…… 에? 에엣! ',
          callname,
          '! ',
          callname,
          '——!',
        ]);
        await era.printAndWait([
          '미처 전하지 못한 감사를 마음 한구석에 담은 채, ',
          urara.get_colored_name(),
          '와 주변 이들의 경악 섞인 외침 속에서 체력이 다한 ',
          me.get_colored_name(),
          '은(는) 또다시 어지러움 속에 쓰러졌다……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '에휴, 우라라의 데뷔를 준비하시느라 당신도 고생이 많으셨네요.',
        );
        await in_urara.say_as_unknown_and_wait(
          '부디 몸 좀 챙기세요. 우라라가 1착을 하기도 전에 트레이너가 먼저 쓰러지면 곤란하니까요……',
        );
      }
    } else {
      if (extra_flag.rank === 1) {
        await print_event_name('마침내, 첫 번째……', urara);
        await in_urara.say_as_unknown_and_wait(
          '어찌 됐든, 조마조마했던 마음을 첫 승리 덕분에 잠시나마 내려놓을 수 있겠네요.',
        );
        era.drawLine();
        await era.printAndWait([
          urara.get_colored_name(),
          '가 가장 먼저 결승선을 통과하자, ',
          me.get_colored_name(),
          '도 뻐근한 어깨를 주무르며 자리에서 일어났다.',
        ]);
        await era.printAndWait(
          '몸은 여전히 고단했지만 지난번보다는 한결 가벼웠고, 특히 담당이 무사히 1착을 거머쥐자 온몸이 씻은 듯 개운해졌다.',
        );
        await era.printAndWait([
          '적어도 이번만큼은 남들 앞에서 허무하게 쓰러지지 않으리라 다짐하며, 멀리서 달려오는 작은 실루엣을 향해 ',
          me.get_colored_name(),
          '은(는) 손을 흔들었다.',
        ]);
        await era.printAndWait([
          '땀에 젖은 체육복에서 ',
          urara.get_teen_sex_title(),
          '의 향긋한 냄새가 풍겨왔다. ',
          me.get_colored_name(),
          '의 부름에, 반대편에서 달려오던 어린 ',
          urara.get_uma_sex_title(),
          '가 승리의 미소를 가득 머금은 채 ',
          me.get_colored_name(),
          '의 앞에 멈춰 섰다.',
        ]);
        await urara.say_and_wait([
          '우오오——! 1등! ',
          callname,
          '! 나 1등 했어——!',
        ]);
        await urara.say_and_wait(
          '앗, 큰일이다! 나도 모르게 우승자 구역까지 뛰어 들어왔는데, 괜찮을까……',
        );

        era.printButton('「아니, 진정해 우라라. 네가 1등이라니까.」', 1);
        await era.input();

        era.println();
        if (era.get('relation:52:0') > 150) {
          await era.printAndWait([
            '어린 ',
            urara.get_uma_sex_title(),
            '의 뺨을 어루만지며, ',
            me.get_colored_name(),
            '은(는) 첫 승리에 너무 흥분한 담당을 웃으며 달래주었다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '의 손길이 기분 좋은 듯, ',
            me.get_colored_name(),
            '의 손길에 점차 안정을 찾은 ',
            urara.get_colored_name(),
            '도 행복한 표정을 지었다.',
          ]);
          await urara.say_and_wait(
            '아, 정말 그런가 봐! 우라라는 이제 예전의 내가 아니야~',
          );
          await urara.say_and_wait([
            '그럼 ',
            callname,
            '도 봤어? 나 방금 정말로 가장 먼저 결승선을 통과했지!',
          ]);
        } else {
          await era.printAndWait([
            '숨을 헐떡이는 어린 ',
            urara.get_uma_sex_title(),
            '에게 수건과 스포츠음료를 건네며, ',
            me.get_colored_name(),
            '은(는) 아직도 얼떨떨해하는 담당에게 부드럽게 일러주었다.',
          ]);
          await era.printAndWait([
            '수건으로 얼굴을 닦고 물을 받아 든 ',
            urara.get_colored_name(),
            '는 드디어 마음의 짐을 털어낸 듯 ',
            me.get_colored_name(),
            '에게 환한 미소를 지어 보였다.',
          ]);
          await urara.say_and_wait('아, 진짜 그렇네! 이번엔 내가 정말로 이겼어!');
          await urara.say_and_wait([
            '피곤하긴 하지만, ',
            callname,
            ', 나 방금 정말로 첫 번째로 들어온 거 맞지?',
          ]);
        }

        era.printButton(
          '「당연하지! 나뿐만 아니라 널 보러 온 모두가 지켜봤는걸!」',
          1,
        );
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '이(가) 가리키는 방향을 바라보았다. 약속이라도 한 듯, 상점가 사람들은 다시 한번 응원 현수막을 내걸고 있었다.',
        ]);
        await era.printAndWait([
          '「우라라, 1등 축하해」. 승리가 아직 확정되기도 전이었지만, ',
          urara.get_colored_name(),
          '가 이길 것이라 굳게 믿었던 이들이 미리 준비해둔 현수막이었다.',
        ]);
        await era.printAndWait([
          '늘 자신을 지지해주는 이들을 향해 힘껏 손을 흔드는 ',
          urara.get_colored_name(),
          '의 미소는 그 어느 때보다 눈부시게 빛났다.',
        ]);
        await era.printAndWait([
          '데뷔 후 거둔 첫 승리에 불과했지만, ',
          urara.get_colored_name(),
          '와 그녀를 응원해온 모두에게 있어 이것은 평생 잊지 못할 소중한 경험이 되었다.',
        ]);
        await era.printAndWait([
          '눈앞의 광경을 지켜보며 모든 것이 비로소 궤도에 올랐음을 깨달은 ',
          me.get_colored_name(),
          '도 마침내 안도의 한숨을 내쉴 수 있었다.',
        ]);
        await era.printAndWait([
          '대기실로 돌아가는 길에도 ',
          urara.get_colored_name(),
          '는 들뜬 기분으로 ',
          me.get_colored_name(),
          '에게 이번 레이스에서 겪은 수많은 「처음」에 대해 이야기했다.',
        ]);

        era.printButton('「우라라, 맨 앞에 서는 『처음』은 역시 최고였지?」', 1);
        await era.input();

        await urara.say_and_wait(
          '응! 맨 앞에서 달릴 때 보이는 풍경은 생각지도 못했을 만큼 정말 예쁘더라!',
        );
        await urara.say_and_wait(
          '앞서 나가고 있을 때의 바람은 정말 강해! 하지만 계속 앞으로 달리면 바람이 알아서 길을 비켜주는 것 같아!',
        );
        await urara.say_and_wait(
          '그리고…… 역시 1등을 하니까 정말 기뻐! 모두의 웃는 얼굴을 보는 것도 너무 행복해!',
        );

        era.printButton('「그럼 다음 승리를 위해서 다시 힘내볼까?」', 1);
        await era.input();

        await urara.say_and_wait('응! 나 꼭 다시 1등 할 거야!');
        await urara.say_and_wait([
          callname,
          '! 앞으로도 이렇게 함께라면, 우리는 분명 더 멀리까지 갈 수 있을 거야!',
        ]);
        await era.printAndWait([
          '어린 담당이 내민 손을 맞잡았다. ',
          urara.get_colored_name(),
          '와 ',
          me.get_colored_name(),
          '의 이야기는 이제 막 시작되었을 뿐이다.',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '그렇군요, 데뷔전 고생 많으셨어요. 저도 조금은 안심이 되네요.',
        );
        await in_urara.say_as_unknown_and_wait(
          '당신은 어떻게 생각하시나요? 우라라와 함께 할 나날들에 준비는 되셨나요?',
        );
      } else {
        crazy_fans.push(52);
      }
    }
  };

  handlers[`${race_enum.arim_kin}_${47 + 48}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name(
      [
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '의 모습 ',
        { color: in_urara.color, content: `「${in_urara.sex}」` },
        '의 이름',
      ],
      urara,
    );
    await in_urara.print_and_wait('이 이야기는, 어디서부터 시작하면 좋을까요?');
    await common_talk_with_in_urara(urara, me, in_urara);
    await in_urara.say_as_unknown_and_wait(
      '제 이야기는 끝났으니, 마지막으로 떠나기 전에 우라라의 현 상황에 대해 몇 마디만 덧붙일게요.',
    );
    if (extra_flag.rank === 1) {
      await in_urara.say_as_unknown_and_wait(
        '모두가 염원하던 대로, 당신은 곧 기적을 보게 되겠네요. 우라라의 『최고』의 1착을요.',
      );
      await in_urara.say_as_unknown_and_wait(
        '어쩌면 모든 일에는 원인과 결과가 있겠지만, 경악을 금치 못할 관객들에게 있어 이것은 그저 기적일 뿐이겠죠?',
      );
    } else if (extra_flag.rank <= 5) {
      await in_urara.say_as_unknown_and_wait(
        '사실 기적까지는 정말 종이 한 장 차이였답니다. 우라라도 열심히 했고, 당신의 직감도 늘 예리했으니까요.',
      );
      await in_urara.say_as_unknown_and_wait(
        '하지만 우라라를 아끼는 분들에게는 이 결과만으로도 눈물을 흘리기에 충분할 거예요.',
      );
    } else {
      await in_urara.say_as_unknown_and_wait(
        '대부분의 사람들이 예상한 대로의 결과네요. 하지만 모두가 즐거워했고 우라라도 만족했으니, 그걸로 된 거 아닐까요?',
      );
      await in_urara.say_as_unknown_and_wait(
        '다만 제가 보기엔, 이번에 당신이 하신 선택은 조금 지나치게 공격적이었던 것 같네요.',
      );
    }
    await common_talk_with_in_urara_end(urara, me, in_urara, callname, true);
    await era.printAndWait([
      '비틀거리며 그림자 밖으로 나와 무심코 통로를 빠져나온 ',
      me.get_colored_name(),
      '은(는), 또 다른 ',
      in_urara.get_colored_name(),
      '가 말했던 레이스의 결말을 목격했다.',
    ]);
    await era.printAndWait([
      '여전히 함성을 지르는 군중과 흩날리는 종이 꽃가루가 만든 화려한 막 너머로, 구름 사이를 뚫고 나온 햇살이 유난히 눈부시게 비쳤다.',
    ]);
    await me.say_and_wait('세 여신이시여……', true);
    era.drawLine();
    await era.printAndWait([
      '트랙 밖에서 대기실로 이어지는 통로 안에서, 땀을 닦을 새도 없이 흥분한 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 레이스의 소감을 쉴 새 없이 쏟아냈다.',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        '하지만 지금은 그 누구라도 이 결과에 대해 흥분하며 떠들 수밖에 없을 것이다. 그도 그럴 것이, 「훌륭하게 1등을 차지한 것」이 다름 아닌 「',
        urara.get_colored_actual_name(),
        '」이기 때문이었다.',
      ]);
      await urara.say_and_wait(
        '맞아, 바로 그거야! 하지만 이긴 게 조금 현실감이 없네. 왠지 기분이 이상해——',
      );
      await era.printAndWait([
        '그렇게 말할 법도 했다. ',
        urara.get_colored_name(),
        '는 오늘 단순히 잘 달린 수준을 넘어, 평소와는 마치 딴사람 같았으니까…… 이렇게 말하면 ',
        urara.sex,
        '가 조금 불쌍할지도 모르겠지만.',
      ]);

      era.printButton('「우라라, 한 번 더 해볼래? 내년의 아리마 기념.」', 1);
      await era.input();

      await urara.say_and_wait('응! 다들 생각보다 그렇게 즐거워 보이지 않았던 것 같거든!');
      await era.printAndWait([
        '그건 아마도 너무 충격적이었기 때문일 텐데. 쓴웃음을 지으며 수건으로 ',
        urara.get_colored_name(),
        '의 웃는 얼굴을 닦아주며, ',
        me.get_colored_name(),
        '은(는) 내심 고개를 저었다.',
      ]);
    } else if (extra_flag.rank <= 5) {
      await era.printAndWait([
        '하지만 지금은 그 누구라도 이 결과에 대해 열띤 토론을 벌이고 있을 것이다. ',
        urara.get_colored_name(),
        '가 보여준 모습이 너무나도 뜻밖이었기 때문이다.',
      ]);
      await urara.say_and_wait(
        '으으—— 다들 아무 말도 안 하지만, 그때 정말 조금만 더 했으면 됐는데!',
      );
      await era.printAndWait([
        '게시판에 이름을 올린 것만으로도 대단한 일이다. 나중에 레이스 녹화본을 다시 확인해봐야겠다고 생각하며, ',
        me.get_colored_name(),
        '은(는) 수건과 물을 ',
        urara.get_colored_name(),
        '에게 건넸다.',
      ]);

      era.printButton('「그러니까, 절대로 이대로 끝낼 수는 없겠지?」', 1);
      await era.input();

      await urara.say_and_wait('응! 나 느꼈어! 다음엔 내가 이길 수 있을 것 같은 예감!');
      await era.printAndWait([
        '의욕에 찬 ',
        urara.get_colored_name(),
        '와 가볍게 주먹을 맞부딪치며, ',
        me.get_colored_name(),
        '은(는) 두 사람 사이에 흐르는 대체 불가능한 유대감을 실감했다.',
      ]);
    } else {
      await era.printAndWait([
        '자신을 응원해준 모두가 미소 짓는 모습을 본 덕분인지, 지금의 ',
        urara.get_colored_name(),
        '는(은) 마치 생일 선물을 받은 아이처럼 들떠 보였다.',
      ]);
      await urara.say_and_wait(
        '하지만 말이야…… 에헤헤~ 예상했던 결과지? 익숙한 느낌이 다시 돌아온 것 같아……',
      );
      await era.printAndWait([
        '꼭 그런 것만은 아니겠지만, 아리마 기념은 ',
        urara.get_colored_name(),
        '에게 있어 여러모로 너무나 가혹한 무대였다. 그런 생각을 하며, ',
        me.get_colored_name(),
        '은(는) 웃으며 어린 ',
        urara.get_uma_sex_title(),
        '의 뺨을 어루만져 주었다.',
      ]);

      era.printButton('「그러니까, 시니어 급의……」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 내년에 다시 한번 도전할래! 모두에게 우라라가 성장한 모습을 보여줄 거야!',
      );
    }
    await common_talk_with_urara_48(urara, me, in_urara, callname, true);
  };
};