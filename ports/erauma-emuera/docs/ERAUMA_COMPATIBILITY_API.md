# 호환 API와 실행 방식

원본 게임에서 사용하는 Era API 46종을 원본 API 구현과 호스트 연결로 처리한다. 데이터·캐릭터·육성·저장 계산은 원본에 맡기고 화면·입력·파일·타이머·종료를 Emuera.NET에 연결한다. 전체 호출 목록은 [API_USAGE.md](API_USAGE.md)에 있다.

## CALLSHARP와 상태

ERB는 `EraUmaBridge(action,input,state,message)`를 호출한다. 입력은 문자열이며 `state`와 `message`는 참조 인자다. `game`이 원본 `main.js`를 시작하고, `resume`이 현재 입력 Promise를 완료하며, `tick`은 예정된 타이머 콜백과 Promise를 처리한다. `exit`은 완료된 세션의 Emuera 창을 정상 종료한다.

| 상태 | 의미 | 게임 부트스트랩 처리 |
|---|---|---|
| `1` | 입력 대기, 타이머 없음 | `INPUTS` → `resume` |
| `4` | 입력 대기, 타이머 있음 | 50ms 단위 `TINPUTS`; 시간 초과 시 `tick`, 제출 시 `resume` |
| `3` | 입력 외 타이머 대기 | 50ms `AWAIT` → `tick` |
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
| 배치 출력 | `printMultiColumns`, `printInColRows` | 텍스트·번호 버튼을 행으로 펼침 |
| 화면 갱신 | `clear`, `replaceText`, `replaceInColRows`, `getLineCount`, `setToBottom` | 원본의 논리 행을 보관해 부분 삭제·마지막 행 교체·다시 그리기 |
| 그래프·알림 | `printLineChart`, `notify` | 계열별 시작·종료·최소·최대와 최대 9개 시점의 수치, 알림 텍스트 |
| 스타일 | 색상·정렬·폭·오프셋·레이어 | 시각 효과 생략 |
| 리소스 | 이미지 검사·출력, 음악 | 빈 리소스 맵, 이미지 표식·음악 생략 |
| 표시 지연 | `delay` | 즉시 완료; 텍스트 출력 속도 단순화 |
| 타이머 | `setTimeout`, `clearTimeout` | 실제 경과 시간, 같은 스레드에서 콜백 실행·취소 |
| 종료 | `quit` | 원본 종료 요청을 정상 완료로 전환하고 부트스트랩에서 Emuera 종료 |

알려지지 않은 모듈·renderer 이벤트·텍스트 객체를 성공하는 빈 구현으로 덮지 않고 오류로 표시한다. 원본이 보고 후 계속 진행하는 저장 실패·없는 kojo 키 등은 진단 메시지로 남기며 그 이유만으로 실행을 중단하지 않는다. 진단은 화면을 다시 그려도 유지하고 최근 128개를 보관한다. 일반 알림은 논리 행 수와 별개로 최근 8개를 보관하고, 다시 그릴 때 10초가 지난 알림을 제외한다.

## 변수 소유권

실제 게임 데이터는 원본 `__game.data`, 전역값은 `__game.global`이 소유한다. 숫자뿐 아니라 문자열·배열·객체를 보존한다. 예를 들어 `global:3`은 언어 문자열이며 Emuera GLOBAL 정수 배열로 강제 변환하지 않는다.

별도 계산 시험 모드의 `global:0`만 Emuera `GLOBAL:0`에 대응한다. 이 매핑은 게임 모드에 적용하지 않는다. 시험 API의 `println(text)`와 원본 API의 `println()`(빈 행)은 구분하며, 게임은 원본 API를 사용한다.

## 입력

게임은 숫자로 변환 가능한 입력을 원본처럼 숫자로 받으며 그 외 입력은 문자열로 받는다. `rule`은 전체 문자열에 맞는 정규식으로 검사한다. 규칙이 없고 번호 버튼이 있으면 현재 활성화된 번호만 받는다. 유효하지 않은 값은 다시 입력받는다. `any`나 `useRule:false`로 대기하는 경우에는 제한을 해제한다.

문장 대기는 빈 입력으로 진행한다. 일반 선택에서 빈 입력을 제출하면 유일한 선택지가 있을 때 그 번호를 사용하고, 여러 선택지일 때는 선택을 요청한다. 원본 `waitAnyKey`의 `allowWait`, `clear`의 `disableClear`와 대기 여부는 원본 API가 결정한다. 원본 설정과 `hideInput`에 따라 입력값 표시를 생략한다.

