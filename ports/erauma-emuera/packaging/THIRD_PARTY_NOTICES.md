# Source and license notices

This package executes the archived erauma JavaScript through an Emuera C# plugin and Jint. It does not claim authorship of the original game, Era API, Emuera or third-party libraries. Original license texts and copyright notices are retained; this document does not replace them.

## Original game and Era API

- Game source: `okkoog/Era-crossworld`, `sources/erauma/`, preserved from the supplied `erauma-master.zip`. `game/erauma/LICENSE` is the original GPL version 2 text. `game/erauma/ere/` is copied without rewriting the game. Original prebuilt data is in `game/erauma/build/static.json`; original package metadata is retained in `game/erauma/package.json`.
- Era API source: https://gitgud.io/umaera/engine/era-electron , commit `f77416674ad7370f0b8f20f1a47aa6e27a1dcbc1`. The five reused JavaScript files and GPL-2.0 license are in `game/engine/`. See its `UPSTREAM.md` for the exact scope. This is a pinned inspection commit because the uploaded ZIP does not supply the original submodule gitlink commit.
- kojo generation: https://gitgud.io/umaera/engine/kojo-loader , commit `a3538cb410d31fa6c5c7827aff01c96021526646`, and YAMLJS 0.3.0 (build time only). Generated modules in `game/kojo/` come from the archived original `.kojo` sources included under `game/erauma/ere/`. The compiler and YAMLJS are not runtime dependencies and are not bundled as runtime libraries. The archived game and Era API licenses remain in their source directories.

## Emuera

`Emuera.exe` has the same bytes as the repository's existing `test/ERA_CrossWorld_Runtime_Test_0.4.3/Emuera.NET 1824+v24+EMv18+EEv56.exe`. Its SHA256 is recorded in `package-manifest.json`. Its original author and modification notices are retained in `licenses/Emuera/` with the original Emuera, Emuera.NET, ImageProcessor and LibWebp license files.

The reference assembly used to compile the adapter is built from https://gitlab.com/EvilMask/emuera.em , commit `25c23dc8f425347738783e5ef322561d48c9f155`. A rebuilt executable does not replace the exact bundled executable in this package.

## Managed JavaScript libraries

| Library | Version | License | Source matching the NuGet package |
| --- | --- | --- | --- |
| Jint | 4.16.4 | BSD-2-Clause | https://github.com/sebastienros/jint/tree/884bd0c4ebf7806f70041eae0370ee11a9c138bc |
| Acornima | 1.7.0 | BSD-3-Clause | https://github.com/adams85/acornima/tree/401bd62d8aeb9f7cbe7b6147937a87e0c71747a8 |

The full notices are copied from those exact commits into `licenses/Jint-4.16.4.LICENSE.txt` and `licenses/Acornima-1.7.0.LICENSE.txt`. Original NuGet `.nuspec` metadata is included beside them. The package uses the net10.0 assemblies; `adapter-source/compatibility/packages.lock.json` records versions, dependency relationships and NuGet content hashes.

License retrieval URLs:

- https://raw.githubusercontent.com/sebastienros/jint/884bd0c4ebf7806f70041eae0370ee11a9c138bc/LICENSE.txt
- https://raw.githubusercontent.com/adams85/acornima/401bd62d8aeb9f7cbe7b6147937a87e0c71747a8/LICENSE

## Adapter source and changes

The host loader, managed filesystem bridge, text rendering bridge, asynchronous input connection, CALLSHARP plugin and ERB bootstrap are new integration code from `okkoog/Era-crossworld/ports/erauma-emuera/`. Their corresponding source and build files are included in `adapter-source/`. They are separate from the original game's source and upstream Era API; the integration status and behavior differences are recorded in `docs/`.

The package includes integration source, project files, scripts and their documentation. Regression `.sav` fixtures, local build outputs and verification reports are excluded from this runtime distribution. Reproducing the complete build and regression suite requires the [source repository](https://github.com/okkoog/Era-crossworld) at the commit recorded in `package-manifest.json`, including `ports/erauma-emuera/tests/fixtures/`, and the pinned external sources described in `adapter-source/README.md`.

`package-manifest.json` identifies the repository commit used when packaging and the exact local file hashes. Uncommitted integration changes, when present, are explicitly described as such. This package does not apply a replacement license to original upstream material. Refer to the original texts listed above and the source repository for the licensing of each component.
