# era말딸 Emuera.NET 호환판 0.3.1

보존된 `sources/erauma`의 JavaScript 게임을 Emuera.NET → CALLSHARP → C# → Jint로 실행한다. 게임 규칙을 ERB로 다시 작성하지 않고 원본 Era API의 데이터·캐릭터·육성·저장 처리를 재사용한다. **게임 실행에는 EraElectron, Node.js, 개발용 SDK가 필요하지 않다.** Windows x64와 .NET 10 Windows Desktop Runtime은 필요하다.

이번 범위는 era말딸 단독 실행이다. CrossWorld 공용 캐릭터·세계 시간·게임 간 이동 및 세이브 공유는 포함하지 않는다. 원본 `sources/erauma`와 기존 `docs/`, `game/`, `dev/`, `test/`는 변경하지 않고 이 디렉터리에 연결 코드와 문서를 분리했다.

실행 기준은 보존된 **EraUma v3.113 (ryuki)**와 공식 **res 20260923**이다. 0.3에서 원본의 24열 배치·버튼·서식·이미지·진행 막대·전체 계열 그래프와 공식 리소스를 연결했다. **0.3.0의 사용자 직접 시험은 실패했다.** 빈 화면 클릭으로 대사가 진행되지 않고 선택할 때 이전 그림·버튼이 겹쳐 남아 레이스 이전에 시험을 중단했다. 0.3.1은 이 두 문제의 수정판이며, 수정 후 전체 직접 플레이는 아직 미확인이다. 자동 검증을 직접 플레이 결과로 취급하거나 재작업 전체를 완료로 판정하지 않는다. 세부 상태는 [이식 현황](docs/ERAUMA_PORTING_STATUS.md), [UI·리소스 현황](docs/ERAUMA_UI_STATUS.md)에 있다.

## 0.3.1 입력·화면 수정

선택지가 없는 대사 진행은 `WAIT`/`TWAIT`로 분리해 빈 화면 클릭과 Enter를 받는다. 번호 선택·자유 문자열·입력 규칙이 있는 대기·현재 URL은 `INPUTS`/`TINPUTS`를 유지한다. 화면을 갱신하기 전에 실행기가 입력값을 출력한 줄을 제거해 기존 그림·버튼이 겹쳐 남는 문제를 수정했다. 원본 게임의 입력 표시 설정은 유지한다.

원본 모집 화면에서 실제 `INPUTS`를 통과하는 재현 검사는 수정 전 미관리 줄이 `[0,1,2,3]`으로 늘고, 수정 후 `[0,0,0,0]`을 유지함을 확인했다. 입력 출력은 양쪽 모두 `[1,1,1]`줄이다. 21개 호스트 UI 회귀와 `Game.ERB` 입력 루프의 관리형 엔진 검사도 PASS했다. 수정 전 빈 클릭이 막히는 대조 검사, 수정 후 `WAIT`·시간 초과를 거친 `TWAIT`의 빈 클릭, 번호·문자열·타이머 선택과 URL의 값 입력 유지를 검사했다. 이는 시험 프로세스 내부의 입력 처리 검사이며 사람이 클릭하거나 OS 입력을 보내는 시험이 아니다. 0.3.0의 자동 화면 검사는 실제 입력 출력을 통과하지 않아 이 결함을 놓쳤으며 아래 결과는 해당 버전의 역사적 근거다.

## 실행

실행 패키지는 ZIP 전체를 쓰기 가능한 폴더에 압축 해제한 뒤 `Emuera.exe`를 실행한다. 게임 원본·원본 Era API·사전 생성한 대사 모듈을 패키지에 포함하고 `game-paths.json`은 내부 상대 경로를 사용하므로 폴더 전체를 이동해도 된다. 실행기나 DLL만 복사하면 게임 소스를 찾을 수 없다. 포함 목록·파일 SHA256은 `package-manifest.json`, 라이선스·출처는 `THIRD_PARTY_NOTICES.md`에 있다.

