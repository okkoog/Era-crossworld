# era말딸 Emuera.NET 호환판 0.3.3

보존된 `sources/erauma`의 JavaScript 게임을 Emuera.NET → CALLSHARP → C# → Jint로 실행한다. 게임 규칙을 ERB로 다시 작성하지 않고 원본 Era API의 데이터·캐릭터·육성·저장 처리를 재사용한다. **게임 실행에는 EraElectron, Node.js, 개발용 SDK가 필요하지 않다.** Windows x64와 .NET 10 Windows Desktop Runtime은 필요하다.

이번 범위는 era말딸 단독 실행이다. CrossWorld 공용 캐릭터·세계 시간·게임 간 이동 및 세이브 공유는 포함하지 않는다. 원본 `sources/erauma`와 기존 `docs/`, `game/`, `dev/`, `test/`는 변경하지 않고 이 디렉터리에 연결 코드와 문서를 분리했다.

실행 기준은 보존된 **EraUma v3.113 (ryuki)**와 공식 **res 20260923**이다. 0.3에서 원본의 24열 배치·버튼·서식·이미지·진행 막대·전체 계열 그래프와 공식 리소스를 연결했다. **0.3.0의 사용자 직접 시험은 실패했다.** 빈 화면 클릭으로 대사가 진행되지 않고 선택할 때 이전 그림·버튼이 겹쳐 남아 레이스 이전에 시험을 중단했다. 0.3.1은 이 두 문제를 수정했고 사용자는 이전보다 부드러워졌다고 보고했지만 레이스 화면 깜빡임이 영상에서 확인됐다. 0.3.2는 화면 교체 중 빈 프레임을 노출하는 갱신 순서를 수정하는 버전이며 새 Paint 자동 검사를 통과했다. 전체 직접 플레이와 실제 음악 청취는 아직 미확인이다. 자동 검증을 직접 플레이 결과로 취급하거나 재작업 전체를 완료로 판정하지 않는다. 세부 상태는 [이식 현황](docs/ERAUMA_PORTING_STATUS.md), [UI·리소스 현황](docs/ERAUMA_UI_STATUS.md)에 있다.

## 0.3.3-ko2 한국어 새 게임 중단 수정

0.3.3-ko1은 사용자의 새 게임 외형 설정 `초기값 사용 [2]`에서 `get_hair_color` 오류로 중단됐다. 한국어 entry를 기본 selector의 초기화 도중 불러와 공통 모듈의 미완성 객체를 보관한 것이 원인이다. 0.3.3-ko2는 언어 목록만 먼저 등록하고 entry는 사용 시점에 생성한다. 번역과 원본 게임 규칙은 그대로이며 Plugin/Compatibility DLL을 다시 빌드했다. 기본·무작위·직접 외형 설정과 재추첨, 새 게임 진입·휴식·저장·새 세션 복원을 포함한 203개 검사, 실제 실행기 36개 검사와 화면 갱신 9전환·기존 UI 21개 검사를 통과했다. [수정 근거](docs/evidence/0.3.3-ko2/README.md)에 ko1 실패 대조와 수정판 결과를 구별해 기록한다.

## 0.3.3-ko1 한국어 번역 재사용팩 — 과거 버전

사용자가 합격으로 확인한 0.3.3 실행기와 DLL을 그대로 사용하고, `erauma-ko`의 `9c1b98fb` 한국어 소스 108개와 생성 대사 모듈 31개를 선택적으로 포함한다. 이번 랜덤 이벤트 4개 장면의 재사용 문구 34개도 포함하며 미번역 부분은 일본어 fallback을 유지한다. 새 실행판에서 동의 `[1]` → `语言/Language` `[7]` → `한국어` `[5]`로 선택하면 재시작 후에도 유지된다. [한국어팩 안내](docs/ERAUMA_KOREAN_PACK.md)에 출처·저장 복사·재현·검증 절차를 기록한다. 기존 0.3.3 실행 폴더와 ZIP은 보존한다.

