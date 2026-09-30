# era말딸 Emuera.NET 호환 계층 — 기술 검증판

원본 `sources/erauma`의 JavaScript를 수정하지 않고 Emuera → CALLSHARP → C# → Jint로 실행한다. EraElectron 실행 파일과 Node.js는 **게임 실행에 필요하지 않다**. 현재 전체 플레이 호환을 보증하는 배포판은 아니다.

2026-09-30 검증: 원본 새 게임 → 주 메뉴 → 휴식 → 주 메뉴 복귀, 저장 → Emuera 프로세스 종료 → 재실행 → 전체 게임 데이터 복원을 통과했다. 입력은 자동 주입으로 검증했으며 직접 키보드·마우스 조작, 훈련·레이스 전체 진행은 미검증이다.

## 구성

- `compatibility/`: Jint, 원본 CommonJS 로더, 비동기 입력, 파일·화면 연결
- `plugin/`: Emuera `EraUmaBridge` CALLSHARP 연결
- `bootstrap/`: 계산·입력 시험, 게임 실행, 자동 진행·재시작 시험 ERB
- `third_party/ere/`: 출처·라이선스가 포함된 원본 Era API 5개 파일
- `tools/`: API 조사, 원본 kojo 컴파일러 연결, 빌드·실행 검증
- `tests/`: 호스트 검증; `docs/`: 의존성·API·검증 현황·알려진 문제

## 빌드

Windows, .NET 10 SDK, Git가 필요하다. `.kojo` 사전 컴파일에만 Node.js를 사용한다. 저장소 루트에서 실행한다. 외부 저장소는 아래 커밋으로 고정한다.

```powershell
git clone https://gitlab.com/EvilMask/emuera.em.git ../emuera-source
git -C ../emuera-source checkout 25c23dc8f425347738783e5ef322561d48c9f155
git clone https://gitgud.io/umaera/engine/kojo-loader ../kojo-loader
git -C ../kojo-loader checkout a3538cb410d31fa6c5c7827aff01c96021526646
Invoke-WebRequest https://registry.npmjs.org/yamljs/-/yamljs-0.3.0.tgz -OutFile ../yamljs.tgz
# SHA256: 74F5F545D585643078AFB894CFCB288A87924D880035D10FA73314A21E12D2BA
New-Item -ItemType Directory -Force ../yamljs
tar -xf ../yamljs.tgz -C ../yamljs
node ports/erauma-emuera/tools/build-kojo.cjs sources/erauma/ere ports/erauma-emuera/artifacts/kojo ../kojo-loader/src/parse-kojo.js ../yamljs/package/lib/Yaml.js
./ports/erauma-emuera/tools/Build.ps1 -EngineSource ../emuera-source -Mode Game
```

`artifacts/runtime-Game/Emuera.exe`를 실행한다. 해당 폴더의 `game-paths.json`이 원본·Era API·컴파일된 kojo 경로를 가리킨다. 폴더를 이동하면 경로도 수정해야 한다. 실행기와 DLL만 복사해서는 실행되지 않는다. .NET 10 Windows Desktop Runtime이 필요하다.

입력은 숫자나 문자열을 입력하고 Enter로 제출한다. 문장 대기에서는 빈 입력을 제출한다. 게임 세이브는 이 실행 폴더의 `sav-game/sav/`에 저장된다. 기존 CrossWorld 세이브와 분리된다. 현재 기본 언어는 원본 설정을 따른다. 한국어 번역 작업은 포함하지 않는다.

## 검증 재현

```powershell
dotnet run --project ports/erauma-emuera/tests -c Release
dotnet run --project ports/erauma-emuera/tests -c Release -- --save sources/erauma ports/erauma-emuera/third_party/ere
dotnet run --project ports/erauma-emuera/tests -c Release -- --play sources/erauma ports/erauma-emuera/third_party/ere
./ports/erauma-emuera/tools/Build.ps1 -EngineSource ../emuera-source -Mode PlayAutomatic
./ports/erauma-emuera/tools/Test-Runtime.ps1
```

자동 실행 검증은 전용 `runtime-PlayAutomatic`의 슬롯 6을 사용한다. 결과는 그 폴더의 `results/play.json`, `results/restart-restore.json`에 남는다. 마지막 화면에 머무는 테스트 프로세스는 보고서 생성 뒤 종료하고, 별도 프로세스로 다시 실행한다. 일반 게임 종료 메뉴 검증과는 구별한다.

`Build.ps1 -Mode Interactive`는 계산·입력 시험을, `Automatic`은 자동 계산 시험을 만든다. `GameAutomatic`은 원본 제목 화면까지 자동 검사한다. 실행 중인 해당 시험 창은 다시 빌드하기 전에 닫아야 한다.

재배포 전 `third_party/ere/UPSTREAM.md`의 라이선스·출처와 [알려진 문제](docs/ERAUMA_KNOWN_ISSUES.md)를 확인한다. 원본 게임·외부 라이브러리의 라이선스를 변경하거나 대체하지 않는다.
