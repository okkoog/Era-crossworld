# 호환 API와 실행 방식

기록일: 2026-10-02, 포트 0.3.3. 원본 게임에서 사용하는 Era API 46종을 원본 API 구현과 호스트 연결로 처리한다. 데이터·캐릭터·육성·저장 계산은 보존된 v3.113 JavaScript에 맡기고 화면·입력·파일·타이머·자원·종료를 Emuera.NET에 연결한다. API 연결의 존재와 원본 표현의 완전 재현은 구별하며 [UI·리소스 현황](ERAUMA_UI_STATUS.md)에 기능별 검증 범위를 기록한다. 전체 호출 목록은 [API_USAGE.md](API_USAGE.md)에 있다.

## 0.3.3 갱신·캐시·대기 최적화

사용자는 0.3.2에서 깜빡임 수정 성공과 FPS 저하를 확인했다. 0.3.3의 `NativeFrameUpdate.ClearDisplay`는 고정 실행기의 clip history·display list·HTML/escaped 자료·카운터·스크롤 리셋을 동일하게 수행하고 끝의 강제 `window.Refresh`만 생략한다. 행·여백이 완성된 뒤 프레임을 한 번 commit한다. 정상 경로는 이전 canvas snapshot을 만들지 않으며 과거 출력을 스크롤하여 보는 상태에서는 기존 bitmap gate fallback을 유지한다. 게임 규칙과 저장 버전 숫자 `3`은 바꾸지 않는다.

sprite 캐시는 128슬롯으로 제한하고 전체 화면 교체에도 재사용한다. 현재/보존 행·배경의 sprite를 pin하며 삭제된 handle은 확인해 다시 생성한다. 텍스트 크기·font 캐시를 재사용하고 빈 cell은 폭·offset·배치 geometry를 유지하면서 div만 생략한다. `Session`은 같은 `buttonEpoch`에서 중복 `__redraw`를 생략하며 새 입력 세대의 버튼 갱신은 유지한다. 대기는 원본 다음 timer deadline까지 남은 시간을 사용하며 양수 대기는 최소 1ms다.

backlog 2개를 포함한 Paint 9회 전환은 중간 그림 0·handler 2→2·후속 새로고침 3회 복원으로 PASS다(`outputs/frame-paint-0719d439`). 일반 7회는 프레임당 Paint 1회, backlog-full은 1회·backlog-partial은 2회다. 타이머 22개·API 21개·기본 10개도 PASS다(`outputs/adaptive-timer-1790897678741`). 이미지 캐시 21개는 누적 이미지 720개·128슬롯 교체·native unload·삭제된 sprite·배경 크기 변경을 검사했다. 입력 출력 4프레임의 미관리 행 `[0,0,0,0]` (`outputs/input-echo-679f186c`), 일반 게임 입력 루프 7단계·타이머 polling 3회·실제 100ms callback 2회와 원본 canvas 23개(전체 26회·부분 27회·205행 보존·경고 0, `artifacts/runtime-UiScreens-9fcdc744`)도 PASS다.

같은 원본 레이스의 30개 표본·8회 warmup에서 갱신 시간 중앙값은 196.78→48.93ms(4.02배), p95는 225.87→58.85ms, 객체 생성은 113.85→0.0216ms로 줄었다. 별도 4배속 레이스의 숨긴 시험 창에서는 이전 50·이번 38프레임으로 표본 수가 다른 조건에서 3.37→8.74 commits/s를 관찰했고 이번 정상 구간 간격 중앙값은 110.66ms다. HTML parse 15.84ms·native commit 29.01ms와 입력 대기 진입 시 추가 Paint가 남아 있으며 레이스 프레임 보간은 미구현이다. 비교 보고서는 `outputs/race-performance-0.3.3-comparison.json`, 대조·후보는 `outputs/frame-paint-725910d4/summary.json`과 `outputs/frame-paint-b06e86dd/summary.json`이다.

