# 원본 엔진 의존성

기준은 `sources/erauma`의 package version 3.1.13이다. 원본은 CommonJS JavaScript이며 webpack 별칭 `#/`는 `ere/`를 뜻한다. `ere/era-electron.js`는 실행 엔진이 아니라 API 형태를 설명하는 스텁이다. 시작점은 `ere/main.js`이다.

## 조사 범위와 결과

3,689개 JavaScript 파일을 조사했다. 사용 API 46종의 호출 지점·파일·행은 `api-inventory.json`, 집계는 `API_USAGE.md`에 있다. SDK 선언 목록, 변수 접두어, 외부 require, 미해결 literal require, 동적 require 후보도 JSON에 포함된다. 문자열 정적 검색이므로 실행 횟수나 완전한 AST 분석 결과가 아니다. 계산된 호출·별칭은 빠질 수 있다.

게임 코드의 literal require는 조사 시 미해결 항목 0개였다. 322개 `.kojo`는 원본 kojo-loader로 JavaScript를 사전 생성한다. 원본 `.kojo`와 JS에는 패치를 가하지 않는다. 자동 생성물은 `artifacts/kojo`에 분리한다.

## 런타임 선택

Jint 4.16.4와 Acornima 1.7.0을 사용한다. 순수 관리 코드이므로 별도 Node 프로세스·Electron·네이티브 V8 배포가 필요 없다. Promise를 계속 실행하려면 매 호출 후 `Engine.Advanced.ProcessTasks()`가 필요하다. 단순 `Execute()`만으로는 입력 후 비동기 게임 진행을 보장하지 못한다.

원본 Era API의 변수·캐릭터·세이브 계산을 재사용하고 화면·입력·파일 접근만 호스트로 연결했다. `fs`, `path`, `compressing`, UTF-8 `Buffer.from`은 원본 API가 사용하는 좁은 범위만 제공한다. 일반 Node.js 호환 계층은 아니다. 저장 경로는 별도 게임 세이브 디렉터리에 제한한다.

## 고정한 자료

| 자료 | 버전/커밋 | 용도 |
|---|---|---|
| Emuera reference source | `25c23dc8f425347738783e5ef322561d48c9f155` | Plugin API 참조 어셈블리 빌드 |
| 실제 실행기 | 저장소 test/ERA_CrossWorld_Runtime_Test_0.4.3의 EE v56 이름 파일 | 동일 바이트 복사 후 실행 검증 |
| EraElectron API | `f77416674ad7370f0b8f20f1a47aa6e27a1dcbc1` | 5개 원본 API 모듈, GPL-2.0 원문 포함 |
| kojo-loader | `a3538cb410d31fa6c5c7827aff01c96021526646` | 빌드 시에만 사용 |
| YAMLJS | 0.3.0 | 빌드 시 YAML 읽기 |
| Jint / Acornima | 4.16.4 / 1.7.0 | 게임 실행, NuGet lock 파일 포함 |

업로드 ZIP에는 `.gitmodules`가 있지만 원래 gitlink 커밋 정보는 없다. 따라서 선택한 엔진 소스가 원본 게임의 정확한 서브모듈 버전이라고 단정하지 않는다. 출처 링크는 `third_party/ere/UPSTREAM.md`에 있다.

`build/static.json` 973,618바이트를 그대로 사용해 CSV의 이름·상수·초기 캐릭터·설정을 보존한다. `engine/common/res` 서브모듈 전체를 받아 Electron을 실행하는 구조가 아니다. 이미지·음성은 이번 검증에서 제외했으며 res는 빈 맵이다. 원본 동작과의 시각적 동등성은 확인하지 않았다.
