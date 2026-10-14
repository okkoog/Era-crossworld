# Unmodified upstream Era API subset

Source: https://gitgud.io/umaera/engine/era-electron

Commit: `f77416674ad7370f0b8f20f1a47aa6e27a1dcbc1` (retrieved 2026-09-30).

The five JavaScript files retain upstream bytes and are covered by the supplied GPL-2.0 license. Only the API, variable semantics, constants and utility code are reused. Electron's process/UI startup is not used. `compatibility/game-host.js` implements a separate host.

This is a pinned inspection version, not a verified original submodule commit: the uploaded ZIP contains .gitmodules but not the original gitlink objects. Compatibility with the archived game must be tested.

Other dependencies:

- Jint 4.16.4, BSD-2-Clause, pinned by PackageReference and packages.lock.json. https://github.com/sebastienros/jint
- Acornima version resolved by that lock file; license https://github.com/adams85/acornima
- Upstream kojo-loader commit `a3538cb410d31fa6c5c7827aff01c96021526646` is a build-time compiler fetched separately; it is not vendored here. https://gitgud.io/umaera/engine/kojo-loader
- YAMLJS 0.3.0 is used only during the .kojo build, not during game execution.
- The exact bundled CrossWorld Emuera executable is used for runtime verification. The reference assembly is built from the source commit used by the existing repository test build instructions.
