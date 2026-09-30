# era말딸 Emuera.NET 실행 패키지

Windows x64와 **.NET 10 Windows Desktop Runtime**이 필요합니다. 설치가 필요한 경우 [Microsoft 공식 다운로드 페이지](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)의 **.NET Desktop Runtime → Windows x64**를 선택합니다. 이 패키지로 게임을 실행할 때 Node.js, Electron, 개발용 SDK를 설치할 필요는 없습니다.

ZIP 전체를 쓰기 가능한 폴더에 압축 해제한 뒤 `Emuera.exe`를 실행합니다. 숫자나 문자를 입력하고 Enter를 누르거나 표시된 선택 버튼을 클릭합니다. 문장 대기에서는 빈 입력을 제출합니다. 게임 저장은 실행 폴더의 `sav-game/sav/`에 생성됩니다. 기존 게임의 저장은 패키지에 포함하지 않았습니다.

폴더를 이동할 때는 압축 해제한 폴더 전체를 함께 이동합니다. `game-paths.json`은 패키지 내부의 상대 경로를 사용하므로 경로 수정이 필요 없습니다. 실행기나 DLL만 별도 폴더에 복사하면 원본 게임을 찾을 수 없습니다.

게임은 원본 JavaScript로 실행됩니다. 기본 언어는 원본 설정을 따릅니다. 이미지·음악 등 선택적인 원본 멀티미디어는 포함하지 않았으며 출력은 텍스트 화면으로 연결합니다. 확인된 기능과 남은 제한은 `docs/ERAUMA_PORTING_STATUS.md`, `docs/ERAUMA_KNOWN_ISSUES.md`에 기록되어 있습니다.

## 포함 범위

- `Emuera.exe`, `CSV/`, `ERB/`, `Plugins/`: 원본 CrossWorld 실행기와 게임 연결 코드
- `game/erauma/ere/`: 보존된 원본 게임 소스 전체
- `game/erauma/build/static.json`: 원본의 사전 생성 데이터 표
- `game/engine/`: 원본 Era API와 출처·라이선스
- `game/kojo/`: 원본 kojo 컴파일러로 사전 변환한 대사 모듈
- `adapter-source/`: 호환 계층·플러그인·부트스트랩·빌드 및 검증 소스
- `licenses/`, `THIRD_PARTY_NOTICES.md`: 실행기와 라이브러리 라이선스·출처
- `package-manifest.json`: 포함된 각 파일의 크기와 SHA256

사용자 저장, 검증 결과, 자동 테스트 체크포인트, `.env`, Git 이력과 Node 의존성 폴더는 포함하지 않습니다. `package-manifest.json`은 생성 당시 로컬 파일을 기준으로 기록하므로 아직 커밋되지 않은 연결 코드가 있으면 그 파일도 SHA256으로 구분합니다.

호환 계층의 빌드·시험 소스와 안내는 `adapter-source/`에 제공합니다. 회귀 시험용 `.sav` fixture도 실행 패키지에서는 제외하므로 시험을 다시 실행할 때는 [원본 저장소](https://github.com/okkoog/Era-crossworld)에서 `package-manifest.json`에 기록한 커밋의 `ports/erauma-emuera/`를 사용합니다. 소스에서 빌드하려면 저장소 전체와 안내에 지정된 외부 소스를 확보해야 합니다. 게임 실행에는 이 빌드 도구나 시험 fixture가 필요하지 않습니다.

빌드·검증 명령은 `adapter-source/README.md`에 있습니다. 안내 문서의 상대 링크를 유지하기 위해 같은 상태·API 문서를 `docs/`와 `adapter-source/docs/` 양쪽에 제공합니다.

## 패키지 다시 만들기

저장소에서 kojo 사전 변환과 `tools/Build.ps1 -Mode Game`을 완료한 다음 실행합니다.

```powershell
./ports/erauma-emuera/tools/Package.ps1
```

새 폴더와 ZIP을 `outputs/`에 만듭니다. 기존 결과를 삭제하거나 덮어쓰지 않습니다. 패키지 작성기는 원본 실행기와 필수 DLL의 SHA256, 게임 실행용 부트스트랩, NuGet 고정 버전, 압축된 모든 파일의 SHA256을 검사합니다. 실행 검증은 상태 문서의 별도 테스트 절차를 따릅니다.
