# EraUma UI·리소스 구현 현황

기록일: 2026-10-02, 포트 0.3.3. 이 문서는 2차 재작업의 구현과 검증을 구별해 기록한다. **사용자는 0.3.2의 깜빡임 수정 성공과 FPS 저하를 확인했고, 최종 포팅 완료 판정은 하지 않았다.** 0.3.0 직접 실패와 0.3.1 깜빡임·0.3.2 자동 검증은 역사적 근거로 보존한다. 0.3.3의 갱신 비용 비교·원본 canvas 23개·배포 DLL과 같은 SHA의 호스트 6모드·130검사·실제 실행기 7단계는 PASS다. 같은 배포 구성의 공백 경로 이동 검사도 PASS했으며 실제 사용자 FPS·사람의 전체 직접 플레이·실제 음향 청취는 미확인이다.

실행 기준은 저장소에 보존된 **EraUma v3.113 (ryuki)**와 공식 **res 20260923**이다. `Emuera.NET → CALLSHARP → C# → Jint → 원본 JavaScript` 구조를 유지한다. `sources/erauma`와 저장소 루트의 `docs/`, `game/`, `dev/`, `test/`를 변경하지 않고 포트 변경을 `ports/erauma-emuera/`에 둔다.

## 0.3.3 FPS 개선 — 갱신 비용·canvas 자동 검사 PASS

`NativeFrameUpdate.ClearDisplay`는 고정 실행기의 clip history·display list·HTML/escaped 자료·카운터·스크롤 리셋을 그대로 수행하고 마지막 강제 `window.Refresh`만 생략한다. 행과 여백을 완성한 뒤 한 번 commit하며 정상 경로에서는 이전 canvas snapshot을 만들지 않는다. 과거 출력을 스크롤하여 보는 상태에서는 기존 bitmap gate를 fallback으로 사용한다. 원본 게임 규칙과 저장 버전 숫자 `3`은 유지한다.

sprite 캐시는 128슬롯으로 제한하고 전체 교체에서도 재사용한다. 현재/보존 행·배경의 sprite는 pin하며 삭제된 handle을 검사한다. 텍스트 크기·font 캐시를 재사용하고 빈 cell의 크기·offset·배치 geometry는 유지하면서 불필요한 div 출력만 생략한다. 같은 `buttonEpoch`의 중복 `__redraw`는 다시 출력하지 않는다. 대기는 원본 다음 deadline까지 남은 시간을 쓰고 양수 대기는 최소 1ms로 유지한다.

| 새 검증 | 현재 결과 | 남은 확인 |
|---|---|---|
| Paint 9회 전환 | PASS: 중간 그림 0·handler 2→2·후속 새로고침 3회 복원 | 일반 7회 각 Paint 1회·backlog-full 1회·backlog-partial 2회. 실제 FPS는 별도 |
| 타이머·API·기본 호스트 | PASS: 22개·21개·10개 | 최종 6모드·130검사도 배포 DLL과 같은 SHA로 PASS |
| 이미지 캐시 | PASS: 21개 | 누적 이미지 720개·128슬롯 교체·native unload·삭제된 sprite·배경 크기 변경 |
| 입력 출력·일반 게임 입력 루프 | PASS: 4프레임 미관리 행 0·7단계 | 타이머 polling 3회·실제 100ms callback 2회. 사람의 직접 입력과 구별 |
| 원본 canvas | PASS: 23개 | 전체 갱신 26회·부분 27회·205행 보존·경고 0 |
| 전체 호스트·실제 실행기 회귀 | PASS | 배포 DLL과 같은 SHA의 읽기 복사본으로 호스트 6모드·130검사. 실제 실행기 7단계의 모든 phase도 통과 |
| 0.3.2 대비 갱신 비용 비교 | PASS | 같은 원본 레이스 30개 표본·8회 warmup에서 중앙값 196.78→48.93ms(4.02배), p95 225.87→58.85ms |
| 실제 사용자 FPS·60fps 달성 | 미확인 | 별도 숨긴 시험 창의 commit 수와 구별; 레이스 프레임 보간 미구현 |
| 0.3.3 배포 구성 이동 | PASS (자동 preflight) | 공백 경로에서 원본 23화면·레이스 20회 갱신, 같은 DLL·게임 파일의 해시 확인. ZIP 생성 검증은 별도 |
| 전체 직접 플레이·실제 음악 청취 | 미확인 | 레이스·저장·종료·재실행·로드·후속 행동 포함 |

