const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

/**
 * @this CustomizedEro
 * @author 雞雞
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {{father_id:number,mother_id:number}} extra
 */
async function cum_in_womb(
  chara,
  me,
  callname,
  hook,
  { father_id, mother_id },
) {
  const father = get_chara_talk(father_id);
  const mother = get_chara_talk(mother_id);
  const talent_palam =
    era.get(`talent:${mother.id}:자궁민감`) > 0 ||
    era.get(`mark:${mother.id}:쾌락`) >= 2;
  const talent_sex =
    era.get(`talent:${mother.id}:음란`) > 0 ||
    era.get(`talent:${mother.id}:정액착취중독`) > 0;
  const sex_mark = era.get(`mark:${mother.id}:음문`) >= 2;
  const is_awake = sys_check_awake(mother.id);
  let talent_check = talent_palam || talent_sex;
  if (sex_mark) {
    await era.printAndWait([
      mother.get_colored_name(),
      '의 아랫배 위에, 자궁을 상징하는 하트 문양이 서서히 채워져 간다……',
    ]);
  }
  if (
    era.get(`status:${mother.id}:생리`) > 0 ||
    era.get(`cflag:${mother.id}:임신단계`) !== 1 << pregnant_stage_enum.no ||
    era.get(`status:${mother.id}:사후피임약`) > 0 ||
    era.get(`status:${mother.id}:경구피임약`) > 0 ||
    CharaInmon.get(mother.id).on(plugin_enum.no_preg)
  ) {
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          father.get_colored_name(),
          '의 뜨거운 정액이 ',
          mother.get_colored_name(),
          '의 욱신거리는 자궁을 가득 채우고 있다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 쾌감 속에 몸을 맡기고 있다……',
        ]);
      } else if (era.get('tflag:강간') === father.id) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 굴욕 속에서도 ',
          {
            content: era.get(`cflag:${mother.id}:성별`) ? '후타나리' : '여성',
            color: buff_colors[2],
          },
          '으로서의 극락을 느끼고 말았다……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 기쁘게 ',
          {
            content: era.get(`cflag:${mother.id}:성별`) ? '후타나리' : '여성',
            color: buff_colors[2],
          },
          '으로서의 극락을 맛보고 있다……',
        ]);
      }
    }
  } else {
    const love = era.get(`love:${mother.id || father.id}`);
    if (love < 75) {
      await era.printAndWait([
        father.get_colored_name(),
        '이(가) 쏟아낸 대량의 정자들이 ',
        mother.get_colored_name(),
        '의 무방비한 난자를 향해 나아가고 있다……',
      ]);
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 자신이 임신할지도 모른다는 사실에 공포를 느꼈다……',
        ]);
      }
    } else if (love < 90) {
      await era.printAndWait([
        father.get_colored_name(),
        '이(가) 쏟아낸 대량의 정자들이 ',
        mother.get_colored_name(),
        '의 경계심이 풀린 난자를 향해 나아가고 있다……',
      ]);
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 임신할지도 모른다는 사실을 멍하니 의식하고 있다……',
        ]);
      }
    } else {
      if (
        era.get(`status:${mother.id}:반콘돔`) > 0 &&
        era.get(`tcvar:${father.id}:콘돔`) > 0 &&
        sys_check_awake(father.id)
      ) {
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 자신이 사정한 정액이 아무런 방해 없이 흘러 들어가는 것에 경악했다……',
        ]);
      } else {
        await era.printAndWait([
          father.get_colored_name(),
          '이(가) 쏟아낸 대량의 정자들이 ',
          mother.get_colored_name(),
          '의 임신을 갈구하는 난자를 향해 나아가고 있다……',
        ]);
      }
      if (is_awake && !talent_check) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 곧 어머니가 될 것 같다는 감각을 기쁘게 음미하고 있다……',
        ]);
      }
    }
    if (is_awake && talent_check) {
      if (talent_palam) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 임신 가능성 따위는 안중에도 없이, 욱신거리는 자궁이 정액으로 가득 차는 쾌감에 탐닉하고 있다……',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          era.get('tflag:강간') !== father.id
            ? '은(는) 굴욕 속에서도 '
            : '은(는) 기쁘게 ',
          {
            content: era.get(`cflag:${mother.id}:성별`) > 0 ? '후타나리' : '여성',
            color: buff_colors[2],
          },
          '으로서의 극락을 느끼고 있다……',
        ]);
      }
    }
  }
}

module.exports = cum_in_womb;