배포 Compatibility DLL과 같은 SHA의 읽기 복사본으로 호스트 6모드·130검사가 PASS했고(`outputs/host-regression-0.3.3-1790905951267/host-regression-summary.json`), 실제 실행기 7단계의 모든 phase도 PASS다(`outputs/native-regression-0.3.3-54a599ed`). 입력 루프의 최종 보고서는 `outputs/continue-input-66b6a031/runtime/continue-input.json`이며 검토용 결과는 `evidence/0.3.3/`에 보존한다. 같은 배포 구성의 공백 경로 이동 검사에서 원본 23화면·레이스 20회 갱신도 PASS다. 근거는 evidence/0.3.3/package-relocation-preflight.json에 있다. 이는 실행기 callback·호스트·숨긴 시험 창의 검사이며 실제 사용자 FPS나 60fps 달성을 뜻하지 않는다. 전체 사람 직접 플레이·실제 음악 청취도 미확인이다. 아래 0.3.2 결과는 역사적 근거로 보존한다.

## CALLSHARP와 상태

ERB는 `EraUmaBridge(action,input,state,message)`를 호출한다. 입력은 문자열이며 `state`와 `message`는 참조 인자다. `game`이 원본 `main.js`를 시작하고, `resume`이 현재 입력 Promise를 완료하며, `tick`은 예정된 타이머 콜백과 Promise를 처리한다. `exit`은 완료된 세션의 Emuera 창을 정상 종료한다.

0.3.1의 `input-kind`는 세 번째 참조 인자에 대사 진행 대기 `1` 또는 값 입력 `0`을 반환하는 읽기 전용 조회다. 세션 상태·입력 Promise·출력 큐를 변경하지 않는다. `Game.ERB`는 세션의 `STATE`와 별도 `INPUT_KIND`를 사용해 클릭·Enter 대기와 문자열 입력을 고른다.

| 상태 | 의미 | 게임 부트스트랩 처리 |
|---|---|---|
| `1` | 입력 대기, 타이머 없음 | `input-kind=1`이면 `WAIT` → 빈 문자열 `resume`, 그 외 `INPUTS` → 입력값 `resume` |
| `4` | 입력 대기, 타이머 있음 | 원본 다음 deadline까지의 `TWAIT` 또는 `TINPUTS`(양수 최소 1ms); 시간 초과 시 `tick`, 제출 시 대사는 빈 문자열·값 입력은 입력값으로 `resume` |
| `3` | 입력 외 타이머 대기 | 원본 다음 deadline까지 `AWAIT`(양수 최소 1ms) → `tick` |
| `2` | 정상 완료 | 마지막 안내 후 bridge `exit`와 ERB `QUIT` |
| `-1` | 호스트·미처리 JS 오류 | 오류 메시지 표시 후 종료 안내 |
| `0` | 위 상태 외 | 오류·완료 안내로 이동 |

JS·플러그인·Emuera API는 같은 스레드에서 호출한다. 입력 대기 중 CALLSHARP가 화면을 점유하지 않는다. 비동기 함수가 중단된 뒤 `Engine.Advanced.ProcessTasks()`로 Promise를 계속 처리한다.

## API 분류

