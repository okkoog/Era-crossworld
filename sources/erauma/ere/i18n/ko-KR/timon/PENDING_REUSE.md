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

2.21 source:
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/mejiro-events.js`
- `sources/eraumak_kr_2.21/game/ere/event/others/mejiro-kindness/cum-shop.js`

Korean text exists, but the current i18n function/property names no longer
match the 2.21 implementation directly. Do not bulk-copy by position.

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

