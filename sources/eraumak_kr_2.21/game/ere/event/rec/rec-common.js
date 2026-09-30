/**
 * @file 招募地文
 * @author 雞雞
 */
const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { recruit_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');
const notes = require('#/data/notes.json');

class CustomizedRecruit {
  /** @param {number} chara_id */
  constructor(chara_id) {
    this.id = chara_id;
  }

  /**
   * @protected
   * @returns {Promise<boolean|void>}
   */
  async check_before_rec() {
    const chara = get_chara_talk(this.id);
    if (
      !(await select_yes_or_no(
        [
          '트레이너와 ',
          chara.get_uma_sex_title(),
          '의 계약은 양자의 일생에 영향을 미치는 중대한 것입니다. 정말 ',
          chara.get_colored_name(),
          '을(를) 영입하시겠습니까?',
        ],
        '예',
        '아니오',
      ))
    ) {
      era.print([
        chara.get_colored_name(),
        '을(를) 모집하고 싶었지만 그만뒀다...',
      ]);
      return true;
    }
  }

  get_this() {
    return this;
  }

  /**
   * @param {number} stage
   * @param {EventObject} event_object
   * @returns {Promise<boolean|void>}
   */
  // eslint-disable-next-line no-unused-vars
  async recruit(stage, event_object) {
    if (await this.check_before_rec()) {
      return;
    }
    const chara = get_chara_talk(this.id);
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '을(를) 적극적으로 영입하려고 시도했다...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 신중히 생각한 끝에 고개를 끄덕이며 수락했다!',
    ]);
    era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
    await this.recruit_end();
  }

  /** @protected */
  async recruit_end() {
    era.println();
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 팀에 합류했다!',
    ]);
  }

  async recruit_result() {
    if (era.get('flag:현재월') > 3) {
      era.set(`cflag:${this.id}:육성턴수합산`, 'x');
    }
    recruit_chara(this.id);
    const temp = sys_get_star_premium_draw();
    if (temp.chara === this.id) {
      temp.chara = 0;
      temp.cost += 20;
    }
    if (notes[this.id]) {
      era.drawLine();
      if (
        await select_yes_or_no(
          '관련된 쪽지를 볼까요?',
          '본다',
          '나중에 메인 페이지에서 본다',
        )
      ) {
        notes[this.id].forEach((e) =>
          era.print([{ content: e[0], fontWeight: 'bold' }, '「', e[1], '」'], {
            color: get_chara_color(this.id),
          }),
        );
        await era.waitAnyKey();
      }
    }
  }
}

module.exports = CustomizedRecruit;
