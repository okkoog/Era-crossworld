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

Storage fallback classification is now complete.

The remaining **22** current 3.113 storage keys were checked against the
corresponding 2.21 storage handlers. Safely reusable Korean overrides found in
this classification pass: **0**.

Reason by group:
- vehicle cancellation: matching 2.21 output is Chinese;
- glasses/lens residual UI: current generic state split does not have a direct
  Korean 2.21 equivalent;
- pre-use/discard, inmon/medicine, condom-dissolver, milk-sale, and hair-care
  residual text: matching 2.21 output is Chinese or mixed Chinese/Korean rather
  than a complete reusable Korean sentence.

No fresh Korean prose was created. All 22 remain on Japanese fallback.

Classification record:
- `REUSE_STORAGE_BATCH_01.json`

Result:
- current 3.113 storage keys: **55**;
- existing Korean overrides: **33**;
- classified Japanese fallbacks: **22**;
- unclassified reuse candidates: **0**.

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

Ending fallback classification is now complete.

Checked the four previously pending keys against their 2.21 Korean sources:
- `slave_end`: no direct generic match; the old Korean scene is Tachyon-specific.
- `crazy_fan_end`: no direct generic match; the old Korean scenes are character-specific.
- `basement_end`: no direct generic match; the checked old Korean scene is Urara-specific.
- `punishment3`: **partial direct reuse added** from the old common game-over flow.

For `punishment3`, all directly matching 2.21 Korean narration was reused. The
single outcome sentence introduced by the new 3.113 `sex_code == 0` branch has
no old Korean counterpart and remains Japanese.

Classification record:
- `REUSE_ENDING_BATCH_01.json`

Result:
- current ending keys: **11**;
- Korean overrides: **8** (including partial `punishment3`);
- full-key Japanese fallbacks: **3**;
- additional untranslated fragment: **1 sentence** inside `punishment3`;
- unclassified reuse candidates: **0**.

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

## Child module reuse status

### `child/daily.js`

2.21 source:
- `sources/eraumak_kr_2.21/game/ere/event/daily/daily-child.js`

Current 3.113 functions: **11**

Safely reused non-sexual Korean overrides: **9**
- `select_0`
- `select_1`
- `select_2`
- `talk_0`
- `talk_1`
- `growth_0`
- `growth_1`
- `growth_2`
- `load_talk`

Pending Japanese fallback: **2**
- `talk_2`
- `talk_estrus`

Those two functions were intentionally not translated in this reuse workflow.
The Korean module spreads the current Japanese object first, so they remain
functional through fallback.

### `child/ero.js`

No Korean override is wired. This module remains entirely on Japanese fallback
and is excluded from the reuse workflow.

## Remaining Timon modules not fully resolved

- `others/random.js`
  - Still requires scene/function decomposition before reuse.
- `guides/base.js`
  - Already checked; no reliable direct 2.21 Korean match was found.
- `child/ero.js`
  - Remains entirely on Japanese fallback and is excluded from reuse.

### `others/race.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/system/race/sub-simulate-ero.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sub-simulate-report.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sys-simulate-race.js`
- `sources/eraumak_kr_2.21/game/ere/system/race/sys-check-titles-after-race.js`

Current 3.113 keys: **67**

Reused Korean overrides: **66**

Race fallback classification is complete.

The sole remaining key, `full_speed_push_reports`, was rechecked against the
matched 2.21 race simulator sources. The old Korean build contains ordinary
last-spurt and acceleration reports, but no direct three-variant counterpart for
this new 3.113 block. It therefore remains on Japanese fallback.

Classification record:
- `REUSE_RACE_RESIDUAL_01.json`

Result:
- current race keys: **67**;
- Korean overrides: **66**;
- classified Japanese fallbacks: **1**;
- unclassified reuse candidates: **0**.

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
- `pet_nipple`
- `prepare_virgin_uma`
- `pet_leg`
- `pull_tail`
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

### `sex/ero-others.js`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/ero/ero-common.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/pregnant-report-in-love.js`
- `sources/eraumak_kr_2.21/game/ere/event/ero/common/cum-in-womb.js`

