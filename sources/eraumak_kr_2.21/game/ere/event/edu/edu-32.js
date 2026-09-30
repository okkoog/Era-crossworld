/**
 * @file 아그네스 타키온 - 育成
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedEdu = require('#/event/edu/edu-common');
const tachyon_crazy_fan_end = require('#/event/edu/edu-events-32/crazy-fan-end');
const tachyon_out_shopping = require('#/event/edu/edu-events-32/out-shopping');
const tachyon_out_start = require('#/event/edu/edu-events-32/out-start');
const tachyon_train = require('#/event/edu/edu-events-32/train');
const tachyon_train_fail = require('#/event/edu/edu-events-32/train-fail');
const tachyon_train_success = require('#/event/edu/edu-events-32/train-success');
const print_event_name = require('#/event/snippets/print-event-name');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-32/week-start-01'),
  require('#/event/edu/edu-events-32/week-start-02'),
  require('#/event/edu/edu-events-32/week-start-03'),
  require('#/event/edu/edu-events-32/week-start-04'),
  require('#/event/edu/edu-events-32/week-start-05'),
  require('#/event/edu/edu-events-32/week-start-06'),
  require('#/event/edu/edu-events-32/week-start-07'),
  require('#/event/edu/edu-events-32/week-start-08'),
  require('#/event/edu/edu-events-32/week-start-09'),
  require('#/event/edu/edu-events-32/week-start-10'),
  require('#/event/edu/edu-events-32/week-start-11'),
  require('#/event/edu/edu-events-32/week-start-12'),
].forEach((f) => f(week_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},TachyonEduMarks,number,number,EventObject):Promise>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-32/week-end-1'),
  require('#/event/edu/edu-events-32/week-end-2'),
  require('#/event/edu/edu-events-32/week-end-3'),
  require('#/event/edu/edu-events-32/week-end-4'),
].forEach((f) => f(week_end_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} */
const race_start_handlers = {};

[
  require('#/event/edu/edu-events-32/race-start-1'),
  require('#/event/edu/edu-events-32/race-start-2'),
].forEach((f) => f(race_start_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams,TachyonEduMarks,number,number):Promise<boolean|void>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-32/race-end-1'),
  require('#/event/edu/edu-events-32/race-end-2'),
  require('#/event/edu/edu-events-32/race-end-3'),
].forEach((f) => f(race_end_handlers));

