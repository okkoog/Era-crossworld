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

2.21 source:
- `sources/eraumak_kr_2.21/game/ere/page/page-god-shop.js`

A large amount of Korean text exists and the control flow is recognizably
related, but the 3.113 version extracted the text into many i18n functions.
Manual structural matching is still required.

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

- `others/ending.js`
- `others/race.js`
- `others/others.js`
- `others/random.js`
- `guides/base.js`
- `mejiro/cum.js`
- remaining Timon modules not yet wired from `ko-KR/timon/entry.js`

