const era = require('#/era-electron');

const { sys_check_distance } = require('#/system/ero/sys-calc-distance');

const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.insult] = '모욕';
  ero_tagged_hooks[ero_actions.insult] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.imp,
      EroHookTag.speak_check,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_insult] = '모욕요청';
  ero_tagged_hooks[ero_actions.ask_insult] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.m_abused],
    [ero_action_tags.awake, ero_action_tags.mouth],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_anal] = '스팽킹';
  ero_tagged_hooks[ero_actions.hit_anal] = new EroHookTag(
    [ero_action_tags.imp],
    [ero_action_tags.body],
  );

  ero_action_names[ero_actions.ask_hit_anal] = '스팽킹요청';
  ero_tagged_hooks[ero_actions.ask_hit_anal] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.anal, part_enum.hand),
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_breast] = '가슴스팽킹';
  ero_tagged_hooks[ero_actions.hit_breast] = new EroHookTag(
    [ero_action_tags.sadism],
    [ero_action_tags.breast],
  );

  ero_action_names[ero_actions.ask_hit_breast] = '가슴스팽킹요청';
  ero_tagged_hooks[ero_actions.ask_hit_breast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.m_hit,
      EroHookTag.generate_touch_check(part_enum.breast, part_enum.hand),
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.hit_face] = '싸대기';
  ero_tagged_hooks[ero_actions.hit_face] = new EroHookTag(
    [ero_action_tags.super_sadism],
    [ero_action_tags.body],
  );

  ero_action_names[ero_actions.hit_face_by_penis] = '자지싸대기';
  ero_tagged_hooks[ero_actions.hit_face_by_penis] = new EroHookTag(
    [ero_action_tags.penis, ero_action_tags.sadism],
    [],
  );

  ero_action_names[ero_actions.ask_hit_face] = '싸대기요청';
  ero_tagged_hooks[ero_actions.ask_hit_face] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.body,
      ero_action_tags.m_hit,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        (era.get(`tcvar:${oid}:손부접촉부위`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.mouth,
            d: part_enum.hand,
          })),
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.virgin_foot_job] = '음부밟기';
  ero_tagged_hooks[ero_actions.virgin_foot_job] = new EroHookTag(
    [ero_action_tags.sadism],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.ask_virgin_foot_job] = '음부밟기시킨다';
  ero_tagged_hooks[ero_actions.ask_virgin_foot_job] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.clitoris,
      EroHookTag.generate_touch_check(part_enum.clitoris, part_enum.foot),
    ],
    [ero_action_tags.awake, ero_action_tags.sadism],
    EroHookTag.condition_type.no,
  );

  // 性虐派生系
  ero_action_names[ero_actions.hit_anal_hard] = '강한 스팽킹';
  ero_tagged_hooks[ero_actions.hit_anal_hard] = new EroHookTag(
    [ero_action_tags.super_sadism],
    [
      (cid) => {
        const last_action = era.get('tflag:이전행동');
        return (
          (last_action === ero_actions.hit_anal ||
            last_action === ero_actions.hit_anal_hard) &&
          era.get(`tflag:이전턴의상대`) === cid
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_anal_hard] = true;

  ero_action_names[ero_actions.hit_breast_hard] = '강한 가슴스팽킹';
  ero_tagged_hooks[ero_actions.hit_breast_hard] = new EroHookTag(
    [ero_action_tags.super_sadism],
    [
      ero_action_tags.breast,
      (cid) => {
        const last_action = era.get('tflag:이전행동');
        return (
          (last_action === ero_actions.hit_breast ||
            last_action === ero_actions.hit_breast_hard) &&
          era.get(`tflag:이전턴의상대`) === cid
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_breast_hard] = true;

  ero_action_names[ero_actions.hit_face_hard] = '더 세게 싸대기';
  ero_tagged_hooks[ero_actions.hit_face_hard] = new EroHookTag(
    [ero_action_tags.super_sadism],
    [
      (cid) => {
        const last_action = era.get('tflag:이전행동');
        return (
          (last_action === ero_actions.hit_face ||
            last_action === ero_actions.hit_face_hard) &&
          era.get(`tflag:이전턴의상대`) === cid
        );
      },
    ],
  );
  ero_derive_check[ero_actions.hit_face_hard] = true;
};
