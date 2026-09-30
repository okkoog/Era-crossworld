/**
 * @file 타마모 크로스 - 조교
 * @author 雞雞
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/ero/ero-21.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');

module.exports = class extends CustomizedEro {
  get #dict() {
    const o = {};
    o['당신'] = get_chara_talk(0).name;
    const tama = get_chara_talk(this.id);
    o['그녀'] = tama.sex;
    o['玉藻色'] = tama.color;
    o['우마무스메'] = tama.get_uma_sex_title();
    return o;
  }

  async ero_start() {
    const edu_marks = new TamaEduMarks();
    if (
      !edu_marks.chained_heart &&
      era.get(`love:${this.id}`) >= 50 &&
      era.get(`cflag:${this.id}:성별`) !== 1 &&
      era.get('tflag:강간') !== 21
    ) {
      edu_marks.chained_heart = 1;
      await print_name_and_show_kojo(
        '결박된 마음',
        get_chara_talk(this.id),
        kojo,
        this.#dict,
      );
    }
  }

  async get_mark(level, type, _new) {
    const callname = sys_get_colored_callname(this.id, 0);
    const tama = get_chara_talk(this.id);
    let handler;
    switch (type) {
      case mark_enum.pleasure:
        switch (level) {
          case 1:
            handler = () =>
              tama.say_and_wait('기, 기다려 봐라, 모…… 몸이 뜨겁다…… 기분이 이상해……');
            break;
          case 2:
            handler = () => tama.say_and_wait('……하아…… 저기…… 한 번 더…… 해줄 수 있나?');
            break;
          case 3:
            handler = async () => {
              await tama.say_and_wait(
                '동생들아 미안타, 내는 인제 이 사람 없으모 안 될 거 같다……',
              );
              await era.printAndWait([
                tama.get_colored_name(),
                '의 몸은 완전히 타락해 버렸다.',
              ]);
            };
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            handler = async () => {
              await tama.say_and_wait('하아…… 하아……');
              await era.printAndWait([
                tama.get_colored_name(),
                '는 홍조를 띤 얼굴을 가까이 밀착해 왔다. 등 뒤로 수많은 쾌감이 교차하는 것이 느껴졌다……',
              ]);
            };
            break;
          case 2:
            handler = async () => {
              await tama.say_and_wait([
                '만약 ',
                callname,
                ', 니가 기쁘다 카모, 내도 참말로 기쁠 기다……',
              ]);
              await era.printAndWait([
                tama.get_colored_name(),
                '가 빈약한 몸을 밀착시킨 채 천천히 아래로 움직였다.',
              ]);
              await era.printAndWait(
                '가슴, 옆구리, 허벅지, 그리고 쾌감을 느낄 수 있는 온갖 부위를 문질러 왔다.',
              );
              await tama.say_and_wait([
                '그카니까…… ',
                callname,
                ' 니가 좋아하는 데가 어딘지 쫌 더 말해주면 안 되나……?',
              ]);
            };
            break;
          case 3:
            handler = async () => {
              const me = get_chara_talk(0);
              await tama.say_and_wait('저기, 인제 내보고 우짜라고, 뭐 해줄까?');
              await era.printAndWait([
                tama.get_colored_name(),
                '의 부드러운 다리가 살아있는 생물처럼 ',
                me.get_colored_name(),
                '의 허리를 감싸 안았다.',
              ]);
              await era.printAndWait([
                tama.sex,
                '의 두 다리가 느릿하고 여유롭게, 하지만 먹잇감이 결코 달아날 수 없는 힘으로 ',
                me.get_colored_name(),
                '의 하반신을 계속해서 문질러 댔다……',
              ]);
              await tama.say_and_wait('인제는, 내한테 무슨 짓을 해도 괜찮데이❤');
            };
        }
        break;
      case mark_enum.pain:
        switch (level) {
          case 1:
            handler = () =>
              tama.say_and_wait('괘안타…… 내는 동생들을 위해서라도 참을 수 있다……');
            break;
          case 2:
            handler = () =>
              tama.say_and_wait(
                '미, 미안타…… 내 시키는 대로…… 다 할 테니까…… 제발…… 쫌만 살살 해줘라……',
              );
            break;
          case 3:
            handler = () => tama.say_and_wait('어무이……!');
        }
        break;
      case mark_enum.shame:
        switch (level) {
          case 1:
            handler = () => tama.say_and_wait('보…… 보지 마라……!');
        }
        break;
      case mark_enum.hate:
        switch (level) {
          case 1:
            handler = () => tama.say_and_wait('머 하는 기고! 내도 성질나면 무섭데이!');
            break;
          case 2:
            handler = async () => {
              await tama.say_and_wait(
                '돈 좀 썼다고 내를 장난감마냥 마음대로 할 수 있을 거라 생각하지 마라!',
              );
              await era.printAndWait([
                tama.get_colored_name(),
                '의 차가운 눈빛 너머로 억눌린 분노가 느껴졌다.',
              ]);
            };
            break;
          case 3:
            handler = async () => {
              await tama.say_and_wait('인간 쓰레기……');
              await era.printAndWait([
                tama.get_colored_name(),
                '의 차가운 눈동자에는 아무것도 담겨있지 않았고, ',
                get_chara_talk(0).get_colored_name(),
                '의 모습은 ',
                tama.get_colored_name(),
                '의 눈에 전혀 비치지 않았다.',
              ]);
              await era.printAndWait(
                '완전히 닫혀버린 마음은 아마 다시는 그 누구에게도 열리지 않을 것이었다.',
              );
            };
        }
    }
    if (handler === undefined) {
      await super.get_mark(level, type, _new);
    } else {
      await handler();
    }
  }
};