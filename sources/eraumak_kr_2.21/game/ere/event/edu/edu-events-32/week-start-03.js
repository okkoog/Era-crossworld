const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[36] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('연도 연구 계획 수립', tachyon);
    await era.printAndWait([
      '데뷔전이 지나고 두 달 후, ',
      me.get_colored_name(),
      '은(는) 갑자기 ',
      tachyon.get_colored_name(),
      '에게 불려 실험실로 향했다.',
    ]);
    await era.printAndWait('평소처럼 또 약물 실험일 것이라 생각했으나, 예상치 못한 일이 기다리고 있었다……');
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 나는 12월 말의 ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      '에 출주할 생각이네. 준비해 주게나.',
    ]);
    era.printButton('「에? 호프풀 스테이크스?」', 1);
    await era.input();
    await tachyon.say_and_wait('음? 무슨 문제라도 있나?');
    era.println();
    await era.printAndWait([
      '방에 들어서자마자 ',
      tachyon.get_colored_name(),
      '은 마치 저녁 메뉴를 정하는 것 같은 가벼운 말투로 ',
      me.get_colored_name(),
      '에게 말했다.',
    ]);
    await era.printAndWait([
      '호프풀 스테이크스…… 그것은 12월 말에 열리는 G1 중거리 레이스로, 주니어급 ',
      tachyon.get_uma_sex_title(),
      '들에게는 가장 중요한 레이스 중 하나였다.',
    ]);
    await era.printAndWait(
      '아직 두 달이라는 시간이 남았기에, 지금 신청한다면 시기상으로는 늦지 않았다.',
    );
    await era.printAndWait([
      '승리할 수 있을지…… 솔직히 그런 것을 고민할 필요는 없었다. 세상에서 가장 빠른 속도는 광속이고, 그 광속보다 빠른 존재가 바로 ',
      tachyon.get_colored_name(),
      '이기 때문이다.',
    ]);
    await era.printAndWait('유일한 의문은, ｢어째서인가｣ 였다.');
    await era.printAndWait([
      '평소 레이스에 큰 관심을 보이지 않던 ',
      tachyon.get_colored_name(),
      '이 왜 갑자기 특정 레이스에 나가려 하는 것일까.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 솔직하게 마음속 의문을 물었다.']);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 대답 대신 책상 위의 신문을 톡톡 쳤다. 그것은 오늘의 스포츠 뉴스였고, 기억이 맞다면……',
    ]);
    await era.printAndWait([
      '오늘의 가장 큰 뉴스는 「',
      get_chara_talk(94).get_colored_name(),
      '과 쿠로후네, ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      ' 출주 확정」이었다.',
    ]);
    era.println();
    await era.printAndWait([
      '과연 그렇군…… ',
      get_chara_talk(94).get_colored_name(),
      '이든 쿠로후네든 이 세대를 대표하는 주목받는 강자들이다.',
    ]);
    await era.printAndWait([
      '아무리 ',
      tachyon.get_colored_name(),
      '이라 해도, 같은 세대의 강자들과 겨뤄보고 싶은 생각이 든 것이리라……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '당연히 신약 시험을 위해서라네! 강적이 없는 레이스에서 어떻게 사람을 극한까지 몰아넣겠나. 극한에 닿지도 못한다면 약의 보조 같은 건 더더욱 필요 없지.',
    );
    era.println();
    await era.printAndWait('아…… 역시나 이런 전개일 줄 알았다. 알고 있었…… 음?');
    era.printButton('「잠깐, 레이스 중에 약을 쓰는 건…… 규정 위반이잖아?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '음? 자네는 그걸 걱정하는 건가, ',
      callname,
      '. 안심하게. 설마 자네는 그 어설픈 도핑 테스트 기술로 내 약을 잡아낼 수 있을 거라 생각하나?',
    ]);
    era.println();
    await me.say_and_wait('아니야! 요점은 그게 아니라고!');

    era.printButton('「그게…… 조금…… 스포츠 정신 같은 것에 어긋나는 게 아닐까……?」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 상대의 기분을 상하게 하지 않도록 조심스럽게 단어를 골라가며 말했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '응? ',
      callname,
      '? 설마 자네, 내가 쓰려는 약이 흥분제 같은 거라고 생각하는 건가? 내가 자네 눈에는 고작 그런 사람으로 보였나 보군?',
    ]);
    era.println();
    await era.printAndWait([
      '이걸 적반하장이라고 해야 할까. ',
      me.get_colored_name(),
      '은(는) 서둘러 고개를 저으며 부정했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……안심하게나. 이 약은 흥분제 따위가 아니네. 경기장에서 속도를 높여주는 그런 효과도 아니야……',
    );
    await tachyon.say_and_wait(
      '다만, 효과를 실험하기 위해 충분히 강력한 상대가 필요할 뿐인 약이라네.',
    );
    era.println();
    era.print([tachyon.sex, '의 말을 들은 ', me.get_colored_name(), '은(는)……']);
    era.printButton('믿는다', 1);
    era.printButton('반신반의한다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '그렇구나. ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 설명을 듣고 고개를 끄덕였다. 그리고는 별말 없이 ',
        tachyon.get_colored_name(),
        '의 레이스 참가 절차를 돕기 위해 움직였다. 오히려 이 모습이 ',
        tachyon.get_colored_name(),
        '을 당황하게 만들었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '아니, 아니…… ',
        callname,
        ', 자네는 내 말을 그렇게 쉽게 믿어버리는 건가?',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 끄덕였다. 오히려 ',
        tachyon.get_colored_name(),
        ' 본인이 왜 그렇게 놀라는지 이해하지 못하는 표정이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '만약 내가, 만약 그게 정말로…… 그러니까, 만약 내가 자네를 속인 거라면 어쩔 셈인가?',
      );
      era.println();
      await era.printAndWait([
        '만약 ',
        tachyon.get_colored_name(),
        '이 자신을 속인 것이라면……',
      ]);
      await era.printAndWait('생각해 본 적 없는 문제였으나, 만약 그렇다 하더라도.');

      era.printButton('「속았다고 해도 상관없어」', 1);
      await era.input();
      await era.printAndWait('그날 이미 결정한 일이었다.');
      await era.printAndWait([tachyon.sex, '의 가능성과 그 모든 것을 믿기로 말이다.']);
      await era.printAndWait([
        tachyon.sex,
        '가 더 먼 세계를 볼 수만 있다면, 속는 것쯤이야 아무것도 아니었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……신뢰, 아니, 맹신인가?');
      era.println();
      await era.printAndWait('맹신.');
      await era.printAndWait('생각해 보니 정말 그랬다.');
      await era.printAndWait([
        '자신은 ',
        tachyon.get_colored_name(),
        '에 의해 다른 것은 더 이상 보이지 않게 된 맹인과 같았다.',
      ]);
      await era.printAndWait([
        '눈이 멀었기에, 그렇기에 더욱 광명을 갈구하고, 가장 빛나는 ',
        tachyon.sex,
        '를 갈망하는 것이다.',
      ]);
      era.println();
      if (relation <= 375) {
        await tachyon.say_and_wait([
          '하하하, 좋네. 그렇다면 내 발걸음을 놓치지 말고 잘 따라오게나, ',
          callname,
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 소매를 휘저으며 다시 실험으로 돌아갔다. 이것으로 대화가 끝났음을 선언한 셈이다.',
        ]);
        era.println();
        await era.printAndWait('떠나기 전, 마지막 한 마디를 덧붙였다.');
        era.println();
        await tachyon.say_and_wait(
          '포상으로 약속하지. 자네는 특등석에서 가능성의 저편을 목격하게 될 걸세!',
        );
      } else {
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          '어째서인지 ',
          tachyon.get_colored_name(),
          '은 조금 불만스러운 표정이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '보통의 경우라면 나에 대한 모르모트로서의 충성심을 확인한 셈이니 기뻐해야 하겠지만 말일세.',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 뾰로통한 얼굴로 ',
          me.get_colored_name(),
          '의 가슴팍을 콕콕 찔렀다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '하지만 나는 이런 맹목적인 복종은 싫네. 나는 자네가 내게 조언을 해주고, 내 곁을 함께 걷는 파트너가 되길 원하지. 의견 하나 내지 못하는 실험 동물이 되길 바라는 게 아니란 말일세.',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 자신의 행동을 잠시 반성했다. 그리하여 변화의 시작으로, ',
          me.get_colored_name(),
          '은(는) 질문을 던지기로 했다.',
        ]);
        era.printButton('「그럼, 이렇게 하는 이유는 뭐야……?」', 1);
        await era.input();
        await tachyon.say_and_wait('………… 미안하지만, 지금은 가르쳐 줄 수 없네.');
        await tachyon.say_and_wait(
          '언젠가는 반드시 말해주겠네. 하지만…… 지금은 아니야. 약속할 수 있으니, 지금은 우선 나를 믿어주지 않겠나?',
        );

        era.printButton('「방금 전까지 맹신하지 말라며?」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '이건, 그게…… 다르네! 아까는 아무 근거 없이 믿는 것이고, 지금은 내게 이유가 있지만 말할 수 없다는 점을 믿어달라는 것이니까.',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 마음속으로 그 둘의 차이가 대체 무엇인지 의아해했으나, ',
          me.get_colored_name(),
          '은(는) 현명하게도 말다툼을 하지 않는 쪽을 택했다.',
        ]);
        era.println();
        await era.printAndWait([
          '어쨌든, ',
          me.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '의 다음 목표는 ',
          race_infos[race_enum.hope_sta].get_colored_name(),
          '로 결정되었다.',
        ]);
        await era.printAndWait([
          '별일 없다면 ',
          tachyon.sex,
          '를 출주시키는 것에 큰 문제는 없겠지만……',
        ]);
      }
    } else {
      era.println();
      await me.say_and_wait('정말이야?', true);
      await era.printAndWait([
        me.get_colored_name(),
        '의 마음속에는 여전히 의구심이 남았지만……',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 어깨를 으쓱하고는 ',
        tachyon.get_colored_name(),
        '의 출주 신청 서류를 준비하기 시작했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…… ',
        callname,
        '? 내가 말해놓고도 조금 이상하네만, 자네는 조금도 의심하지 않는 건가? 그냥 믿어버리는 거야?',
      ]);
      era.printButton('「안 믿어. 하지만 약 같은 걸 안 써도 타키온은 이길 수 있다고 믿어」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 의중도 모르겠고, 약의 효과도 알 수 없었지만.',
      ]);
      await era.printAndWait([
        '애초에 ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '이 누군가가  ｢규정상 안 된다｣ 고 말한다고 해서 순순히 그만둘 사람이라고 생각지도 않았다.',
      ]);
      await era.printAndWait('하지만 이 점만큼은 의심할 여지가 없었다.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 약물 같은 외부의 힘 없이도 반드시 승리할 것이다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '에게 흥분제 따위는 필요 없다는 사실을, ',
        me.get_colored_name(),
        '은(는) 그저 믿고 있을 뿐이었다.',
      ]);
      if (relation <= 0) {
        era.println();
        await tachyon.say_and_wait('…… 평소에도 그렇게 말을 예쁘게 해주면 좋을 텐데 말이야.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 담담하게 말했으나, ',
          tachyon.sex,
          '의 꼬리가 살랑살랑 흔들리는 것을 보니 꽤 기분이 좋은 모양이었다.',
        ]);
      } else if (love >= 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '…… 자네 그 말, 마치 나를 조금도 신뢰하지 않는 것처럼 들리는군.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 조금 불만스러운 듯 볼을 부풀리며 고개를 획 돌렸다.',
        ]);
        era.println();
        await era.printAndWait('믿어도 안 되고 안 믿어도 안 되는 건가……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 어쩔 수 없이 이마를 짚으며, 어린아이를 달래듯 ',
          tachyon.get_colored_name(),
          '에게 자신이 얼마나 ',
          tachyon.sex,
          '를 신뢰하고 사랑하는지 속삭여주었다. 그제야 겨우 ',
          tachyon.sex,
          '의 기분이 풀렸다.',
        ]);
      } else {
        era.println();
        await tachyon.say_and_wait(
          '그게 자네의 대답인가? 나를 신뢰하지는 않지만 나의 재능은 신뢰한다? 좋군! 그것이야말로 연구자가 지녀야 할 태도지!',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 당신의 답변이 매우 만족스러운 듯 고개를 끄덕였다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '그렇다면 내 승리를 마음껏 믿도록 하게나. 내 뒤를 따라오기만 한다면, 자네가 바라는 그 영광을 목격하게 해줄 테니.',
        );
        era.println();
        await era.printAndWait([
          '결국 ',
          me.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '의 다음 목표는 ',
          race_infos[race_enum.hope_sta].get_colored_name(),
          '로 결정되었다.',
        ]);
        await era.printAndWait(
          '다만…… 겉으로는 멋지게 마무리했지만, 정말 이렇게 출주해도 괜찮은 걸까? 좀 더 고민해 볼 필요가 있을지도 모르겠다.',
        );
        return;
      }
      era.println();
      await era.printAndWait([
        '결국 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 다음 목표는 ',
        race_infos[race_enum.hope_sta].get_colored_name(),
        '로 결정되었다.',
      ]);
      await era.printAndWait([
        '다만…… 말은 그렇게 했지만, 이런 상태의 ',
        tachyon.sex,
        '를 내보내도 정말 괜찮은 걸까? 아마 한동안은 고민이 끊이지 않을 것 같다.',
      ]);
    }
  };

  handlers[47 + 1] = async (tachyon, me, callname, flags, relation) => {
    await print_event_name('연도 심사', tachyon);
    await tachyon.say_and_wait(['이런, ', callname, ', 자네 지금……… 새해 다짐을 쓰고 있는 건가?']);
    era.println();
    await era.printAndWait([
      '노크도 없이 트레이닝실로 들이닥친 ',
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '이(가) 무언가를 쓰는 것을 보고 의문을 표했고, ',
      me.get_colored_name(),
      '은(는) 고개를 끄덕였다.',
    ]);
    era.println();
    await era.printAndWait([
      '오늘은 설날이었고, ',
      me.get_colored_name(),
      '이(가) 하고 있던 것은 새해의 소망을 적어 내려가는 일이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '3관이라…… 내 입으로 말하긴 좀 그렇다만, ',
      callname,
      ', 자네도 참 집요하군. 3관이라는 게 자네에게 그렇게 특별한 의미가 있는 건가?',
    ]);
    era.println();
    await me.say_and_wait('의미라기보다…… 굳이 말하자면');
    era.printButton('「타키온이 출주하겠다고 약속했으니까…… 그리고 나는 타키온이 질 거라고 생각하지 않아」', 1);
    await era.input();
    const hope_sta_check = check_aim_race(
      RaceHistory.get(32).get(),
      race_enum.hope_sta,
      0,
      1,
    );
    if (hope_sta_check) {
      if (relation > 0) {
        await tachyon.say_and_wait('흐흥, 좋네. 천재인 나는 확실히 무패의 존재니까 말이야.');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 아주 의기양양한 표정으로 말했다.']);
      } else {
        await tachyon.say_and_wait(
          '승패 따위 실험과는 아무런 상관도 없는 것에 참 잘도 열중하는군.',
        );
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 냉담하게 말했다.']);
      }
    } else {
      await tachyon.say_and_wait([
        '………… ',
        callname,
        ', 자네 내가 이미 패배했다는 사실을 잊은 건가?',
      ]);
      era.println();
      await era.printAndWait('……아, 그러고 보니 확실히 그런 일이 있었지……');
      era.printButton('「그래도, 타키온이 가장 강해!」', 1);
      await era.input();
      await tachyon.say_and_wait('………… 이 정도로 천진난만하면 뭐라 할 말이 없군.');
      await era.printAndWait([tachyon.get_colored_name(), '은 어이가 없는지 이마를 짚었다.']);
    }
    await tachyon.say_and_wait('기왕 그럴 거라면, 꿈을 좀 더 멀리 둬 보는 건 어떤가?');
    era.println();
    await era.printAndWait('더 멀리……?');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 잠시 ',
      tachyon.get_colored_name(),
      '의 의도를 파악하지 못했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '꿈을 최우선으로 두게나, ',
      callname,
      '. 자네의 꿈, 나의 꿈. 더 원대한 꿈을 적어보란 말일세!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 두 눈이 반짝이며 열정으로 가득 찼다.',
    ]);
    era.println();
    await era.printAndWait([
      '더 원대한 꿈…… ',
      me.get_colored_name(),
      '은(는) 잠시 고민하다가 종이를 한 장 더 꺼내 그 위에 적었다……',
    ]);
    era.printButton('무패（전 능력치 +5）', 1, { disabled: !hope_sta_check });
    era.printButton('무한（스킬 포인트 +20）', 2);
    era.printButton('무상（스태미나 +20）', 3);
    switch (await era.input()) {
      case 1:
        await era.printAndWait(
          '무패. 광속을 넘어서는 입자가 고작 범인들에게 패배할 리가 없다.',
        );
        era.println();
        await tachyon.say_and_wait(
          '호오? 연간 무패를 말하는 건가? 후후, 좋네. 기대할 만한 목표로군.',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 흥미로운 듯 ',
          me.get_colored_name(),
          '의 목표를 바라보다가, 이내 찬물을 끼얹었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('하지만…… 출주 여부는 내 흥미에 달렸다는 걸 명심하게나.');
        era.println();
        await era.printAndWait([
          '레이스에 나가지 않는 것도 일종의 무패니까 말일세. ',
          tachyon.get_colored_name(),
          '은 호탕하게 웃으며, ',
          me.get_colored_name(),
          '에게는 조금도 우습지 않은 농담을 던졌다.',
        ]);
        await era.printAndWait([
          '이런 일…… 정말로 ',
          tachyon.get_colored_name(),
          '이라면 저지를 법한 일이라는 생각이 들었다……',
        ]);
        await era.printAndWait([
          '새해 첫날부터 ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_uma_sex_title(),
          '를 담당하느라 위장이 아파오기 시작했다. 올해도 분명 쉽지 않은 한 해가 될 것 같다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          32,
          new Array(5).fill(5),
          0,
        );
        break;
      case 2:
        await era.printAndWait([
          '무한. 꿈을 꾼다면…… ',
          tachyon.get_colored_name(),
          '의 꿈보다 무한에 어울리는 것은 없었다.',
        ]);
        await era.printAndWait('한계를 넘어서 더 이상의 제한이 없기에, 무한.');
        era.println();
        if (relation <= 0) {
          await tachyon.say_and_wait(
            '…… 후후, 자네 같은 인간이 그런 생각을 한다고? 어린 여자애나 꼬실 법한 화술은 그만두게나. 자네는 그저 나를 보조하는 도구일 뿐이니 자신의 분수를 알게.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 무정하게 ',
            me.get_colored_name(),
            '을(를) 비웃었다.',
          ]);
          await era.printAndWait([
            '…… 비록 자신의 평소 행동 때문에 신뢰를 주지 못한 탓도 있겠지만, ',
            me.get_colored_name(),
            '은(는) 진심으로 그렇게 생각하고 있었다.',
          ]);
          era.println();
          await era.printAndWait([
            '쓴웃음을 지으며 ',
            me.get_colored_name(),
            '은(는) 올해 역시 만만치 않은 한 해가 될 것임을 직감했다.',
          ]);
        } else if (relation <= 225) {
          await tachyon.say_and_wait(
            '오? 무한한 가능성인가? 좋군. 우리에게 참 어울리는 선택지야. 새해에는 이 목표를 향해 전진하도록 하지.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 꽤 만족스러운 모양이다. 다행이다!',
          ]);
          era.println();
          await tachyon.say_and_wait('자, 그럼 그 가능성에 도달하기 위해 오늘의 약을……');
          era.println();
          await era.printAndWait('갑작스러운 본색 드러내기라니!?');
          await era.printAndWait([
            '방금 그런 호기로운 다짐을 한 직후라 거절할 수도 없었던 ',
            me.get_colored_name(),
            '은(는) 억지로 약을 삼켰다.',
          ]);
          await era.printAndWait([
            '머리 위에 떠 있는 천사 링을 느끼며, ',
            me.get_colored_name(),
            '은(는) 올해도 필시 평탄치 않으리라 예감했다.',
          ]);
        } else {
          await tachyon.say_and_wait([
            '흐흥! 당연하지, ',
            callname,
            ', 자네라면 당연히 그런 선택을 할 줄 알았네!',
          ]);
          await tachyon.say_and_wait(
            '우리의 꿈, 우리가 함께 쫓는 가능성. 더 넓은 미래를 위해 한계를 돌파하고 무한에 도달하는 것이네!',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 광기 어린 눈빛으로 ',
            me.get_colored_name(),
            '을(를) 바라보았고, 그 시선은 ',
            me.get_colored_name(),
            '을(를) 매료시킬 만큼 강렬했다.',
          ]);
          await era.printAndWait('그래, 우리의 꿈을 위해서……');
          era.println();
          await tachyon.say_and_wait('그러니 오늘 오세치도 자네에게 부탁하겠네.');
          era.println();
          await era.printAndWait(
            '잠깐, 오세치까지 직접 만들어야 한다는 소리는 들어본 적 없다고!?',
          );
          await era.printAndWait([
            tachyon.sex,
            '의 기대에 찬 눈빛에 못 이겨, ',
            me.get_colored_name(),
            '은(는) 결국 체념하고 국자를 들었다.',
          ]);
          await era.printAndWait('아무래도 올해도 고생길이 훤한 것 같다……');
        }
        flags.wait_flag = get_attr_and_print_in_event(32, undefined, 20);
        break;
      case 3:
        await era.printAndWait(
          '무상. 레이스 같은 건 아무래도 좋고 가능성도 그저 최선을 다할 뿐. 가장 중요한 것은 아프지도 다치지도 않는 것. 더 먼 미래를 위해서 말이다.',
        );
        era.println();
        if (relation <= 225) {
          await tachyon.say_and_wait('…………');

          era.printButton('「타키온?」', 1);
          await era.input();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이 웬일인지 침묵에 빠지자, ',
            me.get_colored_name(),
            '은(는) 의아해하며 말을 걸었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('…… 시시한 대답이군.');
          await tachyon.say_and_wait([
            '상처 없이 어떻게 역사를 만들며, 희생 없이 어떻게 창조가 있겠나. 무상이라니…… ',
            callname,
            '. 자네 대답이 이렇게나 지루할 줄은 몰랐군.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 기분이 갑자기 매우 나빠 보였다. 뭔가 말실수라도 한 것일까?',
          ]);
          era.println();
          await tachyon.say_and_wait('무상이라니…… 만약 그럴 수 있다면…… 만약……');
          era.println();
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '은(는) 곧 깨달았다. ',
            tachyon.sex,
            '의 분노는 ',
            me.get_colored_name(),
            '을(를) 향한 것이 아니라, 어떤…… 알 수 없는 대상을 향하고 있었다. 사실 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '가 화를 내는 이유조차 제대로 파악하지 못하고 있었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '…… 마음대로 하게나. 그런 시시한 소원 따위, 그런 지루한……',
          );
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '은 화가 난 채 트레이닝실을 나가버렸고, ',
            me.get_colored_name(),
            '은(는) 여전히 멍한 표정으로 남겨졌다.',
          ]);
        } else {
          await tachyon.say_and_wait('………… 음, 그렇군.');
          era.printButton('「타키온?」', 1);
          await era.input();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 분위기가 묘하게 변하자, ',
            me.get_colored_name(),
            '은(는) 의아해하며 물었다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '아, 아무것도 아니네. 그래, 트레이너라는 입장에서는 ',
            tachyon.get_uma_sex_title(),
            '의 건강이 최우선이겠지. 하지만…… 조금 지루하군.',
          ]);
          era.println();
          await era.printAndWait([
            '지루한가…… 가능성을 추구하는 ',
            tachyon.get_colored_name(),
            '이라면 확실히 그렇게 느낄 수도 있겠지만, 자신에게 가장 소중한 것은 ',
            tachyon.get_colored_name(),
            '의 건강이었다.',
          ]);
          await era.printAndWait([
            '어째서인지 ',
            tachyon.get_colored_name(),
            '의 모습이 조금 슬퍼 보였다. 애써 평정심을 유지하고 있었지만, 왠지 모를 체념 섞인 슬픔이 느껴졌다. 역시 그런 말을 하는 게 아니었을까……',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '………… 아무것도 아니네. 후후, 그렇다면 자네의 소원대로 오늘은 일찍 돌아가 푹 쉬도록 하지……',
          );
          await tachyon.say_and_wait('무상이라…… 아아……');
          era.println();
          await era.printAndWait([
            '이 제안은 ',
            me.get_colored_name(),
            '의 본심과 일치하는 것이었으나, 대체 ',
            tachyon.get_colored_name(),
            '에게 무슨 일이 있었던 것일까?',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 떠나가는 ',
            tachyon.sex,
            '의 뒷모습을 바라보며 깊은 생각에 잠겼다.',
          ]);
        }
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 20, 0, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, -1) || flags.wait_flag;
    }
    era.set('cflag:32:축제이벤트표시', 0);
  };

  handlers[47 + 5] = async (tachyon, me, callname, flags, relation) => {
    await print_event_name('중기 보고서 제출', tachyon);
    await era.printAndWait(
      '새해는 지났으나 2월의 트레센 학원은 여전히 한겨울의 추위 속에 잠겨 있었다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 훈련장을 바라보며 하얀 입김을 내뱉었다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '저 사람 오늘도 저기 서 있네.',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'B', [
      '쉿…… 조용히 해. 듣기로는 누구 트레이너라던데.',
    ]);
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'A', [
      '에…… 진짜? 벌써 사흘째 서 있잖아. 그런데 ',
      me.sex,
      '의 담당 ',
      tachyon.get_uma_sex_title(),
      '는 한 번도 못 본 것 같은데.',
    ]);
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'B', [
      '누가 알겠어…… 다른 학년에 존재감이 너무 없어서 완전히 잊혀진 ',
      tachyon.get_uma_sex_title(),
      '가 있다는 소문이 있던데, 혹시 ',
      me.sex,
      '가 맡은 게 아닐까.',
    ]);
    era.println();
    await era.printAndWait([
      '아하하…… 존재감 없는 ',
      tachyon.get_uma_sex_title(),
      ' 취급을 받고 있네, ',
      tachyon.get_colored_name(),
      ' ',
      tachyon.get_adult_sex_title(),
      '?',
    ]);
    await era.printAndWait([
      '하지만 당신이 나서서 담당 ',
      tachyon.get_uma_sex_title(),
      '가 바로 ',
      tachyon.get_colored_name(),
      '이라고 말해도 아무도 믿어주지 않을 것이다.',
    ]);
    await era.printAndWait([
      '슬픈 일이지만, 이렇게 빛나지 않는 평범한 사람이 ',
      tachyon.get_colored_name(),
      '의 트레이너라고 누가 믿겠는가.',
    ]);
    await era.printAndWait([
      '그도 그럴 것이, 며칠 동안 ',
      tachyon.get_colored_name(),
      '의 약을 전혀 마시지 않은 탓에 몸에서 빛이 나지 않은 지 벌써 며칠이나 지났기 때문이다.',
    ]);
    era.println();
    await era.printAndWait([
      '오늘은 ',
      tachyon.get_colored_name(),
      '이 훈련에 나오지 않은 지 벌써 사흘째 되는 날이었다.',
    ]);
    await era.printAndWait([
      '그뿐만 아니라 ',
      me.get_colored_name(),
      '은(는) 사흘 동안 자신의 담당 ',
      tachyon.get_uma_sex_title(),
      '의 얼굴조차 보지 못했다.',
    ]);
    await era.printAndWait([
      '약 실험조차 없었던 사흘간, ',
      me.get_colored_name(),
      '은(는) 훈련 시간에 당연히 이곳에 있어야 할 그 사람이 나타나기를 하염없이 기다렸다.',
    ]);
    era.println();
    await me.say_and_wait('아무래도 오늘도 안 오려나 보네……', true);
    await era.printAndWait([me.get_colored_name(), '이(가) 그렇게 생각하던 찰나였다.']);
    if (relation <= 225) {
      await tachyon.say_and_wait([
        '이런, ',
        callname,
        '? 자네 왜 여기 있나? 한참 찾았지 않은가.',
      ]);
      await me.say_and_wait('……');
      await era.printAndWait([
        '당연하다는 듯 평온하게 나타난 ',
        tachyon.get_colored_name(),
        '을 보며, ',
        me.get_colored_name(),
        '은(는) 이제 화를 낼 기운조차 남아있지 않았다.',
      ]);
      await era.printAndWait('어쨌든 훈련장에 왔으니…… 아니, 분명 또 약 때문이겠지……');
      era.println();
      await tachyon.say_and_wait('자, 어서 타임 측정을 도와주게나.');
    } else {
      await tachyon.say_and_wait([
        callname,
        '! 자네 요 며칠간 어디 가 있었던 건가! 도시락을 못 먹은 지 한참 됐단 말일세!!!',
      ]);
      await era.printAndWait([
        '어떻게 이렇게 적반하장일 수 있는지. 요 며칠간 ',
        tachyon.sex,
        ' 본인이 실험실 문을 걸어 잠갔기 때문이 아닌가.',
      ]);
      await tachyon.say_and_wait(
        '됐네, 요점은 그게 아니야. 어쨌든 빨리 측정이나 해주게. 새로운 실험 데이터야.',
      );
    }
    era.println();
    await era.printAndWait('음? 잠깐, 설마, 혹시?');
    await era.printAndWait([
      '눈앞의 상황을 믿을 수 없었던 ',
      me.get_colored_name(),
      '은(는) 멍하니 타이머를 눌렀고, 멍하니 ',
      tachyon.get_colored_name(),
      '이 한 바퀴 돌아오는 것을 지켜본 뒤, 다시 멍하니 정지 버튼을 눌렀다.',
    ]);
    era.println();
    await tachyon.say_and_wait('시간은?');
    era.printButton('「기…… 기존 기록보다 3초나 빨라」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 흥분을 감출 수 없었다. 며칠 훈련을 쉰 것 따위는 이미 안중에도 없었다. 이런 속도를 가진 ',
      tachyon.sex,
      '라면 반드시, 꼭……',
    ]);
    era.println();
    await era.printAndWait([
      '좋군. ',
      tachyon.get_colored_name(),
      '은 만족스러운 듯 손을 털었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, ', 그럼 기쁜 소식을 하나 알려주지.']);
    await tachyon.say_and_wait([
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '에 출주하기로 결정했네.',
    ]);
    era.println();
    await era.printAndWait([race_infos[race_enum.hoch_sho].get_colored_name()]);
    era.println();
    await era.printAndWait([
      '그것은 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '의 전초전이었다. 보통 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '을 목표로 하는 ',
      tachyon.get_uma_sex_title(),
      '들은 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '이나 ',
      race_infos[race_enum.hope_sta].get_colored_name(),
      '를 먼저 거치며 인기를 얻은 뒤에 도전한다.',
    ]);
    await era.printAndWait([
      '하지만…… ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '은 아무리 그래도 G2 레이스다. 이미 인기가 충분한 ',
      tachyon.get_colored_name(),
      '이 굳이 이 레이스에 관심을 갖는 이유는 대체……?',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '…… 어떤 것들은 반드시 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 이전에 확인해둬야만 하거든.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '의 말투에서 ',
      me.get_colored_name(),
      '은(는) 왠지 모를 불안함을 느꼈다.',
    ]);
    await era.printAndWait('하지만.');
    era.printButton('「타키온이라면 분명 괜찮을 거야」', 1);
    await era.input();
    await tachyon.say_and_wait('후훗, 자네 설마 내가 G2조차 따내지 못할 거라 생각하는 건가?');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 쓴웃음을 지으며 그런 뜻이 아니라고 해명했다.',
    ]);
    await era.printAndWait(['어쨌든 목표는 야요이상으로 결정되었다.']);
    flags.wait_flag = get_attr_and_print_in_event(32, [10, 0, 0, 0, 0], 0);
  };
};