const era = require('#/era-electron');

const { ero_action_tags, ero_actions } = require('#/data/event/ero-actions');
const EroHookTag = require('#/data/event/ero-hook-tag');
const { location_enum } = require('#/data/locations');

/**
 * @param {string[]} ero_action_names
 * @param {EroHookTag[]} ero_tagged_hooks
 */
module.exports = (ero_action_names, ero_tagged_hooks) => {
  ero_action_names[ero_actions.use_lubricating_fluid] = '윤활액사용';
  ero_tagged_hooks[ero_actions.use_lubricating_fluid] = new EroHookTag(
    [
      (chara_id) =>
        !chara_id &&
        era.get('item:윤활액') &&
        era.get('flag:현재위치') !== location_enum.basement &&
        era.get('flag:현재위치') !== location_enum.mejiro,
    ],
    [],
  );

  ero_action_names[ero_actions.use_medicine] = '약먹이기';
  ero_tagged_hooks[ero_actions.use_medicine] = new EroHookTag(
    [
      (chara_id) =>
        !chara_id &&
        era.get('flag:현재위치') !== location_enum.basement &&
        era.get('flag:현재위치') !== location_enum.mejiro,
    ],
    [],
  );

  ero_action_names[ero_actions.condom] = '콘돔착용';
  ero_tagged_hooks[ero_actions.condom] = new EroHookTag(
    [
      ero_action_tags.penis,
      (chara_id) =>
        !chara_id &&
        era.get('item:콘돔') &&
        !era.get(`tcvar:${chara_id}:콘돔`) &&
        !era.get(`status:${chara_id}:펄롱K`) &&
        era.get('flag:현재위치') !== location_enum.basement &&
        era.get('flag:현재위치') !== location_enum.mejiro,
    ],
    [],
  );

  ero_action_names[ero_actions.other_condom] = '콘돔씌워주기';
  ero_tagged_hooks[ero_actions.other_condom] = new EroHookTag(
    [
      (chara_id) =>
        !chara_id &&
        era.get('item:콘돔') &&
        era.get('flag:현재위치') !== location_enum.basement &&
        era.get('flag:현재위치') !== location_enum.mejiro,
    ],
    [
      ero_action_tags.penis,
      (chara_id) =>
        !era.get(`tcvar:${chara_id}:콘돔`) &&
        !era.get(`status:${chara_id}:펄롱K`),
    ],
  );

  ero_action_names[ero_actions.use_item] = '아이템 사용';
  ero_tagged_hooks[ero_actions.use_item] = new EroHookTag(
    [
      ero_action_tags.sadism,
      (chara_id) =>
        chara_id > 0 ||
        (era.get('flag:현재위치') !== location_enum.basement &&
          era.get('flag:현재위치') !== location_enum.mejiro),
    ],
    [],
  );

  ero_action_names[ero_actions.take_off_item] = '완구제거';
  ero_tagged_hooks[ero_actions.take_off_item] = new EroHookTag(
    [(chara_id) => !chara_id],
    [],
  );

  ero_action_names[ero_actions.ask_use_item] = '완구사용요청';
  ero_tagged_hooks[ero_actions.ask_use_item] = new EroHookTag(
    [
      ero_action_tags.awake,
      (chara_id) =>
        !chara_id && era.get('flag:현재위치') !== location_enum.mejiro,
    ],
    [ero_action_tags.awake],
    EroHookTag.condition_type.no,
  );
};
