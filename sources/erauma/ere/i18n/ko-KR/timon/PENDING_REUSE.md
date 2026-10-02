# Timon Korean reuse status

This file tracks **reuse of existing EraUmaK 2.21 Korean text only**.
It is not a fresh-translation checklist.

## Already present on `erauma-ko`

The following Korean Timon modules already exist and are wired from
`ko-KR/timon/entry.js`:

- `recruit.js`
- `daily.js`
- `edu.js`
- `love.js`
- `base.js`
- `guides/game.js`

## Reused in this pass

### `others/storage.js`

Source references:
- `sources/eraumak_kr_2.21/game/ere/page/page-storage.js`
- `sources/eraumak_kr_2.21/game/ere/page/storage/item-handlers-*.js`

Current 3.113 keys: **55**

Reused Korean overrides: **33**

The Korean object inherits from `ja-JP/timon/others/storage`, so unmatched
keys keep working through Japanese fallback.

Pending storage keys (no sufficiently reliable 2.21 Korean match was reused):

- `single_vehicle_canceled`
- `multiple_vehicle_canceled`
- `glass_have_lens_template`
- `glass_equip_confirm_template`
- `glass_lens_broken_template`
- `before_ero_item_common_description`
- `drop_confirm_template`
- `drop_quilt`
- `drop_family_uma_s`
- `use_inmon_item`
- `get_chara_use_medicine`
- `get_chara_use_milk_medicine`
- `anti_condom_for_man`
- `anti_condom_duplicate`
- `anti_condom_confirm`
- `use_anti_condom`
- `get_sell_milk_confirm`
- `get_sell_milk_result`
- `make_armpit_hair_longer`
- `make_armpit_hair_shorter`
- `make_pubic_hair_longer`
- `make_pubic_hair_shorter`

### `others/ending.js`

Source reference:
- `sources/eraumak_kr_2.21/game/ere/page/components/game-over.js`

Current 3.113 ending keys: **11**

Reused Korean overrides in this pass: **7**
- `loser`
- `hentai`
- `punishment1`
- `punishment2`
- `get_basement_ending_confirm`
- `bt_confirm_yes`
- `bt_confirm_no`

Also reused from the same 2.21 source into `ko-KR/timon/entry.js`:
- `ed_saying_01` through `ed_saying_13`

Pending ending keys (3.113 structure/text no longer matched closely enough for direct reuse):
- `slave_end`
- `crazy_fan_end`
- `basement_end`
- `punishment3`

The Korean ending object inherits from `ja-JP/timon/others/ending`, so pending keys continue through Japanese fallback.

## Reuse candidates still requiring structural matching

### `sex/*`

Current 3.113:
- `sex/ero-common.js`
- `sex/ero-rape.js`
- `sex/ero-sleep.js`
- `sex/ero-others.js`
- `sex/system.js`
- `sex/act-desc-common.js`
- `sex/act-desc-rape.js`
- `sex/act-desc-sleep.js`

2.21 source area:
- `sources/eraumak_kr_2.21/game/ere/event/ero/`

Existing Korean material is present, but the current i18n split is much larger
and must be matched by function/scene before reuse.

### `others/god-shop.js`

Source reference:
- `sources/eraumak_kr_2.21/game/ere/page/page-god-shop.js`

Current 3.113 keys: **35**

Reused Korean overrides in this pass: **12**

Reused:
- `get_chara_react`
- `start`
- `bt_pray_honour_buff`
- `bt_pray_money_buff`
- `bt_pray_money`
- `bt_pray_your_power`
- `get_bt_pray_over_limit`
- `bt_pray_self_over_limit`
- `get_bt_pray_heal`
- `bt_pray_self_heal`
- `pray_honour_buff`
- `pray_money_buff`

Pending god-shop keys (no sufficiently reliable 2.21 Korean structural match reused yet):
- `pray_money`
- `pray_your_power`
- `pray_over_limit`
- `pray_heal`
- `pray_heal_no_need`
- `common_start_pray`
- `common_finish_pray`
- `common_pray_your_power`
- `common_pray_peace`
- `leave`
- `start_with_no_god`
- `handle_pray_honour_buff`
- `handle_pray_money_buff`
- `handle_pray_your_power`
- `handle_pray_over_limit`
- `handle_pray_end`
- `borrow_money`
- `bt_pray`
- `pray_select`
- `select_target`
- `no_targets`
- `get_target_entry_over_limit`
- `get_target_entry_heal`