Current 3.113 top-level keys/functions: **36**

Safely reused Korean overrides in this pass: **35**

Reused areas:
- 3P join/accept/force/reject
- erection, lubrication, wound, virginity-loss notifications
- orgasm-denial UI/result
- zero-stamina / lost-mind messages
- pleasure/meek/pain/shame/hate/inmon mark notifications
- immediate pregnancy notification
- pregnancy report (love / non-love)
- childbirth report
- shop start/end reactions
- first/second/repeated betrayal reactions

Pending Japanese fallback:
- `cum_in_womb`
  - Existing 2.21 Korean text is present, but current 3.113 added anti-condom branches and changed several conditional splits. It was left on Japanese fallback rather than synthesizing Korean text.

The Korean module spreads the current Japanese `sex/ero-others` object first, so the pending function remains functional through Japanese fallback. No fresh Korean prose was created.

### `others/others.js`

2.21 source references checked:
- `sources/eraumak_kr_2.21/game/ere/page/page-trainer-office.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/anniversary.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/anniversary.kojo`
- `sources/eraumak_kr_2.21/game/ere/page/page-recruit-rand.js`
- `sources/eraumak_kr_2.21/game/ere/system/flag/sys-get-star-premium-draw.js`

Current 3.113 top-level keys/functions: **55**

Safely reused Korean overrides: **6**
- `welcome_trainer_office`
- `TEN`
- `TWENTY`
- `THIRTY`
- `FORTY`
- `FIFTY`

The office greeting was matched directly to the 2.21 trainer-office first-visit
scene. The five anniversary scenes were matched directly to the 2.21
`anniversary.kojo` text. Only existing Korean wording was reused; no new Korean
prose was synthesized.

Pending Japanese fallback: **49**
- `ura_reward`
- `ur_alternative_reporter`
- `get_ur_trainer_reward`
- `get_ur_uma_reward`
- `sc_event_name`
- `get_sc_buttons`
- `sc_event_former`
- `sc_limit_template`
- `sc_name_template`
- `sc_name_inherited_template`
- `sc_event_latter`
- `star_drew_limited`
- `star_drew_wrong_date`
- `star_drew_intro`
- `star_drew_options`
- `star_drew_filter_template`
- `star_drew_filter_kojo_template`
- `star_drew_filter_image`
- `star_drew_bt_filter_kojo_r`
- `star_drew_bt_filter_kojo_d`
- `star_drew_bt_filter_kojo_ed`
- `star_drew_bt_filter_kojo_l`
- `star_drew_bt_filter_kojo_er`
- `star_drew_bt_filter_kojo_b`
- `star_drew_bt_filter_image`
- `sd_f_title_kojo_r`
- `sd_f_title_kojo_d`
- `sd_f_title_kojo_ed`
- `sd_f_title_kojo_l`
- `sd_f_title_kojo_er`
- `sd_f_title_kojo_b`
- `sd_f_title_image`
- `get_star_drew_selected`
- `star_drew_all_chara`
- `star_drew_other_chara`
- `star_drew_chara_name_input`
- `star_drew_chara_id_input`
- `star_drew_duplicate`
- `star_drew_no_one`
- `star_drew`
- `grand_live_header`
- `fund_reject`
- `fund_summary`
- `bt_fund`
- `bt_ransom`
- `fund_confirm`
- `fund_result`
- `get_ransom_confirm`
- `ransom_result`

No sufficiently reliable direct 2.21 structural match was confirmed for these
49 entries in the checked source areas, so they remain on Japanese fallback.

The Korean module spreads the current Japanese `others/others` object first,
so every pending key/function remains functional through Japanese fallback.


