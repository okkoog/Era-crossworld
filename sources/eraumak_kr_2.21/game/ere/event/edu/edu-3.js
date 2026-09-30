/**
 * @file 토카이 테이오 - 育成
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const teio_crazy_fan_end = require('#/event/edu/edu-events-3/crazy-fan-end');
const Edu3UntilWeekStart = require('#/event/edu/edu-events-3/week-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends Edu3UntilWeekStart {
  async back_school(teio, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg !== 'broken') {
      return false;
    }
    await print_event_name('꺾인 날개', teio);
    await era.printAndWait(
      `의사라는 존재는 병든 자를 구하고 다친 자를 고치기 위해 존재하며, 내가 사랑하는 사람은 반드시 나을 것이다—— 사람들은 병실 문 앞에 서면 흔히 그렇게 생각하곤 한다. 하지만 그런 생각은 과연 얼마만큼의 진실과 얼마만큼의 자기위안을 담고 있는 것일까. 만약 모든 것을 되돌릴 수 있다면, 의사가 존재함에도 이 세상에 상처와 죽음이 끊이지 않는 이유는 무엇인가. 의사가 충분히 노력하지 않아서? 정성이 부족해서? 아니…… 어쩌면 그저 운이 없었기 때문일지도 모른다.`,
    );
    era.println();
    await era.printAndWait(
      `그런 생각을 하며, ${me.name}은(는) 무의식적으로 이마를 짚은 채 눈앞의 흰 가운을 입은 중년 남성을 멍하니 바라보았다. 그의 입술이 달싹인다—— 말을 하고 있는 건가? 그가 뭐라고 하는 거지? 가만히 둔 손끝으로 머리카락의 감촉이 전해졌다. 아니, 평소와는 다르다. 정성껏 손질된 부드러운 포니테일이 마치 겁을 먹은 듯 안쪽에서부터 거칠게 흩어져 손바닥을 간지럽혔다. ${me.name}은(는) 문득 웃음이 나올 것 같았다. 이 아이는 참, 달리기 좀 했다고 머리를 이 꼴로 만들다니. 이따가 잘 타일러서——`,
    );
    await era.printAndWait(
      `${me.name}은(는) 고개를 돌려 애써 미소 지으며 자신의 담당을 바라보았다. 그러나 그곳에는 생기를 잃은 두 눈동자가 있었고, 그 공허함은 ${me.name}의 정신을 순식간에 현실로 끌어내렸다.`,
    );
    era.println();
    await era.printAndWait(
      `주치의 「${teio.name} ${teio.get_adult_sex_title()}, 그리고 ${
        me.actual_name
      } ${me.get_adult_sex_title()}. ${
        teio.sex
      }의 상태에 대해 다시 한번 강조하겠습니다. 이번 생애에 레이스를 포기할 각오를 하셔야 합니다.」`,
    );
    era.println();
    await era.printAndWait(
      '——그 어떤 도피 섞인 생각도 결국 현실이라는 거대한 수레바퀴를 막아설 순 없었다. 현실은 바로 눈앞에 있었고, 받아들이는 것 외엔 선택지가 없었다.',
    );
    era.println();
    await era.printAndWait(
      `${me.name}은(는) 주치의가 작은 금속 막대를 꺼내 화면에 띄워진 엑스레이 사진을 가리키는 것을 보았다. 인정하고 싶지 않아 애써 외면했던 기억들이 현재의 영상과 겹쳐졌다. ${me.name}은(는) 그가 무슨 말을 하는지 완벽히 알고 있었다. 「슬개골 탈구」, 「습관성 골절」, 「균열」, 「종아리」…… 그렇다. 모든 부위를 알고 있었고, 모든 상황을 파악하고 있었다.`,
    );
    era.println();
    await era.printAndWait(
      `그런데도 이런 일이 벌어지고 말았다. ${me.name}은(는) 감정을 억누르며 필사적으로 그 자리에 버티고 서 있었다.`,
    );
    await era.printAndWait('포니테일이 움직인다. 마치 빠져나가려는 것처럼.');
    await me.say_and_wait(
      '나에게 실망했니? 그래도 괜찮아. 트레이너로서 내 불찰이니까.',
      true,
    );
    await era.printAndWait(
      `${me.name}은(는) 그렇게 생각하며 슬며시 손을 거두려 했다…… 하지만 실패했다.`,
    );
    era.println();
    await era.printAndWait(
      `${me.name}의 손바닥 위로, 그 가냘픈 외형과는 어울리지 않는 힘을 담은 작은 손이 겹쳐졌다. 그리고 아래에서 감싸 쥐는 또 다른 손. 따스함이 전해졌고, 동시에 떨림이 느껴졌다. 마치 어린아이가 소중한 사람의 옷자락을 붙잡는 것처럼, ${teio.name}는 ${me.name}의 손을 끌어당기고 있었다. ${me.name}은(는) 길게 한숨을 내쉬며 ${teio.sex}의 손을 맞잡았고, 다시는 놓지 않았다.`,
    );
    era.println();
    sys_like_chara(3, 0, 10, true, 1);
    get_attr_and_print_in_event(
      3,
      new Array(3).fill(-50),
      0,
      JSON.parse(
        `{"체력":${
          100 *
            (era.get('cflag:3:육성성적')[
              race_infos[race_enum.tenn_spr].date + 95
            ].rank ===
              1) -
          200
        },"기력":-200}`,
      ),
    );
    era.set('talent:3:자신감', 1);
    era.set('talent:3:음란', 1);
    era.set('talent:3:신체소질', 0);
    era.set('status:3:다리부상', 1);
    era.printMultiColumns([
      { content: [teio.get_colored_name(), ' 은(는) 더 이상 [신체건장]이 아니다!'], type: 'text' },
      {
        content: [
          teio.get_colored_name(),
          '는 [자격지심]과 함께  ',
          {
            color: buff_colors[2],
            content: '[음란]',
          },
          '을 얻었다!',
        ],
        type: 'text',
      },
      {
        content: [
          teio.get_colored_name(),
          '은(는) ',
          {
            color: buff_colors[3],
            content: '[다리부상]',
          },
          '을 입었다!',
        ],
        type: 'text',
      },
    ]);
    await era.waitAnyKey();
  }

  async crazy_fan_end() {
    if (!era.get('status:3:다리부상')) {
      return await super.crazy_fan_end();
    }
    await teio_crazy_fan_end();
  }

  async office_prepare(teio, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 3) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    if (event_object?.arg !== 'rehabilitation') {
      return false;
    }
    await print_event_name('재활 훈련', teio);
    await era.printAndWait(
      `나무통 안에 따뜻한 물이 가득 담겨 있다. ${me.name}은(는) 사랑하는 우마무스메의 맨발을 붙잡아 천천히 물속으로 담갔다.`,
    );
    await era.printAndWait(
      `혈자리에 맞춰 정성스레 주무르고 누른다. 투명할 정도로 하얗고 매끄러운 다리가 자극을 받아 발그레하게 달아오른다. ${me.name}은(는) 묵묵히 이 일과에 집중했다.`,
    );
    await era.printAndWait(
      '의사와 상의하여 만든 테이오의 다리 회복 계획은 매일 엄격하게 실행되어야 하며, 지금 하는 것은 매일 밤의 마지막 단계였다.',
    );
    await era.printAndWait(
      `${teio.get_teen_sex_title()}의 겉보기엔 완벽해 보이는 두 다리를 보며, ${
        me.name
      }은(는) 다시금 가슴이 저려왔다. 내부의 상처는 아마 완치되기 힘들 것이다.`,
    );
    await era.printAndWait(
      '결국 자신의 이런 노력들이 정말 의미가 있는 걸까, 아니면 그저 서로를 위한 심리적 위안에 불과한 걸까?',
    );
    era.println();

    await era.printAndWait(
      `${
        me.name
      }은(는) 의사가 사석에서 들려주었던 비슷한 증상의 ${teio.get_uma_sex_title()}들을 떠올렸다. ${
        teio.sex
      }들은 단 한 명의 예외도 없이 회복하지 못한 채 은퇴를 택했다. 그렇다면 테이오는……`,
    );
    era.println();

    await teio.say_and_wait('트레이너.');
    era.println();

    await era.printAndWait(
      `평소보다 낮은 목소리가 피어오르는 열기를 뚫고 ${me.name}의 귓가에 닿았다.`,
    );
    era.println();

    await teio.say_and_wait(
      `나…… 이게 정말 바보 같은 질문이라는 건 알지만, 그래도 ${me.name}한테 직접 듣고 싶어…… 지금 우리가 하는 것들, 정말 효과가 있는 걸까?`,
    );

    era.printButton('고개를 숙인다 (스태미나&근성&지능 +15)', 1);
    era.printButton(
      '「우리의 신념은 반드시 보답받을 거야.」 (스피드&파워 +15, 호감도 +5, 컨디션 상승)',
      2,
    );
    const ret = await era.input(),
      time_change = get_random_value(0, 50);
    era.println();
    if (ret === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 숙였다. 대답할 수 없었는지, 혹은 대답할 용기가 없었는지 묵묵히 ',
        teio.get_uma_sex_title(),
        '의 다리를 관리하는 데만 전념했다.',
      ]);
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [0, 15, 0, 15, 15],
          0,
          JSON.parse(`{"기력":${time_change}}`),
        ) || wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [15, 0, 15],
          0,
          JSON.parse(`{"기력":${time_change}}`),
        ) || wait_flag;
      wait_flag = sys_change_motivation(3, 1) || wait_flag;
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async office_rest(teio, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 3) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 47 + 25) {
      return false;
    }
    let wait_flag = false;
    await print_event_name('정기적으로 나오는 고양이', teio);
    await teio.say_and_wait('으우우……');
    era.println();
    await era.printAndWait(
      `${me.name}은(는) 자신의 허벅지 위에 몸을 웅크리고 엎드린 담당 ${teio.get_uma_sex_title()}를 아주 부드럽고 적당한 압력으로 쓰다듬어 주었다.`,
    );
    await era.printAndWait(
      `언젠가 ${me.name}이(가) ${teio.sex}를 마사지해 준 이후로, ${teio.sex}는 그 손맛을 잊지 못한 모양이다. 이제는 털을 골라달라고 요구하는 건 물론(이건 합리적이다), ${me.name}가 업무 중이든 아니든 사무실로 몰래 들어와 몸을 비비며 피로를 풀어달라고 떼를 쓰곤 한다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 건성으로 ${teio.sex}의 턱 밑을 긁어주자, ${teio.sex}는 만족스러운 듯 가르릉 소리를 내며 눈을 가늘게 떴다.`,
    );
    await me.say_and_wait('너 고양이야?', true);
    await era.printAndWait(
      `${
        me.name
      }은(는) 속으로 헛웃음을 삼켰다. 무릎 위의 ${teio.get_teen_sex_title()}는 정말로 이곳을 자신의 둥지라고 생각하는 모양이다.`,
    );
    era.println();

    era.print(`${me.name}은(는) 이제 ${teio.sex}를 어떻게 해줄까——`);
    era.printButton(
      '뿌리부터 꼬리 끝까지 천천히, 아주 부드럽게 쓰다듬는다 (스킬 포인트 +30, 체력 +50~100, 호감도 +5)',
      1,
    );
    era.printButton(
      `너무 피곤해서…… 어느덧 ${me.name}과(와) ${teio.sex} 모두 잠이 들었다. (스태미나&근성 +20)`,
      2,
    );
    if (era.get('love:3') >= 50) {
      era.printButton('짖궂은 장난을 친다 (스피드&파워&지능 +20, 애정도 +1)', 3);
    }
    const ret = await era.input();
    const time_change = get_random_value(0, 50);
    if (ret === 1) {
      await era.printAndWait(
        `${me.name}은(는) 다섯 손가락을 펴고 적당한 힘으로 머리부터 꼬리까지 털을 빗어 넘겼다. 손바닥에 전해지는 폭신한 감촉에 ${me.name}의 기분도 한결 좋아졌다.`,
      );
      wait_flag =
        get_attr_and_print_in_event(
          3,
          undefined,
          30,
          JSON.parse(
            `{"체력":${get_random_value(50, 100)},"기력":${time_change}}`,
          ),
        ) || wait_flag;
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    } else if (ret === 2) {
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [0, 20, 0, 20, 0],
          30,
          JSON.parse(`{"기력":${time_change}}`),
        ) || wait_flag;
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 짖궂은 마음이 생겨, 먼저 ',
        teio.sex,
        '의 귀 뿌리와 꼬리 안쪽을 간지럽혔다. 작은 ',
        teio.get_uma_sex_title(),
        '가 온몸을 움찔거리며 떨자, ',
        me.get_colored_name(),
        '은(는) 전략을 바꿔 전신을 마사지하듯 꾹꾹 눌러주었다……',
      ]);
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [20, 0, 20, 0, 20],
          0,
          JSON.parse(`{"기력":${time_change}}`),
        ) || wait_flag;
      wait_flag = sys_love_uma(3, 1) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(teio, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 3) {
      add_event(hook.hook, event_object);
      return;
    }
    const love = era.get('love:3');
    let wait_flag = false;
    if (event_object?.arg === 'honey_power') {
      await print_event_name('하치미 파워', teio);

      await era.printAndWait(
        `${teio.sex}와 외출하면 항상 무슨 일이 생길 것 같다는 예감을 하며, ${me.name}은(는) 곁에서 자신의 팔짱을 낀 담당을 바라보았다.`,
      );
      await era.printAndWait(
        `팔짱이라기보다는 사실상 끌려가고 있다는 표현이 더 정확할지도 모른다. 가끔은 ${
          me.name
        } 자신도 이 활기 넘치는 ${teio.get_uma_sex_title()} ${teio.get_teen_sex_title()}의 보폭에 어떻게 맞춰 걷고 있는 건지 신기할 정도였다. 아마 같이 지내면서 자신도 모르게 '테이오 스텝'의 요령을 터득한 게 아닐까.`,
      );
      await era.printAndWait(
        '함께 시간을 보내다 보면 많은 것들이 은연중에 서로를 닮아가는 법이다…… 예를 들면 입맛 같은 것들 말이다.',
      );
      era.println();

      await era.printAndWait(
        `${me.name}의 담당은 ${me.name}을(를) 벤치로 데려가더니, 조금 전 단골 가게에서 산 특제 꿀 음료를 벌컥벌컥 마시기 시작했다.`,
      );
      await era.printAndWait(
        `진한 시럽이 ${teio.sex}의 목구멍을 타고 넘어가며 매끄러운 목선을 따라 작은 곡선을 그린다. 햇살이 ${teio.sex}의 옆얼굴을 비추자 뽀얀 피부가 더욱 돋보였고, 삼킬 때마다 움직이는 미세한 근육의 움직임까지 선명하게 보였다……`,
      );
      await era.printAndWait(
        `살 때는 아무 생각이 없었는데, 막상 보고 있으니 입안이 바짝 마르며 ${me.name}도 무언가 마시고 싶다는 생각이 간절해졌다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      await era.printAndWait(`${me.name}은(는) 황급히 대답했다.`);
      era.println();

      await teio.say_and_wait(
        `트레이너? 왠지 너도 목마른 것 같은데, 이거 마셔볼래?`,
      );
      await era.printAndWait(
        `${teio.sex}는 히히 웃으며 반쯤 남은 꿀 음료를 ${me.name}의 눈앞에 내밀었다. 마치 유혹하듯이.`,
      );

      await era.printAndWait(`${me.name}의 선택은——`);
      era.printButton('한 잔 더 사온다 (지능 +20, 호감도 +5)', 1);
      era.printButton(
        '「사실 난 설탕 없는 차를 더 좋아해……」 (스태미나&근성 +15)',
        2,
      );
      if (love > 50) {
        era.printButton(
          `${teio.sex}의 컵을 받아 빨대로 마신 뒤 돌려준다 (스피드&파워 +15, 체력 +150, 애정도 +1)`,
          3,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${me.name}은(는) 웃으며 ${
            teio.sex
          }의 머리를 쓰다듬고는 자신을 위해 한 잔을 더 사러 갔다. 꿀 음료를 들이켜자 손끝에 남아있는 ${teio.get_uma_sex_title()}의 머리카락 향기와 달콤한 꿀 향이 뒤섞여 묘한 기분에 젖어 들었다……`,
        );
        wait_flag =
          get_attr_and_print_in_event(3, [0, 0, 0, 0, 20], 0) || wait_flag;
        wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      } else if (ret === 2) {
        await era.printAndWait(
          `${me.name}은(는) 약간 어색하게 헛기침을 하며 담당의 제안을 정중히 거절했다. ${teio.sex}는 눈을 가늘게 뜨며 더욱 즐겁게 웃는 듯했다.`,
        );
        wait_flag =
          get_attr_and_print_in_event(3, [0, 15, 0, 15, 0], 0) || wait_flag;
      } else {
        await teio.say_and_wait('///////');
        era.println();

        await era.printAndWait(
          `${me.name}은(는) 짖궂은 장난기가 발동해 ${teio.sex}의 손에 든 컵을 가로채 크게 한 모금을 마셨다. 그리고는 아무 일도 없었다는 듯 멍하니 굳어버린 ${teio.sex}의 손에 다시 컵을 쥐여주었다.`,
        );
        era.println();

        await teio.say_and_wait('으으응——!');
        era.println();

        await era.printAndWait('……장난이 좀 심했나.');
        await era.printAndWait(
          `그 후 10분 동안 열심히 사과하고 나서야, 얼굴이 새빨개진 ${teio.sex}는 웅얼거림을 멈추고 ${me.name} 곁으로 다가왔다.`,
        );
        await era.printAndWait(
          `다시 걷기 시작했을 때, ${me.name}은(는) ${teio.sex}가 짐짓 시선을 피하면서도 조심스럽게 빨대로 남은 음료를 홀짝이는 것을 보았다……`,
        );
        wait_flag =
          get_attr_and_print_in_event(
            3,
            [15, 0, 15, 0, 0],
            0,
            JSON.parse('{"체력":150}'),
          ) || wait_flag;
        wait_flag = sys_love_uma(3, 1) || wait_flag;
      }
    } else if (event_object?.arg === 'uma_shopping') {
      await print_event_name(`${teio.get_uma_sex_title()}의…… 폭풍 쇼핑!`, teio);
      await era.printAndWait('여자와 쇼핑하는 것은 힘들다.');
      await era.printAndWait('여자와 쇼핑몰에 가는 것은 피곤하다.');
      await era.printAndWait(`${teio.get_uma_sex_title()}와 물건을 사는 것은…… 영혼이 털린다.`);
      await era.printAndWait(`불행히도 ${me.name}은(는) 지금 이 세 번째 단계에 처해 있었다.`);
      await era.printAndWait(
        `카트를 밀며——테이오의 속도에 비하면 기어가는 수준이지만——목록을 대조하며 선반 위의 물건을 확인한다. 이 정도까지는 나름 한가로운 시간이었다.`,
      );
      await era.printAndWait(
        `하지만 눈 깜짝할 새 정체 모를 물건들로 가득 찬 카트와, 귓가를 스치는 끊임없는 바람 소리를 들으며 ${me.name}은(는) 절로 한숨을 내쉬었다.`,
      );
      era.println();
      await teio.say_and_wait(
        '트레이너, 빨리빨리! 아직 살 거 많단 말이야. 나 혼자선 다 못 들어, 도움이 필요해! 빨리 안 오면 다 팔린다고!',
      );
      await era.printAndWait(
        ` ${me.name}은(는) 하늘을 보며 길게 탄식하며 운명을 받아들이기로 했다. 그리고 소리가 들리는 곳을 향해 전력으로 다리를 움직였다——`,
      );
      era.printButton(
        '필사적으로 테이오의 리듬에 맞춘다 (스피드&파워&근성 +20, 체력 +200, 호감도 +10)',
        1,
      );
      era.printButton(
        '미리 짜둔 동선에 따라 목표 지점에 도착해 대기한다 (스태미나 +20, 지능 +30, 호감도 +5)',
        2,
      );
      if ((await era.input()) === 1) {
        wait_flag =
          get_attr_and_print_in_event(
            3,
            [20, 0, 20, 20, 0],
            0,
            JSON.parse('{"체력":200}'),
          ) || wait_flag;
        wait_flag = sys_like_chara(3, 0, 10) || wait_flag;
      } else {
        wait_flag =
          get_attr_and_print_in_event(3, [0, 20, 0, 0, 30], 0) || wait_flag;
        wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async race_start(teio, me, callname, hook, extra_flag) {
    const relation = era.get(`relation:3:0`),
      edu_weeks = era.get('cflag:3:육성턴수합산');
    if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
      if (era.get('status:3:다리부상')) {
        await print_event_name('기적의 부활 (상)', teio);

        era.printButton('「준비됐니?」', 1);
        await era.input();

        await teio.say_and_wait('바라고 있어…… 내가 정말로 이 모든 걸 손에 넣을 수 있기를.');
        era.println();

        await teio.say_and_wait(
          '이곳에서 나와 트레이너, 그리고 우리를 응원해 준 모든 사람을 위한 테이오 전설을 쓰고 싶어.',
        );
        era.println();

        await teio.say_and_wait(
          '그건…… 마치 꿈같은 일이겠지. 하지만 꿈만 꾸는 게 우리한테 무슨 소용이 있겠어?',
        );
        era.println();
        era.printButton(`「소용없지 (웃음). 하지만 우리는 결국 이 자리까지 왔잖아.」`, 1);
        await era.input();

        await teio.say_and_wait('맞아. 이제 곧 모든 걸 얻게 될 거야.');
        era.println();

        era.printButton(`「좋아, 준비는 끝난 것 같네.」`, 1);
        await era.input();

        await teio.say_and_wait(
          '지난 1년 동안 우리는 모든 걸 잃었어. 그저 작은 희망과 집념 하나만 붙잡고 계속 달렸을 뿐이야——',
        );
        era.println();

        era.printButton(
          '「그렇기에 우리는 이미 필요한 걸 다 갖췄어. 계속 달리는 것 말고 다른 선택지가 있겠니?」',
          1,
        );
        await era.input();

        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 입꼬리를 살짝 올리며 ${me.name}과(와) 눈을 맞추었다——`,
        );
        if (relation > 150) {
          await era.printAndWait(
            `${teio.sex}는 두 손을 뻗어 ${me.name}의 펼친 손바닥 위에 올렸다. ${
              me.name
            }은(는) 담당의 손을 부드럽게 쥐었다. 따스한 온기가 전해졌고, 손끝으로는 ${teio.get_teen_sex_title()}의 탄력 있는 피부와 그 아래에서 요동치는, 조금은 빨라진 맥박이 느껴졌다.`,
          );
          await era.printAndWait(
            ` ${me.name}은(는) ${
              teio.sex
            }의 사파이어처럼 투명하고 맑은 눈을 바라보았다. 그 안의 강인함, 신념, 그리고 희망이 ${
              me.name
            }의 눈동자에 투영되었다. ${me.name}도 미소를 지었지만, 왠지 눈가가 뜨거워지는 기분이었다.`,
          );
          era.println();

          era.printButton('「가렴. 네 이름을 온 세상에 떨쳐줘.」', 1);
          await era.input();

          await teio.say_and_wait('반드시.');
          era.println();

          await era.printAndWait(
            `지면을 박차는 발소리가 작은 방안에 울려 퍼졌다. ${teio.get_teen_sex_title()}는 멋지게 몸을 돌려 손을 흔들며, 한 치의 망설임도 없이 앞으로 나아갔다.`,
          );
        } else {
          await era.printAndWait(
            `${me.get_couple_title()}은 서로 약속이라도 한 듯 손을 내밀어 가볍게 주먹을 맞부딪혔다.`,
          );
          await era.printAndWait(
            `작은 몸에 깃든 힘과 태양 같은 온기가 맞닿은 면을 통해 전해졌다. ${me.get_couple_title()}은 서로를 바라보며 동시에 웃음을 터뜨렸다.`,
          );
          era.println();

          era.printButton('「무운을 빌게.」', 1);
          await era.input();

          await teio.say_and_wait('똑똑히 지켜봐 줘, 나의 달리기를.');
          await era.printAndWait(
            `${teio.sex}는 팔을 거두고 깔끔하게 돌아서서 햇살이 비치는 곳으로 걸어 들어갔다.`,
          );
        }
      } else {
        await print_event_name('질주의 숙원 (상)', teio);

        await teio.say_and_wait(
          '트레이너, 기억나? 우리 첫 레이스 끝나고……나랑 같이 계속 달려주겠냐고 했던 거.',
        );
        era.println();

        await era.printAndWait(
          `입구에서 쏟아지는 햇살이 ${teio.sex}의 전신을 금빛으로 감쌌다. ${teio.sex}는 뒤를 돌아 미소 지으며 ${me.name}에게 말했다.`,
        );
        era.println();

        await teio.say_and_wait(
          '난 그때 정말 진심이었어…… 자, 다시 한번 물어볼게. 나랑 같이 달려줄 거야?',
        );
        era.println();

        era.printButton('「그럼, 당연하지…… 언제까지라도!」', 1);
        await era.input();
        await era.printAndWait(
          `${teio.get_teen_sex_title()}는 가볍게 고개를 끄덕이더니 몸을 돌렸다. 그리고 힘차게 팔을 휘저었다. 망토가 마치 타오르는 불꽃처럼 펄럭였고, 그녀는 당당한 발걸음으로 눈부신 빛 속으로 녹아들었다.`,
        );
      }
    } else {
      return await super.race_start(teio, me, callname, hook, extra_flag);
    }
  }

  async school_rooftop(teio, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 3) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    if (event_object?.arg !== 'wing_and_sky') {
      return false;
    }
    await print_event_name('두 날개로, 푸른 하늘에 닿기를', teio);

    await me.say_and_wait('옥상이라니, 정말 오랜만이네.', true);
    await era.printAndWait(`${me.name}은(는) 도시락 통을 들고 문밖으로 나갔다.`);
    await era.printAndWait(
      `문은 이미 활짝 열려 있었고, 그 앞에는 ${me.name}의 사랑스러운 파트너, ${teio.name}가 서 있었다.`,
    );
    era.println();

    await teio.say_and_wait(`역시 여기가 제일 편해~ 높은 곳은 정말 자유로운걸!`);
    era.println();

    await me.say_and_wait('네가 즐거우면 됐어.');
    era.println();

    await era.printAndWait(
      `그렇게 말하며 ${me.name}은(는) 도시락 통을 내려놓고 정리하기 시작했다. 담당이 무슨 바람이 불었는지 옥상에서 둘만의 티타임을 갖자고 졸라대는 바람에, ${me.name}은(는) 어쩔 수 없이 간식거리와 직접 우린 과일차를 챙겨 ${teio.sex}를 따라온 참이었다.`,
    );
    era.println();

    await teio.say_and_wait('저기 말이야——');
    era.println();

    await era.printAndWait(
      `가벼운 바람이 스쳐 지나갔다. ${
        me.name
      }이(가) 고개를 들자, ${teio.get_uma_sex_title()}가 가벼운 발놀림으로 몸을 살짝 띄워 빙그르르 돌더니 ${
        me.name
      }과(와) 눈을 맞추며 말했다.`,
    );
    era.println();

    await teio.say_and_wait(
      '트레이너도 알고 있지? 높은 곳에 도달하고 싶다는 나의 꿈. 이제 우리 두 사람의 손으로, 그 막연했던 꿈이 점점 현실의 계단이 되어 우리를 위로 인도하고 있어. 그다음은……',
    );
    era.println();

    era.print(`${me.name}은(는) 대답했다——`);
    era.printButton(
      '「나는 언제까지나 네 조력자가 되어줄게.」 (스피드&스태미나&지능 +20, 체력 +200, 애정도 +1)',
      1,
    );
    era.printButton(
      '「꿈을 이루길 빌게. 꿈을 이루고 나면 다시 이곳에서 축하하자.」 (스피드 +15, 파워&근성 +20, 호감도 +5)',
      2,
    );
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `${teio.get_teen_sex_title()}는 허리를 숙여 ${me.name}에게 찬란한 미소를 지어 보였다.`,
      );
      wait_flag =
        get_attr_and_print_in_event(
          3,
          [20, 20, 0, 0, 20],
          0,
          JSON.parse('{"체력":200}'),
        ) || wait_flag;
      wait_flag = sys_love_uma(3, 1) || wait_flag;
    } else {
      await teio.say_and_wait('또 하나 약속이야, 꼭 기억해야 해~!');
      wait_flag =
        get_attr_and_print_in_event(3, [15, 0, 20, 20, 0], 0) || wait_flag;
      wait_flag = sys_like_chara(3, 0, 5) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async train_fail(teio, me, callname, hook, extra_flag) {
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.train === attr_enum.intelligence) {
      await teio.say_and_wait('아무래도 테이오 전설은…… 여기서 잠시 멈춰야 할 것 같아……');
      await era.printAndWait([
        teio.get_colored_name(),
        ' 은(는) 책상에 엎드린 채 공부할 의욕을 잃어버렸다.',
      ]);
      await me.say_and_wait('역시 공부는 거짓말을 안 하는구나. 모르는 건 모르는 거야.', true);
    } else if (era.get('status:3:다리부상') > 0) {
      await teio.say_and_wait('앗! 으윽……!');
      await era.printAndWait(
        `평소 활기차고 애교 섞였던 목소리가 고통 때문에 날카로운 비명으로 일그러져 ${me.name}의 고막과 가슴을 찔렀다. ${me.name}은(는) 황급히 달려가 ${teio.sex}를 조심스럽게 다독이며 상태를 확인하고 환부를 부드럽게 주물렀다.`,
      );
      hook.arg = 0;
    } else {
      await teio.say_and_wait('아얏—?!');
      await era.printAndWait([
        '짧은 비명과 함께, ',
        me.get_colored_name(),
        '의 담당이 그만 넘어지고 말았다. ',
        me.get_colored_name(),
        '은(는) 서둘러 상태를 살피러 달려갔다.',
      ]);
      hook.arg = 0;
    }
  }
};