The Korean object inherits from `ja-JP/timon/others/god-shop`, so these
pending keys continue to work through Japanese fallback.

### `mejiro/cum.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/mejiro-events.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/cum-shop.js`

Current 3.113 top-level keys/functions: **111**

Safely reused Korean overrides in this pass: **73**

Reused area:
- Mejiro City street/shop UI
- beauty salon labels and unchanged limit/warning messages
- hospital labels and dialogue
- massage shop labels and result text
- library labels and dialogue
- prize shop labels and grand-prize dialogue
- newspaper UI/dialogue
- bank UI/dialogue
- city hall dialogue
- leaving-the-city notification

Pending keys/functions left on Japanese fallback because the 2.21 structure or
meaning changed enough that direct reuse was not reliable:
- `calling_tip`
- `calling_buttons`
- `calling_not_chara_tip`
- `calling_god_tip`
- `come_limited`
- `get_header`
- `bt_slow_forward`
- `bt_normal_forward`
- `bt_fast_forward`
- `bt_slow_search`
- `bt_normal_search`
- `bt_fast_search`
- `bt_rest`
- `bt_surrender`
- `city_upgrade_max`
- `city_bs_height_up_template`
- `city_bs_height_down_template`
- `city_bs_boob_up_template`
- `city_bs_boob_down_template`
- `city_bs_penis_bigger_man_template`
- `city_bs_penis_bigger_woman_template`
- `city_bs_penis_smaller_man_template`
- `city_bs_penis_smaller_futa_template`
- `city_bs_ero_deeper`
- `city_bs_ero_deeper_limit_tip`
- `city_bs_ero_shallower`
- `city_bs_ero_shallower_limit_tip`
- `city_bs_skin_shallower_template`
- `city_bs_skin_deeper_template`
- `city_bs_uma_template`
- `city_mg_trained_talent_template`
- `come_in_mejiro_city`
- `misty_notify`
- `get_misty_info`
- `fail_to_escape`
- `leave_misty`
- `notify_misty`
- `notify_called`

The Korean module spreads the current Japanese object first, so all 38 pending
keys/functions remain functional through Japanese fallback.

## No direct 2.21 reuse match found in this pass

### `guides/base.js`

The current basement guide did not have a direct matching Korean text block in
the checked 2.21 `game-guides.js` source. Treat as untranslated until a
reliable source match is found.

## Excluded from automatic reuse in this pass

### `child/daily.js`
### `child/ero.js`

These files were not auto-reused in this pass. Keep the current Japanese
fallback and review separately.

## Other Timon modules not yet classified in detail

- `others/race.js`
- `others/others.js`
- `others/random.js`
- `guides/base.js`
- `mejiro/cum.js`
- remaining Timon modules not yet wired from `ko-KR/timon/entry.js`

### `others/race.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/system/race/sub-simulate-ero.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sub-simulate-report.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sys-simulate-race.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sys-check-titles-after-race.js`

Current 3.113 keys: **67**

Reused Korean overrides: **66**

Pending race key:
- `full_speed_push_reports`

This key has no corresponding 2.21 Korean text in the matched race simulator
sources and therefore remains on Japanese fallback.

### Next direct reuse candidates

- `others/tachyon-shop.js`
  - Direct 2.21 source confirmed:
    `sources/eraumak_kr_2.21/game/ere/event/shop/tachyon-shop.js`
  - Current file has 13 top-level scene functions. Structural matching is
    straightforward, but no bulk copy was done in this pass.

- `others/pregnant-slave.js`
  - Direct 2.21 sources confirmed:
    `sources/eraumak_kr_2.21/game/ere/event/others/punish-pregnant-slave.js`
    and `as-pregnant-slave.kojo`
  - Current file is much larger than a single old source and requires
    scene-by-scene matching.

### Still requires source-area decomposition

- `others/others.js`
  - Current module combines miscellaneous scenes from multiple old source
    areas; no safe single-file positional reuse should be attempted.
- `others/random.js`
  - Current module is ~85k characters and collects many random-event scenes.
    It must be split by scene/function before matching to 2.21 sources.

