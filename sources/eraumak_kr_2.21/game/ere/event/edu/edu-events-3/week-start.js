const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedEdu = require('#/event/edu/edu-common');
const Edu3UntilWeekEnd = require('#/event/edu/edu-events-3/week-end');
const { add_event, cb_enum } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const TeioEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-3');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends Edu3UntilWeekEnd {
  async week_start(teio, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      event_marks = new TeioEduMarks();
    let wait_flag = false;
    if (event_arg === 47 + 1) {
      await print_event_name('새해의 포부', teio);
      await teio.say_and_wait(
        '트레이너, 트레이너~! 오늘이 우리 팀 결성하고 처음으로 맞이하는 새해야!',
      );
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 평상복 차림으로 방 안을 흥분해서 뛰어다니는 테이오를 보며 눈가를 가볍게 떨었다.`,
      );
      await era.printAndWait('정말 활기차구만…… 내가 말성꾸러기 꼬맹이라도 모셔온 건가?');
      era.println();

      await teio.say_and_wait('있지 있지! 트레이너, 왜 그렇게 기운이 없어? 나랑 놀자니까!');
      era.println();

      era.printButton('「밥부터 먹자, 다 먹고 나서 이야기해」', 1);
      await era.input();

      await era.printAndWait(
        `${me.name}이(가) 커다란 전골 냄비를 식탁으로 옮기자, ${teio.sex}는 밥 먹자는 소리에 잽싸게 달려와 의자에 단정히 앉더니, ${me.name}의 수저까지 챙겨주었다.`,
      );
      await era.printAndWait(
        `${me.get_couple_title()}은(는) 함께 즐겁게 새해 만찬을 즐겼다. 화목하고 즐거운 분위기 덕분에 ${
          me.name
        }은(는) ${teio.sex}와 함께 있는 것이 마치 작은 가족 같다는 느낌을 받았다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너, 내 새해 소원은 전에도 말했던 거랑 똑같아! 무패 삼관, 나는 전설적인 제왕이 될 거야!',
      );
      era.println();

      await era.printAndWait(
        `${teio.get_teen_sex_title()}의 말투에는 아직 어린 티가 남아있었지만, ${
          teio.sex
        }가 진심이라는 것만은 분명히 느껴졌다.`,
      );
      era.println();

      era.print(`${me.name}——`);
      era.printButton('「그래, 그 기세 그대로 가자!」（근성+20）', 1);
      era.printButton('「음, 같이 노력해서 승리를 향해 나아가자!」（스태미나+20）', 2);
      era.printButton(
        '「음…… 네 목표를 생각하면, 계획을 좀 수정해야겠어」（스킬 포인트+20）',
        3,
      );
      switch (await era.input()) {
        case 1:
          wait_flag =
            get_attr_and_print_in_event(3, [0, 0, 0, 20, 0], 0) || wait_flag;
          break;
        case 2:
          wait_flag =
            get_attr_and_print_in_event(3, [0, 20, 0, 0, 0], 0) || wait_flag;
          break;
        case 3:
          wait_flag =
            get_attr_and_print_in_event(3, new Array(5).fill(0), 20) ||
            wait_flag;
      }
      era.set('cflag:3:축제이벤트표시', 0);
    } else if (event_arg === 47 + 12) {
      await print_event_name('기자 회견', teio);
      await era.printAndWait(
        `조명과 마이크에 둘러싸여, 렌즈 너머의 모든 이들이 호기심과 갈증이 섞인 눈빛으로 ${me.get_couple_title()}을 주시하고 있었다. ${
          me.name
        }은(는) 옆에 선 어린 ${teio.get_uma_sex_title()}를 쳐다보았다. ${
          teio.sex
        }는 분명 이런 자리에 익숙하지 않았다——무적의 테이오 님에게도 긴장할 때가 있는 모양이다.`,
      );
      await era.printAndWait(
        `들키지 않게 ${me.name}은(는) 살며시 ${teio.sex}의 손을 건드려 진정시켜 주려 했다. 하지만 ${teio.sex}는 오히려 ${me.name}의 손을 꽉 맞잡아왔고, 살짝 땀이 밴 작은 손바닥의 감촉이 선명하게 전해졌다. ${me.name}은(는) 잠시 당황해 손을 빼려 했으나, 이내 마음을 바꿔 ${teio.sex}의 손을 좀 더 힘주어 쥐어주며 떨림을 멎게 해주었다.`,
      );
      era.println();
      await era.printAndWait(
        `카메라와 기자들의 질문 공세 속에서 ${me.name}은(는) 평소보다 뛰어난 실력을 발휘하며 완벽하고도 재치 있게 답변했다. ${me.name}의 리드 덕분에 테이오의 심리 상태도 점차 안정을 찾았고, ${teio.sex} 또한 자신에 대한 이야기, 특히 자신의 이상에 대해 당당하고 즐겁게 나누기 시작했다.`,
      );
      await era.printAndWait(
        `${me.name} 역시 많은 이들 앞에서 ${teio.sex}의 꿈을 현실로 만들 수 있도록 돕겠노라 약속했다.`,
      );
      await era.printAndWait('기자회견은 박수갈채 속에 막을 내렸다.');
      era.println();
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      wait_flag =
        get_attr_and_print_in_event(3, [15, 0, 0, 10, 0], 0) || wait_flag;
    } else if (event_arg === 95 + 5) {
      await print_event_name('포기', teio);
      await me.say_and_wait('테이오, 이 문제에 대해 진지하게 이야기를 좀 해야겠어.');
      era.println();

      await era.printAndWait(
        `${me.name}의 손에는 의사에게 받은 자료와 직접 수집한 데이터가 들려 있었다. 그 모든 내용이 토카이 테이오의 다리 상태가 한계임을 가리키고 있었다.`,
      );
      await era.printAndWait(
        `만약 휴식을 취하지 않는다면…… 아마 ${teio.sex}의 다리는 다음 레이스 이후 평생의 장애로 남을지도 모른다.`,
      );
      era.println();

      await me.say_and_wait(
        `테이오, 네 다리 구조는 ${teio.get_uma_sex_title()} 중에서도 매우 독특해. 그 구조 덕분에 너만의 독자적인 주법이 가능하지만, 사실 이 '테이오 스텝'은 네 몸을 갉아먹고 있어.`,
      );
      await me.say_and_wait(
        '지난 레이스의 실속, 지지난 레이스 후의 통증은 그저 전조 증상일 뿐이야. 너에게 가장 소중한 두 다리가…… 완전히 망가질 수도 있어.',
      );
      era.printButton(
        '「의사도 나도 동의했어…… 당분간 레이스를 쉬고, 요양 기간을 가지자.」',
        1,
      );
      await era.input();
      await me.say_and_wait(
        '그 기간 동안 네 치료를 위해 최선을 다할게. 학원 측에도 이미 말해뒀어. 이건 네 남은 인생을 위해 꼭 필요한 일이야.',
      );

      await era.printAndWait(
        `${me.name}은(는) 입술을 굳게 깨물고 고개를 떨군 담당 우마무스메를 보며 가슴 한구석이 아려왔다. 하지만 마음을 독하게 먹었다. 이것이 ${teio.sex}를 위한 길이라고 스스로에게 되뇌었다.`,
      );
      era.println();
      await teio.say_and_wait('싫어……');
      era.println();
      await era.printAndWait(
        `가늘지만 단호한 목소리가 들려왔다. ${me.name}은(는) 한숨을 내쉬었다. 이미 예상했던 반응이 아닌가.`,
      );
      era.println();
      await era.printAndWait(
        `어느샌가 고개를 치켜든 ${teio.get_teen_sex_title()}의 눈가에는 눈물이 고여 있었고, 본래 사파이어처럼 빛나던 눈동자는 더욱 투명하게 일렁이고 있었다.`,
      );
      era.println();
      await teio.say_and_wait(
        '봄 텐노상을 포기할 순 없어…… 그렇게 되면, 나 스스로 내 꿈을 포기하는 거나 다름없단 말이야! 그럼, 내가 지금까지 노력해온 건…… 대체 무엇 때문이었는데?',
      );
      era.println();
      await teio.say_and_wait(
        '게다가, 내가 이런 몸을 타고난 건, 반드시 이 몸으로 달리라는 꿈을 실현하라는 증거 아니야?! 난 다른 결말 같은 건 인정 못 해…… 도망치고 싶지 않아!',
      );
      era.println();
      await era.printAndWait(
        `${teio.get_teen_sex_title()}의 완강한 시선이 당신을 향했다. 그 눈동자 속에 비친 자신의 모습을 볼 수 있었다. ${teio.sex}와 가장 가까운 사람이 지금 ${teio.sex}를 「배신」하고 있었다…… ${
          me.name
        }은(는) 거울처럼 비치는 자신의 모습이 씁쓸하게 느껴졌다.`,
      );
      era.println();
      await teio.say_and_wait('내 일생일대의 부탁이야…… 제발.');
      era.println();
      await era.printAndWait(`${me.name}은(는) 결정했다——`);
      era.printButton(`「트레이너로서 명령한다, 다음 레이스는 포기해.」`, 1);
      era.print('【이 선택지를 고르면, 토카이 테이오는 봄 텐노상을 강제로 회피합니다】', {
        offset: 1,
        width: 23,
      });
      era.printButton(`「너는 내 담당 우마무스메야. 네 꿈이 계속될 수 있도록 끝까지 지지하겠어.」`, 2);
      era.print(
        `【이 선택지를 고르면, 테이오의 다리 부상은 돌이킬 수 없게 됩니다. ${teio.sex}와 함께 밑바닥까지 추락하더라도 서로를 지탱하며 다시 올라올 각오가 되어 있습니까?】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【경고: 이 선택지를 고르면 테이오의 다리 부상은 돌이킬 수 없게 됩니다. ${teio.sex}와 함께 밑바닥까지 추락하더라도 서로를 지탱하며 다시 올라올 각오가 되어 있습니까?】`,
          { color: buff_colors[3] },
        );
        era.printButton('역시 그만둔다', 1);
        era.printButton('준비됐다!', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.get_teen_sex_title()}의 눈에 눈물이 고였지만, 결국 ${
            me.name
          }의 의지에 억눌리고 말았다. ${teio.sex}는 침묵 속에 떠나갔고, 지는 해가 ${
            teio.sex
          }의 뒤로 길게 그림자를 드리웠다.`,
        );
        era.println();
        wait_flag =
          get_attr_and_print_in_event(3, new Array(5).fill(5), 20) || wait_flag;
        wait_flag = get_skills_and_print_in_event(3, [100039]) || wait_flag;
        event_marks.give_up++;
      } else {
        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 울음을 터뜨리려다 말고 웃어 보이며 ${
            me.name
          }의 손을 잡았다. 맞닿은 곳에서 체온이 따뜻하게 전해져 왔다. ${
            me.name
          }은(는) 자신의 선택이 옳은 것인지 알 수 없어 미간을 찌푸렸다.`,
        );
        await era.printAndWait(
          '하지만 트레이너란 우마무스메의 꿈을 실현해 주는 직업……이니까?',
        );
        era.println();
        wait_flag = sys_like_chara(3, 0, 10, true, 1) || wait_flag;
        wait_flag = get_attr_and_print_in_event(
          3,
          undefined,
          0,
          JSON.parse('{"체력":-150,"기력":-50}'),
        );
      }
    } else if (event_arg === 95 + 14) {
      await print_event_name('팬 대감사제', teio);
      era.set('cflag:3:축제이벤트표시', 0);
      if (event_marks.give_up) {
        await era.printAndWait(
          `${me.name}과(와) 토카이 테이오가 레이스 회피 소식을 발표했음에도 불구하고, 팬들의 열정은 여전했다.`,
        );
        await era.printAndWait(
          `다리 부상이라는 이유를 들은 팬들은 모두 이해해 주었고, ${me.get_couple_title()}에게 축복의 말을 건넸다.`,
        );
        await era.printAndWait(`테이오의 표정도 이전의 활기찬 모습으로 돌아온 듯 보였다……`);
        await era.printAndWait(
          `아마도 그럴 것이다. 만약 ${me.name}이(가) 한 번 악역을 자처해서 ${teio.sex}가 계속 이럴 수만 있다면, 그 정도는 아무것도 아니리라……`,
        );
      } else {
        await era.printAndWait(`무대에 오르기 전, ${me.name}은(는) 다시 한번 테이오의 털을 다듬어 주었다.`);
        await era.printAndWait(
          `사실 오늘 이미 몇 번이나 반복한 동작이었지만, ${me.get_couple_title()} 모두 약속이라도 한 듯 내색하지 않았다. 어쩌면 이것은 마음을 가다듬는 그들만의 방식이었을지도 모른다.`,
        );
        await era.printAndWait(
          '경기장에 들어서자 멀리서 찾아온 수많은 팬들 앞에서 테이오는 평소처럼 자신만만한 모습을 보여주었고, 즉흥적으로 선보인 「테이오 스텝 · 개(改)」는 현장 분위기를 최고조로 끌어올렸다.',
        );
        await era.printAndWait(
          `${me.name}은(는) 조용히 무대 뒤로 몸을 숨긴 채, 다가올 레이스에 대해 생각했다.`,
        );
        await era.printAndWait(
          `테이오가 오늘 화려하게 빛나면 빛날수록, ${me.name}의 머릿속에서는 경고음이 더욱 크게 울려 퍼졌다……`,
        );
      }
    } else if (event_arg === 95 + 17) {
      await print_event_name('기자 회견', teio);
      await era.printAndWait(
        ` ${me.name}은(는) 넥타이를 고쳐 매고, 마지막으로 거울 속의 자신을 살펴보았다.`,
      );
      await era.printAndWait('——음, 딱히 할 말은 없군.');
      await era.printAndWait('더 이상 할 수 있는 일도 없다.');
      await era.printAndWait([
        me.get_colored_name(),
        ' 은는) 손목시계를 보았다. 시간이 촉박했다. 이제는 변명을 늘어놓으며 꾸물거릴 수도 없었다.',
      ]);
      await era.printAndWait('심호흡을 하며 긴장을 풀기 위해 노력했다.');
      await era.printAndWait(` ${me.name}은(는) 화장실을 나와 자신의 파멸을 향해 걸어갔다.`);
      era.println();
      await era.printAndWait(
        `이번 기자회견에 ${me.name}은(는) 테이오를 데려오지 않았다. 대외적으로는 치료와 안정이 필요하다는 이유였지만, 사실 ${me.name}은(는) ${teio.sex}가 이런 상태로 참석하는 것이 아무런 도움이 되지 않을 거라 판단했다. 나쁜 소식은—— 이로 인해 ${me.name}이(가) 모든 책임을 홀로 짊어져야 한다는 점이다.`,
      );
      await era.printAndWait(
        `하지만 ${me.name}은(는) 이미 이런 각오를 다지고 있었을 것이다, 그렇지 않은가?`,
      );
      era.println();
      await era.printAndWait(
        `회견장에 들어서자 수많은 조명과 렌즈 앞에서, 날 선 질문을 던지는 기자들을 상대하며 ${me.name}은(는) 온 힘을 다해 침착하고 논리적으로 답변했다. 셔츠는 이미 식은땀으로 흠뻑 젖었지만, 어떻게든 버텨내고 있었다. 트레센에서 받은 교육에 감사하며 ${me.name}은(는) 정신을 집중해 까다로운 질문들을 쳐냈다. 그리고 마침내, 결정적인 순간이 찾아왔다——`,
      );
      era.println();
      await era.printAndWait(
        `기자 A 「질문 드립니다. 전문가들의 분석에 따르면 토카이 테이오의 부상은 ${teio.sex} 특유의 주법에서 기인했다고 하는데, 트레이너로서 이 상황을 모르지는 않았을 텐데요. 즉, 이 문제를 알고 있었음에도 레이스 출주를 강행하여 이 비극을 초래한 것입니까?」`,
      );
      era.println();
      await era.printAndWait('——드디어 왔군.');
      await era.printAndWait('신중해야 한다.');
      await era.printAndWait(`이 답변 하나에 ${me.name}의 트레이너 생명이 달려 있을지도 모른다.`);
      await era.printAndWait(`${me.name}은(는) 결정했다——`);
      era.printButton(
        `「상세히 알지는 못했습니다. 토카이 테이오 본인이 출주를 강력히 희망했고, 저는 담당 우마무스메의 의사를 존중했을 뿐입니다.」`,
        1, {disabled: era.get('love:3') >= 75} //한판 커스텀-애정에 따라 선택지 비활성화
      );
      era.printButton(`「저는 ${teio.sex}의 트레이너입니다. 모든 책임은 저에게 있습니다.」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `사람들이 한참 동안 수군거린 후에야 겨우 진정되었다. ${me.name}은(는) 그들이 어떤 반응을 보일지 알고 있었지만, 이제는 상관없었다.`,
        );
      } else {    
        await era.printAndWait('현장은 순식간에 술렁였다.');
        await era.printAndWait(
          '하지만 폭탄 같은 발언을 내뱉고 나니, 남은 질문들은 오히려 상대하기 쉬웠다.',
        );
        await era.printAndWait('마침내 회견이 끝났다.');
        await era.printAndWait(
          `조명이 꺼지고 기자와 촬영 기사들이 흩어졌다. 결국 무대 위에는 ${me.name}만이 남았다. ${me.name}이(가) 안도의 한숨을 내쉬며 떠나려 할 때——`,
        );
        era.println();
        await era.printAndWait('팬 A 「어째서……」');
        era.println();
        await era.printAndWait(` ${me.name}은(는) 의아한 듯 고개를 들었다.`);
        era.println();
        await era.printAndWait('팬 B 「제길……!」');
        era.println();
        await era.printAndWait(
          `본 적 없는 두 사람이 실내에 나타났다. 사람들이 빠져나갈 때 몰래 들어온 모양이었다.`,
        );
        era.println();
        await era.printAndWait(`팬 A 「네가 ${teio.sex}를 망쳤어!」`);
        era.println();
        await era.printAndWait(
          `팬 B 「네 이기심 때문에, 그저 성적만 쫓고 ${teio.get_uma_sex_title()}의 상태는 안중에도 없던 네 태도 때문에 토카이 테이오가 저 꼴이 된 거라고!」`,
        );
        era.println();
        await era.printAndWait(
          `팬 A 「그러고선 트레이너입네 하는 놈은…… 그냥 뻔뻔하게 떠나버리면 그만이겠지! 책임지겠다는 말은 그냥 남들 앞에서 몇 마디 지껄이고 고개 숙여 사과하면 끝이잖아! 대충 소나기 피하듯 숨어 있다가 새로운 유망주랑 계약하면 그만이니까! 하지만 그 ${teio.get_uma_sex_title()}의 인생은 그대로 박살 났단 말이다!」`,
        );
        era.println();
        await era.printAndWait(
          `두 사람은 분노에 찬 눈으로 ${me.name}을(를) 쏘아붙이며 다가왔다. ${me.name}은(는) 그들과 눈을 맞췄지만 말을 아꼈다.`,
        );
        await era.printAndWait(
          '그들의 눈빛 속에는 분노와 슬픔 외에도, 어떤 공허함이 서려 있었다.',
        );
        await era.printAndWait('그것은 꿈을 잃어버린 자의 눈빛이었다.');
        await era.printAndWait(`——${me.name}은(는) 꿈을 파는 사람이었다.`);
        await era.printAndWait(`——${me.name}은(는) 우리에게 꿈을 주던 사람을 죽였다.`);
        await era.printAndWait('세 쌍의 눈동자가 각자의 감정을 마음속에 감춘 채 서로를 노려보았다.');
        era.printButton(`「책임지겠습니다.」`, 1);
        await era.input();
        await me.say_and_wait(
          `${teio.sex}가 다시 복귀하는 날…… 보게 될 겁니다. ${teio.sex}는 여전히 「제왕」이라는 것을요.`,
        );
      }
    } else if (event_arg === 95 + 19) {
      await print_event_name('교섭', teio);
      await me.say_and_wait('이번엔 또 뭐지……');
      await era.printAndWait(
        `${me.name}은(는) 낯선 방을 뚫어지게 쳐다보다가 망설임 끝에 문을 두드렸다. 곧바로 문이 열렸고, ${me.name}은(는) 안으로 들어갔다.`,
      );
      era.println();
      await era.printAndWait(
        `봄 텐노상 이후, ${me.name}은(는) 학원 운영진에 의해 따로 호출되었고, 현역에서 물러나 은퇴한 베테랑 트레이너 선배에게 지도를 받으라는 권유를 받았다. 그 트레이너는 업계에서 매우 유명하며 수많은 ${teio.get_uma_sex_title()}를 길러낸 인물로, ${
          me.name
        }이(가) 학생 시절일 때 운 좋게 한 학기 동안 그녀의 수업을 들은 적도 있었다. ${
          me.name
        }은(는) 거절할 명분이 없어 오늘 이곳을 찾은 것이었다.`,
      );
      era.println();
      await era.printAndWait(
        `한 중년 부인이 의자에 앉아 ${me.name}을(를) 기다리고 있었다. 탁자 위에는 몇 가지 서류가 놓여 있었고, ${me.name}은(는) 인사를 건넨 뒤 자리에 앉았다. 슬쩍 훑어본 탁자 위에는 예상대로 계약 관계에 관한 양식들이 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 부인 「자네가 ${me.actual_name}인가? 기억하고 있네. 이제는 꽤 이름이 알려진 트레이너가 되었더군.」`,
      );
      era.println();
      await era.printAndWait(`${me.name}은(는) 대답 대신 가볍게 고개를 끄덕였다.`);
      era.println();
      await era.printAndWait(
        `중년 부인 「오늘 자네를 부른 건 학원 측의 부탁을 받아서라네. 자네와 자네의 담당 ${teio.get_uma_sex_title()}인 ${
          teio.name
        }에 대한 이야기를 좀 나누고 싶군.」`,
      );
      era.println();
      await era.printAndWait(
        `${teio.name}의 이름이 나오자, ${me.name}은(는) 각오하고 있었음에도 가슴이 덜컥 내려앉았다. 드디어 올 것이 왔나—— ${me.name}은(는) 생각했다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 부인 「본론만 말하지—— 자네는 ${teio.get_uma_sex_title()}의 고집에 맞추다 보니 오늘의 실패를 겪게 된 것뿐이야. 자네 잘못이 아니지. 사실 트레이너에게는 목표를 이룰 기회가 얼마든지 있네. 한 번 육성에 실패했다면 계약을 해지하고 새로운 ${teio.get_uma_sex_title()}와 계약하면 그만이야. 오늘 자네에게 선택권을 주겠네—— 지금 담당 우마무스메와 계약을 해지하게. 앞으로 다른 우수한 아이들과 계약할 수 있도록 보장해 주지. 물론 기존 담당 우마무스메 역시 우리가 최선을 다해 보살필 것을 약속하네.」`,
      );
      await era.printAndWait(
        `${me.name}은(는) 무슨 말을 들을지 짐작은 했지만, 막상 직접 듣게 되자 경악을 금치 못했다.`,
      );
      era.println();
      await era.printAndWait(
        '중년 부인 「자네는 잠재력이 있어—— 여기서 썩히기엔 아깝지 않은가? 자신의 앞날을 생각하게나. 가망 없는 나무에 목을 매지 말고.」',
      );
      era.println();
      await era.printAndWait(`${me.name}의 답변은——`);
      era.printButton('「저도…… 당신의 의견에 동의합니다.」', 1, {
        disabled: event_marks.abandon_disabled > 0,
      });
      era.print('【이 선택지를 고르면 모든 것이 돌이킬 수 없게 됩니다! 세이브 파일을 확인하십시오!】', {
        offset: 1,
        width: 23,
        color: buff_colors[3],
      });
      era.printButton('「아니오.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${me.name}은(는) 묵묵히 해지 서류에 자신의 이름을 적었다. 멍한 정신으로 절차를 마치고 방을 나왔고, 점점 걸음이 빨라졌다. 감정을 주체하지 못한 채 행인들의 놀란 시선을 뒤로하고 소리를 지르며 집으로 도망치듯 달려갔다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 다시는 ${teio.name}를 만날 용기를 내지 못했다. ${teio.sex}와 ${me.name}의 인생은 이렇게 갈라졌다.`,
        );
        era.set('flag:강제배드엔딩', 3);
        era.set('cflag:3:모집상태', recruit_flags.no);
      } else {
        await era.printAndWait(`${me.name}은(는) 자신의 목소리가 실내에 울려 퍼지는 것을 들었다.`);
        era.println();
        await me.say_and_wait(
          `말씀하신 게 백번 옳습니다…… 트레이너에게 기회는 얼마든지 있겠죠. 앞날을 위해 실패한 담당 우마무스메를 버리고 다른 사람을 선택하는 게……`,
        );
        era.println();
        await era.printAndWait(
          `중년 부인은 의자에 앉아 눈을 가늘게 뜨고 ${me.name}의 답변을 경청했다.`,
        );
        era.println();
        await me.say_and_wait(
          '미래가 없는 학생에게 고집스럽게 매달리는 것이 양쪽 모두에게 좋지 않다는 것도 알고, 프로로서 타협이 필요하다는 점도 이해합니다.',
        );
        era.println();
        await me.say_and_wait(
          '하지만 당신의 입에서 그런 소리를 듣고…… 제 입으로 직접 반복해 보니…… 도저히 받아들일 수가 없군요.',
        );
        era.println();
        era.printButton('「그러므로, 거절하겠습니다.」', 1);
        await era.input();
        await me.say_and_wait(
          `트레센의 트레이너 제도는 ${teio.get_uma_sex_title()}의 성장을 돕는 필수적인 부분입니다. 그리고 트레이너의 임무는 자신의 담당 ${teio.get_uma_sex_title()}에게 끝까지 책임을 지는 것입니다.`,
        );
        era.println();
        era.printButton(`저는 ${teio.name}의 전속 트레이너로서, 마땅히 해야 할 일을 하겠습니다.`, 1);
        await era.input();
        await era.printAndWait('중년 부인 「착한 아이로군.」');
        await era.printAndWait('중년 부인이 미소 지었다.');
        await era.printAndWait(
          `그녀는 손을 뻗어 탁자 위의 서류를 정리하더니, 다시 한번 ${me.name}에게 미소를 건넸다.`,
        );
        era.println();
        await era.printAndWait(
          '중년 부인 「험난한 길이겠지만, 자네가 그 길을 선택한 점은 칭찬해 주고 싶네. 힘내게나. 자네들을 축복하지—— 내가 도울 수 있는 부분은 최대한 도와주겠네.」',
        );
        era.println();
        await era.printAndWait(
          `${me.name}은(는) 방에서 나왔다. 비록 얼떨떨한 기분이었지만, 마음 한구석에는 확고한 신념이 자리 잡았다—— 반드시 ${teio.name}의 꿈을 이루어주겠다고.`,
        );
        era.println();
        await era.printAndWait(
          `그 후 어찌 된 일인지 ${me.name}에 대한 흉흉한 소문이 눈에 띄게 줄어들었고, 트레센 측에서도 ${me.name}에게 여러 지원을 아끼지 않았다.`,
        );
        sys_change_fame(10);
        sys_change_money(300);
      }
    } else if (event_arg === 143 + 9) {
      await CustomizedEdu.common_palace(teio, me);
      await CustomizedEdu.common_palace_relation(teio, me);
      era.println();
      await teio.say_and_wait(
        event_marks.give_up
          ? '내 이름은 토카이 테이오. 토카이—— 테이오야!'
          : '이것이, 우리들만의 금자탑이야——',
      );
    }
    wait_flag && (await era.waitAnyKey());
  }
};