## 0.3.3 레이스 FPS 개선 — 갱신 비용 비교 PASS

기록일: 2026-10-02. 사용자는 **0.3.2에서 깜빡임 수정은 성공했지만 FPS가 낮아졌다**고 확인했고 FPS 개선을 승인했다. 0.3.3은 완성 화면을 한 번 출력하도록 갱신 비용을 줄이는 버전이다. 게임 규칙과 저장 버전 숫자 `3`은 유지한다.

`NativeFrameUpdate.ClearDisplay`는 고정 실행기의 화면 자료 리셋을 그대로 수행하고 마지막의 강제 `window.Refresh`만 생략한다. 행·여백이 완성되면 한 번 commit한다. 정상 경로에서는 이전 canvas snapshot을 만들지 않으며 paint가 밀린 경우에는 기존 bitmap gate를 fallback으로 사용한다. sprite 128슬롯 재사용·현재/보존 행과 배경 pin·삭제된 handle 검사, 텍스트 크기·font 캐시, 빈 cell의 geometry를 유지한 불필요한 div 생략과 같은 `buttonEpoch`의 중복 `__redraw` 생략도 적용한다. 대기 시간은 원본 다음 deadline까지의 남은 시간을 사용하고 양수 대기는 최소 1ms로 유지한다.

같은 원본 레이스의 30개 표본·8회 warmup에서 갱신 시간 중앙값은 **196.78ms → 48.93ms(4.02배 개선)**, p95는 225.87ms → 58.85ms로 줄었다. 갱신 객체 생성 시간은 113.85ms → 0.0216ms다. 비교 보고서는 `outputs/race-performance-0.3.3-comparison.json`, 대조·후보 보고서는 `outputs/frame-paint-725910d4/summary.json`과 `outputs/frame-paint-b06e86dd/summary.json`이다.

별도 4배속 원본 레이스의 숨긴 시험 창에서는 3.37 → 8.74 commits/s를 관찰했다. 이 측정은 이전 50프레임·이번 38프레임으로 표본 수가 다르며 이번 정상 구간 프레임 간격 중앙값은 110.66ms다. **이 수치는 실제 사용자 FPS나 60fps 달성을 뜻하지 않는다.** 남은 HTML parse 15.84ms·native commit 29.01ms와 입력 대기 진입 시 추가 Paint가 있으며 레이스 프레임 보간은 미구현이다.

backlog 2개를 포함한 총 9회 Paint 전환이 중간 그림 0·handler 2→2·후속 새로고침 3회 복원으로 PASS했다(`outputs/frame-paint-0719d439`). 일반 7회는 프레임당 Paint 1회, backlog-full은 1회·backlog-partial은 2회다. 타이머 22개·API 21개·기본 10개도 PASS다(`outputs/adaptive-timer-1790897678741`). 이미지 캐시 21개는 누적 이미지 720개·128슬롯 교체·native unload·삭제된 sprite·배경 크기 변경을 통과했다. 입력 출력 4프레임의 미관리 행은 `[0,0,0,0]`으로 PASS했고(`outputs/input-echo-679f186c`), 일반 게임 입력 루프 7단계도 실제 100ms callback 2회·타이머 polling 3회로 PASS했다(`outputs/continue-input-66b6a031/runtime/continue-input.json`). 원본 canvas 23개는 전체 갱신 26회·부분 27회·205행 보존·경고 0으로 PASS했다(`artifacts/runtime-UiScreens-9fcdc744`). 배포 Compatibility DLL과 같은 SHA의 읽기 복사본으로 호스트 6모드·130검사가 PASS했고(`outputs/host-regression-0.3.3-1790905951267/host-regression-summary.json`), 실제 실행기 7단계도 PASS다(`outputs/native-regression-0.3.3-54a599ed`). 같은 배포 구성의 공백 경로 이동 검사에서 원본 23화면·레이스 20회 갱신도 PASS했으며 전체 사람 직접 플레이·실제 음악 청취는 미확인이다. 검토용 결과는 `docs/evidence/0.3.3/`에 보존한다. 아래 0.3.2 결과는 해당 버전의 역사적 근거로 구별한다.