### `others/tachyon-shop.js`

2.21 source:
- `sources/eraumak_kr_2.21/game/ere/event/shop/tachyon-shop.js`

Current 3.113 scene functions: **13**

Reused Korean scene functions: **13 (partial text reuse where structure changed)**

Pending UI strings with no safe direct 2.21 structural reuse:
- `start_first`: `相手の名前を入力：`
  - New explicit input prompt in the current split; no corresponding 2.21 UI call.
- `start_first`: ` はがっかりしてため息をつき、白衣の内側を探り始めた`
  - The old Korean scene split this sentence around an explicit `tachyon.sex` insertion,
    while 3.113 merged it into one literal. It was intentionally left on the
    current Japanese text rather than synthesizing a new Korean sentence.

All other user-facing strings in the 13 current scene functions were matched
to existing 2.21 Korean text. Control/input match strings are preserved from
the current 3.113 source and are not counted as untranslated UI text.

### Next direct reuse candidate after tachyon shop

- `others/pregnant-slave.js`
  - Direct 2.21 sources:
    `sources/eraumak_kr_2.21/game/ere/event/others/punish-pregnant-slave.js`
    and `as-pregnant-slave.kojo`
  - Requires scene-by-scene matching; do not positional bulk-copy.

### `others/pregnant-slave.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/others/punish-pregnant-slave.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/as-pregnant-slave.kojo`

Current 3.113 scene functions: **15**

Reused Korean scenes in this pass:
- `work`: **full reuse**
  - Current output calls: 26
  - All 26 were matched to the 25 old Korean template lines.
  - One old line was split into two current `print` calls and was reused without changing its Korean wording.
- `punish_first`: **partial reuse**
  - 49 current output calls were safely matched to the old first-punishment branch.
- `punish`: **partial reuse**
  - 47 current output calls were safely matched to the old repeat-punishment branch.

Pending Japanese fallback inside the reused punishment scenes:
- `punish_first`
  - the post-Yayoi/Tazuna arrival sentence whose dynamic-name split changed
  - the new `degeneration_to_evil` choice labels
  - the two degeneration-dependent self-perception variants
  - the sentence whose subject/object split no longer matches the old Korean call
  - one body-description call whose dynamic segmentation changed
  - the final inmon-change notification extracted in 3.113
- `punish`
  - the sentence about receiving help from the assigned character/students/teachers whose name insertion was removed in 3.113
  - the new `degeneration_to_evil` choice labels
  - the new degeneration-dependent explanatory block
  - one familiar-body-description call whose dynamic segmentation changed
  - the final inmon-change notification extracted in 3.113

Current Japanese literal fragments left in the Korean override file after safe reuse: **26**.

Current scenes still entirely on Japanese fallback because no direct match was confirmed in the two checked 2.21 sources:
- `office_study`
- `s_a_tree_hollow`
- `s_a_dating`
- `school_rooftop`
- `race_start`
- `oyakodon`
- `be_awake_as_slave`
- `morning_duty`
- `report_preg_duty`
- `have_baby_in_sleep`
- `have_baby_after_raped`
- `have_baby_dedicate`

The Korean module inherits from `ja-JP/timon/others/pregnant-slave`, so all pending
strings and scenes remain functional through Japanese fallback.

### Next reuse candidates after pregnant slave

- `mejiro/cum.js`
  - Existing 2.21 Korean sources are already identified, but function/property
    names changed and require structural matching.
- `sex/*`
  - Large existing Korean source area under `game/ere/event/ero/`.
  - Continue only by function/scene matching; do not positional bulk-copy.
- `others/others.js`
  - Needs source-area decomposition before reuse.
- `others/random.js`
  - Needs scene/function decomposition before reuse.

### `sex/act-desc-rape.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/action-descriptions/rape-communications.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/action-descriptions/rape-making-outs.js`

Current 3.113 action-description functions: **14**

Safely reused Korean overrides: **13**

Pending Japanese fallback:
- `force_hand_and_blow_job`
  - 2.21 used one defender-name insertion in the continuation line, while 3.113
    splits the same sentence around two defender-name insertions. No new Korean
    wording was synthesized.

### `sex/act-desc-sleep.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/action-descriptions/sleep-communications.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/action-descriptions/sleep-making-outs.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/action-descriptions/sleep-fucking.js`

