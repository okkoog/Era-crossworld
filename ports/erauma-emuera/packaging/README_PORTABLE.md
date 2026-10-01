# era말딸 Emuera.NET 실행 패키지 0.3.2

Windows x64와 **.NET 10 Windows Desktop Runtime**이 필요합니다. 설치가 필요한 경우 [Microsoft 공식 다운로드 페이지](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)의 **.NET Desktop Runtime → Windows x64**를 선택합니다. 이 패키지로 게임을 실행할 때 Node.js, Electron, 개발용 SDK를 설치할 필요는 없습니다.

ZIP 전체를 쓰기 가능한 폴더에 압축 해제한 뒤 `Emuera.exe`를 실행합니다. 숫자나 문자를 입력하고 Enter를 누르거나 표시된 선택 버튼을 클릭합니다. 선택지와 링크가 없는 문장 대기에서는 빈 화면을 클릭하거나 Enter를 누릅니다. 게임 저장은 실행 폴더의 `sav-game/sav/`에 생성됩니다. 기존 게임의 저장은 패키지에 포함하지 않았습니다.

## 0.3.2 레이스 화면 갱신 수정과 자동 검증

사용자는 0.3.1이 이전보다 부드러워졌다고 보고했지만 레이스에서 화면 전체가 짧게 사라지는 깜빡임이 남았습니다. 60fps·310프레임·5.1667초 영상에서 빈 화면 구간 45회·114프레임(36.8%), 구간당 약 17–67ms를 확인했습니다. 이전 그림이 계속 겹쳐 남는 현상과는 다른 문제입니다.

0.3.2는 모든 행과 여백의 교체를 마칠 때까지 이전 완성 화면을 유지한 뒤 새 화면을 출력하도록 수정합니다. 실행기는 이미 double buffering을 사용하며, 화면 지우기가 새 행 출력 전에 강제 갱신되던 순서가 원인입니다. 엔진의 갱신 플래그와 화면 Paint 처리를 묶어 이전 bitmap을 유지하고 마지막에 정상 갱신을 복원합니다. 일반 버튼 처리와 스크롤은 기존 native 경로를 유지합니다.

정확한 배포 실행기의 Paint 처리를 시험 bitmap에 기록하는 `Test-FramePaint.ps1`은 0.3.1 대조의 7회 전환에서 중간 그림 165회를 재현했고, 수정판은 같은 7회 전환에서 0회로 통과했습니다. 모든 최종 그림 변경·타이머 진행·handler 수 2→2·이후 새로고침 3회도 확인했습니다. 기록용 PNG가 검사 속도에 영향을 주므로 165회는 실제 화면 fps가 아닙니다. 이 시험은 데스크톱 캡처나 사람의 직접 플레이가 아닙니다.

원본 레이스 연속 20회 갱신도 중간 그림 0회·모든 최종 그림 변경·native Paint 40회·handler 2→2·이후 새로고침 3회 복원으로 통과했습니다. 이 경로는 격리한 fixture 시험에서만 500ms 가상 시간 전진을 사용합니다. 별도 실행기 타이머 검사는 실제 경과 시간으로 통과했습니다.

0.3.2 호스트는 기본 10개·API 21개·저장 10개·플레이 46개·UI 21개, 입력 출력은 4프레임의 미관리 행 0, 일반 게임 입력 루프는 7단계와 타이머 tick 1회, 실제 원본 canvas는 23개(전체 갱신 26회·부분 27회·205행 보존·경고 0), 실제 실행기 회귀는 7단계를 통과했습니다. 요약은 `docs/evidence/0.3.2/README.md`에 있습니다. 동일한 배포 구성의 공백 경로 이동 검사에서 23화면과 원본 레이스 갱신 20회가 PASS했습니다. ZIP 파일 해시는 `package-manifest.json`과 생성 보고서로 확인합니다. 전체 직접 플레이·레이스 후 저장·종료·재실행·로드와 실제 음악 청취도 미확인입니다.

## 0.3.1 수정과 자동 검증의 역사적 근거

**0.3.0의 사용자 직접 시험은 실패했습니다.** 빈 화면 클릭으로 대사가 진행되지 않고 선택할 때 이전 그림·버튼이 겹쳐 남아 레이스 이전에 시험을 중단했습니다. 0.3.1은 대사 진행을 클릭·Enter 대기로 분리하고, 화면 갱신 전에 실행기가 출력한 입력 줄을 제거합니다. 번호 선택·자유 문자열·입력 규칙·현재 URL은 기존 값 입력을 유지합니다.

