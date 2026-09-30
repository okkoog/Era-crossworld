# era말딸 Emuera.NET 호환판

보존된 `sources/erauma`의 JavaScript 게임을 Emuera.NET → CALLSHARP → C# → Jint로 실행한다. 게임 규칙을 ERB로 다시 작성하지 않고 원본 Era API의 데이터·캐릭터·육성·저장 처리를 재사용한다. **게임 실행에는 EraElectron, Node.js, 개발용 SDK가 필요하지 않다.** Windows x64와 .NET 10 Windows Desktop Runtime은 필요하다.

이번 범위는 era말딸 단독 실행이다. CrossWorld 공용 캐릭터·세계 시간·게임 간 이동 및 세이브 공유는 포함하지 않는다. 원본 `sources/erauma`와 기존 `docs/`, `game/`, `dev/`, `test/`는 변경하지 않고 이 디렉터리에 연결 코드와 문서를 분리했다.

원본 새 게임·캐릭터 선택·훈련·이벤트·레이스·저장·프로세스 재시작 후 로드와 후속 행동·정상 종료를 선정 경로로 검증했다. 실제 숫자·문자열·버튼 입력도 사용자 확인과 PASS 결과 파일로 확인했다. 구체적인 자동/직접 입력 검증 범위는 [이식 현황](docs/ERAUMA_PORTING_STATUS.md)에 있다.

## 실행

실행 패키지는 ZIP 전체를 쓰기 가능한 폴더에 압축 해제한 뒤 `Emuera.exe`를 실행한다. 게임 원본·원본 Era API·사전 생성한 대사 모듈을 패키지에 포함하고 `game-paths.json`은 내부 상대 경로를 사용하므로 폴더 전체를 이동해도 된다. 실행기나 DLL만 복사하면 게임 소스를 찾을 수 없다. 포함 목록·파일 SHA256은 `package-manifest.json`, 라이선스·출처는 `THIRD_PARTY_NOTICES.md`에 있다.

숫자나 문자열을 입력하고 Enter를 누르거나 표시된 번호 버튼을 클릭한다. 문장 대기에서는 Enter를 누른다. 저장은 실행 폴더의 `sav-game/sav/`에 생성되며 패키지에는 사용자 세이브를 포함하지 않는다. 언어는 원본 설정을 따른다. 한국어 번역 작업은 포함하지 않는다.

텍스트·선택지·상태·계산은 원본 게임으로 진행한다. 이미지와 음악을 생략하고 여러 열과 그래프는 텍스트로 표시한다. 표시용 `era.delay()`도 생략하지만 시간이 지난 뒤 선택지를 추가하는 `setTimeout()`은 실제 대기 시간을 유지한다. 확인한 플레이 범위와 표현 차이는 [이식 현황](docs/ERAUMA_PORTING_STATUS.md), [알려진 제한](docs/ERAUMA_KNOWN_ISSUES.md)에 기록했다.

## 구성

- `compatibility/`: 관리형 JS 실행, 원본 CommonJS 로더, 입력 Promise, 타이머, 파일·화면 연결
- `plugin/`: Emuera `EraUmaBridge` CALLSHARP 연결
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
./ports/erauma-emuera/tools/Package.ps1
```

개발용 실행 폴더는 `artifacts/runtime-Game/`이며 이 빌드의 `game-paths.json`은 로컬 절대 경로를 참조한다. 개발용 폴더만 이동하려면 경로를 수정해야 한다. `Package.ps1`은 실행에 필요한 게임 소스를 복사하고 상대 경로로 바꾼 별도 ZIP을 `outputs/`에 생성한다. 기존 출력 파일을 덮어쓰지 않는다.

## 검증 재현

```powershell
dotnet run --project ports/erauma-emuera/tests -c Release
dotnet run --project ports/erauma-emuera/tests -c Release -- --api sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --save sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --play sources/erauma ports/erauma-emuera/third_party/ere
$scenarioSaveRoot=Join-Path $env:TEMP ('erauma-scenario-'+[guid]::NewGuid().ToString('N'))
dotnet run --project ports/erauma-emuera/tests -c Release -- --scenario sources/erauma ports/erauma-emuera/third_party/ere ports/erauma-emuera/artifacts/kojo ports/erauma-emuera/tests/fixtures $scenarioSaveRoot
dotnet run --project ports/erauma-emuera/tests -c Release -- --scenario sources/erauma ports/erauma-emuera/third_party/ere ports/erauma-emuera/artifacts/kojo ports/erauma-emuera/tests/fixtures $scenarioSaveRoot restore
./ports/erauma-emuera/tools/Build.ps1 -EngineSource ../emuera-source -Mode PlayAutomatic
./ports/erauma-emuera/tools/Test-Runtime.ps1
```

호스트 시험은 숫자·문자열·객체, 입력 중단과 재개, 화면 교체·부분 삭제, 선택지 유효성, 입력 교체, 타이머, 진단 메시지, 원본 JSON/gzip 저장을 검사한다. `--scenario`는 원본 메뉴에서 만든 시험 저장을 격리한 폴더에 복사하고 훈련·레이스·저장·로드 메뉴와 이후 행동을 재현한다. 시험 안에서만 난수를 고정하며 일반 게임의 난수는 유지한다.

실제 Emuera 시험 7단계는 동일한 CALLSHARP 경로로 원본 새 게임·행동·훈련·레이스·저장·프로세스 재시작 후 전체 상태 복원·정상 종료를 검사한다. 훈련·레이스 시나리오는 실제 플러그인 안에서 원본 메뉴를 자동 실행하며 모든 중간 화면을 사람이 클릭하는 시험은 아니다. 자동 시험은 별도 실행 폴더와 저장을 사용한다. 기본 재시작 시험은 슬롯 6, 플레이 시나리오는 슬롯 5·6을 사용하며 사용자 세이브를 시험에 사용하지 않는다. 무인 타이머 시험은 `AWAIT`/`tick`으로 실제 경과 시간과 늦은 선택지 추가를 확인한다. 일반 게임의 `TINPUTS` 타이머 입력을 직접 조작한 시험과는 구별한다.

`Build.ps1 -Mode Interactive`는 직접 숫자·문자열·버튼 입력 시험을 만든다. 2026-09-30 사용자가 `5` → `Trainer` → `Finish`를 직접 입력해 PASS를 확인했고 실행 결과 파일에도 정상 완료가 남았다. `Automatic`은 계산 연결 시험, `GameAutomatic`은 원본 제목 화면 시험이다. 실행 중인 해당 시험 창은 같은 폴더를 다시 빌드하기 전에 닫는다.

원본 게임·Era API 및 외부 라이브러리의 라이선스는 각 원문을 유지한다. 자세한 고정 버전·출처는 [엔진 의존성](docs/ERAUMA_ENGINE_DEPENDENCIES.md)과 `third_party/ere/UPSTREAM.md`를 참조한다.