Current 3.113 action-description functions: **39**

Safely reused Korean overrides: **31**

Pending Japanese fallback because 2.21 grouped paired vaginal/anal actions into
single handlers while 3.113 split them into separate functions:
- `missionary`
- `missionary_anal_sex`
- `doggy_style`
- `doggy_style_anal_sex`
- `cowgirl`
- `cowgirl_anal_sex`
- `stimulate_glans_by_virgin`
- `stimulate_glans_by_anal`

Both Korean modules spread the current Japanese objects first, so all pending
functions remain functional through Japanese fallback.

### Next sex reuse candidates

- `sex/act-desc-common.js`
  - Direct 2.21 sources exist under
    `game/ere/event/ero/common/action-descriptions/normal-*.js`.
  - Large file; process by function group rather than positional bulk-copy.
- `sex/system.js`
  - Existing 2.21 Korean text is distributed across common/result/interface
    files. Requires structural matching by function/key.
- `sex/ero-rape.js`, `sex/ero-sleep.js`, `sex/ero-common.js`
  - Existing Korean scene material is present, but these are substantially
    larger and should be handled in separate chunks.

### `sex/act-desc-common.js`

2.21 source references checked in this pass:
- `normal-communications.js`
- `normal-orgy.js`
- `normal-sm.js`
- `normal-items.js` (14 current split functions safely reused)

Current 3.113 action-description functions: **162**

Safely reused Korean overrides so far: **160**

Reused groups:
- common communication/control: **10**
  - `go_on`, `kiss`, `french_kiss`, `lure`, `talk`
  - `passive_switch`, `active_switch`, `resist`, `gargle`, `wipe_body`
- group/three-person actions: **23**
  - all current functions corresponding to the matched 2.21 `normal-orgy.js` handlers,
    including the now-split vaginal/anal spit-roast variants
- SM actions: **14**
  - the 2.21 combined normal/hard handlers were safely split into the current
    separate functions without changing the existing Korean wording

Pending Japanese fallback: **2 functions**

Known pending from the checked groups:
- `relax`
  - 2.21 branches on awake/exhausted state while current 3.113 has a single
    simplified description; no Korean text was synthesized
- `sleep`
  - no direct normal-communication handler in the checked 2.21 source
Newly classified and reused in this pass:
- `normal-making-outs.js`: **65 / 65** current matching functions safely reused
  - exact current/old signatures were reused directly
  - old `hook.arg` branches were reused only where they map 1:1 to current `is_first`
  - no new Korean prose was synthesized

Newly classified and reused in this pass:
- `normal-fucking.js`: **34 / 34** current matching functions safely reused
  - the 2.21 combined vaginal/anal handlers were split into the current explicit functions
  - old `hook.arg` branches map directly to current `is_first`
  - no new Korean prose was synthesized

Newly classified and reused in this pass:
- `normal-items.js`: **14 / 14** current split item functions safely reused
  - old self/other branches were mapped to current explicit self/other functions
  - old `use_item` branches were mapped to current effect/equip/stunner/mirror functions
  - no new Korean prose was synthesized

Remaining Japanese fallback functions after this pass:
- `relax`
- `sleep`

The Korean module spreads `ja-JP/timon/sex/act-desc-common` first, so every
pending function remains functional through Japanese fallback.

### `sex/system.js`

2.21 source references checked:
- `sources/eraumak_kr_2.21/game/ere/page/page-ero.js`
- `sources/eraumak_kr_2.21/game/ere/system/ero/sys-prepare-ero.js`
- `sources/eraumak_kr_2.21/game/ere/system/ero/sys-calc-orgasm.js`
- `sources/eraumak_kr_2.21/game/ere/system/ero/sys-handle-ero-act.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/ero-common.js`

Current 3.113 top-level keys/functions: **95**

Safely reused Korean overrides in this pass: **4**
- `get_milk_ml`
- `get_milk_item`
- `get_your_milk_info`
- `ero_report`

The three milking result helpers reuse only wording already present in the old
`print_milking()` block. `ero_report` reuses the old Korean reporter dialogue
verbatim. No new Korean prose was synthesized.