원본 모집 화면의 실제 입력 재현에서 수정 전 미관리 줄 `[0,1,2,3]`이 수정 후 `[0,0,0,0]`으로 유지되는 자동 검사를 통과했습니다. 21개 호스트 UI 회귀와 일반 게임 입력 루프의 빈 클릭·타이머 대기·번호 선택·문자열·URL 구분 검사도 통과했습니다. 입력 처리는 격리한 시험 프로세스 내부에서 검사했으며 사람의 클릭이나 OS 입력 시험은 아닙니다. 수정 후 전체 직접 플레이와 실제 음향 청취는 미확인입니다. 아래 0.3.0 자동 결과를 UI 완료로 취급하지 않습니다.

폴더를 이동할 때는 압축 해제한 폴더 전체를 함께 이동합니다. `game-paths.json`은 패키지 내부의 상대 경로를 사용하므로 경로 수정이 필요 없습니다. 실행기나 DLL만 별도 폴더에 복사하면 원본 게임을 찾을 수 없습니다.

게임은 원본 **EraUma v3.113 (ryuki)** JavaScript로 실행됩니다. 공식 **res 20260923**을 `game/res/`에 포함하며 원본의 여러 열·서식·그림·진행 막대·전체 계열 그래프를 Emuera 화면에 연결합니다. `package-manifest.json`의 `resourcePackIncluded`로 포함 여부를 확인할 수 있습니다. 원본 음향 선택은 실행기의 Windows Media Player Sound 연결을 사용하며 재생·일시정지·재개·반복·종료와 재생을 다시 시작하지 않는 실행 중 음량 변경의 자동 검사를 통과했습니다. 시험은 음량 0으로 수행했으므로 실제 청취는 미확인입니다. 일반 게임의 표시 지연과 레이스 재생은 실제 경과 시간을 유지합니다. **새 UI의 전체 직접 플레이는 아직 미확인**입니다. 기능별 상태와 남은 제한은 `docs/ERAUMA_UI_STATUS.md`, `docs/ERAUMA_KNOWN_ISSUES.md`에 있습니다.

0.3.0에서는 호스트 기본 10개·API 21개·저장 10개·플레이 46개·UI 16개, 시나리오 20개·별도 프로세스 복원 5개와 같은 플러그인 DLL의 실제 Emuera 7단계 최종 회귀를 통과했습니다. 원본 게임의 23개 화면을 자원 있음·없음 양쪽에서 실제 엔진 canvas로 검사했습니다. 공식 리소스 URL의 기본 브라우저 실행도 자동 검사에서 통과했으며, 사람이 화면의 URL 버튼을 직접 클릭해 여는 시험은 미확인입니다. GIF는 정지 프레임, 배경·오버레이의 position·fit은 부분 구현이고 실제 WebP 출력은 미확인입니다. SVG·오디오 fade·CSS hover·그래프 mouseover/주석은 제공하지 않습니다.

기본 언어는 원본 설정을 따릅니다. 추가 언어팩은 `game/language-packs/<locale>/entry.js`에서 읽습니다. 신규 `ko-KR` 한국어 완역은 포함하지 않습니다. 원본 i18n·언어별 Kojo 구조를 유지하고 구 한국어판을 최신 원본 위에 덮어쓰지 않습니다.

## 포함 범위

- `Emuera.exe`, `CSV/`, `ERB/`, `Plugins/`: 원본 CrossWorld 실행기와 게임 연결 코드
- `game/erauma/ere/`: 보존된 원본 게임 소스 전체
- `game/erauma/build/static.json`: 원본의 사전 생성 데이터 표
- `game/engine/`: 원본 Era API와 출처·라이선스
- `game/kojo/`: 원본 kojo 컴파일러로 사전 변환한 대사 모듈
- `game/res/`: 설치된 공식 그림·음향·CSV 리소스
- `game/language-packs/`: 추가 언어팩을 둘 독립 디렉터리
- `resource-provenance.json`: 포함 리소스의 버전·다운로드 출처·ZIP SHA256·설치 및 제외 목록
- `adapter-source/`: 호환 계층·플러그인·부트스트랩·빌드 및 검증 소스
- `licenses/`, `THIRD_PARTY_NOTICES.md`: 실행기와 라이브러리 라이선스·출처
- `package-manifest.json`: 포함된 각 파일의 크기와 SHA256

