/**
 * @file 카시모토 리코 - 招募
 * @author 黑奴队长（临时）
 */
const {
  add,
  get,
  printAndWait,
  println,
  set,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const riko = get_chara_talk(306),
      me = get_chara_talk(0),
      glasse = get_chara_talk(202),
      cocon = get_chara_talk(203),
      temp = get('cflag:306:모집상태');
    if (Array.isArray(temp) && temp[0] >= 3 && temp[1] >= 3) {
      await print_event_name('성과', riko);
      await printAndWait([
        glasse.get_colored_name(),
        '와 ',
        cocon.get_colored_name(),
        '이 모두 일정한 성과를 거둔 후, ',
        riko.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 찾아와 ',
        me.get_couple_title(),
        '이 이뤄낸 성과를 칭찬했다.',
      ]);
      await printAndWait([
        riko.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 함께 팀을 꾸려 ',
        riko.sex,
        '의 관리주의 이념을 계속 발전시켜 나가자고 제안했다.',
      ]);
    } else {
      await print_event_name('「성과」', riko);
      await printAndWait([
        glasse.get_colored_name(),
        '와 ',
        cocon.get_colored_name(),
        '의 육성이 끝난 후, ',
        riko.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 찾아왔다.',
      ]);
      if (get('love:306') < 75) {
        const hentai_check = [202, 203].map(
          (e) =>
            get(`love:${e}`) >= 75 ||
            get(`cflag:${e}:임신단계`) !== 1 << pregnant_stage_enum.no ||
            get(`exp:${e}:출산횟수`) + get(`exp:${e}:아이숫자`) > 0,
        );
        await printAndWait([
          riko.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '이(가) ',
          ...(hentai_check[0] && hentai_check[1]
            ? [glasse.sex, '들에게']
            : [(hentai_check[0] ? glasse : cocon).get_colored_name(), '에게']),
          ' 저지른 짓을 결코 용서하지 않겠다고 말했다.',
        ]);
        await printAndWait([
          riko.sex,
          '는 이사장 대리로서 ',
          me.get_colored_name(),
          '에게 내릴 처벌은 이제 시작일 뿐이라고 경고했다.',
        ]);
        await printAndWait([
          me.get_colored_name(),
          '에게 농락당한 담당을 보호하기 위해 ',
          riko.sex,
          '는 스스로 위험을 무릅쓰는 것도 마다하지 않았다.',
        ]);
        println();
        sys_like_chara(306, 0, -800) && (await waitAnyKey());
        add('flag:현재명성', -100 - hentai_check.filter((e) => e).length * 100);
        set('flag:변태행위', true);
      } else {
        await printAndWait([
          riko.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '이(가) 이렇다 할 성적을 거두진 못했지만, 잠재력은 충분히 증명해 보였다며……',
        ]);
        await printAndWait([
          riko.get_colored_name(),
          '는 갑자기 말문이 막힌 듯 얼굴을 붉히더니, 우물쭈물하며 ',
          me.get_colored_name(),
          '에게 ',
          riko.sex,
          '의 팀에 합류해 관리주의 이념을 함께 발전시켜 나가자고 권유했고, 동시에……',
        ]);
        await printAndWait([
          me.get_colored_name(),
          '이(가) 제안을 수락하자, 그제야 ',
          riko.get_colored_name(),
          '는 붉어진 얼굴로 작별 인사를 했다.',
        ]);
        await printAndWait([
          riko.get_colored_name(),
          '가 트레이닝실을 나설 때 밖에서 들려온 목소리에, ',
          me.get_colored_name(),
          '은(는) 예전에 우연히 보았던 낯익은 두 ',
          glasse.get_uma_sex_title(),
          '가 ',
          riko.sex,
          '를 응원하던 훈훈한 모습이 떠올랐다.',
        ]);
      }
    }
    set('callname:306:-2', '카시모토 리코');
    set('cflag:306:모집상태', recruit_flags.yes);
    new GlasseEduMarks().debuff = 0;
    new CoconEduMarks().debuff = 0;
    await this.recruit_end();
  }
};