/**
 * @file 爱慕地文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');

class CustomizedLove {
  /** @param {number} cid */
  constructor(cid) {
    this.id = cid;
  }

  get_this() {
    return this;
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  // eslint-disable-next-line no-unused-vars
  async 49(chara, me, callname, stage, extra_flag, event_object) {
    await print_event_name('애욕', chara);
    await chara.print_and_wait([
      '어느 날 밤, ',
      chara.get_colored_name(),
      '은(는) 격렬한 자위 도중 ',
      me.get_colored_name(),
      '의 이름을 부르며 절정에 달했다.',
    ]);
    await sys_love_uma_in_event(this.id);
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 74(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('연심', chara);
      await chara.print_and_wait([
        '어느 날 밤, ',
        chara.get_colored_name(),
        '은(는) 자신이 ',
        me.get_colored_name(),
        '에게 단순한 관계를 넘어선 어떤 미묘한 감정을 품고 있음을 어렴풋이 깨달았다.',
      ]);
      await chara.print_and_wait(
        '하지만 그것은 과연 철없는 시절의 뒤늦은 첫사랑일까, 아니면 매일 함께 지내며 생긴 감정의 착각일까?',
      );
      era.printButton('「어쩌면 난 진심일지도 몰라……」(관계 진전)', 1);
      era.printButton('「아니야, 내가 너무 깊게 생각한 걸지도……」(진전 보류)', 2);
      if ((await era.input()) === 1) {
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) ',
          me.get_colored_name(),
          '을(를) 향한 자신의 사랑을 확실하게 자각했다.',
        ]);
        await chara.print_and_wait([
          '반드시 ',
          me.get_colored_name(),
          '에게 내 마음을 전해야 해……',
        ]);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 그런 각오를 다졌다.',
        ]);
        add_event(event_hooks.back_school, event_object);
      } else {
        await chara.say_and_wait('착각이겠지……', true);
        await chara.print_and_wait([
          chara.get_colored_name(),
          '은(는) 고개를 젓고는 몸을 뒤척이며 천천히 잠에 빠져들었다……',
        ]);
        era.set(`cflag:${this.id}:호감거절`, 74);
      }
    } else if (stage === event_hooks.back_school) {
      const cur_chara = era.get('flag:현재상호작용캐릭터');
      if (cur_chara && cur_chara !== this.id) {
        add_event(event_hooks.back_school, event_object);
        return;
      }
      await print_event_name('충동', chara);
      if (cur_chara > 0) {
        await era.printAndWait([
          '트레이닝실로 돌아왔을 때 ',
          chara.get_colored_name(),
          '은(는) 긴장한 기색으로 ',
          me.get_colored_name(),
          '에게 사귀어 달라고 고백했다.',
        ]);
      } else {
        await era.printAndWait([
          '트레이닝실로 돌아왔을 때 ',
          chara.get_colored_name(),
          '은(는) 긴장한 기색으로 ',
          me.get_colored_name(),
          '을(를) 찾아와 사귀어 달라고 고백했다.',
        ]);
      }
      era.print([
        '어떻게 해야 할까? ',
        chara.get_colored_name(),
        '의 마음을 받아들여 연인이 될 것인가, 아니면 냉정하게 거절할 것인가?',
      ]);
      era.printButton('받아들인다. (관계 진전)', 1);
      era.printButton('거절한다. (진전 보류)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '의 긍정적인 대답을 듣자, ',
          chara.get_colored_name(),
          '의 긴장했던 얼굴이 사르르 풀리며 기쁨이 가득한 표정으로 변하더니, ',
          ...(era.get('cflag:0:키') > era.get(`cflag:${this.id}:키`)
            ? ['', me.get_colored_name(), '의 품으로 뛰어들었다.']
            : ['', me.get_colored_name(), '을(를) 품에 꼭 끌어안았다.']),
        ]);
        await era.printAndWait([
          '이제부터 ',
          me.get_couple_title(),
          '은(는) 또 하나의 새로운 관계, 즉 연인이 되었다.',
        ]);
        await sys_love_uma_in_event(this.id);
      } else {
        await era.printAndWait([
          '마음에 수많은 생각이 스쳤지만 ',
          me.get_colored_name(),
          '은(는) 끝내 ',
          me.get_couple_title(),
          '이 이어질 수는 없다고 판단했다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 아랫입술을 지그시 깨물며 온몸을 떨며 눈물을 참았다.',
        ]);
        await era.printAndWait([
          '최소한의 예의로서 ',
          me.get_colored_name(),
          `은(는) ${chara.sex}를 잘 달래주었고, 슬픔의 소나기가 그치고 안정을 찾을 때까지 곁에 있어 주었다.`,
        ]);
        era.set(`cflag:${this.id}:호감거절`, 74);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:현재상호작용캐릭터', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 89(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('동반', chara);
      await chara.print_and_wait([
        '어느 날 밤 ',
        chara.get_colored_name(),
        '은(는) 자신과 ',
        me.get_colored_name(),
        '이(가) 다정하게 지내는 모습을 떠올리는 것만으로도 깊은 행복감을 느꼈다.',
      ]);
      await chara.print_and_wait([
        '관계를 한 걸음 더 진전시키고 싶어…… ',
        chara.get_colored_name(),
        '은(는) 마음에 그런 생각을 품게 되었다.',
      ]);
      add_event(event_hooks.week_start, event_object);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:위치`) !== era.get('cflag:0:위치')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      await print_event_name('맹세', chara);
      await era.printAndWait([
        '어느 날, ',
        chara.get_colored_name(),
        '은(는) ',
        me.get_colored_name(),
        '를 데리고 밖으로 데이트를 나갔다.',
      ]);
      era.print([
        '하루 동안의 낭만적이고 따스한 시간을 함께 보낸 후, ',
        chara.get_colored_name(),
        '은(는) 확고한 각오가 서린 눈빛으로 ',
        me.get_colored_name(),
        '에게 결혼반지를 건넸다.',
      ]);
      era.printButton('받아들인다. (관계 진전)', 1);
      era.printButton('거절한다. (진전 보류)', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 손을 뻗어 반지를 받아들였다. ',
          me.get_couple_title(),
          '이 그동안 수많은 일을 겪어온 만큼 이제는 부부의 연을 맺을 때가 된 것이다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 기쁨에 겨워 ',
          me.get_colored_name(),
          '에게 깊고 뜨거운 입맞춤을 바쳤다. 이제 두 사람은 앞으로의 인생길을 함께 지탱하며, 부유하든 가난하든, 아프든 건강하든 죽음이 두 사람을 갈라놓을 때까지 영원히 함께할 것이다……',
        ]);
        await sys_love_uma_in_event(this.id);
      } else {
        await era.printAndWait([me.get_colored_name(), '은(는) 반지를 받지 않았다……']);
        await era.printAndWait([
          {
            content: '그토록 많은 일을 함께 겪었음에도 불구하고, ',
          },
          me.get_colored_name(),
          '은(는) 이것이 과연 올바른 선택인지 확신할 수 없었다.',
        ]);
        await era.printAndWait(
          '도덕과 윤리, 인간관계, 사회적 책임…… 고려해야 할 일도, 두 사람을 옭아맬 장벽도 너무나 많았다.',
        );
        era.print([
          '하지만 실망감으로 가득 찬 ',
          chara.get_colored_name(),
          '의 표정을 바라보며, ',
          me.get_colored_name(),
          '도 속으로 은연중에 생각했다. 과연 그렇게 많은 것들을 재고 따질 필요가 있었을까……',
        ]);
        era.set(`cflag:${this.id}:호감거절`, 89);
        await punish_rejecting_love(this.id);
      }
      era.set('flag:현재상호작용캐릭터', this.id);
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async 99(chara, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await print_event_name('악몽', chara);
      await chara.print_and_wait([
        '어느 날 밤, ',
        chara.get_colored_name(),
        '은(는) 침대 위에서 이리저리 뒤척이며 좀처럼 잠을 이루지 못했다.',
      ]);
      await chara.print_and_wait([
        chara.get_colored_name(),
        '의 머릿속은 온통 ',
        me.get_colored_name(),
        '이(가) 여러 가지 이유로 자신을 떠나버리는 광경으로 가득 찼고, 그런 비극적인 상상만으로도 ',
        chara.get_colored_name(),
        '은(는) 밀려오는 슬픔에 휩싸였다……',
      ]);
      add_event(event_hooks.week_start, event_object);
      await sys_love_uma_in_event(this.id);
    } else if (stage === event_hooks.week_start) {
      if (era.get(`cflag:${this.id}:위치`) !== era.get('cflag:0:위치')) {
        add_event(event_hooks.week_start, event_object);
        return;
      }
      await print_event_name('의존', chara);
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 그 누구보다도 먼저 트레이닝실에 도착해 ',
        me.get_colored_name(),
        '을(를) 꼭 껴안은 채 놓아주지 않았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 영문을 몰라 어리둥절해하면서도 다정하게 달래주었고, 그제야 ',
        chara.get_colored_name(),
        '도 간신히 마음을 진정시켰다.',
      ]);
      era.set('flag:현재상호작용캐릭터', this.id);
      era.println();
      add_jewel_reward(this.id, '순종', 300);
      await era.waitAnyKey();
    }
  }

  /** @protected */
  async common_result() {
    if (!era.get('flag:턴당애정도패널티')) {
      const love = era.get(`love:${this.id}`);
      if (love >= 74) {
        era.printButton('관계 진전', 1);
        era.printButton('진전 보류', 2);
        if ((await era.input()) === 2) {
          era.set(`cflag:${this.id}:호감거절`, love);
          await punish_rejecting_love(this.id);
          return;
        }
      }
      await sys_love_uma_in_event(this.id);
    }
  }

  /**
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(stage, extra_flag, event_object) {
    let handler =
      this[
        Array.isArray(event_object.arg) ? event_object.arg[0] : event_object.arg
      ];
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        stage,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedLove;