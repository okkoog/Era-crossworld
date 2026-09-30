const era = require('#/era-electron');

const {
  part_head,
  sys_check_distance,
  sys_check_mh_dis,
} = require('#/system/ero/sys-calc-distance');

const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.pet_ear] = '귀쓰다듬는다';
  ero_tagged_hooks[ero_actions.pet_ear] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_head }),
    ],
    [ero_action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_breast] = '가슴애무한다';
  ero_tagged_hooks[ero_actions.pet_breast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [ero_action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_nipple] = '유두애무한다';
  ero_tagged_hooks[ero_actions.pet_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.breast),
    ],
    [ero_action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_clitoris] = '클리애무한다';
  ero_tagged_hooks[ero_actions.pet_clitoris] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.clitoris),
    ],
    [ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.finger_fuck] = '손가락삽입한다';
  ero_tagged_hooks[ero_actions.finger_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.virgin),
    ],
    [ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.prepare_virgin] = '보지벌리기한다';
  ero_tagged_hooks[ero_actions.prepare_virgin] =
    ero_tagged_hooks[ero_actions.finger_fuck];

  ero_action_names[ero_actions.pet_anal] = '애널애무한다';
  ero_tagged_hooks[ero_actions.pet_anal] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.anal),
    ],
    [ero_action_tags.anal],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.prepare_anal] = '애널벌리기한다';
  ero_tagged_hooks[ero_actions.prepare_anal] =
    ero_tagged_hooks[ero_actions.pet_anal];

  ero_action_names[ero_actions.pet_leg] = '허벅지애무한다';
  ero_tagged_hooks[ero_actions.pet_leg] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.foot }),
    ],
    [ero_action_tags.body],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.pet_tail] = '꼬리애무한다';
  ero_tagged_hooks[ero_actions.pet_tail] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.hand_touch_check_for_body,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.anal }),
    ],
    [ero_action_tags.body, ero_action_tags.race],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.cunnilingus] = '커널링구스한다';
  ero_tagged_hooks[ero_actions.cunnilingus] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.clitoris),
    ],
    [ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_cunnilingus] = '커널링구스시킨다';
  ero_tagged_hooks[ero_actions.ask_cunnilingus] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.mouth),
    ],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_cunnilingus] = '강제커널링구스한다';
  ero_tagged_hooks[ero_actions.force_cunnilingus] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.clitoris, ero_action_tags.pet],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.suck_virgin] = '보지빤다';
  ero_tagged_hooks[ero_actions.suck_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.virgin),
    ],
    [ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_suck_virgin] = '보지빨기시킨다';
  ero_tagged_hooks[ero_actions.ask_suck_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.virgin,
      EroHookTag.generate_touch_check(part_enum.virgin, part_enum.mouth),
    ],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_suck_virgin] = '강제보지빤다';
  ero_tagged_hooks[ero_actions.force_suck_virgin] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.pet, ero_action_tags.virgin],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.ask_blow_job] = '펠라치오시킨다';
  ero_tagged_hooks[ero_actions.ask_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [ero_action_tags.awake, ero_action_tags.tongue],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_blow_job] = '강제펠라치오시킨다';
  ero_tagged_hooks[ero_actions.force_blow_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.tongue],
  );

  ero_action_names[ero_actions.blow_job] = '펠라치오한다';
  ero_tagged_hooks[ero_actions.blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.tongue,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.penis),
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_hand_job] = '손애무시킨다';
  ero_tagged_hooks[ero_actions.ask_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
    ],
    [ero_action_tags.awake, ero_action_tags.hand],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.force_hand_job] = '강제손애무';
  ero_tagged_hooks[ero_actions.force_hand_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [ero_action_tags.hand],
  );

  ero_action_names[ero_actions.hand_job] = '손애무';
  ero_tagged_hooks[ero_actions.hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.hand,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.penis),
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_tit_job] = '파이즈리시킨다';
  ero_tagged_hooks[ero_actions.ask_tit_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.breast),
    ],
    [ero_action_tags.awake, ero_action_tags.breast],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.fuck_tit] = '강제파이즈리';
  ero_tagged_hooks[ero_actions.fuck_tit] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet],
    [ero_action_tags.breast],
  );

  ero_action_names[ero_actions.tit_job] = '파이즈리';
  ero_tagged_hooks[ero_actions.tit_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.penis),
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.suck_anal] = '애널핥기봉사';
  ero_tagged_hooks[ero_actions.suck_anal] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.anal),
    ],
    [ero_action_tags.anal],
  );

  ero_action_names[ero_actions.suck_nipple] = '유두빨기';
  ero_tagged_hooks[ero_actions.suck_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
    ],
    [ero_action_tags.touched_nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_milk_and_hand_job] = '수유손애무시킨다';
  ero_tagged_hooks[ero_actions.ask_milk_and_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.mouth, part_enum.breast),
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.hand),
      (cid, oid) => sys_check_mh_dis(oid, cid),
    ],
    [ero_action_tags.awake, ero_action_tags.hand, ero_action_tags.nipple],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.milk] = '수유';
  ero_tagged_hooks[ero_actions.milk] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.nipple, ero_action_tags.pet],
    [ero_action_tags.awake, ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.milk_and_hand_job] = '수유손애무';
  ero_tagged_hooks[ero_actions.milk_and_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.hand,
      ero_action_tags.nipple,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.mouth),
      EroHookTag.generate_touch_check(part_enum.hand, part_enum.penis),
      (cid, oid) => sys_check_mh_dis(cid, oid),
    ],
    [ero_action_tags.awake, ero_action_tags.mouth, ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_non_penetrative] = '스마타시킨다';
  ero_tagged_hooks[ero_actions.ask_non_penetrative] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:음경접촉부위`);
        const otouch = era.get(`tcvar:${oid}:클리접촉부위`);
        return (
          era.get('tflag:주도권') === cid ||
          (touch === -1 &&
            otouch === -1 &&
            sys_check_distance(cid, oid, {
              a: part_enum.penis,
              d: part_enum.clitoris,
            })) ||
          (touch.owner === oid && touch.part === part_enum.clitoris)
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body, ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.non_penetrative] = '스마타';
  ero_tagged_hooks[ero_actions.non_penetrative] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.clitoris,
      ero_action_tags.pet,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.sixty_nine] = '식스나인';
  ero_tagged_hooks[ero_actions.sixty_nine] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      ero_action_tags.sex_check,
    ],
    [ero_action_tags.mouth, ero_action_tags.awake, ero_action_tags.sex_check],
  );

  ero_action_names[ero_actions.ask_hair_fuck] = '헤어잡시킨다';
  ero_tagged_hooks[ero_actions.ask_hair_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:음경접촉부위`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      (cid) => era.get(`cflag:${cid}:머리길이`) > 0,
    ],
  );

  ero_action_names[ero_actions.force_hair_fuck] = '강제헤어잡';
  ero_tagged_hooks[ero_actions.force_hair_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.pet,
      ero_action_tags.sadism,
    ],
    [ero_action_tags.body, (cid) => era.get(`cflag:${cid}:머리길이`) > 0],
  );

  ero_action_names[ero_actions.hair_fuck] = '헤어잡';
  ero_tagged_hooks[ero_actions.hair_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.pet,
      (cid) => era.get(`cflag:${cid}:머리길이`) > 0,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_armpit_intercourse] = '겨드랑이잡시킨다';
  ero_tagged_hooks[ero_actions.ask_armpit_intercourse] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:음경접촉부위`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body],
  );

  ero_action_names[ero_actions.force_armpit_intercourse] = '강제겨드랑이잡';
  ero_tagged_hooks[ero_actions.force_armpit_intercourse] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.pet,
      ero_action_tags.sadism,
    ],
    [ero_action_tags.body],
  );

  ero_action_names[ero_actions.armpit_intercourse] = '겨드랑이잡';
  ero_tagged_hooks[ero_actions.armpit_intercourse] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.body, ero_action_tags.pet],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_foot_job] = '풋잡시킨다';
  ero_tagged_hooks[ero_actions.ask_foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.penis, part_enum.foot),
    ],
    [ero_action_tags.awake, ero_action_tags.foot],
  );

  ero_action_names[ero_actions.force_foot_job] = '강제풋잡';
  ero_tagged_hooks[ero_actions.force_foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.pet,
      ero_action_tags.sadism,
    ],
    [ero_action_tags.foot],
  );

  ero_action_names[ero_actions.foot_job] = '풋잡';
  ero_tagged_hooks[ero_actions.foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.foot,
      ero_action_tags.pet,
      EroHookTag.generate_touch_check(part_enum.foot, part_enum.penis),
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_tail_job] = '꼬리잡시킨다';
  ero_tagged_hooks[ero_actions.ask_tail_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:음경접촉부위`);
        return (
          touch === -1 || (touch.owner === oid && touch.part === part_enum.body)
        );
      },
    ],
    [ero_action_tags.awake, ero_action_tags.body, ero_action_tags.race],
  );

  ero_action_names[ero_actions.force_tail_job] = '강제꼬리잡';
  ero_tagged_hooks[ero_actions.force_tail_job] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert, ero_action_tags.pet],
    [ero_action_tags.body, ero_action_tags.race],
  );

  ero_action_names[ero_actions.tail_job] = '꼬리잡';
  ero_tagged_hooks[ero_actions.tail_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.pet,
      ero_action_tags.race,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.tribbing] = '조개맞추기';
  ero_tagged_hooks[ero_actions.tribbing] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.clitoris),
    ],
    [ero_action_tags.clitoris],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_pet_nipple] = '가슴자위한다';
  ero_tagged_hooks[ero_actions.self_pet_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.nipple,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.breast),
      EroHookTag.generate_self_touch_check(part_enum.breast),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_hand_job] = '딸친다';
  ero_tagged_hooks[ero_actions.self_hand_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.penis),
      EroHookTag.generate_self_touch_check(part_enum.penis),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_pet_clitoris] = '클리자위한다';
  ero_tagged_hooks[ero_actions.self_pet_clitoris] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.clitoris),
      EroHookTag.generate_self_touch_check(part_enum.clitoris),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_finger_fuck] = '보지자위한다';
  ero_tagged_hooks[ero_actions.self_finger_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.virgin,
      EroHookTag.generate_self_talent_check(part_enum.virgin),
      EroHookTag.generate_self_touch_check(part_enum.virgin),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.self_pet_anal] = '애널자위한다';
  ero_tagged_hooks[ero_actions.self_pet_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      ero_action_tags.pet,
      EroHookTag.generate_self_talent_check(part_enum.anal),
      EroHookTag.generate_self_touch_check(part_enum.anal),
    ],
    [],
    EroHookTag.condition_type.no,
  );

  // 爱抚派生系
  ero_action_names[ero_actions.pull_ear] = '귀잡아당기기';
  ero_tagged_hooks[ero_actions.pull_ear] = new EroHookTag(
    [
      ero_action_tags.pet,
      ero_action_tags.sadism,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_head }),
    ],
    [
      ero_action_tags.body,
      (cid) => {
        const last_action = era.get('tflag:이전행동');
        return (
          (last_action === ero_actions.pet_ear ||
            last_action === ero_actions.pull_ear) &&
          era.get(`tflag:이전턴의상대`) === cid
        );
      },
    ],
  );
  ero_derive_check[ero_actions.pull_ear] = true;

  ero_action_names[ero_actions.pull_tail] = '꼬리잡아당기기';
  ero_tagged_hooks[ero_actions.pull_tail] = new EroHookTag(
    [
      ero_action_tags.pet,
      ero_action_tags.sadism,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        sys_check_distance(cid, oid, { a: part_enum.hand, d: part_enum.anal }),
    ],
    [
      ero_action_tags.body,
      ero_action_tags.race,
      (cid) => {
        const last_action = era.get('tflag:이전행동');
        return (
          (last_action === ero_actions.pet_tail ||
            last_action === ero_actions.pull_tail) &&
          era.get(`tflag:이전턴의상대`) === cid
        );
      },
    ],
  );
  ero_derive_check[ero_actions.pull_tail] = true;

  ero_action_names[ero_actions.stimulate_g_spot_by_finger] = 'G스팟자극';
  ero_tagged_hooks[ero_actions.stimulate_g_spot_by_finger] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.pet],
    [
      ero_action_tags.virgin,
      (cid, oid) => {
        const touch = era.get(`tcvar:${cid}:질구접촉부위`);
        const virgin = era.get(`talent:${cid}:처녀`);
        return (
          touch.owner === oid &&
          touch.part === part_enum.hand &&
          (!virgin || !(virgin + 1))
        );
      },
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_g_spot_by_finger] = true;

  ero_action_names[ero_actions.ask_deep_blow_job] = '딥스롯시킨다';
  ero_tagged_hooks[ero_actions.ask_deep_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [ero_action_tags.awake, ero_action_tags.tongue, EroHookTag.blow_job_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_deep_blow_job] = true;

  ero_action_names[ero_actions.force_deep_blow_job] = '강제딥스롯';
  ero_tagged_hooks[ero_actions.force_deep_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.pet,
      ero_action_tags.sadism,
    ],
    [ero_action_tags.tongue, EroHookTag.blow_job_check],
  );
  ero_derive_check[ero_actions.force_deep_blow_job] = true;

  ero_action_names[ero_actions.deep_blow_job] = '딥스롯해준다';
  ero_tagged_hooks[ero_actions.deep_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.tongue,
      EroHookTag.blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.deep_blow_job] = true;

  ero_action_names[ero_actions.ask_hand_and_blow_job] = '손애무펠라시킨다';
  ero_tagged_hooks[ero_actions.ask_hand_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_hand_and_blow_job] = true;

  ero_action_names[ero_actions.force_hand_and_blow_job] = '강제손애무펠라';
  ero_tagged_hooks[ero_actions.force_hand_and_blow_job] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet, ero_action_tags.sadism],
    [
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
  );
  ero_derive_check[ero_actions.force_hand_and_blow_job] = true;

  ero_action_names[ero_actions.hand_and_blow_job] = '손애무펠라';
  ero_tagged_hooks[ero_actions.hand_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.hand,
      ero_action_tags.tongue,
      EroHookTag.hand_and_blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.hand_and_blow_job] = true;

  ero_action_names[ero_actions.ask_tit_and_blow_job] = '파이즈리페라시킨다';
  ero_tagged_hooks[ero_actions.ask_tit_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.penis,
      ero_action_tags.pet,
      EroHookTag.ask_blow_job_check,
    ],
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.hand,
      EroHookTag.tit_and_blow_job_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_tit_and_blow_job] = true;

  ero_action_names[ero_actions.fuck_tit_and_mouth] = '강제파리즈리페라';
  ero_tagged_hooks[ero_actions.fuck_tit_and_mouth] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.pet],
    [
      ero_action_tags.breast,
      ero_action_tags.hand,
      EroHookTag.tit_and_blow_job_check,
    ],
  );
  ero_derive_check[ero_actions.fuck_tit_and_mouth] = true;

  ero_action_names[ero_actions.tit_and_blow_job] = '파이즈리페라';
  ero_tagged_hooks[ero_actions.tit_and_blow_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.hand,
      ero_action_tags.pet,
      EroHookTag.tit_and_blow_job_check,
    ],
    [ero_action_tags.penis],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.tit_and_blow_job] = true;

  ero_action_names[ero_actions.bite_nipple] = '유두깨물기';
  ero_tagged_hooks[ero_actions.bite_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.pet,
      ero_action_tags.sadism,
    ],
    [ero_action_tags.touched_nipple, EroHookTag.bite_nipple_check],
  );
  ero_derive_check[ero_actions.bite_nipple] = true;

  ero_action_names[ero_actions.ask_bite_nipple] = '유두깨물기시킨다';
  ero_tagged_hooks[ero_actions.ask_bite_nipple] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.pet,
      ero_action_tags.m_hit,
      ero_action_tags.touched_nipple,
      EroHookTag.bite_nipple_check,
    ],
    [ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_bite_nipple] = true;
};