### `mejiro/cum-events.kojo`

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/good-events.kojo`
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/normal-events.kojo`
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/bad-events.kojo`

Current 3.113 events: **24**

Safely reused Korean output lines: **192**

Structural result:
- **23 / 24** events have the same number of output/content leaves as the 2.21 source and were reused by event order.
- `g_water` was split into three action-specific branches in 3.113. Only the four directly matching old Korean lines were reused.

Pending untranslated UI:
- **24 event titles** added by the current 3.113 format
- **3 `g_water` action-specific lines** that have no 1:1 old Korean source line

The Korean file keeps the current 3.113 event structure and placeholders
(`%YOU%`, `%CHARA%`, `%SEX%`, `%TEEN%`, `%REWARD%`) while replacing only
directly matched output text.

### `others/random.js` — first matched batch

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-events-0/privacy.js`
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-events-0/strange-day.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/morning-sex.js`

Current 3.113 random scenes: **38**

Korean overrides added/wired in this batch: **6 scenes**

Fully reused user-facing text:
- `privacy_1`
- `privacy_2_2`
- `mr_naked_apron`
- `mr_blowjob`

Partially reused:
- `privacy_2_1`
  - The current scene split one old Korean sentence into two new literal fragments.
  - Those two current fragments remain Japanese rather than synthesizing new Korean wording.
- `strange_day`
  - Korean text was reused only for segments bounded by unchanged emoticon/control anchors where the old/current literal counts matched.
  - The changed transition around reaching/understanding the laboratory remains Japanese fallback text.
  - Emoticons containing Japanese glyphs are not counted as untranslated prose.

Not yet reused from the same confirmed source area:
- `privacy_3`
- `strange_day2`

Other current random scenes still require source matching and remain on Japanese fallback:
- `god_coin`
- `all_round_meek`
- `experiment`
- `shadow_minoru`
- `chairman_annoyance1`
- `chairman_annoyance2`
- `av_meteor`
- `custom`
- `ts_sex`
- `gs_carrot`
- `trainer_race`
- `bankruptcy`
- `reject`
- `work_over`
- `sick`
- `fishing`
- `ts_shower`
- `sr_strange_lunch`
- `breakfast`
- `or_riverside_walk`
- `wind_welcome`
- `we_are_one`
- `chocolate`
- `sakura_regret`
- `nice_weekend`
- `kamen_rider`
- `big_sale`
- `justice`

The Korean module spreads the current Japanese `others/random` object first, so every untouched or partially unmatched scene remains functional through Japanese fallback. No fresh Korean prose was synthesized.

### `others/random.js` — second matched batch

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-events-0/privacy.js`
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-events-0/strange-day.js`

Additional current 3.113 scene overrides added in this batch: **2**
- `privacy_3`
- `strange_day2`

`privacy_3`:
- Current output/action calls: **50**
- Safely reused Korean calls: **49**
- One changed final farewell output remains Japanese because 3.113 inserted an additional dynamic `chara.sex` fragment and the old Korean sentence cannot be split 1:1 without writing new Korean prose.
- The event title reuses the existing 2.21 Korean title.

`strange_day2`:
- Current output/action calls: **118**
- Old 2.21 output/action calls: **114**
- Structural sequence alignment matched **113** old calls 1:1 to current calls, and those existing Korean strings were reused.
- Current calls intentionally left Japanese:
  - the early sentence whose dynamic-name placement changed from two old literal fragments to one current fragment
  - toilet choice `する`
  - toilet choice `やめておく`
  - street encounter choice `逃げる`
  - street encounter choice `冷静に対応する`
- The event title reuses the existing 2.21 Korean title.

No new Korean prose was synthesized. Both overrides preserve the current 3.113
control flow and dynamic expressions; only directly matched 2.21 Korean output
text was substituted.

### `others/random.js` — third matched batch

2.21 source reference:
- `sources/eraumak_kr_2.21/game/ere/event/daily/common/out-shopping.js`

Additional current 3.113 scene override added in this batch: **1**
- `os_is_movie_right`

`os_is_movie_right`:
- The current 3.113 scene is the extracted special movie branch from the old
  common shopping-outing handler.
- The scene text and choices have a direct Korean match in the 2.21 source.
- The current `callname` parameter replaces the old
  `sys_get_colored_callname(...)` lookup without changing the Korean prose.
- The current return-value structure is preserved.
- **Full user-facing text reuse**; no new Korean prose was synthesized.

Checked in the same pass but left on Japanese fallback because no sufficiently
reliable direct 2.21 scene match was found in the relevant source areas:
- `or_riverside_walk`
  - checked old river outing/common river sources; the scene content is different.
- `nice_weekend`
  - the current Agnes Digital / Mejiro Dober scene has no corresponding 2.21
    character-event directory/text block in the checked snapshot.
- `chocolate`
  - the current Air Shakur / Transcend / Dream Journey event has no matching
    2.21 character-event source in the checked snapshot.
- `big_sale`
  - checked the old common shopping-outing handler; it does not contain this
    vegetable-sale event.

The Korean module continues to spread the current Japanese `others/random`
object first, so all four unmatched scenes remain functional through fallback.

### `others/random.js` — fourth matched batch

2.21 source reference:
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-events-32/week-start-12.js`