| 범주 | API 예 | 처리 |
|---|---|---|
| 데이터 | `get/set/add`, `resetData`, 캐릭터·훈련 관리 | 원본 Era API와 원본 데이터 표 재사용 |
| 텍스트 | `print`, `println`, `printAndWait`, `drawLine` | 원본의 텍스트·대기 의미를 Emuera 출력으로 연결 |
| 버튼·입력 | `printButton`, `input`, `waitAnyKey` | 번호 버튼·ERB 문자열 입력과 Promise 재개 |
| 저장 | `saveData/loadData/saveGlobal/rmData` | 원본 JSON 구조와 gzip, C# 파일 접근 |
| 배치 출력 | `printMultiColumns`, `printInColRows` | 24열의 폭·offset·중첩 열·정렬·영역 높이를 native HTML 배치로 변환 |
| 화면 갱신 | `clear`, `replaceText`, `replaceInColRows`, `getLineCount`, `setToBottom` | 논리 행을 유지하고 같은 정적 선두 행은 보존, 뒤 행은 native `deleteLine`로 교체 |
| 그래프·알림 | `printLineChart`, `notify` | 원본 전체 dataset의 곡선·축·범례를 bitmap으로 출력, 알림 텍스트 |
| 스타일 | 색상·정렬·폭·오프셋·레이어·진행 막대 | native HTML·sprite로 연결; CSS 전체·픽셀 단위 일치는 보장하지 않으며 CSS hover는 미구현 |
| 리소스 | 이미지 검사·출력, 음악 | 공식 CSV·static 이름 매핑, crop·레이어·배경·오버레이 sprite와 실행기 Sound 연결 |
| 링크 | 원본 텍스트 객체의 `url` | 별도 native 버튼으로 HTTP(S) URL을 기본 브라우저에 연결 |
| 표시 지연 | `delay` | 일반 게임은 실제 타이머 Promise, 빠른 호스트 시험은 표시 지연을 생략 |
| 타이머 | `setTimeout`, `clearTimeout` | 실제 경과 시간, 같은 스레드에서 콜백 실행·취소 |
| 종료 | `quit` | 원본 종료 요청을 정상 완료로 전환하고 부트스트랩에서 Emuera 종료 |

알려지지 않은 모듈·renderer 이벤트·텍스트 객체를 성공하는 빈 구현으로 덮지 않고 오류로 표시한다. 원본이 보고 후 계속 진행하는 저장 실패·없는 kojo 키 등은 진단 메시지로 남기며 그 이유만으로 실행을 중단하지 않는다. 진단은 화면을 다시 그려도 유지하고 최근 128개를 보관한다. 일반 알림은 논리 행 수와 별개로 최근 8개를 보관하고, 다시 그릴 때 10초가 지난 알림을 제외한다.

## 변수 소유권

실제 게임 데이터는 원본 `__game.data`, 전역값은 `__game.global`이 소유한다. 숫자뿐 아니라 문자열·배열·객체를 보존한다. 예를 들어 `global:3`은 언어 문자열이며 Emuera GLOBAL 정수 배열로 강제 변환하지 않는다.

별도 계산 시험 모드의 `global:0`만 Emuera `GLOBAL:0`에 대응한다. 이 매핑은 게임 모드에 적용하지 않는다. 시험 API의 `println(text)`와 원본 API의 `println()`(빈 행)은 구분하며, 게임은 원본 API를 사용한다.

## 입력

게임은 숫자로 변환 가능한 입력을 원본처럼 숫자로 받으며 그 외 입력은 문자열로 받는다. `rule`은 전체 문자열에 맞는 정규식으로 검사한다. 규칙이 없고 번호 버튼이 있으면 현재 활성화된 번호만 받는다. 유효하지 않은 값은 다시 입력받는다. `useRule:false`는 입력 규칙 검사를 해제한다. `any:true`라도 활성 규칙이 있으면 문자열 입력과 해당 검사를 유지한다.

문장 대기는 `any:true`이고 현재 번호 선택지·현재 URL·활성 입력 규칙이 없을 때 `WAIT`/`TWAIT`를 사용한다. 빈 화면 클릭이나 Enter는 빈 문자열로 Promise를 재개한다. 선택·자유 문자열·규칙·URL이 필요한 대기는 `INPUTS`/`TINPUTS`를 사용한다. 일반 선택에서 빈 입력을 제출하면 유일한 선택지가 있을 때 그 번호를 사용하고, 여러 선택지일 때는 선택을 요청한다. 원본 `waitAnyKey`의 `allowWait`, `clear`의 `disableClear`와 대기 여부는 원본 API가 결정한다. 원본 설정과 `hideInput`에 따라 게임의 입력값 표시를 생략한다.

입력을 받으면 이전 선택지를 다시 선택하지 못하게 하고, `disableBefore:false`이면 해당 버튼을 유지한다. 대기 중 타이머가 새 번호 버튼을 추가하면 현재 선택지 목록도 갱신한다. 게임에서 새 입력을 만들면 가장 최근 입력으로 교체한다. 이는 크레딧·레이스 결과가 사용한 원본 방식으로, 이전의 기다리지 않은 입력 Promise는 완료하지 않는다. 별도 시험 API에서는 동시 입력을 오류로 처리해 잘못된 시험을 드러낸다.

