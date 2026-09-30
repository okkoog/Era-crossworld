const era = require('#/era-electron');

const EroTouch = require('#/data/ero/ero-touch');
const { part_enum } = require('#/data/ero/part-const');
const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 * @param {Record<string,boolean>} ero_derive_check
 */
module.exports = (ero_action_names, ero_tagged_hooks, ero_derive_check) => {
  ero_action_names[ero_actions.go_on] = '포기하고맡긴다';
  ero_tagged_hooks[ero_actions.go_on] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_action_names[ero_actions.kiss] = '키스';
  ero_tagged_hooks[ero_actions.kiss] = new EroHookTag(
    [ero_action_tags.mouth],
    [ero_action_tags.mouth],
  );

  ero_action_names[ero_actions.relax] = '아무것도하지않는다';
  ero_tagged_hooks[ero_actions.relax] = new EroHookTag(
    [(chara_id) => !chara_id || !era.get('tflag:주도권')],
    [],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.lure] = '유혹한다';
  ero_tagged_hooks[ero_actions.lure] = new EroHookTag(
    [ero_action_tags.mouth, EroHookTag.speak_check],
    [ero_action_tags.awake],
  );

  ero_action_names[ero_actions.talk] = '대화한다';
  ero_tagged_hooks[ero_actions.talk] = new EroHookTag(
    [
      ero_action_tags.awake,
      ero_action_tags.mouth,
      EroHookTag.speak_check,
      (chara_id) => !chara_id,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );

  ero_action_names[ero_actions.switch] = '주도권바꾼다';
  ero_tagged_hooks[ero_actions.switch] = new EroHookTag(
    [(chara_id) => !chara_id],
    [
      ero_action_tags.awake,
      (chara_id) =>
        era.get(`mark:${chara_id}:고통`) < 2 &&
        era.get(`mark:${chara_id}:수치`) < 2 &&
        era.get(`mark:${chara_id}:반발`) < 2,
    ],
  );

  ero_action_names[ero_actions.resist] = '반발';
  ero_tagged_hooks[ero_actions.resist] = new EroHookTag(
    [ero_action_tags.awake, (cid) => !cid],
    [],
    EroHookTag.condition_type.in_active,
  );

  ero_action_names[ero_actions.gargle] = '양치질한다';
  ero_tagged_hooks[ero_actions.gargle] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  ero_action_names[ero_actions.wipe_body] = '몸닦는다';
  ero_tagged_hooks[ero_actions.wipe_body] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  // 沟通派生
  ero_action_names[ero_actions.french_kiss] = '혀섞는다';
  ero_tagged_hooks[ero_actions.french_kiss] = new EroHookTag(
    [ero_action_tags.mouth],
    [
      ero_action_tags.mouth,
      (cid, oid) => {
        const touch = new EroTouch(cid, part_enum.mouth);
        return touch.owner === oid && touch.part === part_enum.mouth;
      },
    ],
  );
  ero_derive_check[ero_actions.french_kiss] = true;
};
