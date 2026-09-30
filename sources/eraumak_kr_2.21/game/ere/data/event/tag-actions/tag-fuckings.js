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
  ero_action_names[ero_actions.missionary] = '정상위';
  ero_tagged_hooks[ero_actions.missionary] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.missionary_anal_sex] = '애널정상위';
  ero_tagged_hooks[ero_actions.missionary_anal_sex] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.anal],
  );

  ero_action_names[ero_actions.doggy_style] = '후배위';
  ero_tagged_hooks[ero_actions.doggy_style] =
    ero_tagged_hooks[ero_actions.missionary];

  ero_action_names[ero_actions.doggy_style_anal_sex] = '애널후배위';
  ero_tagged_hooks[ero_actions.doggy_style_anal_sex] =
    ero_tagged_hooks[ero_actions.missionary_anal_sex];

  ero_action_names[ero_actions.sitting] = '대면좌위';
  ero_tagged_hooks[ero_actions.sitting] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.awake, ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.sitting_anal_sex] = '애널대면좌위';
  ero_tagged_hooks[ero_actions.sitting_anal_sex] = new EroHookTag(
    [ero_action_tags.insert],
    [ero_action_tags.anal, ero_action_tags.awake],
  );

  ero_action_names[ero_actions.hug_sitting] = '배면좌위';
  ero_tagged_hooks[ero_actions.hug_sitting] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.hug_sitting_anal_sex] = '애널배면좌위';
  ero_tagged_hooks[ero_actions.hug_sitting_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.standing] = '대면입위';
  ero_tagged_hooks[ero_actions.standing] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.standing_anal_sex] = '애널대면입위';
  ero_tagged_hooks[ero_actions.standing_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.hug_standing] = '배면입위';
  ero_tagged_hooks[ero_actions.hug_standing] =
    ero_tagged_hooks[ero_actions.sitting];

  ero_action_names[ero_actions.hug_standing_anal_sex] = '애널배면입위';
  ero_tagged_hooks[ero_actions.hug_standing_anal_sex] =
    ero_tagged_hooks[ero_actions.sitting_anal_sex];

  ero_action_names[ero_actions.suspended_congress] = '에키벤';
  ero_tagged_hooks[ero_actions.suspended_congress] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.height_check],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.suspended_congress_anal_sex] = '애널에키벤';
  ero_tagged_hooks[ero_actions.suspended_congress_anal_sex] = new EroHookTag(
    [ero_action_tags.insert, ero_action_tags.height_check],
    [ero_action_tags.anal],
  );

  ero_action_names[ero_actions.fucked_suspended_congress] = '역에키벤';
  ero_tagged_hooks[ero_actions.fucked_suspended_congress] = new EroHookTag(
    [ero_action_tags.virgin, ero_action_tags.height_check],
    [ero_action_tags.insert],
  );

  ero_action_names[ero_actions.fucked_suspended_congress_anal_sex] =
    '애널역에키벤';
  ero_tagged_hooks[ero_actions.fucked_suspended_congress_anal_sex] =
    new EroHookTag(
      [ero_action_tags.anal, ero_action_tags.height_check],
      [ero_action_tags.insert],
    );

  ero_action_names[ero_actions.hug_suspended_congress] = '배면에키벤';
  ero_tagged_hooks[ero_actions.hug_suspended_congress] =
    ero_tagged_hooks[ero_actions.suspended_congress];

  ero_action_names[ero_actions.hug_suspended_congress_anal_sex] =
    '애널배면에키벤';
  ero_tagged_hooks[ero_actions.hug_suspended_congress_anal_sex] =
    ero_tagged_hooks[ero_actions.suspended_congress_anal_sex];

  ero_action_names[ero_actions.ask_cowgirl] = '승마위시킨다';
  ero_tagged_hooks[ero_actions.ask_cowgirl] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        (era.get(`tcvar:${cid}:음경접촉부위`) === -1 &&
          era.get(`tcvar:${oid}:질구접촉부위`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.virgin,
          })),
    ],
    [ero_action_tags.awake, ero_action_tags.virgin],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_cowgirl_anal_sex] = '애널승마위시킨다';
  ero_tagged_hooks[ero_actions.ask_cowgirl_anal_sex] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        (era.get(`tcvar:${cid}:음경접촉부위`) === -1 &&
          era.get(`tcvar:${oid}:항문접촉부위`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.penis,
            d: part_enum.anal,
          })),
    ],
    [ero_action_tags.anal, ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_fuck] = '삽입요청';
  ero_tagged_hooks[ero_actions.ask_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        (era.get(`tcvar:${cid}:질구접촉부위`) === -1 &&
          era.get(`tcvar:${oid}:음경접촉부위`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.virgin,
            d: part_enum.penis,
          })),
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.ask_fuck_anal] = '애널삽입요청';
  ero_tagged_hooks[ero_actions.ask_fuck_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      (cid, oid) =>
        era.get('tflag:주도권') === cid ||
        (era.get(`tcvar:${cid}:항문접촉부위`) === -1 &&
          era.get(`tcvar:${oid}:음경접촉부위`) === -1 &&
          sys_check_distance(cid, oid, {
            a: part_enum.anal,
            d: part_enum.penis,
          })),
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.cowgirl] = '승마위';
  ero_tagged_hooks[ero_actions.cowgirl] = new EroHookTag(
    [ero_action_tags.virgin, EroHookTag.npc_virgin_sex_check],
    [ero_action_tags.insert],
  );

  ero_action_names[ero_actions.cowgirl_anal_sex] = '애널승마위';
  ero_tagged_hooks[ero_actions.cowgirl_anal_sex] = new EroHookTag(
    [ero_action_tags.anal, EroHookTag.npc_anal_sex_check],
    [ero_action_tags.insert],
  );

  // 性交派生系
  ero_action_names[ero_actions.ask_stimulate_glans_by_virgin] = '스스로움직도록요청';
  ero_tagged_hooks[ero_actions.ask_stimulate_glans_by_virgin] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.penis_in_virgin_check,
    ],
  );
  ero_derive_check[ero_actions.ask_stimulate_glans_by_virgin] = true;

  ero_action_names[ero_actions.ask_stimulate_glans_by_anal] = '스스로움직도록요청';
  ero_tagged_hooks[ero_actions.ask_stimulate_glans_by_anal] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.penis_in_anal_check,
    ],
  );
  ero_derive_check[ero_actions.ask_stimulate_glans_by_anal] = true;

  ero_action_names[ero_actions.stimulate_g_spot] = 'G스팟깊숙히자극';
  ero_tagged_hooks[ero_actions.stimulate_g_spot] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [ero_action_tags.virgin, EroHookTag.penis_in_virgin_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_g_spot] = true;

  ero_action_names[ero_actions.stimulate_large_intestine] = 'S자결장자극';
  ero_tagged_hooks[ero_actions.stimulate_large_intestine] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [ero_action_tags.anal, EroHookTag.penis_in_anal_check],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_large_intestine] = true;

  ero_action_names[ero_actions.stimulate_womb] = '벽너머자궁자극';
  ero_tagged_hooks[ero_actions.stimulate_womb] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert],
    [
      ero_action_tags.anal,
      (chara_id) => era.get(`cflag:${chara_id}:질크기`) > 0,
      EroHookTag.penis_in_anal_check,
    ],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_womb] = true;

  ero_action_names[ero_actions.ask_stimulate_g_spot] = 'G스팟자극시킨다';
  ero_tagged_hooks[ero_actions.ask_stimulate_g_spot] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_g_spot] = true;

  ero_action_names[ero_actions.stimulate_glans_by_virgin] = '보지조이기';
  ero_tagged_hooks[ero_actions.stimulate_glans_by_virgin] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      EroHookTag.npc_virgin_sex_check,
      EroHookTag.penis_in_virgin_check,
    ],
    [ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_glans_by_virgin] = true;

  ero_action_names[ero_actions.ask_stimulate_large_intestine] = '결장자극시킨다';
  ero_tagged_hooks[ero_actions.ask_stimulate_large_intestine] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_large_intestine] = true;

  ero_action_names[ero_actions.ask_stimulate_womb] = '자궁자극시킨다';
  ero_tagged_hooks[ero_actions.ask_stimulate_womb] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      (chara_id) => era.get(`cflag:${chara_id}:질크기`) > 0,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.awake, ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.ask_stimulate_womb] = true;

  ero_action_names[ero_actions.stimulate_glans_by_anal] = '애널조이기';
  ero_tagged_hooks[ero_actions.stimulate_glans_by_anal] = new EroHookTag(
    [
      ero_action_tags.anal,
      ero_action_tags.awake,
      EroHookTag.npc_anal_sex_check,
      EroHookTag.penis_in_anal_check,
    ],
    [ero_action_tags.insert],
    EroHookTag.condition_type.no,
  );
  ero_derive_check[ero_actions.stimulate_glans_by_anal] = true;
};