Electron의 Shift/연속 진행 키와 UI 자동 넘김은 재현하지 않는다. `isContinue`는 입력 후 false로 돌아가며 플레이어가 빈 화면 클릭·Enter로 문장 대기를 진행한다.

## 화면 행과 타이머

다중 열 하나가 Emuera에서 여러 표시 줄을 사용해도 원본의 `getLineCount`·부분 `clear`에서는 하나의 논리 행으로 취급한다. `replaceText`와 `replaceInColRows`는 마지막 논리 행을 바꾼다. 플러그인은 변경되지 않은 정적 선두 행을 보존하고 뒤쪽 native 행만 `deleteLine`로 교체한다. 버튼·URL이 있는 행은 새 입력 세대의 클릭 판정을 받도록 다시 출력한다. 새 화면의 첫 행부터 모든 행이 바뀌거나 sprite 캐시를 정리할 때는 전체 출력이 필요하다. 이전 입력의 번호 버튼은 비활성화한다. `setToBottom`도 원본 행 수에 맞춰 빈 논리 행을 추가한다.

기본 설정은 1100×800, 글자 크기 18, 행 높이 26이다. 실제 viewport 폭으로 24열의 크기를 계산하고 짧은 화면은 플러그인이 관리하는 빈 행으로 위쪽에 맞춘다. 창 크기와 글꼴 변경, 긴 문장과 큰 화면의 스크롤 위치는 전체 직접 검증을 마치지 않았다.

실제 `INPUTS`/`TINPUTS`는 제출된 값을 native 논리 줄로 출력한다. 이 줄은 원본 게임 화면의 논리 행에 포함되지 않으므로 0.3.1은 마지막 출력 뒤의 native 행 수 차이를 제거한 다음 여백과 교체할 행을 삭제한다. 원본 게임이 자체 설정에 따라 출력하는 입력값은 유지한다. 0.3.0은 이 실행기 출력 줄을 계산하지 않아 입력마다 이전 그림·버튼의 행이 남았고 사용자 직접 시험이 실패했다. 실제 모집 화면 입력 회귀는 수정 전 미관리 줄 `[0,1,2,3]`, 수정 후 `[0,0,0,0]`을 확인해 PASS했다.

0.3.1 사용자 영상에서는 이전보다 부드러워졌다는 피드백과 함께 레이스 canvas 전체가 주기적으로 사라지는 문제가 확인됐다. 60fps·310프레임·5.1667초 중 빈 화면 114프레임(36.8%)·45구간, 구간당 약 17–67ms다. 이는 이전 그림이 계속 남는 중첩 현상과 다른 paint 순서 문제다. 실행기는 이미 double buffering을 사용하며 `api.ClearDisplay` (`EmueraConsole.ClearDisplay`)가 모든 행과 여백의 재출력 전에 강제 paint를 수행하는 것이 원인이다.

0.3.2의 `NativeFrameUpdate` 수정은 행 삭제·출력·여백 조정을 하나의 갱신 범위로 묶는다. 엔진의 `console.SetRedraw(0)` 플래그와 managed `PictureBox.Paint` 처리가 함께 이전 완성 bitmap을 유지한다. 범위를 마치면 handler와 엔진 갱신 상태를 복원하고 완성된 프레임을 강제 출력한다. 일반 버튼·스크롤 처리는 이 범위 밖의 native 경로를 유지한다. 중간 paint 억제·최종 프레임·갱신 복원은 아래 자동 검사에서 통과했으며 전체 직접 플레이는 별도다.