Pending Japanese fallback: **91 keys/functions**
- `bt_back_home`
- `bt_rape_play`
- `bt_use_medicine`
- `get_want_sex_as_lover`
- `get_want_sex_as_slave`
- `choose_who_to_rape`
- `use_medicine_header`
- `no_medicine_notification`
- `use_super_uma_z`
- `use_uma_s`
- `get_want_sex_as_master_by_pleasure`
- `get_want_sex_as_master_by_meek`
- `bt_start_train`
- `bt_train_back_home`
- `get_want_sex_as_raper`
- `bt_rape`
- `bt_drug`
- `rape`
- `drug`
- `after_rape_by_super_uma_z`
- `get_want_sex_sleep`
- `bt_rape_in_sleeping`
- `lub_select_target`
- `select_entry_template`
- `get_lub_give_up`
- `lub_no_parts`
- `get_lub_select_part`
- `get_lub_confirm`
- `med_no_medicines`
- `med_select_target`
- `get_med_give_up`
- `get_med_no_medicines_for_chara`
- `med_no_medicines_for_you`
- `get_med_select_medicine`
- `med_select_medicine_for_you`
- `get_med_confirm_for_chara`
- `get_med_confirm_for_you`
- `get_med_give_up_medicine`
- `itm_no_items`
- `itm_select_item`
- `get_itm_select_part`
- `itm_no_parts`
- `get_itm_confirm_with_part`
- `get_itm_confirm_without_part`
- `get_itm_give_up_item`
- `itm_take_off_select_target`
- `get_itm_give_up_take_off`
- `get_itm_no_item_to_take_off`
- `itm_take_off_select_item`
- `itm_take_off_select_entry_template`
- `itm_take_off_mirror_confirm`
- `get_itm_take_off_confirm`
- `get_itm_take_off_give_up`
- `get_change_master_info`
- `get_escape_info`
- `orgasm`
- `orgasm_template`
- `get_chara_total_orgasm`
- `get_chara_part_orgasm`
- `get_chara_spirit_orgasm`
- `get_chara_have_liquid`
- `liquid_amount_template`
- `get_chara_cum_on_face`
- `get_chara_cum_in_condom`
- `get_chara_cum_in_artificial_vagina`
- `get_chara_cum_in_part`
- `get_chara_cum`
- `cum_in_anal`
- `cum_in_body`
- `cum_in_breast`
- `cum_in_clitoris`
- `cum_in_foot`
- `cum_in_hand`
- `cum_in_mouth`
- `cum_in_penis`
- `cum_in_virgin`
- `get_milk_info`
- `get_squirt_info`
- `unsatisfied_mouth`
- `unsatisfied_nipple`
- `unsatisfied_hidden_nipple`
- `unsatisfied_body`
- `unsatisfied_penis`
- `unsatisfied_clitoris`
- `unsatisfied_vagina`
- `unsatisfied_sadism`
- `unsatisfied_sadism_zero_stamina`
- `unsatisfied_masochism`
- `unsatisfied_masochism_zero_stamina`
- `unsatisfied_lose_virgin_p`
- `unsatisfied_lose_virgin_v`

The Korean module spreads the current Japanese `sex/system` object first, so
all pending keys/functions remain functional through Japanese fallback.

### `sex/ero-rape.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/rape/communications.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/rape/making-outs.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/rape/fucking.js`

Current 3.113 top-level scene functions: **33**

Safely reused Korean scene functions in this pass: **17**

Reused:
- `kiss`
- `french_kiss`
- `pet_ear`
- `pet_clitoris`
- `stimulate_g_spot_by_finger`
- `pet_tail`
- `pull_tail`
- `bite_nipple`
- `missionary`
- `hug_sitting`
- `hug_standing`
- `suspended_congress`
- `hug_suspended_congress`
- `stimulate_g_spot`

Pending Japanese fallback because the current call/string structure no longer matches the 2.21 scene closely enough for direct reuse:
- `pull_ear`
- `pet_nipple`
- `finger_fuck`
- `pet_leg`
- `ask_deep_blow_job`
- `force_deep_blow_job`
- `ask_or_force_hand_job`
- `ask_tit_job`
- `ask_or_force_tit_and_blow_job`
- `doggy_style`
- `sitting`
- `standing`
- `ask_cowgirl`
- `continue_fucking`

