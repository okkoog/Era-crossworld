/**
 * @file 메지로 파머 - 조교
 * @author Bottle
 * @author KUN
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common/normal/normal-common');
const kojo = require('#/event/ero/ero-64.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const PamaNormalCommunications = require('#/event/ero/ero-lines-64/normal-communications');
const PamaNormalFucking = require('#/event/ero/ero-lines-64/normal-fucking');
const PamaNormalMakingOuts = require('#/event/ero/ero-lines-64/normal-making-outs');
const PamaNormalSm = require('#/event/ero/ero-lines-64/normal-sm');
const { i_pama_yandere } = require('#/event/snippets/64');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

class PamaNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, {
      communications: true,
      making_outs: true,
      fucking: true,
      sm: true,
    });
    this.communications = new PamaNormalCommunications(this);
    this.making_outs = new PamaNormalMakingOuts(this);
    this.fucking = new PamaNormalFucking(this);
    this.sm = new PamaNormalSm(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(cid) {
    super(cid, { normal: true });
    this.normal = new PamaNormalLines(this);
  }

  get #dict() {
    const o = generate_dictionary(this.id, { call: true });
    o.half_life = +i_pama_yandere();
    return o;
  }

  async ero_start(handle_ero_act) {
    const edu_marks = new PamaEduMarks();
    if (edu_marks.movie_job < 8) {
      edu_marks.movie_job = 0;
    }
    const pama = get_chara_talk(this.id);
    if (
      !era.get(`exp:${this.id}:성관계횟수`) &&
      sys_check_awake(0) &&
      sys_check_awake(this.id) &&
      era.get('tflag:강간') === -1 &&
      era.get(`status:${this.id}:슈퍼우마뾰이Z`) === 0 &&
      era.get(`love:${this.id}`) >= 50 &&
      pama.sex_code !== 1 &&
      era.get('cflag:0:성별') > 0
    ) {
      await print_name_and_show_kojo('되돌아갈 수 없는 도주', pama, kojo, this.#dict);
      return;
    }
    if (!sys_check_awake(this.id) || era.get(`status:${this.id}:슈퍼우마뾰이Z`) > 0) {
      return super.ero_start(handle_ero_act);
    }
    await kojo['调教开始'](this.#dict);
  }

  async raping_start(supporter) {
    if (
      supporter > 0 ||
      era.get('cflag:0:성별') === 0 ||
      era.get(`cflag:${this.id}:성별`) === 1
    ) {
      return await super.raping_start(supporter);
    }
    await kojo['夜袭'](this.#dict);
  }

  async join_3p() {
    return (await kojo['加入房事'](this.#dict))[0] === 1;
  }

  async join_3p_accept() {
    await kojo['加入房事接受'](this.#dict);
  }

  async join_3p_reject() {
    await kojo['加入房事拒绝'](this.#dict);
  }

  async join_3p_force() {
    await kojo['加入房事强上'](this.#dict);
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(64)) {
      return await super.get_mark(level, type, _new);
    }
    const pama = get_chara_talk(64);
    switch (type) {
      case mark_enum.pleasure:
        switch (level) {
          case 1:
            await pama.say_and_wait('분명 육체적인 관계일 뿐인데, 나…… 멈출 수가 없어……');
            break;
          case 2:
            await pama.say_and_wait('도망칠 수 없어❤️ 이제 여기서❤️ 도망칠 수 없게 됐어❤️');
            break;
          case 3:
            await pama.say_and_wait(
              '하아❤️ 이제 더는 도망갈 곳이 없어❤️ 당신이 없으면 안 돼❤️ 난 이미…… 이 사람의 소유물이야❤️',
            );
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            await pama.say_and_wait('새삼스럽지만, 우리 벌써…… 에헤헤……');
            break;
          case 2:
            await pama.say_and_wait('이게 바로 일심동체라는 걸까……');
            break;
          case 3:
            await pama.say_and_wait('역시, 당신만이 이럴 수 있어❤️ 당신뿐이야❤️……');
        }
        break;
      default:
        return await super.get_mark(level, type, _new);
    }
  }

  async report_pregnant_between_weeks(pama, me, callname, hook, extra_flag) {
    if (extra_flag.mother_id !== this.id) {
      return await super.report_pregnant_between_weeks(
        pama,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    await print_event_name('임신', pama);
    if (era.get(`mark:${this.id}:음문`) === 3) {
      await era.printAndWait([
        pama.get_colored_name(),
        '는 자연스럽게 ',
        me.get_colored_name(),
        '의 곁에 앉아, 살며시 머리를 어깨에 기댔다.',
      ]);
      await era.printAndWait('손가락으로 헐렁한 스커트 끝을 천천히 걷어 올리자, 아랫배에 새겨진 이질적인 음란한 문양이 드러났다.');
      await pama.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        ', 정말 노력했어……',
      ]);
      await pama.say_and_wait('이 아이를 조금 칭찬해 줄래……? 그리고, 나도 칭찬해 줘……');
      await era.printAndWait([
        pama.get_colored_name(),
        '는 눈을 감고 ',
        me.get_colored_name(),
        '의 몸에 밀착했다.',
      ]);
    } else if (era.get(`love:${this.id}`) >= 90) {
      await era.printAndWait([
        '새로운 생명을 상징하는 임신 테스트기를 손에 든 채, ',
        pama.get_colored_name(),
        '는 수줍은 듯 손가락 뒤로 얼굴을 숨기고 눈만 내민 채 ',
        me.get_colored_name(),
        '의 반응을 살폈다.',
      ]);
      await era.printAndWait([
        '아직 겉으로 드러나지는 않았지만, 몸은 이미 본능적으로 습관을 바꾸며 살며시 ',
        me.get_colored_name(),
        '의 앞으로 다가왔다.',
      ]);
      await pama.say_and_wait('에헤헤…… 아무래도, 조금 대단한 일이 생긴 것 같아.');
      await era.printAndWait([
        pama.get_colored_name(),
        '는 얼굴 가득 홍조를 띤 채 웃으며 ',
        me.get_colored_name(),
        '의 어깨에 얼굴을 비볐다.',
      ]);
    } else if (
      LifeEventMarks.get_marks(extra_flag.mother_id).unexpected_pregnant !==
      unexpected_pregnant_enum.father_sleep
    ) {
      await era.printAndWait([
        '세면대에서 다시 한번 구역질을 한 뒤, ',
        pama.get_colored_name(),
        '는 손에 든 임신 테스트기를 보고서야 현실을 직시했다.',
      ]);
      await era.printAndWait('생각하고 또 생각해 봐도, 범인은 단 한 사람뿐이다.');
      await pama.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        '…… 어째서……',
      ]);
      await era.printAndWait('어둡게 가라앉은 눈동자가 끊임없이 떨리는 자신의 손을 비추고 있었다.');
    } else {
      return await super.report_pregnant_between_weeks(
        pama,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
  }

  async orgasm(pama, me, callname) {
    if (era.get('love:64') < 50) {
      return;
    }
    const last_action = era.get('tflag:이전행동'),
      master = era.get('tflag:주도권');
    if (
      (master === 0 && last_action === ero_hooks.ask_blow_job) ||
      (master === 64 && last_action === ero_hooks.blow_job)
    ) {
      if (era.get('nowex:0:음경절정') > 0) {
        if (era.get('nowex:64:정액음용량') > 0) {
          await pama.say_and_wait(['으읍……']);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            pama.get_colored_name(),
            '의 머리를 붙잡고, 쏟아져 나오는 정액을 전부 ',
            pama.get_teen_sex_title(),
            '의 입안에 쏟아부은 뒤 그 온기 속에서 여운을 즐겼다.',
          ]);
          await era.printAndWait([
            '저항하려는 듯했던 두 손은 무력하게 ',
            me.get_colored_name(),
            '의 허벅지 옆을 짚었을 뿐이었고, ',
            pama.sex,
            '는 혀로 밀려드는 뜨거운 액체를 받아낼 수밖에 없었다……',
          ]);
          await era.printAndWait([
            '정액을 억지로 삼킨 ',
            pama.get_colored_name(),
            '는)거친 숨을 몰아쉬었고, 눈동자는 마치 취한 듯 몽롱하게 풀려 있었다.',
          ]);
        } else if (era.get('nowex:64:안면사정') > 0) {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 사정 직전에 성기를 빼내어, 백탁액을 ',
            pama.get_colored_name(),
            '의 하얀 얼굴 위에 흩뿌렸다.',
          ]);
          await era.printAndWait([
            '그녀는 그저 가볍게 미간을 찌푸린 채, 자신의 입술과 콧날, 이마, 그리고 머리카락까지 ',
            callname,
            '의 흔적으로 더럽혀지는 것을 방치했다.',
          ]);
          await era.printAndWait([
            '방금 사정을 마친 끝부분으로 ',
            pama.get_colored_name(),
            '의 부드러운 뺨을 문지르며, ',
            me.get_colored_name(),
            '은(는) 여운을 즐기는 동시에 눈앞의 걸작을 감상했다.',
          ]);
        }
      }
    } else if (era.get('nowex:0:음경절정') > 0) {
      if (era.get('nowex:64:정액음용량') > 0) {
        if (
          (master === 0 && last_action === ero_hooks.ask_deep_blow_job) ||
          (master === 64 && last_action === ero_hooks.deep_blow_job)
        ) {
          await pama.say_and_wait(['으읍……']);
          await era.printAndWait([
            me.get_colored_name(),
            '의 사정을 눈치챈 ',
            pama.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '의 허벅지를 꽉 껴안으며 자신의 체온을 바쳤다.',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            '의 머리를 붙잡아 목구멍 깊숙이 밀어 넣었고, ',
            pama.sex,
            '에게 안긴 채 ',
            pama.get_teen_sex_title(),
            '의 식도 안으로 마지막 한 방울까지 정액을 쏟아냈다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 쓰러질 듯한 ',
            pama.get_colored_name(),
            '를 받아 안았고, 마침내 입이 해방된 ',
            pama.sex,
            '는 마치 레이스를 막 끝낸 것처럼 무력하게 ',
            me.get_colored_name(),
            '에게 기대어 숨을 헐떡였다.',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            '의 얼굴에 묻은 액체와 흐트러진 머리카락을 정리해주자 묘한 죄책감이 엄습했으나, ',
            pama.sex,
            '가 ',
            me.get_colored_name(),
            '의 손을 잡고 잠꼬대하듯 속삭였다.',
          ]);
          await pama.say_and_wait([callname, '…… 나, 제법 잘했지?']);
        } else if (
          last_action === ero_hooks.sixty_nine &&
          pama.sex_code === 0
        ) {
          await era.printAndWait([
            pama.get_colored_name(),
            '의 혀가 ',
            me.get_colored_name(),
            '의 성기 위에서 춤추었고, 넘나드는 움직임 하나하나가 ',
            me.get_colored_name(),
            '의 온몸을 짜릿하게 만들었다.',
          ]);
          await era.printAndWait([
            '동시에 ',
            me.get_colored_name(),
            '의 입술과 혀 또한 ',
            pama.get_colored_name(),
            '의 젖은 비소를 탐험했고, 그 자극에 ',
            pama.sex,
            '는 끊임없이 허리를 뒤틀었다……',
          ]);
          await pama.say_and_wait(['으으윽……!']);
          await era.printAndWait([
            '쾌감의 파도에 잠겨있던 ',
            me.get_colored_name(),
            '은(는) 예상치 못한 타이밍에 ',
            pama.get_colored_name(),
            '의 허벅지를 꽉 붙잡으며 사정했다.',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            '는 살짝 사레가 들린 듯했으나 금세 진정하고 입안의 백탁액을 삼키려 노력했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            pama.sex,
            '의 목구멍이 요동치는 것을 느꼈고, 혀끝이 ',
            me.get_colored_name(),
            '의 민감한 끝부분을 단단히 감싸 쥐자 쾌감이 뇌수까지 직격했다……',
          ]);
        }
      } else if (
        era.get('nowex:0:사정량') > 0 &&
        ((master === 0 && last_action === ero_hooks.ask_foot_job) ||
          (master === 64 && last_action === ero_hooks.foot_job))
      ) {
        await pama.say_and_wait([
          '하아…… ',
          callname,
          '…… 괜찮으니까…… 하아…… 전부 내보내 줘……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 고조를 눈치챈 ',
          pama.get_colored_name(),
          '는 속도를 높여 사정을 유도했고, 부드러운 발바닥은 ',
          me.get_colored_name(),
          '의 맥동하는 뜨거움을 빈틈없이 감싸 쥐었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 낮은 신음과 함께 걸쭉한 정액이 뿜어져 나와 ',
          pama.get_colored_name(),
          '의 하얀 발등과 종아리 위로 튀었다.',
        ]);
        await era.printAndWait([
          pama.get_colored_name(),
          '는 그 광경을 지켜보며 발가락을 꼼지락거려 끈적한 액체의 온도와 질감을 느꼈고, 눈동자에는 흥분 어린 광채가 번뜩였다.',
        ]);
      } else if (era.get('nowex:64:질내정액') > 0) {
        if (
          (master === 0 && last_action === ero_hooks.missionary) ||
          (master === 64 && last_action === ero_hooks.ask_fuck)
        ) {
          await pama.say_and_wait(['아, 아아아, 안 돼…… 아아아응.']);
          await era.printAndWait([
            '마지막 스퍼트 단계에 들어서자, ',
            me.get_colored_name(),
            '은(는) ',
            pama.get_colored_name(),
            '의 붉게 달아오른 비소 안에 사정 직전의 마지막 성욕을 마음껏 쏟아냈다.',
          ]);
          await era.printAndWait([
            pama.get_colored_name(),
            '의 억눌린 신음은 격렬한 충돌에 파묻혀 비명 같은 울음소리로 변해 방안에 울려 퍼졌다.',
          ]);
          await era.printAndWait([
            '이어 결합부와 함께 ',
            pama.get_colored_name(),
            '의 두 허벅지를 몸 아래로 강하게 짓누르며, 정자가 한 방울도 새지 않도록 깊숙한 곳에 쏟아부었다……',
          ]);
          await pama.say_and_wait(['…… 윽…… 오오.']);
          await era.printAndWait([
            pama.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '의 아래에서 격렬하게 경련했고, 도망치려는 것인지 아니면 무의식적으로 ',
            me.get_colored_name(),
            '의 움직임에 맞추려는 것인지 알 수 없었다.',
          ]);
          await era.printAndWait([
            '질의 수축 속에 성기가 마지막 정액 몇 방울까지 배출해내자, ',
            me.get_colored_name(),
            '은(는) ',
            pama.get_colored_name(),
            '가 의식을 잃는 찰나에 보인 표정을 감상했다.',
          ]);
        } else if (master === 0) {
          if (last_action === ero_hooks.doggy_style) {
            await era.printAndWait([
              '절정에 가까워지자, 무릎으로 겨우 엉덩이를 지탱하던 ',
              pama.get_colored_name(),
              '의 유연한 몸은 완전히 침대 위에 무너져 내렸다.',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) 위에서 몇 번이고 ',
              pama.sex,
              '의 비소를 꿰뚫는 대로 방치하며, 그녀의 눈동자는 속절없이 위로 뒤집혔다.',
            ]);
            await era.printAndWait([
              pama.sex,
              '의 두 다리는 끊임없이 떨렸고 발가락은 팽팽하게 오그라들었으며, 매번 가해지는 충격마다 ',
              pama.sex,
              '는 달콤하고도 끈적한 신음을 내뱉었다.',
            ]);
            await era.printAndWait([
              '사정 직전의 전류가 온몸을 휩쓸자, ',
              me.get_colored_name(),
              '은(는) 허리를 거세게 흔들며 자신의 아래에 깔린 육체에 마지막 충돌을 가했다.',
            ]);
            await pama.say_and_wait(['…… 아……❤️.']);
          } else if (last_action === ero_hooks.sitting) {
            await era.printAndWait([
              '절정에 이르자 ',
              pama.get_colored_name(),
              '의 두 다리는 ',
              me.get_colored_name(),
              '의 허리에 꽉 매달렸고, 삽입이 깊어질 때마다 더욱 조여들었다.',
            ]);
            await era.printAndWait([
              pama.sex,
              '의 신음은 이미 쉰 소리로 변해있었으며, 음절 하나하나마다 정욕 어린 떨림이 가득했다.',
            ]);
            await pama.say_and_wait(['아아…… 아…… 아응…… ', callname, '……']);
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              pama.get_colored_name(),
              '를 꽉 껴안은 채 ',
              pama.sex,
              '의 체내에 정액을 뿜어냈고, ',
              pama.sex,
              '의 엉덩이는 ',
              me.get_colored_name(),
              '에게 붙잡힌 채 들썩이며 마지막 한 방울까지 갈구하듯 움직였다.',
            ]);
          }
        }
      }
    }
  }
};