const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 */
module.exports = (ero_action_names, ero_tagged_hooks) => {
  ero_action_names[ero_actions.ask_supporter_prepare_virgin] = '구멍벌리기시킨다';
  ero_tagged_hooks[ero_actions.ask_supporter_prepare_virgin] = new EroHookTag(
    [(chara_id) => !chara_id],
    [ero_action_tags.virgin, ero_action_tags.supporter_awake],
  );

  ero_action_names[ero_actions.ask_double_suck_nipple] = '동시젖빨기시킨다';
  ero_tagged_hooks[ero_actions.ask_double_suck_nipple] = new EroHookTag(
    [ero_action_tags.nipple],
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
  );

  ero_action_names[ero_actions.double_suck_nipple] = '동시젖빨기';
  ero_tagged_hooks[ero_actions.double_suck_nipple] = new EroHookTag(
    [
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
    [ero_action_tags.nipple],
  );

  ero_action_names[ero_actions.ask_double_blow_job] = '동시펠라시킨다';
  ero_tagged_hooks[ero_actions.ask_double_blow_job] = new EroHookTag(
    [ero_action_tags.penis, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
  );

  ero_action_names[ero_actions.double_blow_job] = '동시펠라';
  ero_tagged_hooks[ero_actions.double_blow_job] = new EroHookTag(
    [
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_double_cunnilingus] = '동시음부햝기시킨다';
  ero_tagged_hooks[ero_actions.ask_double_cunnilingus] = new EroHookTag(
    [ero_action_tags.clitoris, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
  );

  ero_action_names[ero_actions.double_cunnilingus] = '음부햝기시킨다';
  ero_tagged_hooks[ero_actions.double_cunnilingus] = new EroHookTag(
    [
      (chara_id) => chara_id,
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
    [ero_action_tags.clitoris],
  );

  ero_action_names[ero_actions.ask_double_suck_virgin] = '동시키스시킨다';
  ero_tagged_hooks[ero_actions.ask_double_suck_virgin] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
  );

  ero_action_names[ero_actions.double_suck_virgin] = '동시키스';
  ero_tagged_hooks[ero_actions.double_suck_virgin] = new EroHookTag(
    [
      ero_action_tags.mouth,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.ask_double_tit_job] = '동시파이즈리시킨다';
  ero_tagged_hooks[ero_actions.ask_double_tit_job] = new EroHookTag(
    [ero_action_tags.penis, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.breast,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_breast,
    ],
  );

  ero_action_names[ero_actions.double_tit_job] = '동시파이즈리';
  ero_tagged_hooks[ero_actions.double_tit_job] = new EroHookTag(
    [
      ero_action_tags.breast,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_breast,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.penis],
  );

  ero_action_names[ero_actions.ask_double_cowgirl] = '교대로 승마위요청';
  ero_tagged_hooks[ero_actions.ask_double_cowgirl] = new EroHookTag(
    [ero_action_tags.awake, ero_action_tags.insert, (cid) => !cid],
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_virgin,
    ],
  );

  ero_action_names[ero_actions.ask_double_fuck] = '윤간시킨다';
  ero_tagged_hooks[ero_actions.ask_double_fuck] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_double_penetration] = '전후윤간시킨다';
  ero_tagged_hooks[ero_actions.ask_double_penetration] = new EroHookTag(
    [ero_action_tags.anal, ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_spit_roast] = '상하윤간시킨다';
  ero_tagged_hooks[ero_actions.ask_spit_roast] = new EroHookTag(
    [ero_action_tags.virgin, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_spit_roast_anal_sex] = '애널입윤간시킨신다';
  ero_tagged_hooks[ero_actions.ask_spit_roast_anal_sex] = new EroHookTag(
    [ero_action_tags.anal, (chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
    ],
  );

  ero_action_names[ero_actions.ask_cunnilingus_with_fucking] = '삽입하면서햝기시킨다';
  ero_tagged_hooks[ero_actions.ask_cunnilingus_with_fucking] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.clitoris,
      ero_action_tags.virgin,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
    ],
  );

  ero_action_names[ero_actions.fuck_69] = '동시식스나인삽입';
  ero_tagged_hooks[ero_actions.fuck_69] = new EroHookTag(
    [ero_action_tags.insert],
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      ero_action_tags.sex_check,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_mouth,
      ero_action_tags.supporter_sex_check,
    ],
  );

  ero_action_names[ero_actions.double_cowgirl] = '轮流女上位';
  ero_tagged_hooks[ero_actions.double_cowgirl] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.virgin,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_virgin,
      (cid) => cid > 0,
    ],
    [ero_action_tags.insert],
  );

  ero_action_names[ero_actions.double_fuck] = '윤간';
  ero_tagged_hooks[ero_actions.double_fuck] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.double_penetration] = '전후윤간';
  ero_tagged_hooks[ero_actions.double_penetration] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.anal, ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.spit_roast] = '상하윤간';
  ero_tagged_hooks[ero_actions.spit_roast] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.virgin],
  );

  ero_action_names[ero_actions.spit_roast_anal_sex] = '애널입윤간';
  ero_tagged_hooks[ero_actions.spit_roast_anal_sex] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.insert,
      ero_action_tags.supporter_awake,
      ero_action_tags.supporter_insert,
      (chara_id) => chara_id,
    ],
    [ero_action_tags.mouth],
  );
};