일반 게임은 `presentationDelays:true`로 시작해 표시용 `era.delay()`도 실제 타이머 Promise로 대기한다. 레이스 재생의 연속 프레임을 즉시 끝내지 않고 단계별로 출력·부분 갱신한다. `setTimeout()`의 늦은 선택지도 실제 경과 시간을 유지한다. 일부 이벤트가 10초 뒤 선택지를 추가하므로 타이머를 즉시 실행하면 선택 가능한 내용이 달라지기 때문이다. 0.3.3은 원본 다음 deadline까지 남은 시간으로 ERB 대기를 정하고 양수 대기는 최소 1ms로 유지한다. 콜백이 출력을 바꿨을 때만 다시 출력하며 매 확인마다 화면을 다시 그리지 않는다.

빠른 호스트 회귀는 `presentationDelays:false`가 기본이며 표시 지연을 생략한다. 화면 시험의 `skip-text`·`ui-return-main`·`ui-advance`는 시험용 가상 시간 전진을 사용한다. 실제 사용자용 `Game.ERB`는 가상 시간 전진을 사용하지 않는다. 0.3.2는 `AWAIT 50`·`TINPUTS 50`·`TWAIT 50,0`과 `tick`을 사용했고 0.3.3은 원본 다음 deadline까지의 대기로 실제 시간을 처리한다.

0.3.0의 무인 실행기 타이머 시험은 숨겨진 Windows 창의 `TINPUTS` 타이머가 화면 다시 그리기에 의존하는 점을 피하려고 `AWAIT 50`과 `tick`으로 실제 경과 시간과 늦게 추가된 버튼을 검사했다. 0.3.2 일반 게임은 `TINPUTS 50` 또는 `TWAIT 50,0`을 사용했다. 기존 `AWAIT` 시험을 실제 타이머 입력 조작 검증으로 계산하지 않는다. 0.3.1 입력 루프의 별도 관리형 검사는 아래에 기록한다.

## 0.3.2 화면 교체 검사의 역사적 근거

명령은 `./ports/erauma-emuera/tools/Test-FramePaint.ps1`이다. 정확한 배포 실행기의 Paint callback과 native/수정된 `PictureBox.OnPaint` delegate 연결을 시험 소유 bitmap에 기록한다. 0.3.1 대조 `outputs/frame-paint-6b0c25c1/summary.json`은 7회 전환의 중간 그림 165회로 예상 FAIL, 수정판 `outputs/frame-paint-6134aec5/summary.json`은 전체·부분·추가 출력·표시 지연을 포함한 같은 7회 전환의 중간 그림 0회로 PASS다. 모든 최종 그림이 바뀌었고 `timerAdvanced:true`, handler 수 2→2(원래 native+시험 observer), 이후 새로고침 3회의 복원을 확인했다. PNG 기록이 callback을 늦추므로 165회는 실제 화면 fps나 사용자 영상의 빈 프레임 수가 아니다. 이 시험은 데스크톱 캡처·OS 입력·사람의 직접 플레이가 아니다.

원본 레이스 연속 20회 갱신도 중간 그림 0회·모든 최종 그림 변경·native Paint 40회·handler 2→2·이후 새로고침 3회 복원으로 PASS했다(`outputs/frame-paint-9860cf1a/summary.json`). 재현 명령은 `./ports/erauma-emuera/tools/Test-FramePaint.ps1 -OriginalRace`다. 이 경로는 격리한 fixture 시험에서 500ms 가상 시간 전진을 사용한다. 별도 실제 실행기 7단계의 타이머 검사는 실제 경과 시간으로 PASS했다.

0.3.2는 호스트 기본 10개·API 21개·저장 10개·플레이 46개·UI 21개, 실제 입력 출력 4프레임의 미관리 행 0, 입력 루프 7단계와 타이머 tick 1회, 실제 원본 canvas 23개(전체 26회·부분 27회·205행 보존·경고 0), 실제 실행기 7단계 회귀를 통과했다. 확정 근거는 `evidence/0.3.2/README.md`에 있다. 같은 배포 구성의 공백 경로 이동 검사(23화면·레이스 20회)는 PASS이며 레이스·저장·완전 종료·재실행·로드·후속 행동의 직접 플레이와 실제 음악 청취도 미확인이다.

## 0.3.1 입력·화면 회귀의 역사적 근거

