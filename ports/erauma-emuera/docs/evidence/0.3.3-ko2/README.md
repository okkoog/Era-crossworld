# 0.3.3-ko2 한국어 언어팩 로딩 수정

기록일: 2026-10-03. 사용자가 ko1 새 게임 도중 `초기값 사용 [2]`에서 중단된 화면을 제공했다. 정확한 ko1 배포 Compatibility DLL로 같은 메뉴 경로를 재현해 `Cannot read property 'get_hair_color' of undefined` 오류를 확인했다. 앞선 ko1 검사는 이름·성별 설정까지만 진행해 외형 확인 단계의 결함을 놓쳤다.

검증 JSON의 일부 날짜 필드는 시험 도구에 고정된 이전 날짜다. 실행 시각의 근거로 사용하지 않으며, 이 기록은 2026-10-03 재개 작업에서 아래 결과와 DLL 해시를 확인하고 취합한 것이다.

`info-generator`가 공통 `extended-def`의 초기화 도중 빈 exports 객체를 보관한 것이 원인이다. 한국어 entry의 Timon 의존성이 기본 selector를 불러오는 단계에서 추가 순환 참조를 만들었다. 수정은 호환 로더의 추가 언어 등록에 한정한다. 언어 이름을 먼저 등록하고 entry는 실행 중 처음 사용될 때 생성한다. 원본 게임·한국어 번역·화면 갱신·레이스 타이머 코드는 바꾸지 않았다.

- `negative-control.json`: ko1 배포 DLL의 실패 경로·오류·해시.
- `korean-pack-summary.json`: 수정된 배포 DLL 자체로 203개 검사 PASS. 추가 언어의 지연 초기화, 한국어 선택·재시작, 기본·무작위·직접 외형 설정과 머리색 앞뒤 변경·재추첨, 새 게임 완료·휴식·저장·새 세션 로드, 기존 4장면의 15개 분기·일본어 fallback·반환값을 확인했다.
- `korean-native-summary.json`: 실제 실행기와 수정된 production Bridge로 36개 검사 PASS. 초기값 선택·최종 확인·메인 화면·휴식 후 복귀까지 현재 입력 세대의 native 버튼·문자열·폭과 canvas를 확인했다.
- `original-ui.json`: 기존 언어와 독립 시험 언어팩·리소스·입력·타이머 UI 21개 검사 PASS.
- `frame-paint-summary.json`: 실제 실행기의 화면 갱신 9전환 PASS. 중간 빈 그림 0, 일반 전환 Paint 1회, handler 2→2 복원.
- PNG 7개: 제목과 복원 제목, 이름·성별, 기본 외형 확인, 메인 화면, 휴식 후 화면. 실행기 내부 software canvas이며 사용자 데스크톱 캡처가 아니다.

번역 소스는 기존과 같은 `9c1b98fb7b0ea0d44d8e83b2e8a2d9ad41675bf9`의 108개 원문과 31개 생성 모듈이다. 검증 원시 폴더는 `outputs/korean-pack-7235541b`(실패), `outputs/korean-pack-72643400`(수정), `outputs/korean-native-e0dfbc1d`와 `E:/Download/erauma-ko2-verification/frame-paint-233baa7b`다. 개인 저장을 사용하지 않았다. 이 결과는 범위를 명시한 자동 회귀 검사이며 전체 직접 플레이나 새 FPS 측정 결과가 아니다.