Additional current 3.113 scene override added in this batch: **1**
- `drug_notice`

`drug_notice`:
- The old 2.21 scene is registered as `handlers.drug_notice` with the Korean
  event title `학원 통지・약물 살포`.
- Current 3.113 moved random effect selection outside the text function and
  passes `effect` as an argument; that current control structure was preserved.
- The old 2.21 single dynamic effect description was expanded in current 3.113
  into four explicit branches. Each branch reuses the corresponding existing
  Korean wording from the old `effects` array plus its existing sentence
  frame; no new Korean meaning was introduced.
- Announcement, choices, result messages, and Tachyon reaction text all reuse
  the existing 2.21 Korean scene wording.

Additional source checks in this pass:
- `av_meteor`: no 2.21 `edu-events-33` directory exists in the snapshot.
- `gs_carrot`: the checked 2.21 Gold Ship event directory contains only
  race-end/week-start material; no matching radish scene was found.
- `fishing`: no 2.21 Seiun Sky daily-event directory matching this standalone
  random scene was found.
- `all_round_meek`: no direct Happy Meek random-event source was confirmed.
- `trainer_race`: no direct 2.21 trainer-poster race scene was confirmed.

These unmatched scenes remain on Japanese fallback.

### \`others/random.js\` — fifth matched batch