사용자의 0.3.0 직접 시험은 빈 클릭 진행 불가·선택 후 그림/버튼 중첩으로 실패했고 레이스 전에 중단됐다. 0.3.1의 21개 호스트 UI 회귀와 실제 모집 화면의 `INPUTS` 회귀는 PASS다. 모집 화면의 미관리 native 줄은 수정 전 `[0,1,2,3]`에서 수정 후 `[0,0,0,0]`으로 유지되며 양쪽 입력 출력은 `[1,1,1]`줄이다.

`Test-ContinueInput.ps1`은 일반 `Game.ERB` 루프에서 이전 `INPUTS` 빈 클릭 차단 대조, `WAIT` 빈 클릭, 시간 초과 뒤 `TWAIT` 빈 클릭, 번호 7·`any` 선택 8·타이머 선택 9·문자열 `Trainer`과 URL의 값 입력 유지를 통과했다. 격리한 시험 프로세스 내부의 관리형 입력 처리 검사이며 OS 입력이나 사람이 클릭한 결과는 아니다. `Test-InputEcho.ps1`은 실제 모집 화면 입력 출력과 행 소유권을 검사한다. 두 검사는 전체 직접 플레이·실제 음향 청취를 대신하지 않는다. 결과는 `evidence/0.3.1/`에 따로 기록한다.

## 자원·음향·URL·추가 언어

`game-paths.json`의 `resources`는 `res/`를 포함하는 루트를 가리킨다. 배포 패키지의 값은 `game`이다. `ResourceCatalog.cs`는 원본 static과 CSV 이름·crop 메타데이터를 실제 파일에 연결한다. 자원이 없는 경우 빈 맵을 반환해 원본의 텍스트 fallback을 사용한다. 공식 팩의 이미지 2,786/2,786·오디오 22/22·CSV 66개와 누락·경고 0개를 확인했다. 원본에 HTTP(S) 경로가 선언된 경우에만 선택적 캐시를 지원하며 현재 static에는 그런 경로가 0개다. 임의의 이미지 다운로드 URL을 만들지 않는다.

`NativeImages.cs`는 고정 실행기의 `ImgUtils.LoadImage`로 그림을 읽고 crop·위치·다중 레이어·크기 변환 후 sprite로 등록한다. `image.whole`은 전체 그림의 비율을 유지해 영역에 맞춘다. 배경·오버레이는 opacity를 적용하며 위치·fit은 부분 구현이다. PNG 출력과 실제 게임 아이콘을 확인했으며 GIF는 정지 프레임, JPEG는 엔진 decoder 경로를 사용한다. WebP의 실제 출력은 미확인이고 SVG는 지원하지 않는다.

`NativeCharts.cs`는 원본 dataset의 모든 유효한 점을 곡선으로 연결하고 축·범례를 그린다. 원본 레이스의 `toFixed` 숫자 문자열도 읽으며 단계형 계열은 계단식으로 연결한다. 1차판의 요약 수치·최대 9개 표본만으로 끝내는 구현을 교체했다. Chart.js의 mouseover·주석은 미구현이다.

`NativeAudio.cs`는 고정 실행기의 Sound를 호출하고 NAudio mixer 또는 Windows Media Player 연결에서 재생·반복·음량·일시정지·재개·종료를 처리한다. 배포 기준의 정확한 실행기는 SoundMixer가 없는 Windows Media Player 변형이다. 0.3.0 native 시험 `outputs/native-ui-audio-0027b902/native-ui-summary.json`은 재생 위치 증가·일시정지 위치 유지·재개·반복 경계 264.76초→약 0.472초·Dispose와 backend 오류 0·경고 0을 확인했다. 재생·일시정지·반복 일시정지 상태에서 음량 설정을 즉시 적용해도 같은 Sound 인스턴스와 위치·일시정지·반복 상태를 유지하며 재생을 다시 시작하지 않는 검사도 PASS다. 시험 음량은 0이며 실제 청취는 미확인이다. 게임 상황별 모든 전환과 fade의 미구현은 [현황](ERAUMA_UI_STATUS.md)에 구별한다.