The Korean module spreads the current Japanese `sex/ero-rape` object first, so all pending functions remain functional through Japanese fallback. No new Korean prose was synthesized.

### `sex/ero-sleep.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/sleep/communications.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/sleep/making-outs.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/sleep/fucking.js`

Current 3.113 top-level scene functions: **36**

Safely reused Korean scene functions in this pass: **24**

Pending Japanese fallback because the current output-call/string structure no longer matches the 2.21 scene closely enough for direct reuse:
- `pet_nipple`
- `stimulate_g_spot_by_finger`
- `pet_leg`
- `pull_tail`
- `hand_and_blow_job`
- `fuck_tit`
- `suck_nipple`
- `force_foot_job`
- `tail_job`
- `missionary`
- `stimulate_womb`
- `stimulate_glans_by_hole`

The Korean module spreads the current Japanese `sex/ero-sleep` object first, so all pending functions remain functional through Japanese fallback. No new Korean prose was synthesized.

### `sex/ero-common.js`

2.21 source references checked so far:
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/communications.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/making-outs-1.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/making-outs-2.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/making-outs-final.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/fucking.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/orgy.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/sm.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/normal/items.js`

Current 3.113 top-level scene functions: **95**

Safely reused Korean scene functions so far: **58**

Newly reused in this pass from `normal/fucking.js`: **10**
- `missionary`
- `doggy_style`
- `sitting`
- `hug_sitting`
- `standing`
- `hug_standing`
- `suspended_congress`
- `hug_suspended_congress`
- `ask_cowgirl`
- `stimulate_g_spot`

These functions keep the current 3.113 signatures and control structure while
reusing only Korean prose already present in EraUmaK 2.21. No new Korean prose
was synthesized.


Newly reused in this pass from `normal/orgy.js`, `normal/sm.js`, and `normal/items.js`: **11**
- group/three-person scenes: `ask_double_blow_job`, `ask_double_fuck`, `ask_double_penetration`, `ask_spit_roast`, `fuck_69`, `double_fuck`, `double_penetration`, `spit_roast`
- SM scenes: `insult`, `hit_face_by_penis`
- item scene: `use_medicine`

These overrides preserve the current 3.113 function signatures/control flow while reusing only Korean prose already present in EraUmaK 2.21. No new Korean prose was synthesized.


Newly reused in this pass from `normal/making-outs-1.js`: **12**
- breast scenes: `pet_breast_from_back`, `pet_breast_first`, `pet_breast`
- cunnilingus scenes: `cunnilingus`, `ask_cunnilingus`, `force_cunnilingus`
- vaginal oral scenes: `suck_virgin`, `ask_suck_virgin`, `force_suck_virgin`
- oral penis scenes: `blow_job`, `ask_blow_job`, `force_blow_job`

The current 3.113 signatures and branching are preserved. Only Korean prose
already present in EraUmaK 2.21 was reused; no new Korean prose was synthesized.

Pending Japanese fallback: **37 functions**
- `after_refused`
- `resist`
- `pet_breast`
- `pet_nipple`
- `prepare_virgin_uma`
- `pet_leg`
- `pull_tail`
- `cunnilingus`
- `suck_virgin`
- `ask_blow_job`
- `force_blow_job`
- `deep_blow_job`
- `ask_deep_blow_job`
- `force_deep_blow_job`
- `ask_hand_job`
- `force_hand_job`
- `hand_and_blow_job`
- `ask_hand_and_blow_job`
- `force_hand_and_blow_job`
- `ask_tit_job`
- `fuck_tit`
- `ask_tit_and_blow_job`
- `fuck_tit_and_mouth`
- `milk_and_hand_job`
- `ask_non_penetrative`
- `sixty_nine`
- `ask_armpit_intercourse`
- `force_armpit_intercourse`
- `ask_foot_job`
- `force_foot_job`
- `ask_tail_job`
- `force_tail_job`
- `hair_fuck`
- `ask_hair_fuck`
- `force_hair_fuck`
- `ask_stimulate_glans_by_hole`
- `stimulate_womb`
- `ask_fuck`
- `cowgirl`
- `stimulate_glans_by_hole`
- `ask_stimulate_hole`
- `continue_fucking`

The Korean module spreads `ja-JP/timon/sex/ero-common` first, so every
pending function remains functional through Japanese fallback.

