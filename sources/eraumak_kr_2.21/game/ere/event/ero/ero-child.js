/**
 * @file 调教地文 - 孩子
 * @author 雞雞
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { medicine_enum, medicine_names } = require('#/data/ero/item-const');
const { part_enum } = require('#/data/ero/part-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');

class EroChild extends CustomizedEro {
  async ero_start() {
    const chara = get_chara_talk(this.id);
    const callname = sys_get_callname(this.id, 0);
    if (era.get('flag:징벌강도') === 3) {
      const my_marks = new MyEduMarks();
      const index = (my_marks.orgy || []).indexOf(this.id);
      if (
        index !== -1 &&
        era
          .getCharactersInTrain()
          .indexOf(era.get(`cflag:${this.id}:부계캐릭`)) !== -1
      ) {
        my_marks.orgy.splice(index, 1);
        /** @author 黑奴队长 */
        await print_event_name('부자덮밥', chara);
        const me = get_chara_talk(0);
        const father = get_chara_talk(era.get(`cflag:${this.id}:부계캐릭`));
        const status = new Array(2)
          .fill(undefined)
          .map(
            () =>
              medicine_names[
                get_random_entry([medicine_enum.fron_k, medicine_enum.fron_p])
              ],
          );
        if (!era.get(`status:${this.id}:${status[0]}`)) {
          era.set(`status:${this.id}:${status[0]}`, 1);
        }
        if (!era.get(`status:${this.id}:${status[1]}`)) {
          era.set(`status:${this.id}:${status[1]}`, 1);
        }
        await era.printAndWait([
          chara.get_colored_name(),
          '과(와) ',
          father.get_colored_name(),
          ' 사이에 꽉 끼인 채 ',
        ]);
        await era.printAndWait([
          '두 개의 뜨거운 육봉이 함께 ',
          me.get_colored_name(),
          '의 앞뒤 두 구멍을 공격해왔고, 삽입될 때마다 완전히 새로운 쾌감이 밀려왔다.',
        ]);
        await era.printAndWait([
          '몽롱한 와중에 ',
          me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '이(가) 막 태어났을 때의 일을 떠올렸다——',
        ]);
        await me.used_to_say_and_wait(
          '심지어, 아이가 자란 후에…… 아이와 아이의 아버지에게 함께 사용되며, 그 사이에 꽉 끼인 채 수컷의 육봉에 빠져들게 될 줄은……',
          true,
        );
        await era.printAndWait('그때의 망상이, 이미 현실이 되어버렸다……');
        era.set('tflag:주도권', this.id);
        await quick_make_love(
          new EroParticipant(this.id, part_enum.penis),
          new EroParticipant(0, part_enum.virgin),
          false,
        );
        await quick_make_love(
          new EroParticipant(father.id, part_enum.penis),
          new EroParticipant(0, part_enum.anal),
          false,
        );
      } else if (
        era.get(`status:${this.id}:발정`) > 0 &&
        (era.get(`cflag:${this.id}:부계캐릭`) === 0 ||
          era.get(`cflag:${this.id}:모계캐릭`) === 0)
      ) {
        /** @author 雞雞 */
        await chara.say_and_wait([
          '하아…… 하아…… 왠지 ',
          callname,
          '를 볼 때마다, 아랫도리가 너무 뜨겁고 괴로워…… 이젠…… 참을 수 없어!',
        ]);
      }
    }
  }
}

module.exports = EroChild;