현재 근거는 작업 폴더의 `outputs/frame-paint-0719d439`·`outputs/adaptive-timer-1790897678741`·`outputs/input-echo-679f186c`·`outputs/continue-input-66b6a031/runtime/continue-input.json`과 포트의 `artifacts/runtime-UiScreens-9fcdc744`다. 최종 회귀는 `outputs/host-regression-0.3.3-1790905951267/host-regression-summary.json`과 `outputs/native-regression-0.3.3-54a599ed`에 기록했다. 검토용 결과는 `evidence/0.3.3/`에 보존한다. Paint 검사는 정확한 실행기 callback을 시험 bitmap에 기록한 것으로 데스크톱 캡처·OS 입력·사람의 직접 결과와 구별한다. 아래 기존 버전의 PASS는 해당 버전의 역사적 근거다.

갱신 객체 생성 시간은 113.85→0.0216ms다. 별도 4배속 원본 레이스의 숨긴 시험 창에서는 3.37→8.74 commits/s를 관찰했으며 이전 50·이번 38프레임으로 표본 수가 다르다. 이번 정상 구간 프레임 간격 중앙값은 110.66ms다. **이 결과는 실제 사용자 FPS나 60fps 달성이 아니다.** HTML parse 15.84ms·native commit 29.01ms와 입력 대기 진입 시 추가 Paint가 남아 있다. 비교 보고서는 `outputs/race-performance-0.3.3-comparison.json`, 대조·후보는 `outputs/frame-paint-725910d4/summary.json`과 `outputs/frame-paint-b06e86dd/summary.json`이다.

## 0.3.2 레이스 화면 갱신 수정의 역사적 근거

사용자는 0.3.1이 이전보다 부드러워졌다고 보고했지만 레이스에서는 전체 canvas가 주기적으로 비는 깜빡임이 남았다. 60fps·310프레임·5.1667초 영상에서 빈 화면 114프레임(36.8%)·45구간, 구간당 약 17–67ms를 확인했다. 이전 그림이 계속 겹쳐 남는 현상과는 다른 결함이다.

실행기는 이미 double buffering을 사용한다. `api.ClearDisplay` (`EmueraConsole.ClearDisplay`)가 모든 행과 여백의 재출력 전에 강제 paint를 수행한 것이 원인이다. 0.3.2의 `NativeFrameUpdate`는 엔진의 `console.SetRedraw(0)` 플래그와 managed `PictureBox.Paint` 처리로 행 삭제·출력·여백 조정 중 이전 완성 bitmap을 유지한다. 마지막에 handler와 엔진 갱신 상태를 복원하고 완성 프레임을 강제 출력한다. 일반 버튼·스크롤 처리는 갱신 범위 밖의 native 경로를 유지한다.

`./ports/erauma-emuera/tools/Test-FramePaint.ps1`은 정확한 배포 실행기의 Paint callback과 native/수정된 `PictureBox.OnPaint` delegate 연결을 시험 bitmap에 기록한다. 0.3.1 대조 `outputs/frame-paint-6b0c25c1/summary.json`은 7회 전환의 중간 그림 165회로 예상 FAIL, 수정판 `outputs/frame-paint-6134aec5/summary.json`은 전체·부분·추가 출력·표시 지연을 포함한 같은 7회 전환의 중간 그림 0회로 PASS다. 모든 최종 그림 변경·타이머 진행·handler 수 2→2(원래 native+시험 observer)·이후 새로고침 3회의 복원을 확인했다. PNG 기록이 callback을 늦추므로 165회는 실제 화면 fps나 사용자 영상의 빈 프레임 수가 아니다. 이 검사는 데스크톱 캡처·OS 입력·사람의 직접 플레이가 아니다.

원본 레이스 연속 20회 갱신도 중간 그림 0회·모든 최종 그림 변경·native Paint 40회·handler 2→2·이후 새로고침 3회 복원으로 PASS했다(`outputs/frame-paint-9860cf1a/summary.json`). 재현 명령은 `Test-FramePaint.ps1 -OriginalRace`다. 500ms 가상 시간 전진은 격리한 fixture 시험에만 사용하며 별도 실제 실행기 타이머 검사는 실제 경과 시간으로 PASS했다.

