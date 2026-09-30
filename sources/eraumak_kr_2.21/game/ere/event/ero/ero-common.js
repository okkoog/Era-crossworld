/**
 * @file 조교 지문 (CustomizedEro)
 * @author O口口口口口
 * @author 雞雞
 * @author 天马闪光蹄
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');
const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const kojo = require('#/event/ero/common/common.kojo');
const cum_in_womb = require('#/event/ero/common/cum-in-womb');
const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const pregnant_report_in_love = require('#/event/ero/common/pregnant-report-in-love');
const RapeCommandLines = require('#/event/ero/common/rape/rape-common');
const SleepCommandLines = require('#/event/ero/common/sleep/sleep-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { shop_result_type_enum } = require('#/data/ero/juel-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { part_enum, part_names } = require('#/data/ero/part-const');
const {
  breast_size,
  penis_desc,
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const { default_tags } = require('#/data/event/ero-hook-tag');
const {
  ero_hook_tags,
  ero_hooks,
  ero_tagged_hooks,
} = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_breast_cup } = require('#/data/info-generator');

const optimized_part_names = {};
optimized_part_names[part_enum.mouth] = '입 안';
optimized_part_names[part_enum.virgin] = '보지';
optimized_part_names[part_enum.anal] = '애널';

const hate_mark_desc = [
  '은(는) 날카로운 눈빛으로 노려보았다……',
  '은(는) 분노가 서린 표정을 지었다……',
  '은(는) 분노로 얼굴을 일그러뜨리며 낮게 욕설을 내뱉었다……',
];
const pain_mark_desc = [
  '은(는) 얼굴을 일그러뜨리며 고통을 참고 있다……',
  '은(는) 고통스러운 비명을 질렀다……',
  '은(는) 너무나 큰 고통에 울부짖고 있다……',
];
const pleasure_mark_desc = [
  '은(는) 강렬한 쾌감에 몸을 떨고 있다……',
  '은(는) 쾌감의 여운을 받아들이며 표정이 풀렸다……',
  '은(는) 강렬한 즐거움에 심신이 타버릴 것만 같다……',
];
const shame_mark_desc = [
  '은(는) 굴욕감에 얼굴을 붉히고 있다……',
  '은(는) 수치심에 지배당하고 있는 듯하다……',
  '은(는) 완전히 수치심에 지배당했다……',
];
const sex_mark_desc = [
  '음문이 난자의 활동 궤적을 표시하기 시작했다……',
  '음문이 태아의 성장에 맞춰 더욱 화려하게 변했다……',
  '음문이 임신율과 수태 상황을 보여주게 되었다……',
];

class CustomizedEro {
  /** @type {function(number):CustomizedEro} */
  static get_custom_ero;
  /** @type {function(number,number,*?):Promise} */
  static run_custom_ero;

  get_this() {
    return this;
  }

  /**
   * @param {number} chara_id
   * @param [exclude]
   * @param {boolean} exclude.[normal]
   * @param {boolean} exclude.[sleep]
   * @param {boolean} exclude.[rape]
   */
  constructor(chara_id, exclude) {
    this.id = chara_id;
    if (!exclude?.normal) {
      this.normal = new NormalCommandLines(this);
    }
    if (!exclude?.sleep) {
      this.sleep = new SleepCommandLines(this);
    }
    if (!exclude?.rape) {
      this.rape = new RapeCommandLines(this);
    }
  }

  /**
   * 조교 시작
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  // eslint-disable-next-line no-unused-vars
  async ero_start(handle_ero_act) {}

  /**
   * 수면간 중 깨어남
   * @param {number} supporter
   */
  async raping_start(supporter) {
    let temp;
    if (
      era.get('flag:징벌강도') === 3 &&
      supporter > 0 &&
      (temp = [
        era.get(`cflag:${this.id}:부계캐릭`) === supporter,
        era.get(`cflag:${supporter}:부계캐릭`) === this.id,
      ]).reduce((p, c) => p || c)
    ) {
      const { c: child, f: father } = temp[0]
        ? { c: this.id, f: supporter }
        : { c: supporter, f: this.id };
      const o = {};
      o['플레이어이름'] = era.get('callname:0:-2');
      o['우마무스메이름'] = era.get(`callname:${father}:-2`);
      o['딸이름'] = era.get(`callname:${child}:-2`);
      o['호칭'] = sys_get_callname(child, 0);
      await kojo['孕袋惊醒'](o);
    }
  }

  /**
   * 调教结束
   * @param {function(number,boolean[],boolean=):Promise<boolean>} handle_ero_act
   */
  // eslint-disable-next-line no-unused-vars
  async ero_end(handle_ero_act) {}

  /**
   * 加入3P
   * @param {number} lover 主要床伴
   * @returns {Promise<boolean>} 是否同意
   */
  // eslint-disable-next-line no-unused-vars
  async join_3p(lover) {
    const chara = get_chara_talk(this.id);
    era.print([chara.get_colored_name(), '이(가) 상기된 얼굴로 끼어들고 싶어 합니다…… 받아들입니까?']);
    era.printButton('「마침 잘 왔어」', 1);
    era.printButton('관두자……', 2);
    return (await era.input()) === 1;
  }

  /**
   * 加入3P同意
   * @param {number} lover 主要床伴
   */
  // eslint-disable-next-line no-unused-vars
  async join_3p_accept(lover) {
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      '이(가) ',
      get_chara_talk(0).get_colored_name(),
      '의 품속으로 뛰어들었다……',
    ]);
  }

  /**
   * 强行加入3P
   * @param {number} lover 主要床伴
   */
  async join_3p_force(lover) {
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      '이(가) ',
      get_chara_talk(lover).get_colored_name(),
      '의 동의를 얻은 뒤, ',
      get_chara_talk(0).get_colored_name(),
      '의 항의를 화려하게 무시했다……',
    ]);
  }

  /**
   * 加入3P拒绝
   * @param {number} lover 主要床伴
   */
  // eslint-disable-next-line no-unused-vars
  async join_3p_reject(lover) {
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 얼굴을 감싸고 떠나갔다……',
    ]);
  }

  /**
   * 우마무스메 선호 부위 설정
   * @param {Record<string,1>} attacker_parts
   * @param {Record<string,1>} defender_parts
   */
  // eslint-disable-next-line no-unused-vars
  set_preference(attacker_parts, defender_parts) {}

  /**
   * 马娘主动指令筛选器
   * @returns {function(number): boolean} 参数是调教指令ID
   */
  filter_in_rape() {
    if (era.get(`tcvar:${this.id}:임신주머니판매`) > 0) {
      return (e) =>
        (ero_tagged_hooks[e] || default_tags).attacker_tags.findIndex(
          (t) =>
            t === ero_hook_tags.super_sadism ||
            t === ero_hook_tags.sadism ||
            t === ero_hook_tags.imp ||
            t === ero_hook_tags.insert,
        ) !== -1;
    }
    if (era.get('flag:징벌강도') >= 2) {
      if (
        era.get('flag:징벌강도') === 3 &&
        era.get('cflag:0:임신단계') === 1 << pregnant_stage_enum.no
      ) {
        return (e) =>
          e >= ero_hooks.missionary && e <= ero_hooks.stimulate_g_spot;
      }
      return (e) =>
        (e >= ero_hooks.ask_blow_job && e <= ero_hooks.force_deep_blow_job) ||
        (e >= ero_hooks.missionary && e <= ero_hooks.stimulate_womb);
    }
    return (e) =>
      e >= ero_hooks.missionary && e <= ero_hooks.ask_stimulate_womb;
  }

  /** 下一回合：呻吟口上? */
  async next_round() {}

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag	  
   */
  become_erect(chara, me, callname, hook, extra_flag) {
    if (extra_flag.part === part_enum.penis) {
      era.print([
        chara.get_colored_name(),
        '의 ',
        penis_desc[get_penis_size(this.id)],
        ' 육봉이 발기했다!',
      ]);
    } else if (extra_flag.part === part_enum.breast) {
      let cup = get_breast_cup(this.id);
      if (cup > 'G') {
        cup = 'G';
      }
      era.print([
        '진한 색의 작은 앵두가 ',
        chara.get_colored_name(),
        '의 양쪽 ',
        breast_size[cup],
        ' 유방 끝에서 고개를 내밀었다……',
      ]);
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{part:number}} extra_flag	  
   */
  become_lubrication(chara, me, callname, hook, extra_flag) {
    era.print([
      chara.get_colored_name(),
      '의 ',
      { content: part_names[extra_flag.part], color: buff_colors[2] },
      '이(가) 젖어버렸다!',
    ]);
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{continue:boolean,part:number}} extra_flag						   
   */
  wound(chara, me, callname, hook, extra_flag) {
    if (extra_flag.continue) {
      era.print([
        chara.get_colored_name(),
        '의 ',
        { content: part_names[extra_flag.part], color: buff_colors[2] },
        ' 에서 여전히 ',
        { content: ' 피가 흐르고 ', color: buff_colors[3] },
        '있다!',
      ]);
    } else {
      era.print([
        chara.get_colored_name(),
        '의 ',
        { content: part_names[extra_flag.part], color: buff_colors[2] },
        '이(가) ',
        { content: ' 찢어져 버렸다 ', color: buff_colors[3] },
        '!',
      ]);
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{virgin:boolean}} extra_flag
   */
  lose_virginity(chara, me, callname, hook, extra_flag) {
    era.print([
      chara.get_colored_name(),
      '은(는) ',
      { content: extra_flag.virgin ? '처녀' : '동정', color: buff_colors[2] },
      '을(를) 상실했다!',
    ]);
  }

  /**
   * @author 黑奴队长
   * @param {boolean} stop_success 如果寸止的话是否成功
   * @returns {Promise<0|2|undefined>}	  
   */
  async orgasm_denial(stop_success) {
    if (era.get('tflag:주도권') > 0 && era.get('flag:징벌강도') >= 2) {
      return 0;
    }
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    const touch = era.get(`tcvar:${this.id}:음경접촉부위`);
    if (
      touch.part === part_enum.mouth ||
      touch.part === part_enum.virgin ||
      touch.part === part_enum.anal
    ) {
      if (
        await select_yes_or_no(
          [chara.get_colored_name(), '의 육봉이 이미 한계에 도달했다……'],
          `${optimized_part_names[touch.part]} (으)로 받아낸다`,
          '피한다',
        )
      ) {
        return 0;
      }
      if (stop_success) {
        era.print([
          me.get_colored_name(),
          '의 ',
          optimized_part_names[touch.part],
          '이(가) ',
          chara.get_colored_name(),
          '의 사정 직전인 육봉을 뱉어내자, 뜨거운 정액이 그대로 ',
          me.get_colored_name(),
          '의 ',
          touch.part === part_enum.mouth ? '예쁜 얼굴' : '나신',
          '에 뿜어져 나왔다……',
        ]);
      } else {
        era.print([
          me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '와(과)의 주도권 싸움에서 패배했다……',
        ]);
      }
      return 2;
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async orgasm(chara, me, callname) {}

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname	 
   */
  // eslint-disable-next-line no-unused-vars
  async zero_stamina(chara, me, callname) {
    era.print([chara.get_colored_name(), '은(는) 과도한 체력 소모로 인해 혼절했다……']);
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async lost_mind(chara, me, callname) {
    era.print([chara.get_colored_name(), '은(는) 정신력 소모로 인해 넋을 잃었다……']);
  }

  /**
   * 获取刻印
   * @author 黑奴队长
   * @param {number} level
   * @param {number} type
   * @param {boolean} _new 
   */
  async get_mark(level, type, _new) {
    const chara = get_chara_talk(this.id);
    let message = '';
    switch (type) {
      case mark_enum.pleasure:
        message = pleasure_mark_desc[level - 1];
        break;
      case mark_enum.meek:
        if (era.get(`love:${this.id}`) >= 75) {
          message = '은(는) 더욱 일심동체가 되었다……';
        } else {
          message = '은(는) 더욱 굴복했다……';
        }
        break;
      case mark_enum.pain:
        message = pain_mark_desc[level - 1];
        break;
      case mark_enum.shame:
        message = shame_mark_desc[level - 1];
        break;
      case mark_enum.hate:
        if (era.get(`love:${this.id}`) >= 75) {
          await era.printAndWait('사귀고는 있지만, 조금 심하게 한 것 같다');
        }
        message = hate_mark_desc[level - 1];
        break;
      case mark_enum.ero:
        message =
          (_new ? '아랫배에 음문이 나타났다……' : '아랫배의 ') +
          sex_mark_desc[level - 1];
    }
    await era.printAndWait([chara.get_colored_name(), '의 ', message]);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async prison(chara, me, callname, hook) {}

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag			
   */
  async cum_in_womb(chara, me, callname, hook, extra_flag) {
    await cum_in_womb.call(this, chara, me, callname, hook, extra_flag);
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag
   */
  be_pregnant(chara, me, callname, hook, extra_flag) {
    if (era.get(`mark:${extra_flag.mother_id}:음문`) === 3) {
      era.print([
			   
        get_chara_talk(extra_flag.father_id).get_colored_name(),
        '이(가) 사정한 후, ',
        get_chara_talk(extra_flag.mother_id).get_colored_name(),
        '의 음문이 조금 이상하게 변했다……',
      ]);
    } else {
      era.logger.debug(`${extra_flag.mother_id}이(가) 임신했습니다!`);
    }
  }

  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{father_id:number,mother_id:number}} extra_flag									
   */
  async report_pregnant_between_weeks(chara, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id === 0) {
      return await CustomizedEro.get_custom_ero(
        0,
      ).report_pregnant_between_weeks(
        get_chara_talk(extra_flag.father_id),
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    const father = get_chara_talk(extra_flag.father_id);
    const mother = get_chara_talk(extra_flag.mother_id);
    const love = era.get(`love:${mother.id || father.id}`);
    const unexpected_pregnant = LifeEventMarks.get_marks(
      mother.id,
    ).unexpected_pregnant;
    era.drawLine();
    if (love >= 90) {
      await pregnant_report_in_love(father, mother, unexpected_pregnant);
    } else {
      await print_event_name('의외', mother);
      await era.printAndWait([
        mother.get_colored_name(),
        '은(는) 얼굴이 새하얗게 질린 채 ',
        ...(era.get(`mark:${mother.id}:음문`) === 3
          ? [
              {
                content: '아랫배 음문의 임신 징조',
                color: buff_colors[2],
              },
              '를 보며 화장실로 달려가 구토를 했다.',
            ]
          : [
              { content: '손에 든 임신 테스트기', color: buff_colors[2] },
              '를 보며 다시 한번 세면대에 대고 구토했다.',
            ]),
      ]);
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 자신이 어떻게 임신했는지 전혀 기억이 나지 않는다. 범인이 ',
          father.get_colored_name(),
          ' 일 리 없다고 믿고 싶지만, 생각해보면 오직 ',
          father.sex,
          '만이 가능성이 있다……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 조심스럽게 ',
          father.get_colored_name(),
          '에게 임신 사실을 알렸다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '이(가) 몇 번이고 되물어 확인했지만, 아이는 자신의 혈육이라는 대답뿐이었다.',
        ]);
        await era.printAndWait([
					
          father.get_colored_name(),
          '은(는) 전혀 기억이 없음에도 불구하고, 눈물을 흘리는 ',
          mother.get_colored_name(),
          '을(를) 보며 아버지로서의 책임을 지기로 했다……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:질크기`) > 0) {
          await era.printAndWait([
            '……사실 ',
            father.get_colored_name(),
            ' 도 조금은 어머니가 되고 싶었을지도 모른다.',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:동심`) >= 2) {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 전전긍긍하며 ',
          father.get_colored_name(),
          '에게 임신 사실을 털어놓았다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) ',
          mother.get_colored_name(),
          '의 눈가에 맺힌 눈물을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 겁먹은 채로 ',
          father.get_colored_name(),
          '에게 책임을 져달라고 부탁했다……',
        ]);
      } else {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 냉담하게 ',
          father.get_colored_name(),
          '에게 임신 사실을 전했다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) ',
          mother.get_colored_name(),
          '의 눈가에 맺힌 눈물을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 분노 섞인 목소리로 ',
          father.get_colored_name(),
          '에게 책임을 질 것을 요구했다……',
        ]);
      }
    }
    if (
      !global_achievement.st_maria &&
      !father.id &&
      unexpected_pregnant === unexpected_pregnant_enum.father_sleep
    ) {
      global_achievement.st_maria = 1;
    }
  }

  /**
   * 출산
   * @author 雞雞
   * @param {CharaTalk} father
   * @param {CharaTalk} mother
   * @param {number} child					  
   */
  async have_baby(father, mother, child) {
    if (mother.id === 0) {
      return await CustomizedEro.get_custom_ero(0).have_baby(
        father,
        mother,
        child,
      );
    }
    if (era.get(`love:${mother.id || father.id}`) < 90) {
      era.drawLine();
      await print_event_name('새로운 생명', mother);
      if (
        LifeEventMarks.get_marks(mother.id).unexpected_pregnant ===
        unexpected_pregnant_enum.father_sleep
      ) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 주춤거리며 ',
          father.get_colored_name(),
          '을(를) 쳐다보았다. 아이의 아버지를 어떻게 대해야 할지 모르는 것 같다.',
        ]);
      } else if (era.get(`mark:${mother.id}:동심`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 주춤거리며 ',
          father.get_colored_name(),
          '을(를) 쳐다보았다. 아이의 아버지를 어떤 눈으로 봐야 할지 혼란스러워 보인다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '이(가) ',
          father.get_colored_name(),
          '을(를) 바라보는 눈빛은 매우 공허했지만, 아이에게만큼은 애정 어린 미소를 지어 보였다.',
        ]);
      }
      era.println();
    }
  }

  /**
   * 상점/능력 강화 시작
   * @author 黑奴队长					 
   */
  async shop_start() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.drawLine();
    if (!sys_check_awake(this.id)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 잠들어 있다. ',
        me.get_colored_name(),
        ` 이(가) 자신에게 하려는 일을 전혀 눈치채지 못한 채……`,
      ]);
    } else if (era.get(`mark:${this.id}:반발각인`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 차가운 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 노려보았다. 그 눈에는 오직 증오만이 서려 있다……',
      ]);
    } else if (era.get('flag:징벌강도') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 도발적인 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 쳐다보았다. "고작 성노예 따위가 무슨 재주를 부리겠어"라는 듯한 태도다……',
      ]);
    } else if (
      era.get(`mark:${this.id}:음문`) ||
      era.get(`mark:${this.id}:쾌락`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 기대에 찬 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 바라보며, 자신에게 일어날 변화를 기다리고 있다……',
      ]);
    } else if (era.get(`mark:${this.id}:동심`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 겁먹은 표정으로 ',
        me.get_colored_name(),
        '을(를) 바라보며, 왜 이런 짓을 하는지 이해하지 못하고 있다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 불안한 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 바라보며, 다음에 무슨 일이 일어날지 두려워하고 있다……',
      ]);
    }
  }

  /**
   * 상점/능력 강화 종료
						 
																																
   */
  async shop_end(extra_flag) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (extra_flag.skill || extra_flag.talent) {
      era.drawLine();
      if (!sys_check_awake(this.id)) {
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 잠든 채로, ',
          me.get_colored_name(),
          ` 이(가) 자신의 몸에 한 짓을 전혀 모르고 있다……`,
        ]);
      } else if (era.get(`mark:${this.id}:반발`)) {
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 신체의 변화를 견뎌내며, ',
          me.get_colored_name(),
          ` 이(가) 자신을 성 장난감처럼 다루는 것에 대해 냉소적인 반응을 보였다……`,
        ]);
        return shop_result_type_enum.hate;
      } else if (
        era.get(`mark:${this.id}:음문`) ||
        era.get(`mark:${this.id}:쾌락`)
      ) {
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 신체의 변화를 느끼며, ',
          me.get_colored_name(),
          ' 와(과) 함께 쾌락을 즐기고 싶어 견딜 수 없는 듯하다……',
        ]);
        return shop_result_type_enum.pleasure;
      } else if (era.get(`mark:${this.id}:동심`) >= 2) {
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) ',
          me.get_colored_name(),
          '을(를) 보며 눈물을 흘릴 듯한 표정을 지었지만, 언젠가 의식마저 신체의 변화에 침식당할 것이다……',
        ]);
        return shop_result_type_enum.slave;
      } else {
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 실망스러운 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 바라보았다. ',
          me.get_colored_name(),
          ` 이(가) 자신의 몸에 만족하지 못한다는 사실에 슬퍼하고 있다……`,
        ]);
        return shop_result_type_enum.lover;
      }
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{partners:number[]}} extra_flag			
   */
											
  async after_betrayed(chara, me, callname, hook, extra_flag) {
    const race = era.get(`cflag:${this.id}:종족`);
    const cuckold = sys_check_cuckold(this.id);
    switch (era.get(`exp:${this.id}:NTR횟수`) + 1) {
      case 1:
        era.drawLine();
        await era.printAndWait([
          race > 0 ? chara.get_uma_sex_title() + '답게 코가 예민한 탓일까, ' : '',
          me.get_colored_name(),
          '에게서 풍겨오는 짙은 정액 냄새가 방금 막 다른 이와 관계를 가졌다는 사실을 끊임없이 알리고 있다.',
          { isBr: true },
          race > 0 ? '냄새를 맡은 ' : '이 사실을 알아챈 ',
          chara.get_colored_name(),
          '은(는) ',
          me.get_colored_name(),
          '의 불충에 대해 ',
          cuckold ? '욕정' : sys_get_chara(this.id) >= 0 ? '분개' : '슬픔',
          '의 감정을 느꼈다……',
        ]);
        break;
      case 2:
        era.drawLine();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 유혹을 이기지 못하고 다시 한번 ',
          chara.get_colored_name(),
          '을(를) 배신했다.',
          { isBr: true },
          '일시적인 성욕 해소의 이면에는 얼마나 많은 감정의 갈등이 뒤엉켜 있는 것일까?',
          { isBr: true },
          race > 0 ? '냄새를 맡은 ' : '이 사실을 알아챈 ',
          chara.get_colored_name(),
          '은(는) ',
          me.get_colored_name(),
          '의 불충에 대해 ',
          cuckold ? '욕정' : sys_get_chara(this.id) >= 0 ? '분개' : '슬픔',
          '의 감정을 느꼈다……',
        ]);
        break;
      default:
        if (cuckold) {
          await era.printAndWait([
            me.get_colored_name(),
            '의 불충함이 ',
            chara.get_colored_name(),
            '을(를) 몹시 슬프게 함과 동시에, 형언할 수 없는 묘한 흥분을 불러일으켰다……',
          ]);
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            '의 불충함에 ',
            chara.get_colored_name(),
            '은(는) 거센 분노를 느꼈다……',
          ]);
        }
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag	  
   */
  async run(hook, extra_flag) {
    if (this[ero_hooks.keys[hook.hook]] !== undefined) {
      return await this[ero_hooks.keys[hook.hook]].call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        hook,
        extra_flag,
      );
    }
  }
}

module.exports = CustomizedEro;