## 0.3.2 레이스 화면 갱신 수정의 역사적 근거

사용자의 0.3.1 영상은 60fps·310프레임·5.1667초다. 화면 전체가 주기적으로 사라지는 구간 45회, 빈 화면 114프레임(36.8%)을 확인했다. 각 구간은 약 17–67ms이며 이전 그림이 계속 겹쳐 남는 현상과는 다른 화면 갱신 결함이다.

실행기의 화면은 이미 double buffering을 사용한다. `api.ClearDisplay` (`EmueraConsole.ClearDisplay`)가 모든 행과 위쪽 여백을 다시 출력하기 전에 강제 paint를 수행해 빈 canvas를 노출한 것이 원인이다. 0.3.2의 `NativeFrameUpdate`는 엔진의 `console.SetRedraw(0)` 플래그와 managed `PictureBox.Paint` 처리를 함께 사용해 행 삭제·출력·여백 조정 동안 이전 완성 bitmap을 유지한다. 갱신을 마친 뒤 handler와 엔진 갱신 상태를 복원하고 완성된 프레임을 한 번 강제 출력한다. 일반 버튼 처리와 스크롤은 이 갱신 묶음 밖에서 기존 native 경로로 처리한다.

`Test-FramePaint.ps1`은 정확한 배포 실행기의 Paint callback과 native/수정된 `PictureBox.OnPaint` delegate 연결을 시험 bitmap에 기록한다. 0.3.1 대조는 7회 전환에서 중간 그림 165회로 예상 FAIL했고(`outputs/frame-paint-6b0c25c1/summary.json`), 수정판은 전체·부분·추가 출력과 표시 지연을 포함한 같은 7회 전환에서 중간 그림 0회로 PASS했다(`outputs/frame-paint-6134aec5/summary.json`). 모든 최종 그림이 바뀌고 타이머가 진행됐으며 handler 수 2→2(원래 native+시험 observer), 이후 새로고침 3회의 정상 처리를 확인했다. PNG 기록이 callback을 늦추므로 165회는 실제 화면 fps나 사용자 영상의 빈 프레임 수가 아니다. 데스크톱 캡처·OS 입력·사람의 직접 검증도 아니다.

원본 레이스의 연속 20회 갱신도 중간 그림 0회·모든 최종 그림 변경·native Paint 40회·handler 2→2·이후 새로고침 3회 복원으로 PASS했다(`outputs/frame-paint-9860cf1a/summary.json`). 이 경로의 500ms 가상 시간 전진은 격리한 fixture 시험에만 사용한다. 실제 실행기 7단계의 타이머 검사는 실제 경과 시간으로 PASS했다.

0.3.2 호스트는 기본 10개·API 21개·저장 10개·플레이 46개·UI 21개를 통과했다. 실제 입력 출력 4프레임의 미관리 행 0, 일반 게임 입력 루프 7단계와 타이머 tick 1회, 실제 원본 canvas 23개(전체 갱신 26회·부분 27회·205행 보존·경고 0), 실제 실행기 7단계 회귀도 PASS다. [0.3.2 검증 근거](docs/evidence/0.3.2/README.md)에 대조·수정·원본 레이스 결과를 모았다. 같은 배포 구성의 공백 경로 이동 검사에서 원본 화면 23개와 레이스 연속 갱신 20회가 PASS했다. ZIP의 개별 파일 해시는 `package-manifest.json`과 생성 검증 보고서로 확인한다. 레이스 → 저장 → 완전 종료 → 재실행 → 로드 → 후속 행동의 사람 직접 검증과 실제 음악 청취는 별도로 남아 있다.

## 0.3.1 입력·화면 수정의 역사적 근거