2.21 source references:
- \`sources/eraumak_kr_2.21/game/ere/event/edu/edu-301.js\`
- \`sources/eraumak_kr_2.21/game/ere/event/edu/edu-302.js\`

Additional current 3.113 scene overrides added in this batch: **3**
- \`shadow_minoru\`
- \`chairman_annoyance1\`
- \`chairman_annoyance2\`

\`shadow_minoru\`:
- Directly matches the 2.21 \`CustomizedEdu.shadow()\` scene for Hayakawa Tazuna.
- Current 3.113 parameters/control flow are preserved.
- Existing Korean event title, choice, and both identity-known/unknown branches were reused.
- No new Korean prose was synthesized.

\`chairman_annoyance1\` / \`chairman_annoyance2\`:
- Directly match the 2.21 \`CustomizedEdu.annoyance1()\` and \`annoyance2()\`
  scenes for Akikawa Yayoi.
- Current 3.113 return-value structure is preserved.
- Existing Korean dialogue/choices/results were reused.
- The current \`%TEEN%\` title placeholder is preserved while reusing the old Korean
  title wording.

Checked in the same pass but no sufficiently reliable direct 2.21 scene match was found:
- \`all_round_meek\`
  - checked the 2.21 Happy Meek / Kiryuin education entry points
    (\`edu-201.js\`, \`edu-304.js\`); no matching training-secret scene was present.
- \`trainer_race\`
  - checked the 2.21 Kiryuin education entry point (\`edu-304.js\`); no matching
    poster/trainer-race scene was present.
- \`experiment\`
  - checked the 2.21 Manhattan Cafe event area (\`edu-events-25/*\`); no direct
    abandoned-science-room scene match was confirmed.

These unmatched scenes remain on Japanese fallback.


Additional generic-source checks in this batch:
- \`custom\`
- \`bankruptcy\`
- \`reject\`
- \`work_over\`
- \`sick\`

Checked 2.21 common/init/queue sources:
- \`event/init/customized-init.js\`
- \`event/daily/daily-common.js\`
- \`event/daily/daily-0.js\`
- \`event/edu/edu-common.js\`
- \`event/queue.js\`
- \`event/basement-queue.js\`

No sufficiently reliable 1:1 Korean scene match was found in those checked
sources, so these scenes remain on Japanese fallback.

### `others/random.js` — sixth matched batch (2026-10-02)

GitHub base: `erauma-ko` at
`6cee5523f758e48cf6c2901cbfbdf684896d5585`.
This is one bounded reuse/classification batch, not a fresh translation or
completion of all Timon/Kojo work.

2.21 source references:
- `sources/eraumak_kr_2.21/game/ere/event/edu/edu-0.js`
  - `god_coin(me)`, `breakfast(...)`, `wind_welcome(me)`
- `sources/eraumak_kr_2.21/game/ere/event/daily/daily-0.js`
  - `out_shopping(hook)`, its `my_marks.kamen_rider` event branch

Additional current 3.113 scene overrides: **4**.
Reused existing Korean string literals: **34**, including **4 event titles**.

| Scene | Existing Korean reuse | Current Japanese kept |
|---|---|---|
| `god_coin` | All 9 output calls and title; dice branches and goddess color cases directly match the old method | None |
| `breakfast` | 3 of 4 output calls and title (5 string literals) | Entire first arrival/breakfast output call |
| `wind_welcome` | All narrative/choice text and title (4 string literals) | None |
| `kamen_rider` | 14 of 15 output/choice calls and title (15 string literals) | Entire changing-room invitation output call |

No new Korean prose was synthesized. The current 3.113 signatures, arrays,
dynamic expression positions/order, return values, branches, color options,
`race_week` guard and `no_ero_item` disabled flag are preserved.
Old effect calculations, character selection and event scheduling are not copied.

Precisely classified partial fallback:
- `breakfast`: the old arrival sentence starts with the player name and
  contains two Korean literal fragments. The current call adds a leading
  literal before the name and distributes the arrival/breakfast meaning over
  three fragments. Reusing it would require newly composed/split Korean text,
  so all three current Japanese fragments remain together.
- `kamen_rider`: the old changing-room invitation inserts the player name
  three times; the current call inserts it once. The current two Japanese
  literal fragments remain together rather than joining old Korean fragments.

Validation: **PASS**.
- JS syntax and current AST structure/control flow/dynamic expressions checked.
- Every replacement literal exists verbatim in its identified 2.21 method.
- Previous 13 overrides and GENERATED regions are unchanged.
- All 38 exported scene keys remain; 21 untouched scenes still use the same
  Japanese fallback functions.
- 15 isolated mocked-output branch cases preserve calls, choices, disabled
  flags, dynamic values and return results.
- 109 checks in total. These are scoped static/isolated module checks, not
  whole-game or human-play validation.

Per-string old/current locations, source hashes, partial fallback counts and
validation summary: [REUSE_RANDOM_BATCH_06.json](REUSE_RANDOM_BATCH_06.json).

Current random-module status after this batch:
- Current Japanese scenes: **38**.
- Korean scene overrides: **17** (includes partial overrides; not 17 fully
  translated scenes).
- Entire scene fallback: **21**.
- Previously reviewed unmatched scenes retain their existing conclusions;
  no broad re-investigation was performed.
- Six scenes still awaiting this workflow's first detailed source match:
  `ts_sex`, `ts_shower`, `sr_strange_lunch`, `we_are_one`,
  `sakura_regret`, `justice`.

Next bounded investigation: `sr_strange_lunch` and `sakura_regret`,
by their matching 2.21 character/event handlers. Leave uncertain segments on
Japanese fallback. Do not begin a general i18n retranslation or Kojo bulk pass.

### `others/random.js` — seventh matched batch (2026-10-02)

Scope: `sr_strange_lunch` and `sakura_regret` only. Existing 2.21 Korean
text was reused only where the current 3.113 scene directly matched.

#### `sr_strange_lunch`
- Direct source: `sources/eraumak_kr_2.21/game/ere/event/daily/daily-common.js`,
  lines 611–676.
- Both versions retain `@author KUN`, the rooftop/lunch scene, the same
  dialogue order, two choices and the same two result branches.
- Reused **24 Korean string literals**, including title
  `묘한 점심 식사`.
- Current 3.113 parameters, return array and control flow are preserved.
- No old gameplay side effects (`우마뾰이Z`, lust change, quick sex entry)
  were copied into the i18n module.

#### `sakura_regret`
No sufficiently reliable direct 2.21 scene match was confirmed.
Checked:
- `event/love/snippets/punish-rejecting-love.js`
- `event/love/love-common.js`
- `event/daily/daily-common.js`
- the 2.21 edu/daily/love character-event tree for the current Sakura-family
  character IDs (41 / 69 / 76 / 126); those current character-specific event
  directories are not present in the 2.21 tree.

Therefore `sakura_regret` remains on the current Japanese fallback. No Korean
prose was synthesized.

Validation: **PASS**.
- `random.js` JS syntax: OK.
- Every Korean literal used by the new `sr_strange_lunch` override exists
  verbatim in the identified 2.21 source.
- Current random scenes: **38**.
- Korean overrides: **18**.
- Entire-scene fallbacks: **20**.

Detailed machine-readable record:
[REUSE_RANDOM_BATCH_07.json](REUSE_RANDOM_BATCH_07.json).

Remaining scenes never given a first detailed source match by this workflow:
`ts_sex`, `ts_shower`, `we_are_one`, `justice`.

Next bounded investigation: `ts_sex` and `ts_shower`.

### `others/random.js` — eighth matched batch (2026-10-02)

Scope: `ts_sex` and `ts_shower` only. Existing 2.21 Korean text was reused
only where the current 3.113 scene directly matched. No fresh Korean prose was
written.

#### `ts_sex`
- Direct source: `sources/eraumak_kr_2.21/game/ere/event/edu/edu-common.js`,
  lines 693–715.
- Same author (`雞雞`), same post-training arousal scene, same two choices
  and same result values.
- Existing Korean title `트레이닝 후 성욕 고조` and all compatible Korean
  literals were reused.
- Current 3.113 function signature and return-array structure are preserved.

#### `ts_shower`
- Direct source: `sources/eraumak_kr_2.21/game/ere/event/edu/edu-common.js`,
  lines 761–815.
- Same author (`幽白書`), same shower-room encounter, same choices and
  consent/no-consent branches.
- All directly compatible 2.21 Korean literals were reused, including title
  `샤워실 안에서`.
- One current 3.113 literal remains on Japanese fallback:
  `互いに背中を流し合った。`
- Reason: the 2.21 equivalent is coupled to the dynamic
  `me.get_couple_title()` expression and only supplies the fragment
  `은 서로 등을 밀어 주었다.`. Reusing it verbatim would change the current
  3.113 expression structure, so it was not rewritten.

Validation: **PASS**.
- `random.js` JS syntax: OK.
- **42** Hangul-containing literals across the two new overrides were checked
  against the identified 2.21 source; missing source literals: **0**.
- Current random scenes: **38**.
- Korean overrides: **20**.
- Entire-scene fallbacks: **18**.
- No new Korean prose was synthesized.

Detailed machine-readable record:
[REUSE_RANDOM_BATCH_08.json](REUSE_RANDOM_BATCH_08.json).

Remaining scenes never given a first detailed source match by this workflow:
`we_are_one`, `justice`.

Next bounded investigation: `we_are_one` and `justice`. Leave uncertain
segments on Japanese fallback. Do not begin a general i18n retranslation or
Kojo bulk pass.

### `others/random.js` — ninth/final classification batch (2026-10-02)

Scope: `we_are_one` and `justice` only. No fresh Korean prose was written.

#### `we_are_one`
No sufficiently reliable direct 2.21 scene match was confirmed.
Checked the generic 2.21 daily/edu/love common sources and their common/snippet
areas. The only `Mr.E.` marker found in the checked generic daily source belongs
to an unrelated shrine-lottery branch; no matching reward/bride/sofa/towel scene
was found. The scene remains on the current Japanese fallback.

#### `justice`
No sufficiently reliable direct 2.21 scene match was confirmed.
The checked generic daily/edu/love common sources and daily/love snippet areas
do not contain the current chased-trainer / Tazuna-threat / 100-UmaCoin scene.
The basement text found in 2.21 `daily-common.js` is the unrelated basement
ending, so it was not reused. The scene remains on the current Japanese fallback.

Validation: **PASS**.
- `random.js` JS syntax: ok.
- Current random scenes: **38**.
- Korean overrides: **20**.
- Entire-scene fallbacks: **18**.
- All 38 current random scenes have now received a reuse/classification pass.
- No new Korean prose was synthesized in this batch.

Detailed machine-readable record:
[REUSE_RANDOM_BATCH_09.json](REUSE_RANDOM_BATCH_09.json).

Remaining scenes awaiting a first detailed source match in `others/random.js`: **none**.

Next bounded investigation: move to the next Timon module that still contains
unclassified Japanese fallback. Do not begin fresh translation or a Kojo bulk pass.

### `others/others.js` — first detailed classification batch (2026-10-02)

Scope: 16 previously pending keys, from the URA award block through the first
premium-draw filter label. Existing 2.21 Korean text was reused only when a
direct current-scene match could be established. No fresh Korean prose was
written.

#### URA award block — 4 keys
Checked:
- `system/sys-next-week.js`
- `page/page-report-race.js`
- `page/race/page-race-result.js`
- the 2.21 `event/others/` tree

The 2.21 year rollover handles salary and year-end bonus, but the checked
sources contain no current-style URA annual award ceremony or the current
trainer/Uma annual-stat display. Therefore:
- `ura_reward`
- `ur_alternative_reporter`
- `get_ur_trainer_reward`
- `get_ur_uma_reward`

remain on Japanese fallback.

#### Repeat-training / dream block — 7 keys
Checked:
- `page/page-inherit.js`
- `page/homepage/office.js`
- `system/global/sys-calc-achievement.js`

EraUmaK 2.21 already has the concept of repeated training, including repeat-
training achievements and office-state handling. However, the current 3.113
Three-Goddesses / dream scene and its selection UI are not present in the
checked 2.21 flow. Therefore the following remain on Japanese fallback:
- `sc_event_name`
- `get_sc_buttons`
- `sc_event_former`
- `sc_limit_template`
- `sc_name_template`
- `sc_name_inherited_template`
- `sc_event_latter`

#### Premium-draw opening block — 5 keys
Checked:
- `page/page-recruit-rand.js`
- `system/flag/sys-get-star-premium-draw.js`

2.21 already stores the premium-draw target and has Korean recruitment UI, but
the current chairman dialogue and the split premium-draw selection/filter UI do
not have a direct matching Korean block. Therefore these remain on Japanese
fallback:
- `star_drew_limited`
- `star_drew_wrong_date`
- `star_drew_intro`
- `star_drew_options`
- `star_drew_filter_template`

Validation: **PASS**.
- `others/others.js` JS syntax: ok.
- Keys detailed-classified in this batch: **16**.
- Newly reused Korean keys: **0**.
- Fresh Korean prose written: **0**.
- `others/others.js` itself was not modified.
- Previously pending keys still awaiting this workflow's first detailed source
  match: **33**.

Detailed machine-readable record:
[REUSE_OTHERS_BATCH_01.json](REUSE_OTHERS_BATCH_01.json).

Next bounded investigation starts with
`star_drew_filter_kojo_template` and continues through the remaining
premium-draw UI before moving to the investment block.

### `others/others.js` — second detailed classification batch (2026-10-02)

Scope: 16 previously pending keys, from `star_drew_filter_kojo_template` through
`sd_f_title_image`. Existing 2.21 Korean text was reused only when a direct
current-scene match could be established. No fresh Korean prose was written.

#### Premium-draw filter UI — 16 keys
Checked:
- `page/page-recruit-rand.js`
- `system/flag/sys-get-star-premium-draw.js`
- the 2.21 `event/rec/`, `daily/`, `edu/`, `love/`, `ero/`, and
  `basement/` trees

EraUmaK 2.21 already has the underlying dedicated-event categories, and its
recruitment screen includes a generic Korean note for characters with dedicated
kojo. However, it does not contain the current 3.113 premium-draw filter screen:
there is no direct Korean block for the category filter buttons, category
descriptions, or the dedicated-training-image filter.

Therefore these remain on Japanese fallback:
- `star_drew_filter_kojo_template`
- `star_drew_filter_image`
- `star_drew_bt_filter_kojo_r`
- `star_drew_bt_filter_kojo_d`
- `star_drew_bt_filter_kojo_ed`
- `star_drew_bt_filter_kojo_l`
- `star_drew_bt_filter_kojo_er`
- `star_drew_bt_filter_kojo_b`
- `star_drew_bt_filter_image`
- `sd_f_title_kojo_r`
- `sd_f_title_kojo_d`
- `sd_f_title_kojo_ed`
- `sd_f_title_kojo_l`
- `sd_f_title_kojo_er`
- `sd_f_title_kojo_b`
- `sd_f_title_image`

Validation: **PASS**.
- `others/others.js` JS syntax: ok.
- Keys detailed-classified in this batch: **16**.
- Newly reused Korean keys: **0**.
- Fresh Korean prose written: **0**.
- `others/others.js` itself was not modified.
- Previously pending keys still awaiting this workflow's first detailed source
  match: **17**.

Detailed machine-readable record:
[REUSE_OTHERS_BATCH_02.json](REUSE_OTHERS_BATCH_02.json).

Next bounded investigation starts with `get_star_drew_selected`, covers the
remaining premium-draw selection/result UI, then continues into the investment
block only while staying inside the established batch size.

### `others/others.js` reuse classification complete

Final batch checked the remaining **17** unresolved keys:

- premium-draw selection/confirmation: 8
- Grand Live next-year header: 1
- investment/redemption UI and dialogue: 8

Safely reused Korean overrides in this final batch: **0**.

No direct 2.21 Korean text matched these current 3.113 strings closely enough for
literal reuse, so all 17 remain on Japanese fallback. No fresh Korean prose was
created.

Classification record:
- `REUSE_OTHERS_BATCH_03.json`

Result:
- all **49** previously missing keys in `others/others.js` have now been classified
  across batches 1–3;
- the six Korean overrides already present in the module remain unchanged;
- **unclassified reuse candidates: 0** for this module.

### `others/god-shop.js` — residual classification complete (2026-10-03)

2.21 source:
- `sources/eraumak_kr_2.21/game/ere/page/page-god-shop.js`

This bounded pass classified all **23** previously pending current 3.113 keys.
No fresh Korean prose was written.

Newly touched keys/functions: **10**
- fully reused from existing 2.21 Korean text: **5**
  - `pray_heal`
  - `common_finish_pray`
  - `common_pray_your_power`
  - `common_pray_peace`
  - `start_with_no_god`
- partially reused, with changed/new fragments left Japanese: **5**
  - `pray_money`
  - `pray_your_power`
  - `pray_over_limit`
  - `common_start_pray`
  - `leave`

Still entirely on Japanese fallback: **13**
- `pray_heal_no_need`
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

These 13 are new/split 3.113 physical-goddess UI, target-selection/healing
flows, or differ in values/dynamic structure from the old monolithic 2.21
god-shop. No sufficiently reliable 1:1 Korean literal mapping was found.

Result:
- current god-shop keys: **35**
- Korean overrides after this pass: **22**
- entirely Japanese fallback keys: **13**
- unclassified reuse candidates: **0**
- inserted Korean literals were checked against the identified 2.21 source
- JS syntax: **PASS**

Detailed record:
[REUSE_GOD_SHOP_RESIDUAL_01.json](REUSE_GOD_SHOP_RESIDUAL_01.json).

