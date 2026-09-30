/**
 * @file 골드 쉽 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const kojo = require('#/event/edu/edu-7.kojo');
const Edu7UntilWeekStart = require('#/event/edu/edu-events-7/week-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_7 = require('#/data/chara-colors').chara_colors[7];
const { lust_border } = require('#/data/ero/orgasm-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends Edu7UntilWeekStart {
  get #dict() {
    const o = {};
    o['당신'] = era.get('callname:0:-2');
    const gold_ship = get_chara_talk(this.id);
    o['그녀'] = gold_ship.sex;
    o['우마무스메'] = gold_ship.get_uma_sex_title();
    o['대표색'] = gold_ship.color;
    return o;
  }

  async crazy_fan_end() {
    await kojo['crazy_fan_end'](this.#dict);
  }

  /** @param {CharaTalk} gold_ship */
  async hoverboard(gold_ship) {
    await print_name_and_show_kojo(
      '고루시호, 탄생!',
      gold_ship,
      kojo,
      this.#dict,
    );
    era.set('item:고루시호', 1);
  }

  async out_church(gold_ship, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 7) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    await print_event_name(
      [{ color: color_7[1], content: '새해 참배' }],
      gold_ship,
    );

    await gold_ship.say_and_wait('트레짱——! 다시 왔어!');
    await gold_ship.say_and_wait('어때?! 어때 어때 어때?!');
    era.println();

    await era.printAndWait(
      `의외로 ${gold_ship.name}은 평범한 교복이 아니라 검은색의 세련된 옷을 입고 있었다.`,
    );
    era.println();

    await gold_ship.say_and_wait('이건 고루시가 직접 디자인하고, 직접 바느질한 무대 의상이야!');
    await gold_ship.say_and_wait('목표는 파리 패션 위크에서 런웨이에 오르는 거야!');
    era.println();

    era.printButton('「예쁘냐고? 확실히 예쁘긴 해……」', 1);
    await era.input();

    await era.printAndWait(
      `${gold_ship.sex}가 히히 웃으며 ${me.name}의 팔을 감싸 안자, 풍만한 가슴이 ${me.name}에게 닿았다.`,
    );
    era.println();

    await gold_ship.say_and_wait('그럼~ 내일은 같이 화려한 옷을 입고 신사에 가서 새해를 맞이하자');
    era.println();

    era.printButton('「……어? 나도 입어야 해?」', 1);
    await era.input();

    await era.printAndWait(
      `다음 날, ${me.name}은(는) 호화로운 사무라이 갑옷을 강제로 입게 되었고, 서양 귀부인 스타일의 골드 쉽과 함께 지역 신사에서 호기심 어린 군중들에게 둘러싸였다.`,
    );
    era.println();

    await era.printAndWait(
      `${gold_ship.name}과 함께 보낸 두 번째 새해 역시 전혀 마음 편치 않았다.`,
    );
    era.println();
    let wait_flag = sys_like_chara(7, 0, 10);
    sys_change_pressure(7, -2500);
    wait_flag = sys_change_motivation(7, 1) || wait_flag;
    wait_flag && (await era.waitAnyKey());
    era.set('cflag:7:축제이벤트표시', 0);
    return true;
  }

  async out_start(gold_ship, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 7) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'golden_ship_date') {
      return;
    }
    await print_event_name(
      [{ color: color_7[1], content: '고루시류 데이트' }],
      gold_ship,
    );

    await era.printAndWait(
      `어느 날，${me.name}과(와) ${gold_ship.name}은 학원 정문 근처에서 마주쳤다——`,
    );
    era.println();

    await gold_ship.say_and_wait('아오! 짜증나!');
    await gold_ship.say_and_wait(
      `${sys_get_callname(7, 0)}，조던 그 녀석이 내가 데이트하는 법을 모른다고 하잖아아아!`,
    );
    await gold_ship.say_and_wait(
      `어차피 너도 할 일 없잖아?! 지금 당장 나랑 데이트하러 가자!`,
    );
    era.println();

    await era.printAndWait(`결국 ${gold_ship.sex}에게 강제로 거리로 끌려나가 데이트를 하게 됐다……`);
    await era.printAndWait(
      '하루 종일 신나게 놀고 난 뒤, 두 사람은 돌아가는 길에 공원에 들러 잠시 휴식을 취했다.',
    );
    era.println();

    await gold_ship.say_and_wait('후～ 나도 좀 피곤하네. 이 다음에는 뭐 할까?');
    era.printButton('「내가 음료수 사올게.」（스태미나+20）', 1);
    era.printButton('「연장전이야! 내가 이길 때까지 하자!」（파워+20）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `${me.name}은(는) ${gold_ship.sex}에게 음료수를 사주었고, 두 사람은 함께 천천히 기숙사로 돌아갔다.`,
      );
      era.println();

      get_attr_and_print_in_event(7, [0, 20, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else {
      await era.printAndWait(
        `${me.name}과(와) ${gold_ship.name}의 기묘한 게임은 계속되고 있다...`,
      );
      era.println();

      get_attr_and_print_in_event(7, [0, 0, 20, 0, 0], 0) &&
        (await era.waitAnyKey());
    }
    return true;
  }

  async school_atrium(gold_ship, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 7) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_arg = event_object?.arg;
    if (event_arg === 47 + 3) {
      await print_event_name(
        [{ color: color_7[1], content: '어머니는 신보다 강하다 편' }],
        gold_ship,
      );

      const creek = get_chara_talk(45);

      await era.printAndWait('???「바다 밑에 잠들어 있는 황금의 배여……」', {
        color: color_7[1],
      });
      await era.printAndWait('???「이제 깨어날 때가 되었다……」', {
        color: color_7[1],
      });
      await era.printAndWait('???「너의 힘을 발휘하여 전무후무한 경지에 도달하라……」', {
        color: color_7[1],
      });
      era.println();

      await gold_ship.say_and_wait('……음? 방금 그 소리는 뭐였지……?');
      era.println();

      era.printButton('「드디어 환청이 들리기 시작한 거야?」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '자칭 신이라고 하는 목소리를 들었어, 혹시 고루시짱 안에 있는 두 번째 인격인 걸까?',
      );
      era.println();
      era.printButton('「심리 상담사 예약해 줄까……」', 1);
      await era.input();

      await gold_ship.say_and_wait('아니야, 그 녀석이 나한테 무슨『에덴』 같은 데로 가라고 하더라고……');
      era.println();

      await era.printAndWait(
        `클래식 3관 첫 레이스인 사츠키상이 곧 다가오는데 에덴 푸딩 생각은 접어두는 게 좋지 않나…… 하지만 ${gold_ship.name}은 제멋대로 쏜살같이 뛰쳐나가 그 소위 말하는 「에덴」을 찾아나섰다.`,
      );
      era.println();

      await gold_ship.say_and_wait('나는 갓쉽이다——!');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 실내에서 방향전환하며 코너링 속도를 발휘하는 ${
          gold_ship.name
        }을 간신히 따라잡을 수 있었지만——그러다 ${
          gold_ship.sex
        }가 다른 ${gold_ship.get_uma_sex_title()}에게 정면으로 부딪혀 버리고 뒤따르던 ${
          me.name
        }에게 끼어버렸다.`,
      );
      era.println();

      await gold_ship.say_and_wait('나...나는...황금별...황금별의 공원이 보여..');
      await gold_ship.say_and_wait(
        '아니! 너는 누구야! 신성한 골드 쉽의 충격을 견뎌내다니……!',
      );
      await creek.say_and_wait(
        `어머나, 안녕하세요, ${gold_ship.name}짱. 오늘도 활기차네요!`,
      );
      era.println();

      await era.printAndWait(
        `이렇게 큰 충격을 견뎌내다니, 정말 대단한 가ㅅ... 아니, 정말 강인한 ${creek.get_uma_sex_title()}군!`,
      );
      era.println();

      era.printButton('「보아하니, 신이라도 엄마 앞에서는 어쩔 수 없나 보구나……」', 1);
      await era.input();

      await era.printAndWait(
        `${me.name}은(는) ${creek.name}에게 사과한 뒤, 정신이 혼미해진 ${gold_ship.name}을 트레이닝실로 끌고 갔다.`,
      );
      era.println();

      get_attr_and_print_in_event(7, new Array(5).fill(3), 45) &&
        (await era.waitAnyKey());
    } else if (event_arg === 95 + 41) {
      const festa = get_chara_talk(49);
      await print_event_name(
        [{ color: color_7[1], content: '진심 배틀 편' }],
        gold_ship,
      );

      await era.printAndWait(`${me.name}과(와) 골드 쉽을 에덴으로 이끄는 신비한 인물……`);
      era.println();

      await era.printAndWait(
        '그 사람은 골드 쉽이 레이스에 나설 의욕을 북돋우기 위해 이렇게까지 애를 쓴 게 분명하다. 어쨌든, 그게 골드 쉽의 원동력으로 이어진다면…… 그건 윈-윈-윈의 구도다.',
      );
      era.println();

      era.printButton('（그래서 이 녀석들은 또 뭘 하고 있는 거야……）', 1);
      await era.input();

      await era.printAndWait(
        `${
          me.name
        }의 눈앞에는 두 개의 생생한 ${gold_ship.get_uma_sex_title()} 동상이 서 있다…… 하지만 생생하다고 하기보다 그냥 본인이랑 다를 바가 없다.`,
      );
      era.println();

      await gold_ship.say_and_wait('……');
      await festa.say_and_wait('……');
      era.println();

      await era.printAndWait(
        '두 사람은 사람들로 북적이는 안뜰에 서 있었다. 가만히 서 있기는 했지만 오히려 눈에 확 띄었다.',
      );
      era.println();

      await festa.say_and_wait('……');
      await gold_ship.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `아마 또 무슨 알 수 없는 대결을 하고 있는 게 아닐까, 움직이지 말기 챌린지 같은 거. 이때 ${me.name}은(는) 재미있는 생각이 떠올랐다.`,
      );
      era.println();

      era.printButton('「우와, 그 나이 먹고도 여전히 나무인형 놀이를 하고 있네.」', 1);
      await era.input();

      await gold_ship.say_and_wait('……');
      await festa.say_and_wait('……!');
      era.println();

      era.printButton('「그럼, 이 기회에 장난 좀 쳐볼까~?」', 1);
      await era.input();

      await festa.say_and_wait('……읏!');
      await gold_ship.say_and_wait('……');
      era.println();

      era.printButton('「어라, 스테이 골드잖아! 이리 와볼래?」', 1);
      era.printButton('두 사람의 허리 주변 민감한 부위를 어루만진다.', 2, {
        disabled:
          era.get('cflag:49:모집상태') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });

      if ((await era.input()) === 1) {
        await festa.say_and_wait('젠장! 들켰나?!... 너, 날 속였구나!');
        await gold_ship.say_and_wait('좋아, 내가 이겼다!!');
        await festa.say_and_wait(
          '젠장! 대단하군, 고루시! 다음에는 내가 잘하는 분야에서 정정당당하게 널 쓰러뜨려 주마!',
        );
        await gold_ship.say_and_wait('오냐! 그럼 결승선 옆에서 기다릴게!');
      } else {
        await festa.say_and_wait('……너♡!');
        await gold_ship.say_and_wait('……♡');
        era.println();

        await era.printAndWait(
          `${me.name}의 의도적인 애무에 두 사람의 마음은 초조함으로 가득 찼고, 점점 거세지는 숨소리와 입술 사이로 새어 나오는 은은한 신음은 ${me.name}의 손이 금단의 구역으로 점점 다가감에 따라 더욱 거칠어졌다. 승패의 결과는 더 이상 중요하지 않았다……`,
        );

        era.set(
          'base:7:성욕',
          Math.max(era.get('base:7:성욕'), lust_border.itch),
        );
        era.set(
          'base:49:성욕',
          Math.max(era.get('base:49:성욕'), lust_border.itch),
        );
        begin_and_init_ero(0, 7, 49);
        await print_ero_page(7, true);
        await end_ero_and_show_result(true);
      }

      get_attr_and_print_in_event(7, [0, 0, 0, 5, 0], 0) &&
        (await era.waitAnyKey());
    } else if (event_arg === 'heroine_red') {
      await print_event_name(
        [{ color: color_7[1], content: '주인공의 빨간색!' }],
        gold_ship,
      );

      await era.printAndWait(`어느 날, ${me.name}이(가) 안뜰에서 걷고 있을 때——`);
      await era.printAndWait(`승부복을 입은  ${gold_ship.name}을 보았다.`);
      era.println();

      await gold_ship.say_and_wait(
        `아, ${me.actual_name} 아니야. 오늘도 정신 차리고 아가미로 숨 쉬어야 해.`,
      );
      era.printButton('「...그건 그렇고, 왜 승부복 차림이야?」', 1);
      await era.input();
      await gold_ship.say_and_wait('이건 빨간 주인공의 힘을 얻기 위해서야.');
      await gold_ship.say_and_wait(
        '그 표정은 뭐야? 생각해봐, 어렸을 때 봤던 히어로물, 열혈 만화의 주인공들은 다 빨간 옷을 입고 있었잖아?',
      );
      await gold_ship.say_and_wait(
        '빨간색을 입은 녀석이 바로 주인공이고, 결국 마지막에 승리하게 될 거야!',
      );
      era.println();

      await era.printAndWait(
        `좀 이상하지만 ${gold_ship.name}의 말도 틀린 건 아니긴 한데...이 기회에 좀 가르쳐줄까?`,
      );
      era.printButton('「세상에는 다양한 종류의 붉은색이 있어.」（지능+20）', 1);
      era.printButton('「자신의 신념을 관철해야 해!」（근성+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_ship.say_and_wait('세상에. 관능적인 빨강과 악당의 빨강도 있다고?');
        await gold_ship.say_and_wait('그렇구나, 내가 빨간색의 힘을 얕봤던 모양이군……');
        await gold_ship.say_and_wait(
          '나는 처음부터 주인공도 될 수 있고 악당도 될 수 있는 힘을 이미 얻었던 거야!',
        );
        await gold_ship.say_and_wait('게다가…… 관능적인 매력까지 더해져서 막을 수가 없지♥');
        era.println();

        await era.printAndWait(
          `${gold_ship.name}은 매혹적인 눈빛을 보내고 흥분한 채 떠났다.`,
        );
        era.println();

        get_attr_and_print_in_event(7, [0, 0, 0, 0, 20], 0) &&
          (await era.waitAnyKey());
      } else {
        await gold_ship.say_and_wait(
          `맞아! 고루시${gold_ship.sex_code - 1 ? '짱' : '군'}，등장!`,
        );
        era.println();

        await era.printAndWait(`${gold_ship.name}은 활기차게 떠났다.`);
        era.println();

        get_attr_and_print_in_event(7, [0, 0, 0, 20, 0], 0) &&
          (await era.waitAnyKey());
      }
    } else if (event_arg === 'sudden_look_back') {
      await print_event_name(
        [{ color: color_7[1], content: '고루시의 갑작스런 과거 회상편!' }],
        gold_ship,
      );

      await era.printAndWait(
        `배가 고프다. 식당의 라면이 꽤 평이 좋다는 얘기를 들은 ${me.name}은(는) 트레센 식당으로 가서 배고픔을 달래기로 결심했다.`,
      );
      era.println();

      await era.printAndWait(
        `가는 길에, ${me.name}은(는) 멀리서 안뜰에 앉아 있는 골드쉽을 봤다. 흔들리는 나뭇잎 사이로 비추는 햇빛이 침묵 속 미인에게 떨어져 반짝이고 있었다.`,
      );
      era.println();

      await gold_ship.say_and_wait(`아, ${me.actual_name}(이)구나.`);
      era.println();

      era.printButton('여기서 뭐해? 밥 안 먹어?', 1);
      await era.input();

      await gold_ship.say_and_wait('뭐랄까, 옛날 일을 떠올리고 있었어.');
      await gold_ship.say_and_wait(
        '오래 전의 한 눈보라 치던 밤, 어린 나는 집안의 나사 공장에 보탬이 되고자 혼자 거리에서 금속 배트를 팔고 있었어…',
      );
      era.println();

      era.printButton('나사나 돌리는 게 나았겠는데.', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '하지만, 도중에 뼈 속까지 스미는 찬바람에 몸이 얼어붙어 사람 꼴이 아니게 되었고, 너무 추워서 울음을 터뜨리고 말았지.',
      );
      await gold_ship.say_and_wait(
        `그때……내 운명을 바꿔준 ${gold_ship.get_uma_sex_title()}가 나타났어.`,
      );
      await gold_ship.say_and_wait(
        `${gold_ship.sex}는 내 앞에 다가와 따뜻한 라면 국물에 밥을 말아 건네줬지.`,
      );
      era.println();

      era.printButton('이거 대체 무슨 이야기야?', 1);
      await era.input();

      await gold_ship.say_and_wait(
        `${
          gold_ship.sex
        }는 나에게 이렇게 말했어.『나도 ${gold_ship.get_uma_sex_title()}지만, 달리기는 잘 못해서 지금은 라면 가게를 운영하고 있어. 너도 인생의 목표를 자유롭게 선택할 수 있다는 걸 잊지 마.』`,
      );
      await gold_ship.say_and_wait(
        `그 ${gold_ship.get_uma_sex_title()}의 말을 듣고 나는 깨달았어. 나는 집안의 나사 공장을 물려받지 않아도 된다는 것을!`,
      );
      era.println();

      await era.printAndWait(
        '다른 사람에게 휘둘리지 않고, 자신의 길만을 확고히 걷는다… 정말로 골드쉽다운 면모군.',
      );
      era.println();

      era.printButton('「그때의 국물을 재현해보는 건 어때?」（스태미나 & 지능 +10）', 1);
      era.printButton('「그때의 장소를 다시 찾아가보는 건 어때?」（스피드 +20）', 2);
      const ret = await era.input();

      if (ret === 1) {
        await gold_ship.say_and_wait('국물을 재현하다니… 내가 할 수 있을까?');
        await gold_ship.say_and_wait(
          '…흥, 트레이닝을 거친 내가 못할 게 뭐야? 마늘을 잔뜩 넣은 그 맛을 아직도 기억하고 있다고!',
        );
        await gold_ship.say_and_wait(`따라와!`);
        era.println();

        await era.printAndWait(
          `${me.name}은(는) 골드쉽에게 이끌려 식당 주방으로 갔고, 두 사람은 모두의 시선 속에서 주방 한구석을 차지하고 라면 국물 연구를 시작했다.`,
        );
        era.println();

        await gold_ship.say_and_wait(
          '좋아! 완성됐어! 마늘 듬뿍 들어간 라면! 함께 맛보자!',
        );
        era.println();

        era.printButton('「너무 맵다————!! 마늘을 너무 많이 넣어서 먹을 수가 없어!」', 1);
        await era.input();

        await era.printAndWait(
          `${me.name}과(와) 골드 쉽은 사후 검토를 통해, 그날 그렇게 자극적인 라면국물을 먹을 수 있었던 것은 추운 날씨라는 극단적인 상황 때문이었다고 결론지었다.`,
        );
      } else {
        await gold_ship.say_and_wait('그때의 장소… 맞아! 강둑 근처였어!');
        await gold_ship.say_and_wait(
          '만약 그때 그대로라면 그 라면 가게는 아직도 있을 거야!',
        );
        era.println();

        await era.printAndWait(
          `${me.name}은(는) 골드 쉽에게 이끌려 강둑으로 가 신비로운 라면 가게를 찾았지만, 밤이 될 때까지 아무것도 찾지 못했다…`,
        );
      }
      era.println();

      await era.printAndWait(
        `그 후 어느 날, ${me.name}은(는) 트레이닝실에서 밤 늦게까지 머물고 있었다. 골드 쉽의 트레이너로서, ${gold_ship.sex}의 팬레터를 관리하는 것도 중요한 업무 중 하나였다. ${me.name}은(는) 기계적으로 팬레터 중 하나를 열어보았고, 그 안에는 무언가 의미심장한 말이 적혀 있었다…`,
      );
      era.println();

      await era.printAndWait(
        '???「너는 정말로 자유롭게 자신의 길을 선택했구나. 나도 항상 너를 지켜보고 있을게.」',
      );
      era.println();

      era.printButton('이 편지, 고루시에게 보여줄까...', 1);
      await era.input();

      await era.printAndWait(
        `편지에는 이 문장만 적혀 있었고, 발신자와 수신자는 없었다. 하지만 ${me.name}은(는) 골드 쉽이 말했던 마늘 향이 가득했던 그 추운 겨울 이야기를 떠올리지 않을 수 없었다.`,
      );
      era.println();

      if (ret === 1) {
        get_attr_and_print_in_event(7, [0, 10, 0, 0, 10], 50) &&
          (await era.waitAnyKey());
      } else {
        get_attr_and_print_in_event(7, [20, 0, 0, 0, 0], 50) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async school_rooftop(
    gold_ship,
    me,
    callname,
    hook,
    extra_flag,
    event_object,
  ) {
    if (era.get('flag:현재상호작용캐릭터') !== 7) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'shoubu') {
      return;
    }
    const festa = get_chara_talk(49);
    await print_event_name(
      [{ color: color_7[1], content: '진심으로 승부를 겨루자!' }],
      gold_ship,
    );
    await era.printAndWait(
      `${me.name}과(와) ${gold_ship.name}은 옥상에서 잠깐의 휴식을 즐기고 있었다… 이 시간은 평범하게 흘러갈 뻔했지만——${me.name}은(는) ${festa.name}를 발견했다.`,
    );
    era.println();

    await festa.say_and_wait('…어이, 오늘 기분이 좋아 보이는걸.');
    await gold_ship.say_and_wait(`${era.get('callname:7:49')}……!!`);
    era.println();

    await era.printAndWait(
      `순간! 당신들의 피가 얼어붙었다! ${festa.name}의 도박꾼 같은 기세에 ${gold_ship.name} 조차 압도당한 것이다…!!`,
    );
    era.println();

    await festa.say_and_wait(
      '후후… 그런 표정 짓지 마. 너희가 그러면 나도 바로 승부를 하고 싶어지잖아.',
    );
    await gold_ship.say_and_wait('승부……?!');

    era.printButton('「페스타, 무슨 소리를……!」', 1);
    await era.input();

    await festa.say_and_wait('당연히……');
    era.println();
    era.printButton(`${festa.name}「한정 가위바위보……!」`, 1);
    era.printButton(`${festa.name}「황제 카드……!」`, 2);
    era.printButton(`${festa.name}「……우마뾰이♡」`, 3, {
      disabled:
        era.get('cflag:49:모집상태') !== recruit_flags.yes ||
        era.get('love:49') < 50,
    });
    let ret = await era.input();
    if (ret === 3) {
      await era.printAndWait(
        `${me.name}과(와) 골드쉽은 갑작스러운 우마뾰이 제안에 멍하니 서 있었지만, 나카야마 페스타의 눈빛은 그녀가 이미 참을 수 없다는 것을 보여주고 있었다…`,
      );
      era.println();
      await festa.say_and_wait(
        '말해두는데, 상상만 해도 벌써 젖어버렸어… 빨리 나랑 승부하자고♡♡♡',
      );
      era.set(
        'base:49:성욕',
        Math.max(era.get('base:49:성욕'), lust_border.absent_mind),
      );
      begin_and_init_ero(0, 7, 49);
      await print_ero_page(49, true);
      await end_ero_and_show_result(true);
    } else {
      await era.printAndWait(
        ret === 1
          ? '한정 가위바위보…!! 카드를 사용해 가위바위보로 상대의 생명을 빼앗는 무서운 게임… 조금만 실수하면 심연에 빠지게 된다!!'
          : '황제 카드…!! 카드를 사용해 크기 비교로 생사를 결정하는 무서운 게임… 조금만 실수하면 심연에 빠지게 된다!!',
      );
      era.println();
      await era.printAndWait(
        `큰일이군...${
          era.get('cflag:7:성별') - 1 && era.get('cflag:49:성별') - 1
            ? '그녀'
            : '그'
        }들의 성격 상 이걸 끝내고 나면 점심이 다 식어버릴 거야! 어떡하지, 막아야 할까…?!`,
      );
      era.printButton('「아니, 내가 나서겠어!」（체력+100）', 1);
      era.printButton(
        '「힘내라…!」（【비근간 거리◯】 습득、스킬포인트+60 or 스킬포인트+15）',
        2,
      );
      ret = await era.input();
      if (ret === 1) {
        await festa.say_and_wait('뭐라고? 생각보다 꽤 용감한 편이네…… 재미있군!');
        await festa.say_and_wait('좋아! 오늘은 너랑 한판 해보자!');
        await gold_ship.say_and_wait('야야, 설마?! 나만 따돌리는 거야?!');
        era.println();

        await era.printAndWait(`${me.name}은(는) 온 힘을 다해 간신히 위기에서 벗어났다…`);
        await era.printAndWait('하지만 점심 시간은 어느새 지나가 버렸다!');
        era.println();

        get_attr_and_print_in_event(
          7,
          undefined,
          0,
          JSON.parse('{"체력":100}'),
        ) && (await era.waitAnyKey());
      } else {
        if (Math.random() < 0.5) {
          await era.printAndWait(
            `${gold_ship.name}은 온 힘을 다해 간신히 위기에서 벗어났다……`,
          );
          await era.printAndWait('하지만 점심 시간은 어느새 지나가 버렸다!');
          era.println();

          get_skills_and_print_in_event(7, [200142]) &&
            (await era.waitAnyKey());
          get_attr_and_print_in_event(7, undefined, 60) &&
            (await era.waitAnyKey());
        } else {
          await era.printAndWait(
            `${gold_ship.name}은 온 힘을 다했지만, 결국 ${festa.name}에게 이기지 못했다……`,
          );
          await era.printAndWait('게다가 점심 시간은 어느새 지나가 버렸다!');
          era.println();

          get_attr_and_print_in_event(7, undefined, 15) &&
            (await era.waitAnyKey());
          era.set('status:7:땡땡이', 1);
        }
      }
    }
    return true;
  }

  async train_success_add(gold_ship, me, callname) {
    await print_event_name(
      [{ color: color_7[1], content: '추가 자율 트레이닝' }],
      gold_ship,
    );
    await era.printAndWait([
      '오늘 ',
      gold_ship.get_colored_name(),
      '과의 트레이닝이 드디어 끝났다.',
    ]);
    era.println();

    await gold_ship.say_and_wait('수고했어——! 바이바이!');
    era.println();

    await era.printAndWait([
      gold_ship.get_colored_name(),
      '은 하품을 하고 가볍게 뛰어가더니——다시 돌아왔다.',
    ]);
    era.println();

    await gold_ship.say_and_wait('자, 추가 트레이닝 시작! 지금 완전 신나!');
    await gold_ship.say_and_wait([
      callname,
      ' 추가 트레이닝이 뭔지 모를 리는 없겠지? 정말 유행에 뒤쳐졌구만——',
    ]);
    await gold_ship.say_and_wait(
      '추가 트레이닝은 추가 트레이닝의 줄임말이야—— 전 우주 천만 명의 골드쉽 팬들 사이에서 엄청 유행하는 거라고!',
    );
    await gold_ship.say_and_wait(
      '내 트레이너라면 이걸 좀 더 깊이 연구해 봐야 한다구.',
    );

    era.printButton('「그럼 우리도 유행에 뒤처질 수 없지.」', 1);
    era.printButton('「아니, 지금 유행은 CD (Cool Down)야!」', 2);
    if ((await era.input()) === 1) {
      await gold_ship.say_and_wait([
        '좋아! 기운 넘치네! ',
        me.actual_name,
        ' 대원, 따라와——!',
      ]);
      era.println();
      await era.printAndWait('당신들은 석양 아래에서 계속 달렸다.');
      return true;
    } else {
      await gold_ship.say_and_wait(
        'CD……? 그게 뭐야, 요즘 유행하는 거야? 트레이너들 사이에서 인기 있다고…?',
      );
      await gold_ship.say_and_wait('CD가 쿨다운(Cool Down)을 뜻하는 거라고…… 헤! 그럼 간단하네!');
      await gold_ship.say_and_wait(
        '빙수 먹으면서 CD하면 되잖아! 줄여서 『Cool Down CD』!',
      );
      era.println();
      await era.printAndWait('그래서 당신들은 푹 쉬었다.');
    }
    return false;
  }
};