선택지가 없는 대사 진행은 `WAIT`/`TWAIT`로 분리해 빈 화면 클릭과 Enter를 받는다. 번호 선택·자유 문자열·입력 규칙이 있는 대기·현재 URL은 `INPUTS`/`TINPUTS`를 유지한다. 화면을 갱신하기 전에 실행기가 입력값을 출력한 줄을 제거해 기존 그림·버튼이 겹쳐 남는 문제를 수정했다. 원본 게임의 입력 표시 설정은 유지한다.

원본 모집 화면에서 실제 `INPUTS`를 통과하는 재현 검사는 수정 전 미관리 줄이 `[0,1,2,3]`으로 늘고, 수정 후 `[0,0,0,0]`을 유지함을 확인했다. 입력 출력은 양쪽 모두 `[1,1,1]`줄이다. 21개 호스트 UI 회귀와 `Game.ERB` 입력 루프의 관리형 엔진 검사도 PASS했다. 수정 전 빈 클릭이 막히는 대조 검사, 수정 후 `WAIT`·시간 초과를 거친 `TWAIT`의 빈 클릭, 번호·문자열·타이머 선택과 URL의 값 입력 유지를 검사했다. 이는 시험 프로세스 내부의 입력 처리 검사이며 사람이 클릭하거나 OS 입력을 보내는 시험이 아니다. 0.3.0의 자동 화면 검사는 실제 입력 출력을 통과하지 않아 이 결함을 놓쳤으며 아래 결과는 해당 버전의 역사적 근거다.

## 실행

실행 패키지는 ZIP 전체를 쓰기 가능한 폴더에 압축 해제한 뒤 `Emuera.exe`를 실행한다. 게임 원본·원본 Era API·사전 생성한 대사 모듈을 패키지에 포함하고 `game-paths.json`은 내부 상대 경로를 사용하므로 폴더 전체를 이동해도 된다. 실행기나 DLL만 복사하면 게임 소스를 찾을 수 없다. 포함 목록·파일 SHA256은 `package-manifest.json`, 라이선스·출처는 `THIRD_PARTY_NOTICES.md`에 있다.

숫자나 문자열을 입력하고 Enter를 누르거나 표시된 번호 버튼을 클릭한다. 선택지와 링크가 없는 문장 대기에서는 빈 화면을 클릭하거나 Enter를 누른다. 밑줄 링크는 기본 브라우저에 연결된다. 저장은 실행 폴더의 `sav-game/sav/`에 생성되며 패키지에는 사용자 세이브를 포함하지 않는다. 언어는 원본 설정을 따른다. 추가 언어팩은 `game/language-packs/<locale>/entry.js`에서 읽는다. `0.3.3-ko1`은 검토된 한국어 재사용팩을 포함하며 미번역 부분은 일본어로 남는다. 구 v2.210의 게임 로직은 적용하지 않는다.

텍스트·선택지·상태·계산과 이미지·음악 선택은 원본 게임으로 진행한다. 공식 파일은 `game/res/`에 있으며 파일이 없으면 텍스트 모드로 진행한다. PNG·crop·레이어와 실제 테이오 아이콘을 엔진 화면에서 확인했다. GIF는 정지 프레임이고 배경·오버레이의 position·fit은 부분 구현이다. WebP는 엔진 decoder 경로만 있으며 실제 출력은 미확인, SVG·오디오 fade·CSS hover·그래프 mouseover/주석은 미구현이다. 음악은 실행기의 Windows Media Player Sound 연결을 사용하며 재생 위치·일시정지·재개·반복 경계·종료 정리와 재생을 다시 시작하지 않는 실행 중 음량 변경을 자동 검사했다. 이 시험은 음량 0으로 수행해 실제 청취는 미확인이다. 일반 게임의 `era.delay()`와 `setTimeout()`은 실제 경과 시간을 유지하며 레이스 재생을 단계별로 갱신한다. 빠른 호스트 회귀·화면 시험에서만 표시 지연 생략 또는 가상 시간 전진을 사용한다. 원본과의 차이는 [알려진 제한](docs/ERAUMA_KNOWN_ISSUES.md)에 기록했다.

