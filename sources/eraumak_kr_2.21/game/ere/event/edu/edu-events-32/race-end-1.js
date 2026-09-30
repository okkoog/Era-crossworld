const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    relation,
  ) => {
    if (era.get('cflag:32:육성턴수합산') !== 23 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('연구 기초와 작업 조건', tachyon);
    era.printButton('「정말 멋진 달리기였어! 마치 빛 같았어!」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '고작 실험의 검산일 뿐인데 그렇게 기뻐하다니,',
      callname,
      ' 자네도 참 천진난만하군…… 아!',
    ]);
    era.printButton('왜 그래!', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 갑자기 소리를 지르는 ',
      tachyon.get_colored_name(),
      '을 보며 가슴이 철렁 내려앉았다.',
    ]);
    await me.say_and_wait('레이스 후에…… 설마, 다리가……', true);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 다급히 다가가 ',
      tachyon.get_colored_name(),
      '의 다리 상태를 확인하려 했으나……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '큰일이군 큰일이야! 게이트에 설치해 둔 출발 속도 측정 장치를 회수하는 걸 깜빡했어!',
    );
    era.println();
    extra_flag.attr_change = new Array(5).fill(0);
    if (relation > 225) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 한숨을 내쉬었다. 겨우 그것 때문이었는가.',
      ]);
      era.printButton('「문제없어, 출발 속도는 이미 기록해 뒀으니까」', 1);
      await era.input();
      await era.printAndWait([
        '비록 마음이 완전히 통하는 수준까지는 아닐지라도, ',
        tachyon.get_colored_name(),
        '의 트레이너로서',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 어떤 데이터를 필요로 할지 정도는 알고 있었다. 애초에 경기장을 달리는 ',
        tachyon.sex,
        '가 걱정할 일은 아니었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오오! 잘했네, ',
        callname,
        '! 지금 당장 확인하도록 하지!',
      ]);
      era.println();
      await era.printAndWait([
        '방금 얻은 승리도, 곧 시작될 위닝 라이브도, 그 무엇도 ',
        me.get_couple_title(),
        '의 눈에는 들어오지 않았다. 마치 방금 전의 일이 레이스가 아니라 평범한 연구였던 것처럼 보였다.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_couple_title(),
        '은 기록된 데이터를 쉴 새 없이 살펴보며 수많은 가설을 제기했다. 위닝 라이브가 시작되어 밖에서 다급하게 문을 두드리는 소리가 들리고서야 겨우 정신을 차렸다.',
      ]);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    } else {
      await era.printAndWait('뭐, 뭐라고!?');
      await era.printAndWait(
        '게이트 안에서 출발을 기다리는 동안, 이 녀석은 그런 짓을 할 여유가 있었단 말인가?',
      );
      await era.printAndWait('아니, 애초에 멋대로 게이트에 관측 장비를 설치하다니.');
      await era.printAndWait([me.get_colored_name(), '은(는) 저절로 위가 아파오는 것을 느꼈다.']);
      era.println();
      await era.printAndWait([
        '그 후, 장치를 회수하기 위해 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 경기장에 잠입했다……',
      ]);
      await era.printAndWait([
        '말할 것도 없이 URA 관계자에게 들키고 말았고, 몇 번이고 사과한 끝에 ',
        tachyon.get_colored_name(),
        '은 겨우 장치를 회수하는 데 성공했다. 모든 것이 순조로웠다.',
      ]);
      await era.printAndWait([
        '……다만, 회수하는 동안 직원들이 ',
        me.get_couple_title(),
        '을 바라보는 따가운 시선이 조금 아팠을 뿐이다.',
      ]);
      era.println();
      sys_change_fame(-5);
      await era.printAndWait('명성이 하락했다!');
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 6),
      );
    }
  };

  handlers[race_enum.hope_sta] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    relation,
  ) => {
    await print_event_name('희망', tachyon);
    if (extra_flag.rank === 1) {
      era.printButton('「정말 강했어!」', 1);
      await era.input();
      await era.printAndWait([
        '첫 G1 무대, 설령 배우가 ',
        tachyon.get_colored_name(),
        '일지라도 ',
        me.get_colored_name(),
        '은(는) 자신도 모르게 ',
        tachyon.sex,
        '를 위해 식은땀을 흘렸다.',
      ]);
      await era.printAndWait([
        '하지만 국내 최고급 레이스 위에서도 ',
        tachyon.sex,
        '가 보여준 모습은 여전히 타인을 압도하는 강함이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('후후, 그렇게 흥분하다니 너무 과장되었군.');
      era.println();
      await era.printAndWait([
        '레이스를 마치고 대기실로 돌아온 ',
        tachyon.get_colored_name(),
        '의 목소리에는 즐거움이 서려 있었다.',
      ]);
      await era.printAndWait([
        '그 목소리를 듣고 ',
        me.get_colored_name(),
        '도 깨달았다.',
      ]);
      era.printButton('「실험은 성공했지?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '그래, 그래! 아아, 역시 좋은 실험체는 중요하군! 오늘의 실험은 대성공이야!',
      );
      era.println();
      await era.printAndWait([
        '역시 ',
        tachyon.get_colored_name(),
        '에게 있어서는 G1 레이스조차 조금 더 큰 실험 무대에 불과했던 모양이다.',
      ]);
      await era.printAndWait([
        '그럼에도 불구하고 ',
        tachyon.sex,
        '는 모두를 압도하는 주법을 선보였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '그런 것보다 어서 돌아가세, 빨리 다음 레이스를 준비해야지!',
      );
      era.println();
      await me.say_and_wait('에? 왜 갑자기 의욕이 넘치는 거야?');
      await me.say_and_wait(
        '그럴 리 없다고 생각하지만, 설마 레이스에 대한 열정이 깨어난 건가……?',
        true,
      );
      era.println();
      await tachyon.say_and_wait(
        '내 머릿속에는 이미 다음 레이스 실험에 대한 청사진이 그려져 있다네! 하하하!',
      );
      era.println();
      await era.printAndWait(
        '……뭐, 어찌 됐든 실험에 대한 열정도 열정이라 할 수 있겠지.',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 ',
        race_infos[race_enum.hope_sta].get_colored_name(),
        '가 종료되었다.',
      ]);
    } else {
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        '레이스가 끝난 후, ',
        me.get_colored_name(),
        '은(는) 묵묵히 대기실로 돌아가는 ',
        tachyon.get_colored_name(),
        '을 보았다.',
      ]);
      await era.printAndWait('가는 내내 누구도 입을 열지 않았다.');
      await era.printAndWait([
        '이번 레이스의 패배는 ',
        me.get_colored_name(),
        '에게도, ',
        tachyon.sex,
        '에게도 중대한 타격이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……실험, 실패했군.');
      era.println();
      await era.printAndWait([
        '이번 레이스에서 ',
        tachyon.get_colored_name(),
        '의 상태는 확실히 이상했다……',
      ]);
      await era.printAndWait([
        '일반적인 사람들은 알아채지 못했겠지만, 오늘의 달리기에서는 ',
        tachyon.sex,
        '가 가진 특유의…… 광채가 보이지 않았다.',
      ]);
      await era.printAndWait([
        '처음부터 흐릿했던 빛은 레이스 후반에 이르러 거의 완전히 꺼져버렸고, 그 결과 ',
        tachyon.get_colored_name(),
        '은 패배했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……');
      era.printButton(
        '「……괜찮아, 고작 한 번 실험에 실패했을 뿐이야. 돌아가자, 실험이 늘 성공할 수는 없잖아?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 무심코 ',
        tachyon.sex,
        '를 위로했다.',
      ]);
      await era.printAndWait([
        '하지만 바닥에 주저앉은 ',
        tachyon.sex,
        '는 왠지 모르게 기묘한 표정을 짓고 있었다.',
      ]);
      await era.printAndWait('후회가 아니라…… 마치 무언가를 견디고 있는 듯한?');

      era.printButton('「타키온……? 몸 상태가……」', 1);
      await era.input();
      if (relation <= 225) {
        await tachyon.say_and_wait('아무것도 아니네, 걱정하지 말게…… 가세.');
        era.println();
        await era.printAndWait([
          '어쩌면, 아직 ',
          tachyon.sex,
          '의 마음의 벽을 허물지 못한 것일지도 모른다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 아무 말 없이 ',
          tachyon.sex,
          '의 뒤를 따라 자리를 떴다.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '……괜찮네, ',
          callname,
          ', 내 다리는…… 문제없어. 다음에 다시 조정하면 괜찮을 걸세.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 오히려 위로하듯 말하며 ',
          me.get_colored_name(),
          '을(를) 안심시키려 했다.',
        ]);
        await era.printAndWait([
          '평소 자신만만하던 ',
          tachyon.sex,
          '의 모습을 떠올리자, ',
          me.get_colored_name(),
          '의 마음도 서서히 평온을 되찾았다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          { content: '…………플랜 B인가…… 어쩌면……', fontSize: '0.75rem' },
        ]);
        era.println();
        await era.printAndWait([
          '다만, ',
          tachyon.sex,
          '가 들리지 않을 거라 생각하며 중얼거린 단어들이 ',
          me.get_colored_name(),
          '의 마음을 다시금 무겁게 만들었다.',
        ]);
        extra_flag.attr_change = [0, 0, 3, 0, 0];
      }
    }
  };

  handlers[race_enum.hoch_sho] = async (
    tachyon,
    me,
    callname,
    extra_flag,
    _,
    __,
    love,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('대조 실험 결과 분석', tachyon);
    await era.printAndWait([
      '당연하게도, ',
      tachyon.get_colored_name(),
      '은 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '에서 우승했다.',
    ]);
    era.printButton('「정말 대단한 레이스였어!」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '후우…… 후우…… 후후, 자네 반응은 정말이지 매번 과하군. 난 진심으로 달리지도 않았는데 뭐가 대단하다는 건가.',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '가 장난스러운 말투로 말했다.']);
    era.println();
    await me.say_and_wait('전혀 과장 아니야.');
    await me.say_and_wait(
      '진심으로 달렸든 아니든, 타키온의 주법은 똑같이 나를 매료시켜. 마치…… 그래, 광전자 같아.',
    );
    era.println();
    await tachyon.say_and_wait('광전자……?');
    era.println();
    await me.say_and_wait(
      '전극에 내리쬐는 광선은 강약에 상관없이 전극에서 전자를 방출시키지. 이건 빈도, 즉 규격의 차이로 인해 발생하는 거야.',
    );
    await me.say_and_wait(
      '강하든 약하든, 진심이든 아니든, 타키온의 달리기는 나에게 있어서 차원을 초월한, 유일하게 전극에서 전자를 끄집어낼 수 있는 빛이야.',
    );
    era.println();
    await tachyon.say_and_wait('……그게 무슨 비유인가.');
    era.println();
    await me.say_and_wait('에에…… 별로야?');
    await me.say_and_wait('나름 시간 들여서 생각한 거라 꽤 자신 있었는데……');
    era.println();
    if (love > 75) {
      await tachyon.say_and_wait(
        '하지만…… 무슨 뜻인지는 알겠네. 그러니까, 자네는 나만이 풀 수 있는 정조대를 차고 있다는 소리군?',
      );
      await era.printAndWait('아니, 그 비유가 더 최악인데……');
    } else {
      await tachyon.say_and_wait(
        '하지만…… 무슨 뜻인지는 알겠네. 그러니까 어떻게 달리든 나이기만 하면 자네를 만족시킬 수 있다는 뜻이지?',
      );
    }
    await me.say_and_wait('그래도 역시 타키온이 진심으로 달려줬으면 좋겠어.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득 ',
      tachyon.get_colored_name(),
      '이 레이스 전에 말했던 테스트를 떠올렸다……',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……별문제 없네. 적어도, ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '까지는 문제없을 거야.',
    ]);
    era.println();
    await era.printAndWait('적어도…… 인가?');
    await era.printAndWait([
      '도저히 안심할 수 없는 단어에 ',
      me.get_colored_name(),
      '도 침묵에 빠졌다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……이 이야기는 그만하지. 어서 돌아가서 실험을 계속하세.');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '의 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '이 종료되었다.',
    ]);
    await era.printAndWait([
      '다음 목표인 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '이 눈앞으로 다가왔다!',
    ]);
    extra_flag.attr_change = [0, 0, 0, 0, 5];
  };

  handlers[race_enum.sats_sho] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name([tachyon.get_uma_sex_title(), '의 한계'], tachyon);
    await tachyon.say_and_wait([callname, ' 자네도 보았나?']);
    era.println();
    await era.printAndWait([
      race_infos[race_enum.sats_sho].get_colored_name(),
      '을 마친 ',
      tachyon.get_colored_name(),
      '은 지금까지 받은 것 중 가장 뜨거운 환호를 받았다.',
    ]);
    await era.printAndWait([
      '관객들이 흥분한 이유를 ',
      me.get_colored_name(),
      '도 이해할 수 있었다.',
    ]);
    await era.printAndWait([
      '오늘의 ',
      tachyon.get_colored_name(),
      '이 보여준 모습은 완벽 그 자체였다.',
    ]);
    await era.printAndWait([
      '아니, 만약 ',
      tachyon.get_uma_sex_title(),
      '에게 한계라는 것이 존재한다면, 그것은 바로 오늘의 ',
      tachyon.get_colored_name(),
      '일 것이라고 단언할 수 있었다.',
    ]);
    await era.printAndWait('빛과 같은 속도, 빛과 같은 광채, 그리고 빛과 같이…… 덧없는 느낌이었다.');
    era.println();
    await era.printAndWait('마치 질주가 끝나면 빛처럼 사라져 버릴 것만 같은 주법이었다.');
    await era.printAndWait([
      '결승선을 통과하는 순간, 그 누구도 소리 내지 못했다. 언제나 ',
      tachyon.get_colored_name(),
      '의 실력을 믿어 의심치 않던 당신조차 믿기 힘든 광경이었다.',
    ]);
    await era.printAndWait([
      '그런 주법은 오직 ',
      tachyon.get_uma_sex_title(),
      '라는 생물의 한계라고밖에는 설명할 길이 없었다.',
    ]);
    await era.printAndWait(
      '보는 순간 「아아, 저런 달리는 방식은 그 누구도 뛰어넘을 수 없겠구나」라고 느끼게 만드는 주법이었다.',
    );
    era.println();
    await tachyon.say_and_wait([callname, '…… 이것이 바로, 우리가 초월해야 할 한계라네.']);
    era.println();
    await era.printAndWait('자기 자신을 한계로 정의한다.');
    await era.printAndWait('이 얼마나 오만한 발언인가.');
    await era.printAndWait(
      '하지만 방금 전의 레이스를 본 사람이라면, 그 누구라도 그런 오만에 찬성할 수밖에 없었다.',
    );
    era.println();
    await tachyon.say_and_wait(
      '……그래. 이런 속도를 넘어서야만 비로소 한계를 초월했다고 할 수 있지. 그렇지 않으면 모든 것이 공염불에 불과해.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 이 말을 내뱉으며 대답을 기다리듯 당신의 눈을 똑바로 응시했다.',
    ]);
    await era.printAndWait([
      '이 말의 속뜻을 ',
      me.get_colored_name(),
      '은(는) 이해할 수 있었다.',
    ]);
    await era.printAndWait('너는 저런 속도를 뛰어넘을 자신이 있는가?');
    era.printButton('「당연히 가능해」', 1);
    era.printButton('「타키온이니까, 무조건 가능해」', 2);
    await era.input();
    await era.printAndWait('거의 찰나의 순간이었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 의중을 파악한 ',
      me.get_colored_name(),
      '은(는) 즉각 대답했다.',
    ]);
    await era.printAndWait('생각할 필요도, 더 고민할 이유도 없었다.');
    await era.printAndWait([
      '눈앞의 이 ',
      tachyon.get_uma_sex_title(),
      '는 한계를 초월할 힘을 지니고 있었다.',
    ]);
    await era.printAndWait('그것은 처음 만났을 때부터 이미 확신하고 있던 사실이었다.');
    await era.printAndWait([
      '지금은 그저 ',
      me.get_colored_name(),
      '과(와) ',
      tachyon.sex,
      '의 목표를 눈앞에 두었을 뿐이었다.',
    ]);
    await era.printAndWait('이미 목표가 보인다면, 그것은 반드시 뛰어넘을 수 있는 것이다.');
    era.println();
    await tachyon.say_and_wait('이렇게나 빠른 반응과 사고…… 아니, 본능인가? 자네는……');
    era.println();
    await era.printAndWait([
      '왠지 모르게 ',
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '을(를) 보며 묘한 표정을 지었다.',
    ]);
    await era.printAndWait([
      '잠시 후, ',
      tachyon.sex,
      '는 마치 무언가 결심한 듯 입을 열었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['그럼, 한번 해보도록 하지, ', callname, '……']);
    await tachyon.say_and_wait('하지만 우선, 다음 레이스부터 확실히 확인해 두세……');
    await tachyon.say_and_wait([
      '현재로서는 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '에 출주할 수 있다는 건 확실하니, 그걸 목표로 준비함세, ',
      callname,
    ]);
    era.println();
    await era.printAndWait('……또 시작이군.');
    await era.printAndWait([
      '만약 ',
      tachyon.get_colored_name(),
      '에게 ',
      me.get_colored_name(),
      '을(를) 불안하게 만드는 요소가 있다면, 오직 이것뿐이었다.',
    ]);
    await era.printAndWait('……마치 다음 레이스가 마지막인 것처럼 구는 불확실한 태도.');
    await era.printAndWait([
      '하지만 ',
      tachyon.get_colored_name(),
      '이라면 분명 이 모든 불확실함을 뛰어넘어 주리라.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 그렇게 낙관적으로 생각했다.']);
    era.println();
    await era.printAndWait([
      '다음 레이스는 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '로 결정되었다!',
    ]);
    extra_flag.attr_change = [0, 0, 5, 0, 0];
  };

  handlers[race_enum.toky_yus] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('실험 목적 조정', tachyon);
    era.printButton('「타키온! 정말 멋졌어!」', 1);
    await era.input();
    await tachyon.say_and_wait('으음……');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 평소처럼 ',
      tachyon.get_colored_name(),
      '의 달리는 모습을 칭찬하려 했지만……',
    ]);
    era.println();
    await tachyon.say_and_wait('……실험은 성공하지 못했군.');
    era.println();
    await era.printAndWait('응?');
    await era.printAndWait('그렇게 멋지게 달렸는데도 실험은 성공하지 못한 건가.');
    era.println();
    await tachyon.say_and_wait([
      sys_get_colored_callname(32, 94),
      '…… 비록 기대되기는 하지만, ',
      tachyon.sex,
      '의 가능성은 내가 찾고 있는 것과는 일치하지 않는군…… 역시, ',
      sys_get_colored_callname(32, 25),
      '인가……',
    ]);
    era.println();
    await era.printAndWait([
      '왠지 모르게 ',
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '이(가) 알아듣기 힘든 말을 중얼거렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……여하튼, 이 이야기는 여기까지 하세. 이제부터 실험의 핵심에 들어갈 테니.',
    );
    era.println();
    await era.printAndWait([
      '잘은 모르겠지만, ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 진지한 표정을 보며 자신도 모르게 자세를 바로잡았다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '다음 레이스는…… 아직…… 확정할 수 없군…… 생각을 정리할 시간이 좀 필요해.',
    );
    era.println();
    await era.printAndWait([
      '불확실함으로 가득 찬 말에 ',
      me.get_colored_name(),
      '의 레이스 직후의 기쁨은 순식간에 불안으로 바뀌었다.',
    ]);
  };

  handlers[race_enum.kiku_sho] = async (tachyon, me, callname, extra_flag) => {
    if (extra_flag.rank === 1) {
      await print_event_name('이길 거야', tachyon);
      const race_history = RaceHistory.get(32);
      if (
        check_aim_race(race_history.get(), race_enum.sats_sho, 1, 1) &&
        check_aim_race(race_history.get(), race_enum.toky_yus, 1, 1)
      ) {
        if (race_history.get_values().findIndex((e) => e.rank !== 1) !== -1) {
          await say_by_passer_by_and_wait('해설', [
            '3관 ',
            tachyon.get_uma_sex_title(),
            ' 탄생! 금세기 최강! 가장 빠르고 행운이 따르는 최강의 ',
            tachyon.get_uma_sex_title(),
            '는 바로 ',
            tachyon.get_colored_name(),
            '!',
          ]);
        } else {
          await say_by_passer_by_and_wait('해설', [
            '무패 3관 탄생! 역사의 수레바퀴가 다시 한번 움직였습니다! ',
            tachyon.get_colored_name(),
            ', 무패 3관 달성!',
          ]);
        }
      } else {
        await say_by_passer_by_and_wait('해설', [
          '수많은 강적을 제치고 가장 먼저 결승선을 통과한 것은 초광속의 ',
          tachyon.sex_code - 1 ? '공주' : '왕자',
          ', ',
          tachyon.get_colored_name(),
          '! 국화상 최강의 ',
          tachyon.get_uma_sex_title(),
          '는 바로 ',
          tachyon.get_colored_name(),
          '!',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 국화상을 차지했다. 그야말로 명불허전의 승리였다.',
      ]);
      await era.printAndWait(
        '그러나 승리를 축하할 겨를도 없이, 예기치 못한 불청객이 찾아왔다.',
      );
    } else {
      await print_event_name('불꽃이 일다', tachyon);
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait([
        '레이스가 끝났다. 영광스러운 국화상, 최강의 ',
        tachyon.get_uma_sex_title(),
        '를 가리는 경합.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 담당하는 ',
        tachyon.get_uma_sex_title(),
        ', ',
        tachyon.get_colored_name(),
        '은 이 레이스에서 패배하고 말았다.',
      ]);
      await era.printAndWait([
        '레이스가 끝나고 대기실에 들어온 후에도 ',
        me.get_couple_title(),
        ' 두 사람은 줄곧 침묵을 유지했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 가만히 ',
        tachyon.sex,
        '의 얼굴을 살폈지만, ',
        tachyon.sex,
        '의 속마음을 짐작할 수 없었다.',
      ]);
      await era.printAndWait('침묵의 압박이 한계에 도달했을 무렵……');
      era.println();
      await tachyon.say_and_wait('후후……');

      era.printButton('「타키온……?」', 1);
      await era.input();
      await tachyon.say_and_wait('절대 지지 않을 거라 생각했는데…… 이런, 결국 추월당했군.');
      await tachyon.say_and_wait([
        '역시 ',
        tachyon.get_uma_sex_title(),
        '의 가능성은 레이스 중에서만 탐구할 수 있는 것이었나.',
      ]);
      await tachyon.say_and_wait('졌어, 졌어.');
      era.println();
      await era.printAndWait([
        '타키온의 태도는 ',
        me.get_colored_name(),
        '의 예상외로 담담했다.',
      ]);
      await era.printAndWait([
        '그렇군…… ',
        tachyon.sex,
        '에게 있어 레이스는 어찌 됐든 실험의 연장선일 뿐이니까.',
      ]);
      await era.printAndWait('실험에는 성공과 실패가 있듯, 레이스도 마찬가지였다.');
      await era.printAndWait('실패했다면 교훈을 얻으면 그만인 것이다.');
      era.println();
      await era.printAndWait([
        '이런 태도가 승부에 적합한지는 차치하더라도, 적어도 ',
        tachyon.sex,
        '가 큰 충격을 받지 않은 것 같아 안심이 되었다.',
      ]);
      era.println();
      await era.printAndWait(
        '그러나 안도하기도 잠시, 예기치 못한 불청객이 찾아왔다.',
      );
    }
    era.println();
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee_rec = era.get('cflag:25:모집상태') === recruit_flags.yes,
      coffee_love = era.get('love:25');
    await coffee.say_and_wait([c_call_t, '…… 당신의 오늘 주법……']);
    await tachyon.say_and_wait(['이런, ', t_call_c, ', 무슨 일인가?']);
    era.println();
    await era.printAndWait([coffee.get_colored_name()]);
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), '의 플랜 B의 후계자']);
    await era.printAndWait([tachyon.get_colored_name(), '의 플랜 A의 시금석']);
    if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
      await era.printAndWait([
        '이번 국화상에서 ',
        tachyon.get_colored_name(),
        ' 최대의 적.']);
    }
    if (coffee_rec) {
      await era.printAndWait([
        '동시에 ',
        me.get_colored_name(),
        '이(가) 담당하는 또 다른 ',
        tachyon.get_uma_sex_title(),
        '이기도 했다.',
      ]);
    }
    era.println();
    await coffee.say_and_wait([c_call_t, ', 당신의 주법, 이전과는 달라졌어요……']);
    await tachyon.say_and_wait(
      '후후, 무슨 문제라도 있나? 주법이란 원래 끊임없이 진화하는 법이지.',
    );
    await coffee.say_and_wait('별건 아닙니다…… 다만, 축하해요. 또 다른 자신을 뛰어넘은 것을.');
    await tachyon.say_and_wait([
      '……또 다른 자신? 잠깐, ',
      t_call_c,
      '! 그게 무슨 소린가!',
    ]);
    await coffee.say_and_wait(
      '……과연 무슨 뜻일까요? 저도 그저 친구가 한 말을 전했을 뿐이니까요.',
    );
    if (coffee_rec) {
      const c_call_m = sys_get_callname(25, 0);
      if (coffee_love >= 75) {
        await coffee.say_and_wait([
          '그리고, 아무리 담당 ',
          tachyon.get_uma_sex_title(),
          '라고는 해도…… 다른 사람의 애인을 너무 오래 점유하지 말아주세요. ',
          c_call_t,
        ]);
        await era.printAndWait([
          '말을 마친 후, ',
          coffee.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 뺨에 입을 맞추며 소유권을 주장했다.',
        ]);
      } else if (coffee_love >= 50) {
        await coffee.say_and_wait([
          '오늘은 특별한 날이니까 ',
          c_call_m,
          '을 잠시 빌려주겠지만…… 나중에 꼭 돌려줘야 해요.',
        ]);
      } else {
        await coffee.say_and_wait(['맞다…… 이따가 잊지 말고 ', c_call_m, '을 돌려주러 오세요.']);
      }
    }
    era.println();
    await tachyon.say_and_wait([t_call_c, '! ………… 쳇, 가버렸군……']);
    await era.printAndWait([
      '괜찮아? ',
      me.get_colored_name(),
      '은(는) 걱정스러운 눈빛으로 ',
      tachyon.get_colored_name(),
      '을 바라보았다.',
    ]);
    if (coffee_love >= 75) {
      const love = era.get('love:32');
      if (love < 50) {
        await tachyon.say_and_wait([
          '아무것도 아니네…… 그건 그렇고, ',
          callname,
          ', 자네 꽤나 인기가 많군.',
        ]);
      } else if (love < 75) {
        await tachyon.say_and_wait([
          '아무것도 아니네…… 그건 그렇고 ',
          callname,
          ', 자네의 여성 편력은 참 화려하군.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '아무것도 아니네…… 그보다 ',
          callname,
          '…… 자네의 여성 편력이 참 화려하단 말이지.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 이를 갈며 뒤를 돌아보며 말했다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          t_call_c,
          '에게 더럽혀진 곳을 확실히 소독해야겠어!',
        ]);
        era.println();
        await era.printAndWait([
          '그것을 핑계 삼아 ',
          tachyon.sex,
          '는 ',
          me.get_colored_name(),
          '의 뺨에 계속해서 입을 맞추었다. 조금 전 ',
          coffee.get_colored_name(),
          '가 남긴 입맞춤을 수십 배, 수백 배로 덮어버리려는 듯이.',
        ]);
      }
    }
    era.println();
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        '어찌 됐든, ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 영광스러운 국화상은 막을 내렸다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 클래식 전선이 종료되었다!',
      ]);
    }
    extra_flag.attr_change = [0, 10];
  };
};