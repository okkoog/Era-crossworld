# 호환 API와 실행 방식

ERB의 `EraUmaBridge(action,input,state,message)`는 입력 문자열과 상태·오류 참조를 사용한다. 상태는 1=입력 대기, 2=정상 완료, -1=오류, 0=기타다. `game`으로 원본을 시작하고, ERB `INPUTS`가 반환된 뒤 `resume`으로 중단된 Promise를 이어 간다. JS·플러그인·Emuera API는 같은 스레드에서 호출한다. 입력 대기 중 CALLSHARP를 점유하지 않는다.

## API 분류

| 범주 | API | 처리 |
|---|---|---|
| 데이터 | get/set/add, resetData, 캐릭터·훈련 관리 | 원본 Era API·테이블 재사용 |
| 텍스트 | print, println, printAndWait, drawLine | Emuera 출력으로 변환 |
| 버튼·입력 | printButton, input, waitAnyKey | 정수 버튼과 ERB INPUTS, Promise 재개 |
| 저장 | saveData/loadData/saveGlobal/rmData | 원본 JSON 구조, 선택적 gzip, C# 파일 처리 |
| 배치 출력 | printMultiColumns, printInColRows | 행으로 펼친 텍스트·버튼 |
| 갱신 | replaceText/replaceInColRows | 현재는 추가 출력; 제자리 교체 아님 |
| 그래프·알림 | printLineChart, notify | 그래프 데이터 JSON·알림 텍스트 |
| 스타일 | 색상·정렬·폭·오프셋·레이어 | 현재는 시각 효과 생략 |
| 리소스 | 이미지, 음악 | 리소스 미로딩, 이미지 표식·음악 없음 |
| clear | 부분 삭제 포함 | 현재는 전체 화면 삭제; 행 기반 의미 불일치 |
| delay | 표시 지연 | 생략; 게임 수치 연산은 원본에 맡김 |
| quit | 원본 종료 API | JS 세션 정상 완료로 연결; 실제 메뉴 종료 흐름은 미검증 |

지원하지 않는 renderer 이벤트·텍스트 객체·모듈은 오류로 드러낸다. 모든 API를 무조건 성공시키는 빈 구현으로 덮지 않는다. 위 표의 명시된 표현 기능만 생략한다.

## 변수 소유권

실제 게임 데이터는 원본 `__game.data`, 전역값은 `__game.global`이 소유한다. 문자열·배열·객체를 유지한다. 예를 들어 `global:3`은 언어 문자열이다. ERA의 GLOBAL 정수 배열로 모든 값을 강제 변환하지 않는다.

별도 **계산 시험 모드**의 `global:0`만 Emuera `GLOBAL:0`에 대응한다. 게임 모드에서는 이 매핑을 적용하지 않는다. 시험 API의 `println(text)`와 원본 API의 `println()`(빈 행 출력)은 서로 다르며, 게임은 원본 API를 사용한다.

## 저장과 비동기

게임 저장은 원본 `saveN.sav`, `global.sav` 형식을 사용한다. 저장은 UTF-8 JSON 또는 원본 설정에 따른 gzip이며 임시 파일을 기록한 뒤 교체한다. 게임 종료 시 실행 중이던 JS 호출 스택은 직렬화하지 않는다. 불러온 데이터를 바탕으로 원본 게임의 로드 흐름을 다시 시작해야 한다.

입력 문자열은 숫자로 변환 가능한 경우 숫자로 돌려준다. 정규식 규칙을 적용하며 맞지 않으면 입력 대기를 유지한다. 자동 입력·즉시 진행 플래그, 키 입력 종류, hideInput 표현은 아직 원본과 완전히 동일하지 않다. 재진입·동시에 두 입력 Promise 생성은 오류로 처리한다.

`start/report/assert-menu/checkpoint-save/checkpoint-load/skip-text`는 검증용 bridge 동작이다. `skip-text`는 버튼 없는 입력 대기를 최대 100회만 넘긴다. 실제 사용자용 `Game.ERB`는 이 자동 넘김을 사용하지 않는다.
