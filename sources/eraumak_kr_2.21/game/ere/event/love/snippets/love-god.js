const { add, get, input, printMultiColumns, set } = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');

const { get_date } = require('#/data/date-indicator');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

class LoveGod extends CustomizedLove {
  get fuck_her_button() {
    return '';
  }

  get fuck_pregnant_button() {
    return '';
  }

  get fuck_me_button() {
    return '';
  }

  get reject_button() {
    return '';
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  // eslint-disable-next-line no-unused-vars
  async fuck_her(god, me) {}

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  // eslint-disable-next-line no-unused-vars
  async fuck_me(god, me) {}

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  // eslint-disable-next-line no-unused-vars
  async reject(god, me) {}

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  // eslint-disable-next-line no-unused-vars
  async after_fuck(god, me) {}

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  // eslint-disable-next-line no-unused-vars
  async 49(god, me) {
    LifeEventMarks.get_marks(this.id).set('love', 1);
    if (get(`love:${this.id}`) === 49) {
      await sys_love_uma_in_event(this.id);
    }
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    const cur_week = (get('flag:현재주') % 4) + 1;
    const cur_month = ((get('flag:현재월') + (cur_week === 1) - 1) % 12) + 1;
    const birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6;
    const date = get_date();
    printMultiColumns(
      [
        { content: `${this.fuck_her_button}（신의 아이를 잉태시킨다）`, type: 'button' },
        {
          config: { disabled: me.sex_code === 1 },
          content:
            get('cflag:0:임신단계') >> pregnant_stage_enum.embryo
              ? `${this.fuck_pregnant_button}（뱃속의 태아를 신의 아이로 변화시킨다）`
              : `${this.fuck_me_button}（직접 신의 아이를 잉태한다）`,
          type: 'button',
        },
        { content: this.reject_button, type: 'button' },
      ].map((e, i) => {
        e.accelerator = i;
        e.config ||= {};
        e.config.width = 12;
        return e;
      }),
    );
    let temp;
    const selected = await input();
    switch (selected) {
      case 0:
        await this.fuck_her(god, me);
        if (me.sex_code === 0) {
          set('cflag:0:음경크기', 3);
        }
        set(`status:${god.id}:위험일`, 1);
        set(`status:${god.id}:생리`, 0);
        set(`status:${god.id}:반콘돔`, 1);
        begin_and_init_ero(0, god.id);
        set('tcvar:0:발정', 1);
        set(`tcvar:${god.id}:발정`, 1);
        update_ero_status(0, god.id);
        await print_ero_page(god.id, true);
        set_palam_to_max(0, part_enum.penis);
        set_palam_to_max(god.id, part_enum.virgin);
        set('tcvar:0:콘돔', 0);
        await quick_make_love(
          new EroParticipant(0, part_enum.penis),
          new EroParticipant(god.id, part_enum.virgin),
          false,
        );
        await end_ero_and_show_result();
        if (me.sex_code === 0) {
          set('cflag:0:음경크기', 0);
        }
        set(`cflag:${god.id}:모집상태`, recruit_flags.yes);
        set(`cflag:${god.id}:부계캐릭`, 0);
        set(`cflag:${god.id}:모계캐릭`, god.id);
        set(`cflag:${god.id}:임신단계`, 1 << pregnant_stage_enum.no);
        add('exp:0:아이숫자', 1);
        add(`exp:${god.id}:출산횟수`, 1);
        if (!get('cstr:0:자녀경험')) {
          set('cstr:0:자녀경험', [
            '딸 ',
            god.get_colored_name(),
            ' (이)가 ',
            date,
            ' 에 탄생',
          ]);
        }
        set(`cstr:${god.id}:자녀경험`, [
          date,
          ' 에 딸 ',
          god.get_colored_name(),
          ' 을(를) 출산',
        ]);
        LifeEventMarks.get_marks(god.id).add('love');
        break;
      case 1:
        await this.fuck_me(god, me);
        if (!get(`cflag:${god.id}:성별`)) {
          set(`cflag:${god.id}:음경크기`, 1);
        }
        begin_and_init_ero(0, god.id);
        set('tcvar:0:발정', 1);
        set(`tcvar:${god.id}:발정`, 1);
        update_ero_status(0, god.id);
        update_ero_status(0, god.id);
        await print_ero_page(god.id, true);
        set_palam_to_max(god.id, part_enum.penis);
        set_palam_to_max(0, part_enum.virgin);
        set(`tcvar:${god.id}:콘돔`, 0);
        await quick_make_love(
          new EroParticipant(god.id, part_enum.penis),
          new EroParticipant(0, part_enum.virgin),
          false,
        );
        await end_ero_and_show_result();
        if (!get(`cflag:${god.id}:성별`)) {
          set(`cflag:${god.id}:음경크기`, 0);
        }
        set(`cflag:${god.id}:모집상태`, recruit_flags.yes);
        LifeEventMarks.get_marks(god.id).add('love');
        set(`cflag:${god.id}:부계캐릭`, god.id);
        set(`cflag:${god.id}:모계캐릭`, 0);
        add(`exp:${god.id}:아이숫자`, 1);
        add('exp:0:출산횟수', 1);
        set(`cstr:${god.id}:자녀경험`, [
          '딸 ',
          god.get_colored_name(),
          ' 이(가) ',
          date,
          ' 에 탄생',
        ]);
        if (!get('cstr:0:자녀경험')) {
          set('cstr:0:자녀경험', [
            date,
            ' 에 딸 ',
            god.get_colored_name(),
            ' 을(를) 출산',
          ]);
        }
        temp = LifeEventMarks.get_marks(0);
        temp.waist_buff = 8;
        set('cflag:0:임신단계', 1 << pregnant_stage_enum.resume);
        set('cflag:0:임신주수', 4 + 1);
        add('talent:0:모유분비', !get('talent:0:모유분비'));
        if (get('talent:0:모유분비') === 1) {
          set('cflag:0:수유주수', 48 + 1);
          temp.breast_buff = 5;
        }
        add('base:0:체중 편차', -400);
        break;
      case 2:
        await this.reject(god, me);
        LifeEventMarks.get_marks(god.id).sub('love');
    }
    if (selected < 2) {
      await this.after_fuck(god, me);
      set(`cflag:${god.id}:출생월`, cur_month);
      set(`cflag:${god.id}:출생일`, birth_day);
      set(`cflag:${god.id}:생리주기`, 0);
      set(`cflag:${god.id}:모집상태`, -24);
    }
  }
}

module.exports = LoveGod;
