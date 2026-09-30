const era = require('#/era-electron');

const Edu17UntilRaceEnd = require('#/event/edu/edu-events-17/race-end');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends Edu17UntilRaceEnd {
  async race_start(chara, me, callname, hook, extra_flag) {
    const event_marks = new LunaEduMarks(),
      { luna, emperor } = event_marks.emperor
        ? { emperor: 17, luna: 9017 }
        : {
            emperor: 9017,
            luna: 17,
          },
      luna_talk = get_chara_talk(luna),
      emperor_talk = get_chara_talk(emperor),
      edu_weeks = era.get('cflag:17:육성턴수합산');
    
    if (
      (emperor === 17) &&
      (race_infos[extra_flag.race].race_class === class_enum.G1) &&
      era.get(`status:${luna}:신경쇠약`) &&
      !event_marks.fall_into_hell
    ) {
      event_marks.fall_into_hell++;
      await print_event_name(
        [{ color: emperor_talk.color, content: '심연으로의 추락' }],
        chara,
      );

      let choose_emperor;
      await era.printAndWait(
        `라이벌들이 차례로 경기장에 들어설 때, ${me.name}은(는) 문득 루나의 상태가 이상하다는 것을 알아차렸다.`,
      );
      await era.printAndWait(
        `${luna_talk.sex}는 의자에 멍하니 앉아 당신을 바라보고 있었다.`,
      );
      await era.printAndWait(`황제는 어디 있지? ${me.name}은(는) 당황했다.`);
      await era.printAndWait(
        `${me.name}의 의아한 시선에 루나는 입을 열었지만, 좀처럼 말이 나오지 않는 듯했다.`,
      );
      await luna_talk.say_and_wait('그녀가…… 다시 나오는 건 싫어!');
      era.printButton('「루나, 곧 레이스가 시작돼!」', 1);
      era.printButton('「괜찮아, 내가 곁에 있어 줄게.」', 2);
      await era.input();
      await era.printAndWait(
        `하지만 ${me.name}의 끈질긴 설득에도 루나는 고개를 저으며 거부했다.`,
      );
      await era.printAndWait(
        '——레이스가 코앞이었다. 지금 황제가 「나타나지」 않는다면 모든 것이 수포로 돌아간다.',
      );
      await era.printAndWait(
        `어쩔 수 없이 ${me.name}은(는) 목소리를 가다듬고, 마치 우스꽝스러운 어릿광대처럼 소리를 높였다.`,
      );
      era.printButton(
        '「황제여, 위대한 나의 황제여! 들리십니까? 만백성의 저 천둥 같은 함성이!」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `루나는 여전히 울고 있었다. ${me.name}의 마음속에서 알 수 없는 분노가 치밀어 올랐다. 하필 이 중요한 때에……!`,
      );
      era.printButton('「폐하, 당신께서 잠드신 사이 역적들이 당신의 영광을 모독하고 있습니다.」', 1);
      await era.input();
      await era.printAndWait(`루나는 그저 무력하게 고개를 저었다. ${me.name}은(는) 이를 악물었다.`);
      era.printButton('「부디 깨어나시어, 하늘을 뒤덮는 진노를 내리소서……」', 1);
      await era.input();
      await era.printAndWait(`편집증에 사로잡힌 ${me.name}의 얼굴은 일그러졌고 목소리는 쉬어 터졌다.`);
      await era.printAndWait(
        '그 광기가 효과가 있었던 것일까, 루나의 몸이 점차 떨림을 멈췄다.',
      );
      await era.printAndWait(
        `${luna_talk.sex}가 ${me.name}을(를) 바라보았다. 양 눈에 가득했던 공포는 서서히 걷히고, 그 자리를 소름 끼칠 정도로 날카로운 기색이 채우기 시작했다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 안도의 한숨을 내쉬었지만, 눈앞의 우마무스메는 갑자기 머리를 감싸 쥐었다.`,
      );
      await era.printAndWait(`루나가 혼란스러운 눈으로 ${me.name}을(를) 보았다.`);
      await luna_talk.say_and_wait('그녀들은 내 친구가 아니었어?');
      era.printButton('「……그들은 네 친구야.」', 1);
      era.printButton('「폐하, 그들은 죽어 마땅한 죄인들입니다!」', 2);
      let ret = await era.input();
      choose_emperor = ret === 2;
      if (choose_emperor) {
        await luna_talk.say_and_wait(
          '꼭 이렇게 해야만 해? 꼭 그 끔찍한 모습으로 변해야만 하느냐고!',
        );
        era.printButton('「아니…… 아니야! 지금 당장 기권 처리하고 올게!」', 1);
        era.printButton('「폐하! 당신은 태생부터 황제이십니다!」', 2);
        let ret = await era.input();
        choose_emperor = ret === 2;
        if (choose_emperor) {
          await luna_talk.say_and_wait(
            '난 황제가 아니야! 제발 루나를 없애지 마. 이대로라면 루나는 정말 사라져 버릴 거야.',
          );
          await luna_talk.say_and_wait('당신이 아직 나를 사랑한다면, 제발……');
          await era.printAndWait(
            `루나는 절망적인 눈빛으로 ${me.name}을(를) 바라보며, 마치 구원의 동아줄이라도 잡으려는 듯 손을 뻗었다.`,
          );
          await luna_talk.say_and_wait('제발…… 나를 떠나지 마……');
          await era.printAndWait(
            `${me.name}은(는) 두 눈을 감았다. 루나는 이토록 ${me.name}을(를) 신뢰하고 사랑하고 있었다. 그러니——`,
          );
          era.printButton('「내 손을 잡아, 루나!」', 1);
          era.printButton('「황제 폐하 만세!」', 2);
          let ret = await era.input();
          choose_emperor = ret === 2;
          if (choose_emperor) {
            await era.printAndWait(
              `말을 내뱉는 순간, ${me.name}은(는) 시간이 얼어붙는 것만 같았다. 그러나 다음 순간, ${me.name}은(는) 숨을 쉴 권리를 박탈당했다.`,
            );
            await era.printAndWait(
              `루나…… 아니, 황제가 손을 뻗어 ${me.name}의 목을 거세게 쥐어짰다.`,
            );
          }
        }
      }
      if (!choose_emperor) {
        await era.printAndWait(
          `당신의 말을 들은 루나는 마침내 안도한 듯했다. ${luna_talk.sex}는 가라앉지 않기 위해 지푸라기라도 잡는 심정으로 ${me.name}에게 급히 손을 뻗었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 탄식하지 않을 수 없었다. 자신이 루나에게 대체 무슨 짓을 시킨 것인가.`,
        );
        await era.printAndWait(
          '어째서 진작 루나의 이상을 알아채지 못했을까. 어떤 거친 파도가 몰아친다 해도.',
        );
        await era.printAndWait(
          `하지만 지금이라도 늦지 않았다! 루나의 트레이너이자 보호자, 그리고…… 연인으로서 ${me.name}은(는) 루나를 위해 모든 풍파를 막아낼 것이다.`,
        );
        era.printButton('「루나, 나는……」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}은(는) 루나를 바라보며 그녀의 손을 맞잡으려 했다.`,
        );
        await era.printAndWait(
          `${me.name}이(가) 수없이 맞잡았고, 영원히 놓지 않겠다고 맹세했던 그 손이 갑자기 앞으로 튀어나왔다.`,
        );
        await era.printAndWait('강철 집게처럼, 목을 무자비하게 죄어 왔다.');
        await emperor_talk.say_and_wait('루나? 그게 누구냐?');
      }
      await era.printAndWait(`황제는 경멸 어린 눈으로 ${me.name}의 목을 쥔 채 몸을 일으켰다.`);
      await emperor_talk.say_and_wait('짐이 얼마나 잠들어 있었지? 감히 짐의 영광을 탐내는 도적놈들은 어디 있느냐?');
      await era.printAndWait(
        `${emperor_talk.sex}는 주위를 훑어보며, 잠에서 깨어날 때마다 매번 다른 장소에 서 있다는 사실에 경악했다.`,
      );
      await era.printAndWait('그리고 왜 깨어날 때마다 감히 짐의 의지를 거스르려는 놈들이 나타나는 것인지 의문이었다.');
      await era.printAndWait(
        `${me.name}은(는) 말도 못 하고 떨쳐낼 수도 없었다. 그저 입을 벌린 채 꺽꺽거리며 가쁜 숨을 몰아쉴 뿐이었다.`,
      );
      await era.printAndWait(
        `산소 부족으로 인해 ${me.name}의 시야가 서서히 흐려졌고, 의식은 멀어져 갔다.`,
      );
      await emperor_talk.say_and_wait('흥.');
      await era.printAndWait(
        `대답을 듣지 못하는 것이 지루해진 듯, 황제는 아무렇게나 ${me.name}을(를) 바닥으로 내팽개쳤다. 둔탁한 소리와 함께 바닥에 처박힌 ${me.name}은(는) 장기가 으스러진 듯한 고통에 격렬하게 구토했다.`,
      );
      await era.printAndWait(
        `일어설 기력조차 없는 ${me.name}은(는) 바닥에 엎드린 채 황제의 발소리가 멀어지는 것을 들었다.`,
      );
      await era.printAndWait(
        `의식이 사라져가는 끄트머리에서, ${me.name}은(는) 다시 한번 루나의 울음소리를 들은 것 같았다.`,
      );
      await era.printAndWait('미안해…… 이제는 돌이킬 수 없어.');
      await era.printAndWait(`${me.name}은(는) 의식을 잃었다.`);
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
      // 클래식급 아리마 기념
      await print_event_name('무적의 위용', chara);

      await era.printAndWait(
        '재팬 컵과는 달리, 매년 열리는 아리마 기념—— 한 해를 마무리하는 그랑프리이자 가장 주목받는 이 레이스는 단순히 등록만으로 출주가 결정되는 것이 아니다.',
      );
      await era.printAndWait(
        '매년 레이스 전, 일본 전역의 팬들이 투표를 진행하여 대중이 인정하는, 레이스에 나갈 자격이 있는 우마무스메를 선출한다.',
      );
      await era.printAndWait(
        '다시 말해, 이곳에 서는 우마무스메는 하나같이 사람들에게 깊은 인상을 남긴 강자들뿐이라는 뜻이다.',
      );
      await era.printAndWait('루나는 압도적인 득표수로 뽑혔음에도 불구하고, 인기 순위 1위를 차지하지는 못했다.');
      await era.printAndWait(
        '사람들은 수군거렸다. 재팬 컵이 당대의 강자들이 세계의 거물들에 맞서는 자리라면, 아리마는 국내 최강자를 가리는 자리였다.',
      );
      era.printButton('（투표가 참가자의 진정한 실력을 다 반영하는 건 아니야.）', 1);
      era.printButton('（하지만 투표는 분명 어느 정도의 현실을 투영하고 있어.）', 2);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 걱정스러운 마음으로 ${chara.name}의 대기실로 돌아갔다. ${chara.sex}는 눈을 감고 정신을 집중하고 있었다.`,
      );
      await era.printAndWait(
        '즉, 여전히 누군가는 루나가 경험이 풍부한 선배들 앞에서 고전할 것이라 생각한다는 의미다.',
      );
      await era.printAndWait('하지만 그것은 문제를 해결할 방법 또한 단순 명료하다는 뜻이기도 했다.');
      await chara.say_and_wait(
        emperor === 17 ? '짐의 권능을 보여줄 뿐이다.' : '해야 할 일은 단 하나뿐이야.',
      );
      await era.printAndWait(`${chara.get_teen_sex_title()}가 눈을 뜨며 나지막이 중얼거렸다.`);
    } else if (extra_flag.race === race_enum.japa_cup && edu_weeks >= 96) {
      // 시니어급 재팬 컵
      await print_event_name(
        [{ color: emperor_talk.color, content: '꺼져가는 불씨' }],
        chara,
      );

      await era.printAndWait(
        `우마무스메는 태생적으로 승부욕을 타고난다. ${chara.sex}들은 언제 어디서든 더 멀리 질주하고자 한다.`,
      );
      await era.printAndWait(
        `정해진 거리의 경기장에서 ${chara.sex}들은 모든 것을 쏟아부어, 가장 먼저 결승선에 도달하는 승자가 되려 한다.`,
      );
      await era.printAndWait(
        '마치 그러한 소망에 응답하듯, 우마무스메들은 본격화 시기에 급격히 성장하여 경기장에 설 수 있게 된다.',
      );
      await era.printAndWait(
        '그러나 동시에 시간이 흐름에 따라, 정확히는 3~4년 사이에 본격화의 힘은 서서히 쇠퇴하기 마련이다.',
      );
      await era.printAndWait(
        '마치 연료가 바닥난 것처럼. 그 시기가 지나면 우마무스메는 다시 평범한 이들과 다를 바 없어진다.',
      );
      await era.printAndWait(
        '이것이 우마무스메들이 죽을힘을 다해 경기장에서 분투하는 이유다. 자신의 이야기를 남기고 싶어서, 대중이 자신을 잊지 않기를 바라기에.',
      );
      await era.printAndWait('그 마음을 품고 우마무스메들은 몸을 던진다.');
      await era.printAndWait(
        '그중에서도 빼어난 이들은 한계에 다다른 경쟁 속에서 【영역】에 발을 들인다.',
      );
      await era.printAndWait('그것은 모든 것을 초월하는 힘이다.');
      await era.printAndWait('하지만, 그 힘의 대가는 무엇인가?');
      await era.printAndWait(
        `루나가 영역에 들어갈 수 있게 된 후로, ${me.name}은(는) 끊임없이 이 의문에 대해 고민해 왔다.`,
      );
      await era.printAndWait('운명은 결코 자비롭지 않다. 모든 것에는 보이지 않는 가격표가 붙어 있는 법이다.');
      await era.printAndWait(
        `심볼리 가문처럼 강대한 혈통일지라도, ${chara.sex}들은 혈맥에 흐르는 폭력성을 억제하지 못해 자아 파멸의 길을 걷기도 한다.`,
      );
      await era.printAndWait(
        `루나는 영역에 들어가는 기분을 묘사한 적이 있다. 모든 것이 정지하고, 오직 ${chara.sex}만이 끝없는 초원에 서 있는 느낌이라고.`,
      );
      await era.printAndWait(
        `${chara.sex}는 무한한 힘이 솟구치는 것을 느끼는 것이다. 마치 자신의 미래와 거래를 한 것처럼.`,
      );
      era.drawLine();
      await era.printAndWait('재팬 컵.');
      await era.printAndWait(
        `레이스 전, ${me.name}은(는) ${chara.name}를 뚫어지게 바라보았다. ${me.name}은(는) 알고 있었다. ${chara.sex}가 이미 최상의 상태로 스스로를 조율했다는 것을.`,
      );
      await era.printAndWait(
        `하지만 강적을 이기기 위해 ${chara.sex}는 분명 다시 한번 영역에 들어갈 것이다. 아니, 들어갈 수밖에 없을 것이다.`,
      );
      await era.printAndWait(
        `마치 타오르는 불꽃처럼, 모든 연료를 불태우기 전까지는 멈추지 않을 불꽃.`,
      );
      era.printButton(`「조심해 줘.」`, 1);
      era.printButton(`「불길한 예감이 들어.」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara.name}가 ${me.name}을(를) 바라보았다. 그제야 ${me.name}은(는) ${chara.sex}의 손이 미세하게 떨리고 있음을 깨달았다.`,
      );
      await chara.say_and_wait(
        emperor === 17
          ? '그렇다면 황제의 자태를 가슴 깊이 새겨두도록.'
          : '걱정하는 건 알지만, 우리의 꿈을 위해 나는 물러서지 않아.',
      );
      await era.printAndWait(`${chara.get_teen_sex_title()}가 경기장으로 향했다.`);
    } else {
      return await super.race_start(chara, me, callname, hook, extra_flag);
    }
  }
};