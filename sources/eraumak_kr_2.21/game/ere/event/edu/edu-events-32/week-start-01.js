const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  const drug_colors = ['무지개'];

  '진한/연한'
    .split('/')
    .forEach((d) =>
      '빨강/주황/노랑/초록/파랑/남/보라/회/은/금'
        .split('/')
        .forEach((c) => drug_colors.push(`${d} ${c}`)),
    );

  handlers.try_drug = async (tachyon, me, callname, flags) => {
    await print_event_name('시약', tachyon);
    await tachyon.say_and_wait([
      '이런, ',
      callname,
      ', 마침 잘 왔네. 이건 오늘의 약일세.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) ',
      get_random_entry(drug_colors),
      '색을 띠는 약병을 ',
      me.get_colored_name(),
      '에게 건네주었다.',
    ]);
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 두말없이 약을 들이켰다.']);
    const buffer = [
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 약을 마신 뒤 갑자기 목이 몹시 가려워짐을 느꼈다.',
        ]);
        await era.printAndWait('참지 못하고 기침을 내뱉자, 뜻밖에도 입에서 불꽃이 튀어나왔다.');
        era.println();
        await tachyon.say_and_wait('이런이런, 아무래도 드래곤 브레스 약물 효과가 아주 좋은 모양이네.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 기쁜 표정으로 실험 데이터를 기록했으나, 뒤따라올 결과까지는 예상치 못했다. 뱉어낸 불꽃이 하필 ',
          tachyon.sex,
          '의 곁에 있던 실험 기록에 옮겨붙고 말았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어라... 어디선가 탄내가... 내 실험 데이터가!!??',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 서둘러 아직 타지 않은 실험 기록들을 구하기 시작했다. ',
          me.get_colored_name(),
          '도 거들려 했으나, 목이 너무 가려워 움직일 수가 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('콜록! 콜록!!');
        era.println();
        await era.printAndWait([
          '약효가 사라지기 전까지, ',
          tachyon.get_colored_name(),
          '은 그저 이리저리 뛰어다니며 자료를 수습할 뿐이었다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [5, 0, 0, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, -1) || flags.wait_flag;
      },
      async () => {
        const coffee = get_chara_talk(25);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 약을 마신 뒤 눈앞의 세상이 갑자기 선명하게 보이기 시작했다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '은(는) 이것이 환각제가 아닌지 의심하기 시작했다. 왜냐하면 ',
          me.get_colored_name(),
          '의 눈에 기묘한 것들이 보이기 시작했기 때문이다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '오? 뭔가 효과가 있는 모양이군? 이건 ',
          sys_get_colored_callname(32, 25),
          '이 말했던 다른 세계를 보는 듯한 느낌을 토대로 만든 영시 물약이야.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 대체 무엇을 만들어 낸 것인가! 이건 이미 정상적인 화학의 영역을 넘어선 게 아닌가!?',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '마침 잘됐네. 지금 보인다면 내 몸 상태를 좀 봐주지 않겠나?',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그 말을 듣고 무심코 ',
          tachyon.get_colored_name(),
          '을 쳐다보았다.',
        ]);
        await era.printAndWait([
          '그 순간, ',
          me.get_colored_name(),
          '의 의식은 순식간에 정지되었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '어제 ',
          sys_get_colored_callname(32, 25),
          '에게 달라붙어 있다가 그녀를 화나게 만든 모양이야. 어제 돌아온 뒤부터 몸이 계속 무겁네...',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '의 눈에는 어떤 검은 그림자가 두 손으로 ',
          tachyon.get_colored_name(),
          '의 어깨를 짓누르고 있는 것이 보였다.',
        ]);
        await era.printAndWait([
          '그림자는 ',
          me.get_colored_name(),
          '의 시선을 눈치챘는지, 얼굴로 추정되는 부위에 손가락을 대고 "쉿" 하는 포즈를 취했다.',
        ]);
        await era.printAndWait([
          '그 뒤로 ',
          me.get_colored_name(),
          '은(는) 아무 말도 할 수 없게 되었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '...이상하네. 정말 아무것도 없는 건가? 왜 이렇게 몸이 무겁지.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 이상을 눈치채지 못한 채, 혼잣말을 중얼거리며 방을 나갔다.',
        ]);
        await era.printAndWait([
          '그제야 ',
          me.get_colored_name(),
          '은(는) 겨우 숨을 크게 몰아쉴 수 있었다. 그 검은 그림자의 정체는 대체 무엇이었을까...',
        ]);
        era.println();
        await era.printAndWait([
          '덧붙여서, 다음날 ',
          tachyon.get_colored_name(),
          '은 다시 정상으로 돌아왔다. 아무래도 ',
          coffee.get_colored_name(),
          '가 준 가벼운 징벌이었던 모양이다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 5, 0, 0, 0], 0);
      },
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 약을 마시자마자 전신이 몹시 뻣뻣해짐을 느꼈다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 현재 자신의 몸이 입과 머리를 제외하고는 전혀 움직이지 않는다는 사실을 공포와 함께 깨달았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '이런... 원래는 신체의 충격 내성을 강화하는 약을 만들려 했는데, 석화와 비슷한 효과가 되어버린 건가...',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '에겐 ',
          tachyon.get_colored_name(),
          '의 실험 후 감상을 들어줄 여유가 없었다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '의 마음은 매우 초조해졌다.']);
        await era.printAndWait('필사적으로 몸을 움직이려 했지만 꿈쩍도 하지 않았다.');
        await era.printAndWait(
          '곧바로 훈련장 시간 분배에 관한 회의가 예정되어 있었다. 오늘 참석하지 못하면 앞으로 한 달 동안 훈련장을 사용할 수 없게 된다.',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 사태의 심각성을 ',
          tachyon.get_colored_name(),
          '에게 알렸다.',
        ]);
        await era.printAndWait([tachyon.sex, '역시 큰일임을 직감했다.']);
        era.println();
        await tachyon.say_and_wait('훈련장을 못 쓰면 내 약물의 효과를 어떻게 확인하라는 거야!?');
        era.println();
        await era.printAndWait([
          '어찌 됐든 원인을 따질 때가 아니었다. 지금 급선무는 ',
          me.get_colored_name(),
          '을(를) 회의실로 옮기는 것이었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 힘겹게 ',
          me.get_colored_name(),
          '을(를) 들어 올려 회의실로 향했다.',
        ]);
        await era.printAndWait([
          '어째서인지 약을 마신 뒤의 ',
          me.get_colored_name(),
          '의 몸은 유독 무거웠다. ',
          tachyon.get_colored_name(),
          '이 ',
          tachyon.get_uma_sex_title(),
          '의 힘으로 ',
          me.get_colored_name(),
          '을(를) 들어 올리는 데에도 꽤나 고생을 해야 했다.',
        ]);
        await era.printAndWait([
          '천신만고 끝에 겨우 ',
          me.get_colored_name(),
          '을(를) 회의실까지 옮겼고, 이상을 들키지 않기 위해 ',
          tachyon.get_colored_name(),
          '은 옆에서 회의가 끝날 때까지 동석했다.',
        ]);
        era.println();
        await era.printAndWait([
          '그날 이후, 학원에서는 왠지 모르게 ',
          tachyon.get_colored_name(),
          '과(와) ',
          me.get_colored_name(),
          '의 스캔들이 퍼지기 시작했다.',
        ]);
        await say_by_passer_by_and_wait(
          `지나가는 ${tachyon.get_uma_sex_title()} A`,
          '들은 바에 의하면 공주님 안기로 안아서 회의실까지 데려갔다나 봐.',
        );
        await say_by_passer_by_and_wait(
          '지나가는 트레이너 A',
          '회의 중에도 곁을 지키면서 차를 타다 주는 등, 완전히 내조하는 아내의 모습이었다더군.',
        );
        await say_by_passer_by_and_wait(`지나가는 ${tachyon.get_uma_sex_title()} B`, [
          '그 ',
          tachyon.get_colored_name(),
          '이 연애를 할 줄이야...',
        ]);
        era.println();
        await era.printAndWait('...어째서 그런 스캔들이 생긴 것일까.');
        await era.printAndWait([
          '그리고 왜 그런 소문을 들었을 때, ',
          tachyon.get_colored_name(),
          '의 얼굴이 조금 붉어진 것 같았을까.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 5, 0, 0], 0);
        flags.wait_flag = sys_change_motivation(32, 1) || flags.wait_flag;
      },
      async () => {
        await era.printAndWait([
          '약물은 ',
          me.get_colored_name(),
          '이(가) 마시기도 전에 분홍색 짙은 안개를 뿜어내어, ',
          me.get_colored_name(),
          '과(와) ',
          tachyon.get_colored_name(),
          '을 안개 속에 가두어 버렸다.',
        ]);
        era.println();
        await tachyon.say_and_wait('콜록! 어떻게 된 거지!?');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 고개를 저으며 모른다는 의사를 표시했다. 애초에 약의 효과조차 몰랐던 ',
          me.get_colored_name(),
          '이(가) 상황을 알 리가 없었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '분명 평범한 정력제였을 텐데... 일단 창문이랑 문을 열어서 안개를 빼자.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 서둘러 창가로 가서 창문을 열려 했다. 그러나,',
        ]);
        era.println();
        await tachyon.say_and_wait('윽, 몸에 힘이 들어가지 않아...!');
        era.println();
        await era.printAndWait([
          '그동안 ',
          me.get_colored_name(),
          '은(는) 의자에 정좌한 채 꼼짝도 하지 않았다. 그것은 ',
          me.get_colored_name(),
          '의 마음에 여유가 있어서가 아니었다.',
        ]);
        await era.printAndWait([
          '그 이유는 ',
          me.get_colored_name(),
          me.sex_code - 1 ? '의 아랫도리가 이미 범람 상태였기 때문이었다.': '의 하반신의 동지(?)가 이미 꼿꼿하게 일어섰기 때문이었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이 말한 정력제를 떠올렸다. 일반적인 의미의 정력제란... 대개 그쪽 방면의 약을 뜻한다.',
        ]);
        await era.printAndWait([
          '대체 왜 ',
          tachyon.get_colored_name(),
          '이 그런 약을 만들었는지 ',
          me.get_colored_name(),
          '은(는) 의구심이 들었으나, 지금은 그런 걸 생각할 때가 아니었다. 왜냐하면...',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '... 내 몸이... 너무 뜨거워...']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 하트 모양이 된 눈으로 ',
          me.get_colored_name(),
          '을(를) 바라보았다. 그 눈동자에는 약간의 공포, 그리고 그보다 더 큰 정욕이 서려 있었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 모습을 본 ',
          me.get_colored_name(),
          '은(는)...',
        ]);
        if (
          !era.get('exp:32:성관계횟수') ||
          era.get('relation:32:0') <= 225 ||
          !get_sex_acceptable(32)
        ) {
          era.println();
          await era.printAndWait([
            '안 돼. ',
            tachyon.sex,
            '는 ',
            me.get_colored_name(),
            '이(가) 담당하는 ',
            tachyon.get_uma_sex_title(),
            '이다. ',
            me.get_colored_name(),
            '은(는) 이런 짓을 해서는 안 된다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 냉정하게 ',
            tachyon.sex,
            '를 거절했다. 다행히 ',
            tachyon.get_colored_name(),
            '역시 어느 정도의 이성은 유지하고 있는 듯했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '괜찮아... 이 약의 효과는 길어봐야 한 시간... 한 시간만 버티면...',
          );
          await era.printAndWait([
            me.get_couple_title(),
            '은 더는 아무 말도 하지 않았다. ',
            me.get_colored_name(),
            '과(와) 바닥에 몸을 축 늘어뜨리고 앉은 ',
            tachyon.sex,
            '는 묵묵히 시간이 흐르길 기다렸다.',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 필사적으로 참고 있었으나, 시선은 자꾸만 ',
            tachyon.get_colored_name(),
            '의 방향으로 향했다.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 전신은 땀으로 흠뻑 젖어 있었다. 아마 ',
            me.get_colored_name(),
            '역시 마찬가지일 것이다. 가운을 걸치고 있었기에 옷이 비쳐서 보이지는 않았지만...',
          ]);
          era.println();
          await era.printAndWait([
            '그러나 결국 실수가 생겼다. 본래 한 치수 컸던 흰 가운이 땀에 젖어 ',
            tachyon.get_colored_name(),
            '의 몸의 곡선에 밀착되고 만 것이다.',
          ]);
          tachyon.sex_code - 1 &&
            (await era.printAndWait([
              '둥글게 솟은 둔부의 풍만함과 그 사이의 깊은 골, 가슴의 그리 크지 않지만 단단한 봉우리까지 ',
              me.get_colored_name(),
              '의 눈에 선명하게 그려졌다.',
            ]));
          era.println();
          await tachyon.say_and_wait([callname, '...']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            me.get_colored_name(),
            '의 시선을 눈치챈 듯 나무라듯 이름을 불렀다. 하지만 정욕에 젖은 그 목소리는 ',
            callname,
            '이라는 이름을 요염한 색채로 물들였다. ',
            me.get_colored_name(),
            '은(는) 서둘러 사과하며 시선을 거두었다.',
          ]);
          era.println();
          await era.printAndWait('인내, 인내, 인내.');
          await era.printAndWait([
            '드디어 약효가 서서히 가라앉기 시작했다. ',
            tachyon.get_colored_name(),
            '은 힘들게 몸을 일으켰고, 오늘은 여기까지 하자는 말만 남긴 채 황급히 트레이닝실을 떠났다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 머리를 흔들어 오늘 있었던 일을 떨쳐내려 했으나, ',
            tachyon.get_colored_name(),
            '의 그 아름다운 몸매는 여전히 ',
            me.get_colored_name(),
            '의 뇌리에 남아 잊히지 않았다.',
          ]);
          era.println();
          await era.printAndWait([
            '덧붙여서, 나중에 ',
            me.get_colored_name(),
            '이(가) ',
            tachyon.get_colored_name(),
            '에게 물어보니, 그 정력제는 교내의 어느 비밀 상점에 공급하는 물건이라고 했다.',
          ]);
          await era.printAndWait([
            '듣기로는 그것이 ',
            tachyon.sex,
            '의 주요 연구 자금원이라고 한다. 학원을 좀 더 돌아다녀 보면 찾을 수 있을지도...?',
          ]);
          flags.wait_flag = get_attr_and_print_in_event(
            32,
            [0, 0, 0, 10, 0],
            0,
          );
          flags.wait_flag =
            get_attr_and_print_in_event(
              0,
              [0, 0, 0, 10, 0],
              0,
              undefined,
              true,
            ) || flags.wait_flag;
          flags.wait_flag = sys_love_uma(32, 5) || flags.wait_flag;
        } else {
          await quick_into_sex(32);
        }
      },
      async () => {
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 약을 마시자 전신에서 갑자기 빛이 나기 시작했다. ',
          me.get_colored_name(),
          '은(는) 당황했으나, ',
          tachyon.get_colored_name(),
          '은 여전히 흥분한 기색이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('빨리, 옷을 벗어.');
        era.println();
        await era.printAndWait(['이 녀석이 대체 무슨 소릴 하는 거지!?']);
        await era.printAndWait(['변태인가!? 요즘 트레센에서 유행하는 그 치한인가!?']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 서둘러 제 옷을 여몄으나, 인간은 끝내 ',
          tachyon.get_uma_sex_title(),
          '의 힘을 이길 수 없었다. 약 3초간의 실랑이 끝에 ',
          me.get_colored_name(),
          '의 옷은 갈기갈기 찢어지고 말았다.',
        ]);
        era.println();
        await era.printAndWait([
          '저항할 힘을 잃은 ',
          me.get_colored_name(),
          '은(는) 두 눈을 감았다. 반항할 수 없다면 즐기는 수밖에 없으니... 오라, 나를 가련한 꽃처럼 아껴주지 마라!',
        ]);
        era.println();
        await tachyon.say_and_wait('...과연, 그렇군 그렇군.');
        era.println();
        await era.printAndWait([
          '기대했던 일은 한참이 지나도 일어나지 않았다. ',
          me.get_colored_name(),
          '이(가) 슬며시 눈을 뜨자, ',
          tachyon.get_colored_name(),
          '이 ',
          me.get_colored_name(),
          '의 몸을 빤히 들여다보며 무언가를 기록장에 적고 있는 모습이 보였다.',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 자신의 몸을 보니 정말로 빛이 나고 있었는다. 그 부위들이 일정한 규칙성을 띠고 있었다. 그것은 마치...',
        ]);
        era.println();
        await tachyon.say_and_wait(
          era.get('cflag:0:종족')
            ? '원래 구체적으로 이렇게 작동하는 거였군...'
            : `과연 인간의 신체는 이렇게 돌아가는 건가... 하지만... ${tachyon.get_uma_sex_title()}와의 차이점은...`,
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 혼잣말을 듣고서야, 이것이 역시나 ',
          tachyon.get_uma_sex_title(),
          '의 신비를 파헤치기 위한 실험이었음을 깨달았다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 자신의 천박한 착각에 조금 부끄러움을 느꼈다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '좋아, 오늘 관찰은 여기까지 하지. 난 먼저 실험하러 갈 테니, ',
          callname,
          ', 자네는 잊지 말고 옷을 좀 챙겨 입어!',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 기록을 마치고 쏜살같이 트레이닝실을 나갔다. 트레이닝실에는 ',
          me.get_colored_name(),
          '혼자만이 남겨졌다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 바닥에 굴러다니는, 옷이라고 부를 수조차 없는 누더기 조각들을 보며, 어둠을 틈타 집으로 도망쳐야 할지 아니면 동료에게 옷을 좀 빌려달라고 부탁해야 할지 고민했다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 0, 5], 0);
      },
    ];
    await get_random_entry(buffer)();
  };
};