숫자나 문자열을 입력하고 Enter를 누르거나 표시된 번호 버튼을 클릭한다. 선택지와 링크가 없는 문장 대기에서는 빈 화면을 클릭하거나 Enter를 누른다. 밑줄 링크는 기본 브라우저에 연결된다. 저장은 실행 폴더의 `sav-game/sav/`에 생성되며 패키지에는 사용자 세이브를 포함하지 않는다. 언어는 원본 설정을 따른다. 추가 언어팩은 `game/language-packs/<locale>/entry.js`에서 읽는다. 신규 `ko-KR` 완역은 제공하지 않으며 구 v2.210 한국어판은 참고 자료로만 취급한다.

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
```

호스트 시험은 숫자·문자열·객체, 입력 중단과 재개, 화면 교체·부분 삭제, 선택지 유효성, 입력 교체, 타이머, 진단 메시지, 원본 JSON/gzip 저장을 검사한다. `--scenario`는 원본 메뉴에서 만든 시험 저장을 격리한 폴더에 복사하고 훈련·레이스·저장·로드 메뉴와 이후 행동을 재현한다. 시험 안에서만 난수를 고정하며 일반 게임의 난수는 유지한다.

0.3.0에서 확인된 호스트 결과는 기본 10개·API 21개·저장 10개·플레이 46개·UI 16개, 시나리오 20개·별도 프로세스 복원 5개 PASS다. `--ui`는 공식 자원 매핑·자원 없는 fallback·독립 언어팩 선택·원본 열 geometry·입력 세대·전체 그래프 점 전달·실제 표시 지연 타이머를 검사한다. 시험용 `ko-KR` 확장은 격리한 임시 폴더에만 만들며 배포 번역팩으로 포함하지 않는다. `Test-NativeUi.ps1`은 실제 실행기의 renderer·hit ID·진행 막대 픽셀과 음량 0에서의 오디오 생명주기·재시작 없는 음량 변경을 검사한다. 최신 native 결과는 `outputs/native-ui-audio-0027b902/native-ui-summary.json`에 기록됐다.

`Test-GameUi.ps1`은 격리한 시험 저장으로 원본 메뉴를 실행하고 실제 엔진 canvas·layout을 기록한다. 다음 수치는 0.3.0 결과이며 실제 입력 출력을 우회한 화면 검사다. 자원 있음·없음 양쪽에서 새 게임과 레이스 재생 프레임을 포함한 23개 화면을 통과했다. `runtime-UiScreens-fce0e490`은 전체 갱신 27회·부분 갱신 27회·205행 보존, `runtime-UiScreens-9717a264`는 전체 갱신 26회·부분 갱신 27회·205행 보존이다. 공식 리소스 URL의 shell 브라우저 실행도 자동 검사에서 PASS이며 사람이 URL 버튼을 직접 클릭해 여는 시험은 미확인이다. 이 스크립트들의 자동 실행과 가상 시간 전진은 사람이 직접 플레이한 결과가 아니다. 코드 동결 후 같은 플러그인 DLL로 최종 호스트·실제 Emuera 7단계 회귀도 PASS했다. 공식 자원 포함 ZIP을 공백이 있는 별도 폴더에 풀어 7단계 회귀·23개 화면을 다시 통과했다. ZIP 전체 파일 해시·상대 경로·사용자 저장 미포함도 확인했다. 요약과 화면 예시는 [0.3 검증 근거](docs/evidence/0.3/README.md)에 있다.

실제 Emuera 시험 7단계는 동일한 CALLSHARP 경로로 원본 새 게임·행동·훈련·레이스·저장·프로세스 재시작 후 전체 상태 복원·정상 종료를 검사한다. 훈련·레이스 시나리오는 실제 플러그인 안에서 원본 메뉴를 자동 실행하며 모든 중간 화면을 사람이 클릭하는 시험은 아니다. 자동 시험은 별도 실행 폴더와 저장을 사용한다. 기본 재시작 시험은 슬롯 6, 플레이 시나리오는 슬롯 5·6을 사용하며 사용자 세이브를 시험에 사용하지 않는다. 무인 타이머 시험은 `AWAIT`/`tick`으로 실제 경과 시간과 늦은 선택지 추가를 확인한다. 일반 게임의 `TINPUTS` 타이머 입력을 직접 조작한 시험과는 구별한다.

`Build.ps1 -Mode Interactive`는 직접 숫자·문자열·버튼 입력 시험을 만든다. 2026-09-30 사용자가 `5` → `Trainer` → `Finish`를 직접 입력해 PASS를 확인했고 실행 결과 파일에도 정상 완료가 남았다. 이 0.2 입력 시험은 새 UI의 전체 플레이 근거가 아니다. `Automatic`은 계산 연결 시험, `GameAutomatic`은 원본 제목 화면 시험이다. 실행 중인 해당 시험 창은 같은 폴더를 다시 빌드하기 전에 닫는다.

2차 의뢰의 직접 검증 경로는 **타이틀 → 새 게임 → 캐릭터 선택 → 육성 시작 → 메인 → 트레이닝 → 캐릭터 정보 → 외출/상점 → 레이스 등록 → 레이스 → 결과 → 저장 → 완전 종료 → 재실행 → 로드 → 후속 행동**이다. 자동 실행·엔진 canvas PNG 확인과 이 직접 플레이 결과를 구별해 [재작업 기준](docs/ERAUMA_SECOND_WORK_ORDER.md)에 기록한다.

원본 게임·Era API 및 외부 라이브러리의 라이선스는 각 원문을 유지한다. 자세한 고정 버전·출처는 [엔진 의존성](docs/ERAUMA_ENGINE_DEPENDENCIES.md)과 `third_party/ere/UPSTREAM.md`를 참조한다.