0.3.2는 호스트 기본 10개·API 21개·저장 10개·플레이 46개·UI 21개, 입력 출력 4프레임의 미관리 행 0, 입력 루프 7단계와 타이머 tick 1회, 원본 canvas 23개(전체 26회·부분 27회·205행 보존·경고 0), 실행기 7단계를 통과했다. 근거는 [0.3.2 검증 요약](evidence/0.3.2/README.md)에 있다. 같은 배포 구성의 공백 경로 이동 검사에서 원본 화면 23개와 레이스 연속 갱신 20회가 PASS했다. ZIP의 개별 파일 해시는 `package-manifest.json`과 생성 검증 보고서로 확인한다. 레이스·저장·완전 종료·재실행·로드·후속 행동을 포함한 새 전체 직접 시나리오와 실제 음악 청취가 남아 있다.

## 0.3.1 입력·화면 수정의 역사적 근거

사용자는 빈 클릭으로 대사를 넘길 수 없고, 선택할 때 이전 그림·버튼이 겹쳐 남아 레이스 전에 직접 시험을 중단했다. 0.3.1은 선택지가 없는 대사를 `WAIT`/`TWAIT`로 분리해 빈 클릭·Enter를 받고, 값이 필요한 선택·문자열·입력 규칙·현재 URL은 `INPUTS`/`TINPUTS`를 유지한다.

화면 중첩은 실제 `INPUTS`가 입력값을 추가 논리 줄로 출력해 부분 갱신의 삭제 위치를 바꾼 것이 원인이다. 갱신 전에 입력 출력 줄을 제거하도록 수정했다. 원본 모집 화면에서 실제 입력을 통과한 자동 재현은 수정 전 미관리 줄 `[0,1,2,3]`, 수정 후 `[0,0,0,0]`이며 양쪽 입력 출력 `[1,1,1]`줄을 확인해 PASS했다. 21개 호스트 UI 회귀도 PASS다.

일반 `Game.ERB` 입력 루프의 관리형 엔진 검사는 이전 `INPUTS`의 빈 클릭 차단 대조, `WAIT`의 빈 클릭, 시간 초과를 거친 `TWAIT`의 빈 클릭, 실제 번호·`any` 선택·타이머 선택·`Trainer` 문자열과 URL의 값 입력 유지를 통과했다. 이는 격리한 시험 프로세스 내부의 입력 처리 검사이며 OS 입력이나 사람이 클릭한 결과는 아니다.

0.3.0의 23개 canvas·부분 갱신 PASS는 실제 입력 출력을 우회한 역사적 자동 근거다. 아래 구현 범위 표의 기존 수치와 구별한다. 수정 후 전체 직접 플레이·레이스·저장·완전 종료·재실행·로드와 실제 음향 청취가 남아 있다.

## 상태의 의미

- **완전 구현**: 이 표에 적은 기능 범위의 구현과 명시한 검증이 끝났다. 모든 게임 분기의 전수 검증을 뜻하지 않는다.
- **부분 구현**: 구현 소스가 있으며 제한 또는 실행 검증이 남아 있다. 실제 화면 품질이 확정되지 않은 기능도 여기에 포함한다.
- **미구현**: 요청 동작을 아직 제공하지 않는다.
- **미확인**: 사람의 직접 수행 등 해당 검증 결과가 아직 없다.

## 기능별 현황