입력을 받으면 이전 선택지를 다시 선택하지 못하게 하고, `disableBefore:false`이면 해당 버튼을 유지한다. 대기 중 타이머가 새 번호 버튼을 추가하면 현재 선택지 목록도 갱신한다. 게임에서 새 입력을 만들면 가장 최근 입력으로 교체한다. 이는 크레딧·레이스 결과가 사용한 원본 방식으로, 이전의 기다리지 않은 입력 Promise는 완료하지 않는다. 별도 시험 API에서는 동시 입력을 오류로 처리해 잘못된 시험을 드러낸다.

Electron의 Shift/연속 진행 키와 UI 자동 넘김은 재현하지 않는다. `isContinue`는 입력 후 false로 돌아가며 플레이어가 Enter로 문장 대기를 진행한다.

## 화면 행과 타이머

다중 열 하나가 Emuera에서 여러 줄로 펼쳐져도 원본의 `getLineCount`·부분 `clear`에서는 하나의 논리 행으로 취급한다. `replaceText`와 `replaceInColRows`는 마지막 논리 행을 바꾸고 전체 텍스트 화면을 다시 그린다. 다시 그릴 때 이전 입력의 버튼은 텍스트로 남겨 클릭을 막는다. `setToBottom`도 원본 행 수에 맞춰 빈 논리 행을 추가한다.

표시용 `era.delay()`의 지연은 생략하지만 `setTimeout()`은 생략하지 않는다. 일부 이벤트가 10초 뒤 선택지를 추가하므로 타이머를 즉시 실행하면 선택 가능한 내용이 달라지기 때문이다. 타이머는 대기 중에도 ERB가 50ms마다 확인한다. 콜백이 출력을 바꿨을 때만 화면을 다시 그려 기존 선택지와 늦게 추가된 선택지를 같은 활성 버튼 화면에 넣는다. 매 확인마다 화면을 다시 그리지는 않는다. 테스트의 가상 시간 전진은 시험용이고 일반 게임은 실제 시간을 사용한다.

무인 실행기 타이머 시험은 숨겨진 Windows 창의 `TINPUTS` 타이머가 화면 다시 그리기에 의존하는 점을 피하려고 `AWAIT 50`과 `tick`으로 실제 경과 시간과 늦게 추가된 버튼을 검사한다. 일반 게임은 보이는 창에서 `TINPUTS 50`을 사용한다. 이 무인 시험을 실제 `TINPUTS` 입력 조작 검증으로 계산하지 않는다.

## 저장과 종료

게임은 원본 `saveN.sav`, `global.sav` 형식을 사용한다. UTF-8 JSON과 원본 설정에 따른 gzip을 지원하며 임시 파일 기록 뒤 교체한다. C#은 별도 `sav-game/` 아래의 원본 저장 경로만 허용한다. 실행 중 JS 호출 스택은 직렬화하지 않고 원본 로드 흐름이 저장 데이터를 바탕으로 게임 진행을 재구성한다.

`quit()`은 원본처럼 즉시 흐름을 끝내되 정상 종료로 구분한다. `Game.ERB`는 마지막 안내에서 키 입력을 받은 뒤 bridge `exit`를 호출하고 `QUIT`으로 ERB를 끝낸다. `exit`은 Emuera의 현재 UI `SynchronizationContext`에 `Application.ExitThread()`를 예약해 창과 프로세스를 정상 종료한다. 입력·타이머 대기 중에는 이 동작을 거부한다. 이 고정 실행기의 `FORCE_QUIT`만으로는 프로세스가 끝나지 않아 호스트 종료 연결을 사용한다. 자동 시험에서 남은 시험 프로세스를 정리하는 것과 실제 종료 검증은 구별한다.

`start/report/assert-menu/checkpoint-save/checkpoint-load/skip-text/scenario/scenario-restore`는 검증용 동작이다. `skip-text`는 버튼 없는 입력 대기를 최대 100회 넘기며 실제 사용자용 `Game.ERB`에서는 사용하지 않는다. `checkpoint-save/load`는 전용 슬롯 6을 사용한 상태 일치 시험이다. `scenario`는 격리한 시험 저장과 원본 훈련·레이스·저장·로드 메뉴를 실행하고 `scenario-restore`는 다른 프로세스에서 슬롯 6을 복원해 다시 행동하는 시험이다.