원본 URL 객체는 게임 번호와 분리된 음수 버튼 ID(첫 ID `-900000`)를 받는다. HTTP(S)와 자격 정보 없는 주소만 연결하고 클릭하면 기본 브라우저를 연 뒤 게임의 입력 대기를 유지한다. native hit 영역과 원본 공식 리소스 URL `https://umaera.gitgud.site/data/uma-resource/full.html`의 shell 브라우저 실행은 자동 검사에서 PASS다. 사람이 화면의 URL 버튼을 직접 클릭해 브라우저를 열고 복귀하는 시험은 미확인이다.

`languages`는 배포 패키지에서 `game/language-packs`를 가리킨다. `<locale>/entry.js`가 있는 `xx-YY` 형태의 폴더를 읽고 원본 i18n selector를 호환 계층에서 감싸 선택 목록에 추가한다. 기존 locale은 덮어쓰지 않으며 게임 문자열과 언어별 Kojo는 원본 구조를 유지한다. 신규 `ko-KR` 완역은 미구현이다.

## 저장과 종료

게임은 원본 `saveN.sav`, `global.sav` 형식을 사용한다. UTF-8 JSON과 원본 설정에 따른 gzip을 지원하며 임시 파일 기록 뒤 교체한다. C#은 별도 `sav-game/` 아래의 원본 저장 경로만 허용한다. 실행 중 JS 호출 스택은 직렬화하지 않고 원본 로드 흐름이 저장 데이터를 바탕으로 게임 진행을 재구성한다.

`quit()`은 원본처럼 즉시 흐름을 끝내되 정상 종료로 구분한다. `Game.ERB`는 마지막 안내에서 키 입력을 받은 뒤 bridge `exit`를 호출하고 `QUIT`으로 ERB를 끝낸다. `exit`은 Emuera의 현재 UI `SynchronizationContext`에 `Application.ExitThread()`를 예약해 창과 프로세스를 정상 종료한다. 입력·타이머 대기 중에는 이 동작을 거부한다. 이 고정 실행기의 `FORCE_QUIT`만으로는 프로세스가 끝나지 않아 호스트 종료 연결을 사용한다. 자동 시험에서 남은 시험 프로세스를 정리하는 것과 실제 종료 검증은 구별한다.

`start/report/assert-menu/checkpoint-save/checkpoint-load/skip-text/ui-game/ui-return-main/ui-advance/capture/scenario/scenario-restore`는 검증용 동작이다. `skip-text`는 버튼 없는 입력·표시 타이머 대기를 최대 300회 넘기고 `ui-return-main`은 원본의 확인/복귀 선택지만 제한적으로 진행한다. `ui-advance`는 시험 타이머를 500ms 전진한다. 실제 사용자용 `Game.ERB`에서는 사용하지 않는다. `checkpoint-save/load`는 전용 슬롯 6을 사용한 상태 일치 시험이다. `scenario`는 격리한 시험 저장과 원본 훈련·레이스·저장·로드 메뉴를 실행하고 `scenario-restore`는 다른 프로세스에서 슬롯 6을 복원해 다시 행동하는 시험이다.

0.3.0에서 확인된 호스트 결과는 기본 10개·API 21개·저장 10개·플레이 46개·UI 16개, 시나리오 20개·별도 프로세스 복원 5개 PASS다. 실제 게임 canvas는 자원 있음·없음 양쪽의 같은 23개 화면을 통과했다. 자원 있음 `runtime-UiScreens-fce0e490`의 전체 갱신 27회·부분 갱신 27회·205행 보존, 자원 없음 `runtime-UiScreens-9717a264`의 전체 갱신 26회·부분 갱신 27회·205행 보존을 기록했다. 코드 동결 후 같은 플러그인 DLL로 최종 호스트·실제 Emuera 7단계 회귀도 PASS했다. 공식 자원 포함 ZIP의 모든 파일 해시와 공백이 있는 별도 폴더에서의 7단계 회귀·23개 화면도 통과했으며, 이 자동 결과는 전체 직접 플레이 또는 실제 음향 청취 결과가 아니다.