module.exports = class extends CustomizedEdu {
  async crazy_fan_end() {
    await tachyon_crazy_fan_end();
  }

  async out_shopping(tachyon, me, callname, hook, extra_flag, event_object) {
    return await tachyon_out_shopping(
      tachyon,
      me,
      callname,
      hook,
      event_object,
    );
  }

  async out_start(tachyon, me, callname, hook, extra_flag, event_object) {
    return await tachyon_out_start(tachyon, me, callname, hook, event_object);
  }

  async race_end(tachyon, me, callname, hook, extra_flag) {
    const edu_marks = new TachyonEduMarks();
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        tachyon,
        me,
        callname,
        extra_flag,
        edu_marks,
      ))
    ) {
      if (extra_flag.rank !== 1) {
        return await super.race_end(tachyon, me, callname, hook, extra_flag);
      }
      await print_event_name('레이스 승리', tachyon);
      era.printButton('「정말 멋진 레이스였어!」', 1);
      era.printButton('「아직 개선할 여지가 있겠네」', 2);
      const ret = await era.input();
      if (
        era.get('love:32') >= 75 &&
        tachyon.sex_code - 1 &&
        me.sex_code > 0 &&
        get_custom_check(32).is_want_make_love() &&
        !edu_marks.race_sex
      ) {
        edu_marks.race_sex++;
        await era.printAndWait('쾅');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 칭찬이나 격려의 말을 건네기도 전에, ',
          tachyon.get_colored_name(),
          '은 그대로 다가와 ',
          me.get_colored_name(),
          '을(를) 벽으로 밀어붙였다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '하아…… 하아…… 미안하군, ',
          callname,
          '……나도 모르게 레이스의 흥분이 좀 과했던 모양이야…… 자네 몸을 잠시만 빌리도록 하지.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 오른손으로 벽을 짚어 ',
          me.get_colored_name(),
          '이(가) 도망칠 틈을 주지 않았고, 동시에 왼쪽 무릎을 들어 ',
          me.get_colored_name(),
          '의 사타구니 사이를 압박했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('괜찮아…… 괜찮아…… 딱 한 번…… 한 번이면 돼……');
        era.println();
        await era.printAndWait([
          '누구를 설득하려는지 알 수 없는 말이 연신 흘러나왔고, ',
          me.get_colored_name(),
          '이(가) 도망칠 의사가 없음을 확인하자 ',
          tachyon.sex,
          '는 천천히 몸을 숙이며 떨리는 두 손으로 ',
          me.get_colored_name(),
          '의 바지를 벗겨냈다.',
        ]);
        era.println();
        await era.printAndWait('불쑥');
        await era.printAndWait([
          '하루 종일 가둬두었던 열기가 성기와 함께 ',
          tachyon.get_colored_name(),
          '의 얼굴을 향해 튕겨져 나갔다.',
        ]);
        await era.printAndWait(
          '광기 어린 눈동자가 순간 고정되었고, 오직 눈앞에서 미세하게 떨리고 있는 생식기만을 응시했다.',
        );
        await era.printAndWait(
          '강아지풀을 발견한 새끼 고양이처럼, 자기도 모르게 흔들리는 육봉을 쫓기 시작했다.',
        );
        await era.printAndWait(
          '레이스의 자극으로 발정난 몸은 그 농익은 냄새를 맡는 순간 이미 힘이 풀려버렸고, 흔들림에 따라 움직일 수 있는 것은 육봉의 비릿한 냄새를 쫓는 코끝뿐이었다.',
        );
        era.println();
        if (era.get('relation:32:0') <= 0) {
          await era.printAndWait([
            '몸에 힘이 들어가지 않는 ',
            tachyon.get_colored_name(),
            '은 간신히 간청하는 목소리를 내뱉을 뿐이었다.',
          ]);
          await era.printAndWait('감정적으로는 아무런 느낌도 없고, 오히려 혐오하는 이 사람이지만,');
          await era.printAndWait('신체적으로는 갈구하며, 그에 의해 채워지기를 바라는 이 사람.');
          await era.printAndWait('결국 육체의 갈증이 감정의 냉담함을 앞질렀다.');
          era.println();
          await era.printAndWait('다행히도, 상대는 나쁜 의미에서 자신을 저버리지 않았다.');
          await era.printAndWait([
            '역시나, 담당 ',
            tachyon.get_uma_sex_title(),
            '에게 거리낌 없이 손을 대는 인간 말종이로군.',
          ]);
          era.println();
          await era.printAndWait([
            '앞으로 다가온 트레이너의 육봉으로 갈증에 침을 흘리던 입안이 가득 채워지자, ',
            tachyon.get_colored_name(),
            '은 행복해하며 그렇게 생각했다.',
          ]);
        }
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '가 행복해하는 표정을 본 ',
          me.get_colored_name(),
          '은(는) 이대로 계속하고 싶다는 생각도 들었지만……',
        ]);
        era.println();
        era.printButton('「……조금 이따가 위닝 라이브가 있어」', 1);
        await era.input();
        await era.printAndWait([
          tachyon.sex,
          '는 노기 어린 눈으로 ',
          me.get_colored_name(),
          '을(를) 쏘아보았으나, ',
          me.get_colored_name(),
          '은(는) 비정하게 육봉을 ',
          tachyon.sex,
          '의 입에서 뽑아냈다.',
        ]);
        await era.printAndWait([
          '이전의 ',
          tachyon.sex,
          '가 세운 계획을 위해서라도, 적어도 경기장에 있는 동안에는 ',
          tachyon.get_colored_name(),
          '의 명성에 흠이 갈 만한 일이 생겨서는 안 되었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 이성과 감성 사이의 투쟁 끝에 결국 성욕을 억눌렀고, 뒤도 돌아보지 않은 채 대기실을 향해 걸어갔다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 그제야 안도의 한숨을 내쉬었다. 레이스가 가져오는 자극이 단순히 정신적인 건전한 자극뿐만 아니라, 그런 쪽의 자극까지 줄 줄은 몰랐다.',
        ]);
        await era.printAndWait([
          '설마 앞으로의 레이스마다 오늘 같은 일이 벌어지는 것일까. ',
          me.get_colored_name(),
          '은(는) 저도 모르게 오한이 서려 몸을 떨었다.',
        ]);
      } else if (era.get('relation:32:0') > 225) {
        if (ret === 1) {
          await tachyon.say_and_wait('그렇지, 그렇지? 후후, 이것이 바로 광속을 초월한 주법이라네.');
        } else {
          await tachyon.say_and_wait(
            Math.random() < 0.5
              ? '쳇…… 반박할 수는 없군. 하지만 조금 더 칭찬해줘도 되지 않나? 이렇게 공들여 이긴 레이스인데 말이야.'
              : [
                  '너무하군, ',
                  callname,
                  '. 사랑하는 담당이 레이스에서 이겼는데 그런 표정을 지어서 어쩌자는 건가. 어서, 어서 나를 좀 더 치켜세워주게. 어서~~ 빨리!',
                ],
          );
        }
      } else if (ret === 1) {
        await tachyon.say_and_wait([
          '고작 실험의 검산일 뿐인데 그렇게 기뻐하다니, ',
          callname,
          '. 자네는 정말 순진하구먼.',
        ]);
      } else {
        await tachyon.say_and_wait(
          Math.random() < 0.5
            ? '흥…… 알고 있네. 굳이 자네가 말하지 않아도 말이야.'
            : '좋군. 새로운 발견이 있었으니 이번 실험이 헛되지는 않았어.',
        );
      }
    }
  }

  async race_start(tachyon, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        tachyon,
        me,
        callname,
        new TachyonEduMarks(),
        era.get('relation:32:0'),
        era.get('love:32'),
      ))
    ) {
      return await super.race_start(tachyon, me, callname, hook, extra_flag);
    }
  }

  async train(attr) {
    if (attr === attr_enum.intelligence) {
      return await super.train(attr);
    }
    return await tachyon_train();
  }

  async train_fail(tachyon, me, callname, hook, extra_flag) {
    await tachyon_train_fail.call(
      this,
      tachyon,
      me,
      callname,
      hook,
      extra_flag.fumble,
      extra_flag.train,
    );
  }

  async train_success(tachyon, me, callname, hook, extra_flag) {
    await tachyon_train_success(
      tachyon,
      me,
      callname,
      hook,
      extra_flag.stamina_ratio,
    );
  }

  async week_end(tachyon, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await week_end_handlers[event_object.arg](
        tachyon,
        me,
        callname,
        flags,
        new TachyonEduMarks(),
        era.get('relation:32:0'),
        era.get('love:32'),
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(tachyon, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object.arg]) {
      return super.week_start(
        tachyon,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false };
    const ret = await week_start_handlers[event_object.arg].call(
      this,
      tachyon,
      me,
      callname,
      flags,
      era.get('relation:32:0'),
      era.get('love:32'),
      new TachyonEduMarks(),
      event_object,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};