사용자 저장, 원시 실행 보고서, 자동 테스트 체크포인트, `.env`, Git 이력과 Node 의존성 폴더는 포함하지 않습니다. 검토된 0.3.0 자동 검사 요약과 실행기 canvas 예시는 `docs/evidence/0.3/`에, 0.3.1 입력·화면 수정의 자동 근거는 `docs/evidence/0.3.1/`에 구별해 제공합니다. 0.3.2 Paint 검사는 이전 버전 대조와 수정판 결과를 구별하며 사람의 직접 플레이 결과로 취급하지 않습니다. `package-manifest.json`은 생성 당시 로컬 파일을 기준으로 기록하므로 아직 커밋되지 않은 연결 코드가 있으면 그 파일도 SHA256으로 구분합니다.

호환 계층의 빌드·시험 소스와 안내는 `adapter-source/`에 제공합니다. 회귀 시험용 `.sav` fixture도 실행 패키지에서는 제외하므로 시험을 다시 실행할 때는 [원본 저장소](https://github.com/okkoog/Era-crossworld)에서 `package-manifest.json`에 기록한 커밋의 `ports/erauma-emuera/`를 사용합니다. 소스에서 빌드하려면 저장소 전체와 안내에 지정된 외부 소스를 확보해야 합니다. 게임 실행에는 이 빌드 도구나 시험 fixture가 필요하지 않습니다.

빌드·검증 명령은 `adapter-source/README.md`에 있습니다. 0.3.2의 `Test-FramePaint.ps1`은 화면 갱신의 자동 검사이며 직접 플레이와 구별합니다. 안내 문서의 상대 링크를 유지하기 위해 같은 상태·API 문서를 `docs/`와 `adapter-source/docs/` 양쪽에 제공합니다.

## 리소스를 별도로 설치하기

리소스가 포함되어 있으면 이 단계는 필요 없습니다. 파일을 별도로 설치하려면 [공식 다운로드 안내](https://umaera.gitgud.site/data/uma-resource/full.html)의 20260923 팩을 사용합니다. PowerShell 7에서 압축 해제한 패키지 폴더로 이동한 뒤 다음 중 하나를 실행합니다.

```powershell
./adapter-source/tools/Install-Resources.ps1 -ResourceRoot ./game -Download
./adapter-source/tools/Install-Resources.ps1 -ResourceRoot ./game -ArchivePath 'C:\Downloads\uma-resource-20260923.zip'
```

첫 명령은 공식 저장소의 LFS 포함 ZIP을 내려받습니다. 두 번째 명령은 이미 받은 ZIP을 사용합니다. 지정 루트 아래 `game/res/`에 설치하며 원본 소스와 저장파일은 설치 대상이 아닙니다. 게임을 다시 시작하면 새 자원을 읽습니다. 설치 이력은 `game/resource-install.json`에 남습니다. 자원 파일이 없으면 텍스트 모드로 진행합니다.

확인한 공식 ZIP은 431,787,981 bytes, SHA256 `c21debd728dc934c637c93af4ef6b7fa7e0a32177e134b151a2a47036405642b`입니다. 설치 파일은 2,859개·435,577,015 bytes이며 원본 이름으로 이미지 2,786개·오디오 22개·CSV 66개를 연결하고 누락·경고 0개를 확인했습니다. 파일 매핑 결과만으로 모든 그림·음향의 직접 확인을 뜻하지는 않습니다.

## 패키지 다시 만들기

저장소에서 kojo 사전 변환과 `tools/Build.ps1 -Mode Game`을 완료한 다음 실행합니다.

```powershell
./ports/erauma-emuera/tools/Install-Resources.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources -Download
./ports/erauma-emuera/tools/Package.ps1 -ResourceRoot ./ports/erauma-emuera/artifacts/resources
```

새 폴더와 ZIP을 `outputs/`에 만듭니다. 기존 결과를 삭제하거나 덮어쓰지 않습니다. 패키지 작성기는 원본 실행기와 필수 DLL의 SHA256, 게임 실행용 부트스트랩, NuGet 고정 버전, 압축된 모든 파일의 SHA256을 검사합니다. 실행 검증은 상태 문서의 별도 테스트 절차를 따릅니다.