| 기능 | 상태 | 구현과 검증 범위 | 남은 확인·차이 |
|---|---|---|---|
| 원본 JavaScript 실행 구조 | 완전 구현 | 0.3.3 배포 DLL과 같은 SHA의 호스트 6모드·130검사와 실제 실행기 7단계 PASS. 0.3.2 결과는 역사적 근거 | 모든 분기는 전수 검증하지 않음 |
| 원본 JSON/gzip 저장·로드 | 완전 구현 | 저장 10개·0.3 시나리오 20개·별도 프로세스 복원 5개 회귀 PASS. 실제 Emuera 전체 상태 복원·이후 행동 확인 | 원본 Electron 사용자 세이브의 양방향 교차 검증 미수행 |
| 공식 리소스팩 설치 | 완전 구현 | 공식 20260923 ZIP 설치. ZIP 경계·링크·중복·용량 검사와 제외 목록 기록, 설치·다운로드 명령 제공 | 자원 저작물은 Git에 추가하지 않음; `game/res/` 포함 ZIP 파일 해시·별도 폴더 이동 실행 자동 검사 PASS |
| 원본 리소스 이름·CSV 매핑 | 완전 구현 | `ResourceCatalog.cs`가 보존된 static 매핑과 66개 CSV를 읽음. 이미지 2,786/2,786, 오디오 22/22 연결, 누락·경고 0 | 파일 매핑 완료와 화면 출력·실제 음향 검증은 별개 |
| 자원 미설치 텍스트 fallback | 완전 구현 | 자원 없는 호스트와 실제 Emuera의 같은 23개 canvas 경로 PASS, 새 게임·레이스 진행/재생 포함, 이미지/오디오 0·경고 0 | 사람의 전체 플레이와 구별 |
| 원본 이미지 선택 규칙 | 부분 구현 | `sys-calc-image.js` 등 원본 JS를 그대로 사용. 기존 메타데이터와 이미지 존재 판정 연결 | 계절·장소·의상·레이스에 따른 실제 화면과 선택지 확인 필요 |
| PNG·crop·다중 레이어 sprite 출력 | 완전 구현 | 실제 native UI probe에서 crop·겹침 출력 PASS. 원본 메인·훈련의 실제 테이오 아이콘 확인 | 모든 캐릭터 전신·의상·장소 조합의 직접 확인과 구별 |
| `image` / `image.whole`·캐릭터 전신·의상 | 부분 구현 | 원본 객체의 위치·크기·crop을 전달. 전체 이미지 비율 유지·영역 맞춤 | 모든 우선 화면·창 크기 변화에서 원본 fit의 대응과 전신·의상 확인 필요 |
| 배경·오버레이 | 부분 구현 | native 배경·오버레이에 opacity 적용 | position·fit 전체 구현과 실제 게임 상황별 겹침 확인 필요 |
| GIF | 부분 구현 | 정지 이미지로 표시하는 경로 | 애니메이션 재생은 미구현 |
| JPEG·WebP | 부분 구현 | 실행기의 `ImgUtils.LoadImage` decoder 경로 사용 | 실제 WebP 출력 미확인. 이번 공식 팩은 PNG/GIF/MP3 중심 |
| SVG | 미구현 | 현재 실행 경로에서 지원하지 않음 | 별도 렌더링·변환 없음 |
| 실행기 Sound 재생·정지·반복·정리·음량 | 완전 구현 | 정확한 배포 실행기의 Windows Media Player 변형에서 재생 위치 증가·pause 위치 유지·resume·실제 loop 경계 264.76→약 0.472초·Dispose·재시작 없는 실행 중 음량 변경·오류/경고 0 PASS | 음량 0 자동 시험이며 실제 청취를 뜻하지 않음 |
| BGM·효과음의 실제 청취·상황별 전환 | 부분 구현 | 원본 `playMusic`·`window.audio`를 실행기 Sound에 연결 | 실제 음향 청취·모든 게임 상황별 전환 검증 필요 |
| 오디오 fade 전환 | 미구현 | 원본의 서서히 음량을 바꾸는 전환은 재현하지 않음 | 재생 전환과 구별해 기록 |
| 24열 그리드·다중 열·패널 | 부분 구현 | native UI probe의 열 폭·offset PASS, 원본 메인·훈련에서 4열 메뉴와 아이콘을 실제 canvas PNG로 확인 | 모든 우선 화면·긴 문장·잘림·겹침·스크롤·창 크기 변화의 직접 확인 필요 |
| 색상·기본 정렬·divider·native 버튼 | 완전 구현 | native probe에서 색상·3개 정렬 행·hit ID 1~4·6 PASS, 비활성 5 제외. `isButton:false` 선택지 6의 클릭 연결 유지 | 모든 화면 버튼의 직접 조작과 구별 |
| 서식 텍스트·글꼴 크기 | 부분 구현 | 색·bold·italic 및 크기 다른 비버튼 텍스트의 bitmap 출력 경로 | native 버튼 안의 가변 글꼴·원본 CSS 전체 대응과 전수 검증 남음; CSS hover 미구현 |
| 진행 막대 | 완전 구현 | 원본 value/max로 폭·라벨 구성, native 픽셀 검사 65/0/100%·높이 6px·offset 5개 PASS | 모든 레이스·상태 화면의 직접 확인과 구별 |
| 레이스 결과 그래프 | 부분 구현 | 원본 모든 유효점·숫자 문자열·단계형 계열의 곡선·축·범례 native 출력. probe의 2계열 전체 점 PASS | Chart.js mouseover·주석 미구현; 실제 모든 결과 화면 직접 확인 필요 |
| 레이스 진행·출주자·순위 화면 | 부분 구현 | 원본 레이스 계산과 UI 객체 유지. 0.3.3 원본 canvas 23개·갱신 비용 비교 PASS. 0.3.2 원본 레이스 20회 연속 Paint 검사도 역사적 PASS | 0.3.2 깜빡임 수정 성공·FPS 저하 피드백. 0.3.3 실제 FPS와 전체 직접 확인 대기; 프레임 보간 미구현 |
| URL 객체·기본 브라우저 열기 | 부분 구현 | native URL hit ID -900000과 공식 리소스 URL의 shell 브라우저 실행 자동 검사 PASS | 사람의 URL 버튼 직접 클릭·복귀와 배포·엔진·Wiki 등 다른 링크의 직접 확인 필요 |
| 숫자·문자열·버튼·Enter·취소·뒤로가기 | 부분 구현 | 0.3.1 `Game.ERB` 입력 루프 관리형 검사 PASS: 빈 클릭·타이머·번호·문자열·URL 구분. 0.3.0 직접 실패 기록 보존 | 수정 후 사람이 새 화면의 클릭·입력 일치·타이머 선택지를 직접 확인해야 함 |
| `clear` / `replaceInColRows` 부분 갱신 | 부분 구현 | 같은 정적 선두 행 보존·뒤쪽 native 행 삭제/교체·버튼 세대 재출력. 0.3.0의 23개 canvas에서 자원 있음 전체 27회·부분 27회·205행 보존, 자원 없음 전체 26회·부분 27회·205행 보존 PASS. 0.3.2 Paint 검사 PASS | 전체 교체 경계·창 크기 변경·scroll 위치 직접 확인 대기 |
| 화면 교체 중 paint 제어 | 부분 구현 | 0.3.3 자료 리셋 유지·중간 Refresh 생략·완성 commit 1회. 정상 경로 snapshot 생략·backlog bitmap gate fallback. 9회 전환의 중간 그림 0·handler 2→2·후속 새로고침 3회 PASS | 일반 7회 각 Paint 1회·backlog-full 1회·backlog-partial 2회. 실제 FPS·사람의 전체 직접 확인 대기 |
| 표시 지연·레이스 재생 타이머 | 부분 구현 | `presentationDelays:true`와 원본 다음 deadline 기반 대기·양수 최소 1ms. 0.3.3 타이머 22개·배포 DLL의 최종 호스트 회귀 PASS. 빠른 회귀·가상 시간 전진은 시험 전용 | 사람의 직접 시간·화면 전환 확인 필요 |
| 최신 i18n·언어별 Kojo 구조 보존 | 완전 구현 | 원본 `ere/i18n` 구조와 Kojo 사전 컴파일 흐름 유지. UI 문자열을 게임 JS에서 받음 | 모든 언어·대사의 화면은 전수 확인하지 않음 |
| 독립 추가 언어팩 loader | 완전 구현 | `game/language-packs/<locale>/entry.js`를 읽어 selector 확장. `--ui` 16개에서 locale 추가·두 번역 API·기존 locale 복귀 PASS | 시험용 소형 `ko-KR`만 임시 폴더에서 검사했으며 배포 완역팩은 없음 |
| 신규 `ko-KR` 한국어 완역 | 미구현 | 이번 UI 재작업의 범위에 포함하지 않음 | 미래 언어팩으로 분리하며 구 한국어판 코드를 덮어쓰지 않음 |
| 사람의 전체 플레이 시나리오 | FAIL (0.3.0), 0.3.3 미확인 | 0.3.0 빈 클릭·화면 중첩 중단, 0.3.1 레이스 깜빡임 확인, 0.3.2 깜빡임 수정 성공·FPS 저하 피드백 | 0.3.3 레이스·저장·종료·재실행·로드 포함 전체 직접 검증 전 완료 판정 불가 |

