/**
 * @file 아그네스 타키온 - 지하실
 * @author 幽白書
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const tachyon = get_chara_talk(32),
      me = get_chara_talk(0);
    await tachyon.say_and_wait(['좋아.']);
    era.println();

    await era.printAndWait([
      '거절당할 준비를 하고 있었음에도, ',
      tachyon.get_colored_name(),
      '이 이토록 흔쾌히 수락할 줄은 예상치 못했다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['결국 실험은…… 우선 결과가 나왔으니까 말이야.']);
    await tachyon.say_and_wait(['나도 자네를 평생 이곳에 묶어둘 생각은 없네.']);
    await tachyon.say_and_wait(['————그래, 굳이 말하자면, 아마 한 가지 문제가 더 남았다고 해야 할까.']);
    era.println();

    await era.printAndWait([
      '갑자기, ',
      tachyon.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '의 앞으로 다가와, ',
      me.get_colored_name(),
      '의 눈을 빤히 들여다보았다.',
    ]);
    era.println();

    await tachyon.say_and_wait([
      sys_get_colored_callname(32, 0),
      ', 자네는 언젠가 내 눈동자에 사람을 미치게 만드는 마력이 있다고 말했었지.',
    ]);
    await tachyon.say_and_wait(['그렇다면…… 지금의 자네는, 그 안에서 여전히 그런 마력을 찾을 수 있는가?']);
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 눈동자가 지닌 마력…… 그것은 ',
      tachyon.sex,
      '가 꿈을 쫓는 모습에서, 그리고 ',
      tachyon.sex,
      '가 한계에 헌신하려는 결의에서 비롯된 것이었다.',
    ]);
    await era.printAndWait([
      '그렇다면, 지금의 ',
      tachyon.get_colored_name(),
      '은 어떠한가?',
    ]);
    await era.printAndWait(['오직 자신에게만 도취되어, 자신만을 갈구하는 모습은 분명 가슴을 설레게 했다.']);
    await era.printAndWait([
      '하지만 지금의 ',
      tachyon.get_colored_name(),
      '의 눈에, 예전처럼 모든 것을 바치고 싶게 만드는 그 마력이 남아 있는가?',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 고개를 저었다.']);
    era.println();

    await tachyon.say_and_wait(['…………아아, 그렇군.']);
    await tachyon.say_and_wait(['그럼, 마지막 질문에 대한 답도 얻었네.']);
    await tachyon.say_and_wait(['이제 떠나도 좋네.']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 짐을 정리하고 떠나려 할 때, ',
      tachyon.get_colored_name(),
      '이 등을 돌린 채 침대 근처에 앉아 있는 것을 발견했다.',
    ]);

    era.printButton('「타키온?」', 1);
    era.printButton('「너는 가지 않는 거야?」', 2);
    await era.input();

    await tachyon.say_and_wait(['……후후, 이 지경이 되어서도 여전히 나를 걱정해 주는 건가?']);
    await tachyon.say_and_wait(['난 괜찮네, 나중에 나갈 테니. 다만……']);
    await tachyon.say_and_wait(['자네에게 지금 이——— 추악해진 눈동자를 보여주고 싶지 않을 뿐이라네.']);

    await era.printAndWait([me.get_colored_name(), '은(는) 지하실을 떠났다.']);
    await era.printAndWait([
      '처음부터 끝까지, ',
      tachyon.get_colored_name(),
      '은 단 한 번도 뒤를 돌아보지 않았다.',
    ]);
  }

  async ask_release_reject() {
    const tachyon = get_chara_talk(32);
    await tachyon.say_and_wait([
      sys_get_colored_callname(32, 0),
      ', 내가 말했을 텐데. 이번 실험은 꽤 오랜 시간이 걸릴 거라고…… 말 안 했던가? 그럼 지금 말하지.',
    ]);
    await tachyon.say_and_wait([
      '나는 도무지 이해할 수가 없네…… 왜 자네가 그토록 다른 ',
      tachyon.get_uma_sex_title(),
      '에게 집착하는지, 그리고—— 왜 내가 이 일에 이토록 집착하는지 말일세.',
    ]);
    await tachyon.say_and_wait([
      '그러니 내가 납득할 때까지, 미안하지만 자네를 보내줄 수는 없을 것 같군.',
    ]);
  }

  back_basement() {
    if (new TachyonEduMarks().plan_b || !new TachyonLifeMarks().b_start) {
      return super.back_basement();
    }
    this.welcome();
  }

  async battle_prison() {
    const tachyon = get_chara_talk(32);
    await tachyon.say_and_wait(['자유를 얻기 위해, 아끼는 담당에게까지 손을 대겠다는 건가?']);
    await tachyon.say_and_wait([
      '아니면…… 바깥에 나보다 더 소중한 사람이라도 있는 건가?',
    ]);
    await tachyon.say_and_wait([
      '……정말 묘한 기분이군. 원래의 나라면 이렇게 의구심을 품을 사람이 아니었을 텐데.',
    ]);
    await tachyon.say_and_wait([
      '가르쳐줄 수 있겠나? ',
      sys_get_colored_callname(32, 0),
      '——자네가 보는 나는, 지금 어떤 모습인가?',
    ]);
  }

  find_escape() {
    const me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    tachyon.say(['나가고 싶은가?']);
    era.println();

    era.print([
      tachyon.get_colored_name(),
      '이 문고리에 올려진 ',
      me.get_colored_name(),
      '의 손을 부드럽게 맞잡았다.',
    ]);
    era.println();

    tachyon.say(['……가로막지는 않겠네. 하지만 도와주지도 않겠어.']);
    tachyon.say([
      '내가 답을 찾기 위해 노력하는 것처럼, 모르모트 군, 자네도 스스로의 노력으로 내 속박을 벗어나 보게나.',
    ]);
  }

  get_up() {
    if (new TachyonEduMarks().plan_b || !new TachyonLifeMarks().b_start) {
      return super.get_up();
    }
    this.welcome();
  }

  async strike_fail() {
    const tachyon = get_chara_talk(32);
    await tachyon.say_and_wait([
      '문제를 해결할 수 없으니 출제자부터 해결한다…… 그것도 하나의 풀이법이지.',
    ]);
    await tachyon.say_and_wait(['하지만 자네는 규격의 차이를 고려하지 않았군……']);
    await tachyon.say_and_wait([
      '평소 내 약이 자네에게 과도한 자신감을 심어준 건가…… 아니면 ',
      tachyon.get_uma_sex_title(),
      '가 평소에 보여준 무해한 태도 때문에 이길 수 있다는 착각이라도 한 건가?',
    ]);
    await tachyon.say_and_wait([
      '……상관없네. 이해하지 못하겠다면, 이번 기회에 뼈저리게 느끼게 해주지.',
    ]);
    await tachyon.say_and_wait([
      tachyon.get_uma_sex_title(),
      '의 소질, ',
      tachyon.get_uma_sex_title(),
      '의 신체 능력, ',
      tachyon.get_uma_sex_title(),
      '의 성욕을…… 전부 똑똑히 몸에 새기도록 하게.',
    ]);
  }

  async strike_success() {
    const me = get_chara_talk(0),
      tachyon = get_chara_talk(32);
    await tachyon.say_and_wait(['음……']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '의 손길은 매우 빨랐다. ',
      tachyon.get_colored_name(),
      '의 약 덕분에 단련된 체력도 충분했던 덕분인지,',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 반응할 틈도 없이 일격에 쓰러졌다.',
    ]);
  }

  welcome() {
    if (new TachyonEduMarks().plan_b) {
      return super.welcome();
    }
    const tachyon = get_chara_talk(32);
    tachyon.say(['야아, ', sys_get_colored_callname(32, 0), ', 깨어났나.']);
    tachyon.say(['마음에 드나? 나의 새로운 실험실이네.']);
    tachyon.say(['……시치미 떼지 말라고? ……후후, 그럼 본론으로 들어가지.']);
    tachyon.say(['——', sys_get_colored_callname(32, 0), ', 줄곧 궁금했다네.']);
    tachyon.say([
      '나야말로 자네 눈에 비치는 가장 가능성 있는 ',
      tachyon.get_uma_sex_title(),
      ', 아닌가?',
    ]);
    tachyon.say(['나의 달리기야말로 자네를 눈부시게 하고, 미치게 만들었을 텐데, 아닌가?']);
    tachyon.say(['——그런데 지금 자네의 눈은, 대체 누구를 바라보고 있는 건가?']);
    tachyon.say(['나는 모르겠군…… ', sys_get_colored_callname(32, 0), ',']);
    tachyon.say(['나는 이미 자네가 없는 가능성은 선택할 수 없게 되었는데,']);
    tachyon.say(['자네의 눈 속에서는 나의 그림자조차 찾을 수가 없군.']);
    tachyon.say([
      '이것이 사랑인가? 사랑이란 이토록 불공평한 것이었나? 나는 이미 자네 없이는 안 되는데, 자네의 눈에는 여전히 내가 없으니.',
    ]);
    tachyon.say([
      '……미안하네, ',
      sys_get_colored_callname(32, 0),
      ', 하지만 이번 실험은 자네의 의사와 상관없이 진행해야겠어. 내가 납득할 때까지, 당분간은 이곳에 머물러주게.',
    ]);
  }
};