## 공식 리소스 설치

리소스 포함 패키지는 별도 다운로드가 필요 없다. 소스에서 빌드하거나 자원이 없는 패키지에 추가할 때는 공식 **20260923** ZIP을 사용한다. [공식 다운로드 안내](https://umaera.gitgud.site/data/uma-resource/full.html)와 [공식 저장소](https://gitgud.io/umaera/data/uma-resource)가 출처다. 저장소 루트에서 다음 중 하나를 실행한다.

```powershell
# 공식 저장소의 LFS 포함 ZIP 다운로드와 설치
./ports/erauma-emuera/tools/Install-Resources.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources -Download

# 이미 내려받은 공식 ZIP 설치
./ports/erauma-emuera/tools/Install-Resources.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources -ArchivePath 'C:\Downloads\uma-resource-20260923.zip'
```

설치기는 지정한 루트 아래 `res/`만 채우고 원본 소스·사용자 저장을 설치 대상으로 삼지 않는다. ZIP 경로 탈출·중복·링크를 거부하고 단일 파일 100 MB를 넘는 항목을 제외한다. 설치 결과와 ZIP SHA256은 `resource-install.json`에 남긴다. 확인한 ZIP은 431,787,981 bytes, SHA256 `c21debd728dc934c637c93af4ef6b7fa7e0a32177e134b151a2a47036405642b`이며 이미지 2,786/2,786·오디오 22/22·CSV 66개, 누락·경고 0개다. 해제 파일은 2,859개·435,577,015 bytes다.

## 구성

- `compatibility/`: 관리형 JS 실행, 원본 CommonJS 로더, 입력 Promise, 타이머, 파일·화면 연결
- `plugin/`: Emuera `EraUmaBridge` CALLSHARP 연결
- `plugin/UiRenderer.cs`, `NativeImages.cs`, `NativeCharts.cs`, `NativeAudio.cs`: 원본 UI·그림·그래프·음향 연결
- `bootstrap/`: 일반 게임 실행 및 입력·플레이·재시작 시험 ERB
- `third_party/ere/`: 출처·라이선스와 원본 바이트를 보존한 Era API 5개 파일
- `tools/`: API 조사, 원본 kojo 컴파일러 연결, 빌드·실행 검증·패키지 생성
- `tests/`, `docs/`: 호스트 시험과 의존성·API·검증 현황·제한 문서

## 소스에서 빌드

Windows x64, PowerShell 7, .NET 10 SDK, Git가 필요하다. Node.js는 `.kojo` 사전 컴파일 때만 사용한다. 저장소 루트에서 다음을 실행한다. 외부 소스는 조사·검증한 커밋으로 고정한다.

```powershell
git clone https://gitlab.com/EvilMask/emuera.em.git ../emuera-source
git -C ../emuera-source checkout 25c23dc8f425347738783e5ef322561d48c9f155
git clone https://gitgud.io/umaera/engine/kojo-loader ../kojo-loader
git -C ../kojo-loader checkout a3538cb410d31fa6c5c7827aff01c96021526646
Invoke-WebRequest https://registry.npmjs.org/yamljs/-/yamljs-0.3.0.tgz -OutFile ../yamljs.tgz
# YAMLJS archive SHA256: 74F5F545D585643078AFB894CFCB288A87924D880035D10FA73314A21E12D2BA
New-Item -ItemType Directory -Force ../yamljs
tar -xf ../yamljs.tgz -C ../yamljs
node ports/erauma-emuera/tools/build-kojo.cjs sources/erauma/ere ports/erauma-emuera/artifacts/kojo ../kojo-loader/src/parse-kojo.js ../yamljs/package/lib/Yaml.js
./ports/erauma-emuera/tools/Build.ps1 -EngineSource ../emuera-source -Mode Game
./ports/erauma-emuera/tools/Install-Resources.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources -Download
./ports/erauma-emuera/tools/Package.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources
```

개발용 실행 폴더는 `artifacts/runtime-Game/`이며 이 빌드의 `game-paths.json`은 로컬 절대 경로를 참조한다. 개발용 폴더만 이동하려면 경로를 수정해야 한다. `Package.ps1`은 게임 소스·생성 kojo·설치된 `game/res/`와 상대 경로를 사용하는 별도 ZIP을 `outputs/`에 생성한다. 기본 자원 캐시가 있으면 자동으로 포함하며 `-ResourceRoot`로 위치를 지정할 수 있다. 포함 여부는 manifest의 `resourcePackIncluded`, 출처는 `resource-provenance.json`, 개별 파일 해시는 `package-manifest.json`으로 확인한다. 기존 출력 파일을 덮어쓰지 않는다.

## 검증 재현

```powershell
dotnet run --project ports/erauma-emuera/tests -c Release
dotnet run --project ports/erauma-emuera/tests -c Release -- --api sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --save sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --play sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --ui sources/erauma ports/erauma-emuera/third_party/ere ports/erauma-emuera/artifacts/resources
$scenarioSaveRoot=Join-Path $env:TEMP ('erauma-scenario-'+[guid]::NewGuid().ToString('N'))
dotnet run --project ports/erauma-emuera/tests -c Release -- --scenario sources/erauma ports/erauma-emuera/third_party/ere ports/erauma-emuera/artifacts/kojo ports/erauma-emuera/tests/fixtures $scenarioSaveRoot
dotnet run --project ports/erauma-emuera/tests -c Release -- --scenario sources/erauma ports/erauma-emuera/third_party/ere ports/erauma-emuera/artifacts/kojo ports/erauma-emuera/tests/fixtures $scenarioSaveRoot restore
./ports/erauma-emuera/tools/Build.ps1 -EngineSource ../emuera-source -Mode PlayAutomatic
./ports/erauma-emuera/tools/Test-Runtime.ps1
./ports/erauma-emuera/tools/Test-NativeUi.ps1 -EngineSource ../emuera-source
./ports/erauma-emuera/tools/Test-GameUi.ps1
./ports/erauma-emuera/tools/Test-GameUi.ps1 -NoResources
./ports/erauma-emuera/tools/Test-InputEcho.ps1
./ports/erauma-emuera/tools/Test-ContinueInput.ps1
# 0.3.2 Paint callback 검사: 직접 플레이와 구별
./ports/erauma-emuera/tools/Test-FramePaint.ps1
./ports/erauma-emuera/tools/Test-FramePaint.ps1 -OriginalRace
```

호스트 시험은 숫자·문자열·객체, 입력 중단과 재개, 화면 교체·부분 삭제, 선택지 유효성, 입력 교체, 타이머, 진단 메시지, 원본 JSON/gzip 저장을 검사한다. `--scenario`는 원본 메뉴에서 만든 시험 저장을 격리한 폴더에 복사하고 훈련·레이스·저장·로드 메뉴와 이후 행동을 재현한다. 시험 안에서만 난수를 고정하며 일반 게임의 난수는 유지한다.

0.3.0에서 확인된 호스트 결과는 기본 10개·API 21개·저장 10개·플레이 46개·UI 16개, 시나리오 20개·별도 프로세스 복원 5개 PASS다. `--ui`는 공식 자원 매핑·자원 없는 fallback·독립 언어팩 선택·원본 열 geometry·입력 세대·전체 그래프 점 전달·실제 표시 지연 타이머를 검사한다. 시험용 `ko-KR` 확장은 격리한 임시 폴더에만 만들며 배포 번역팩으로 포함하지 않는다. `Test-NativeUi.ps1`은 실제 실행기의 renderer·hit ID·진행 막대 픽셀과 음량 0에서의 오디오 생명주기·재시작 없는 음량 변경을 검사한다. 0.3.0의 native 결과는 `outputs/native-ui-audio-0027b902/native-ui-summary.json`에 기록됐다.

`Test-GameUi.ps1`은 격리한 시험 저장으로 원본 메뉴를 실행하고 실제 엔진 canvas·layout을 기록한다. 다음 수치는 0.3.0 결과이며 실제 입력 출력을 우회한 화면 검사다. 자원 있음·없음 양쪽에서 새 게임과 레이스 재생 프레임을 포함한 23개 화면을 통과했다. `runtime-UiScreens-fce0e490`은 전체 갱신 27회·부분 갱신 27회·205행 보존, `runtime-UiScreens-9717a264`는 전체 갱신 26회·부분 갱신 27회·205행 보존이다. 공식 리소스 URL의 shell 브라우저 실행도 자동 검사에서 PASS이며 사람이 URL 버튼을 직접 클릭해 여는 시험은 미확인이다. 이 스크립트들의 자동 실행과 가상 시간 전진은 사람이 직접 플레이한 결과가 아니다. 코드 동결 후 같은 플러그인 DLL로 최종 호스트·실제 Emuera 7단계 회귀도 PASS했다. 공식 자원 포함 ZIP을 공백이 있는 별도 폴더에 풀어 7단계 회귀·23개 화면을 다시 통과했다. ZIP 전체 파일 해시·상대 경로·사용자 저장 미포함도 확인했다. 요약과 화면 예시는 [0.3 검증 근거](docs/evidence/0.3/README.md)에 있다.

실제 Emuera 시험 7단계는 동일한 CALLSHARP 경로로 원본 새 게임·행동·훈련·레이스·저장·프로세스 재시작 후 전체 상태 복원·정상 종료를 검사한다. 훈련·레이스 시나리오는 실제 플러그인 안에서 원본 메뉴를 자동 실행하며 모든 중간 화면을 사람이 클릭하는 시험은 아니다. 자동 시험은 별도 실행 폴더와 저장을 사용한다. 기본 재시작 시험은 슬롯 6, 플레이 시나리오는 슬롯 5·6을 사용하며 사용자 세이브를 시험에 사용하지 않는다. 무인 타이머 시험은 `AWAIT`/`tick`으로 실제 경과 시간과 늦은 선택지 추가를 확인한다. 일반 게임의 `TINPUTS` 타이머 입력을 직접 조작한 시험과는 구별한다.

`Build.ps1 -Mode Interactive`는 직접 숫자·문자열·버튼 입력 시험을 만든다. 2026-09-30 사용자가 `5` → `Trainer` → `Finish`를 직접 입력해 PASS를 확인했고 실행 결과 파일에도 정상 완료가 남았다. 이 0.2 입력 시험은 새 UI의 전체 플레이 근거가 아니다. `Automatic`은 계산 연결 시험, `GameAutomatic`은 원본 제목 화면 시험이다. 실행 중인 해당 시험 창은 같은 폴더를 다시 빌드하기 전에 닫는다.

2차 의뢰의 직접 검증 경로는 **타이틀 → 새 게임 → 캐릭터 선택 → 육성 시작 → 메인 → 트레이닝 → 캐릭터 정보 → 외출/상점 → 레이스 등록 → 레이스 → 결과 → 저장 → 완전 종료 → 재실행 → 로드 → 후속 행동**이다. 자동 실행·엔진 canvas PNG 확인과 이 직접 플레이 결과를 구별해 [재작업 기준](docs/ERAUMA_SECOND_WORK_ORDER.md)에 기록한다.

원본 게임·Era API 및 외부 라이브러리의 라이선스는 각 원문을 유지한다. 자세한 고정 버전·출처는 [엔진 의존성](docs/ERAUMA_ENGINE_DEPENDENCIES.md)과 `third_party/ere/UPSTREAM.md`를 참조한다.