## 공식 자원 확보 증거

원본 게임의 `ere/versions.js`는 `res_version: '20260923'`이다. 공식 다운로드 페이지는 [uma-resource full.html](https://umaera.gitgud.site/data/uma-resource/full.html)이며, 조회 시 Mega 배포 링크로 연결됐다. 같은 공식 저장소에서 확인한 20260923 태그는 `db8aab4015bc137ab02af1dd940e35ab84bd1f22`이다.

설치기는 확인한 [공식 저장소의 LFS 포함 ZIP API](https://gitgud.io/api/v4/projects/43042/repository/archive.zip?sha=20260923&include_lfs_blobs=true)를 사용했다. 게임이 온라인에서 개별 이미지를 자동 다운로드한다고 가정하거나 임의 URL을 만들지 않았다. 원본 메타데이터의 HTTP(S) 경로가 있다면 선택적 캐시를 지원하며, 현재 보존된 static 매핑의 HTTP 경로는 0개다.

| 항목 | 확인값 |
|---|---|
| 원본/리소스 버전 | v3.113 (ryuki) / 20260923 |
| 다운로드 ZIP 크기 | 431,787,981 bytes |
| ZIP SHA256 | `c21debd728dc934c637c93af4ef6b7fa7e0a32177e134b151a2a47036405642b` |
| 설치 파일 수·해제 크기 | 2,859개 / 435,577,015 bytes |
| 실제 파일 구성 | PNG 2,751개, GIF 19개, MP3 21개, CSV 66개, `.nomedia` 1개, 안내 TXT 1개 |
| 이름 기반 연결 | 이미지 2,786개, 오디오 22개. 여러 이름이 같은 파일을 가리킬 수 있음 |
| 매핑 누락·경고 | 이미지 0개 / 오디오 0개 / 경고 0개 |
| 단일 파일 100 MB 초과 제외 | 0개 |
| 자원에 포함하지 않은 개발 파일 | `.gitattributes`, `.gitignore`, `.gitlab-ci.yml`, `ci/release.js`, `package.json`, `pnpm-lock.yaml` |

현재 캐시는 `artifacts/resources/res/`다. 설치·해시·제외 목록은 해당 캐시의 `resource-install.json`, 연결된 이름·crop 정보는 `catalog.json`에 기록했다. 이 파일들은 실행 중 생성되는 캐시이며 원본 이미지·음향을 Git 소스로 포함하지 않는다. 안전 설치 시험은 `res/` 파일만 설치하고 `sav/save1.sav`를 제외했으며 `res/../../sav/save1.sav` 경로를 파일 쓰기 전에 거부했다.

## 0.3.0의 역사적 자동 검증 구분

| 검증 | 현재 결과 |
|---|---|
| 공식 ZIP 다운로드·안전 설치·전체 이름 매핑 | PASS |
| Catalog 독립 컴파일·자원 없는 모드·추가 CSV 별칭 | PASS |
| 0.3.0 기본·API·저장·선정 플레이 호스트 시험 | PASS: 10개·21개·10개·46개 |
| 자원·i18n·UI 호스트 시험 | PASS: `--ui` 16개. 독립 언어팩·전체 dataset·row geometry·입력 세대·실제 표시 지연 타이머 포함 |
| 0.3 시나리오·별도 프로세스 복원 | PASS: 20개·5개 |
| 실제 Emuera 7단계 | 코드 동결 후 같은 플러그인 DLL로 최종 7단계 PASS |
| 실제 native renderer·sprite·URL hit·geometry·chart probe | PASS: 색상·24열·정렬·진행 막대·crop·레이어·2계열 전체 점·버튼 hit ID |
| 진행 막대 native 픽셀 | PASS: 65/0/100%·높이 6px·offset 5개 |
| 원본 우선 화면 canvas PNG·자원 없음 | PASS: 새 게임·레이스 진행/재생을 포함한 같은 23개 화면을 자원 있음/없음 양쪽 검사 |
| 실행기의 Sound 생명주기·실행 중 음량 변경 | PASS: 정확한 실행기의 Windows Media Player 변형에서 재생·pause·resume·loop·Dispose·재시작 없는 음량 변경, 오류/경고 0. 음량 0·청취 미확인 |
| 부분 native 갱신 | PASS: 자원 있음 전체 27회·부분 27회·205행 보존, 자원 없음 전체 26회·부분 27회·205행 보존. 사람의 scroll 확인은 별도 |
| 공식 리소스 URL의 shell 브라우저 실행 | PASS: 원본 `https://umaera.gitgud.site/data/uma-resource/full.html`. 사람의 URL 버튼 직접 클릭·복귀는 미확인 |
| 공식 자원 포함 ZIP 이동 실행 | PASS: 별도 공백 경로에서 7단계 회귀·23개 화면, 전체 ZIP 파일 해시·상대 경로·사용자 저장 미포함 확인 |
| 사람이 직접 확인한 새 UI 전체 시나리오 | FAIL: 0.3.0 빈 클릭·그림/버튼 중첩으로 중단. 0.3.1 레이스 깜빡임 확인; 0.3.2 전체 재검증 미확인 |

0.3.0의 23개 canvas 보고서는 `artifacts/runtime-UiScreens-fce0e490/results/ui-summary.json`(자원 있음)과 `artifacts/runtime-UiScreens-9717a264/results/ui-summary.json`(자원 없음)이다. 당시 native UI·음향 보고서는 작업 폴더의 `outputs/native-ui-audio-0027b902/native-ui-summary.json`이며 재생·일시정지·반복 일시정지 상태의 음량 설정 뒤 같은 Sound 인스턴스와 위치·일시정지·반복 상태가 유지됐다. 당시 최종 회귀와 음향 시험의 플러그인 DLL SHA256은 `A2CD368A8073B05122C005C289D39F07238B9F2ABA4771DA4C4AB97D823F5F25`로 같다. 확정 보고서의 보관 위치는 `docs/evidence/0.3/`다.

이전 사용자의 `5 → Trainer → Finish` PASS는 기존 숫자·문자열·버튼 연결의 근거다. 새 제목부터 레이스와 재실행까지의 메뉴 배치·그림·음악을 직접 확인한 결과로 확대하지 않는다.

직접 확인해야 할 경로는 **타이틀 → 새 게임 → 캐릭터 선택 → 육성 시작 → 메인 → 트레이닝 → 캐릭터 정보 → 외출/상점 → 레이스 등록 → 레이스 → 결과 → 저장 → 프로그램 완전 종료 → 재실행 → 로드 → 후속 행동**이다. 각 단계의 정보 영역·버튼·그림·상태·텍스트·화면 전환을 기록하고, 자동 시험 결과와 직접 확인 결과를 분리해 제출해야 한다.

## 구 한국어판의 취급

`E:/Download/eraumak-main.zip`의 존재와 파일 크기 61,118,473 bytes를 확인했다. 의뢰서에 명시된 v2.210 (agito) 한국어판은 용어·문구·Kojo·과거 UI 참고용이다. 이 기록에서 실행 또는 병합한 것으로 취급하지 않으며, 최신 게임의 실행 기반과 i18n 구조를 변경하지 않는다.

## 최종 산출물의 남은 조건

`Package.ps1`은 설치된 공식 `game/res/`, `game/language-packs/`, 원본 소스·kojo·연결 코드와 문서를 넣고 상대 경로를 기록한다. 설치·재다운로드 명령은 [포트 README](../README.md)와 패키지 README에 있다. 이전 버전의 공식 자원 포함 ZIP 이동 실행·파일 해시 검증은 역사적 근거로 보존하며 0.3.2의 배포 구성도 별도 공백 경로에서 23화면·레이스 20회 갱신을 통과했다. 최신 자동 결과와 별도로 사람의 전체 직접 플레이와 실제 음악 청취 결과가 필요하다. 현재 구현과 자동 canvas 확인만으로 새 UI의 전체 직접 검증 또는 2차 의뢰 최종 완료를 주장하지 않는다.
