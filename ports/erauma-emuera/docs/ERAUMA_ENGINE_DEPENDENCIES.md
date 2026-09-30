# 원본 엔진 의존성과 실행 구조

기준 게임은 보존된 `sources/erauma`, package version **3.1.13**이다. CommonJS 시작점은 `ere/main.js`이며 webpack 별칭 `#/`는 게임 `ere/`, `@/`는 원본 엔진 API에 대응한다. 게임 안의 `ere/era-electron.js`는 API 형태를 설명하는 스텁이다.

## 조사 범위

3,689개 JavaScript 파일을 조사해 게임에서 사용하는 Era API 46종을 찾았다. 호출 지점별 파일·행, SDK 선언, 변수 접두어, 외부 require 및 동적 require 후보는 저장소의 `docs/api-inventory.json`, 집계는 [API_USAGE.md](API_USAGE.md)에 있다. 문자열을 바탕으로 한 정적 검색이므로 수치는 실행 횟수가 아니며 계산된 호출·별칭은 누락될 수 있다.

게임 코드의 literal require는 조사 시 미해결 항목 0개였다. 원본 CommonJS 파일을 필요할 때 읽고 모듈 캐시와 순환 참조를 유지한다. 수천 개의 게임 파일에 import 패치를 가하거나 ERB로 번역하지 않았다. 322개 `.kojo`만 원본 kojo-loader로 JavaScript를 사전 생성해 `artifacts/kojo/`에 분리한다.

## 실행과 빌드 의존성

| 자료 | 고정 버전·커밋 | 역할 |
|---|---|---|
| Emuera reference source | `25c23dc8f425347738783e5ef322561d48c9f155` | Plugin API 참조 어셈블리 빌드 |
| 실제 실행기 | `test/ERA_CrossWorld_Runtime_Test_0.4.3/Emuera.NET 1824+v24+EMv18+EEv56.exe` | 저장소의 실행기와 동일한 바이트를 복사해 실행·배포 |
| EraElectron API | `f77416674ad7370f0b8f20f1a47aa6e27a1dcbc1` | 원본 Era API·변수 처리·상수·유틸리티 5개 모듈 재사용 |
| kojo-loader | `a3538cb410d31fa6c5c7827aff01c96021526646` | 빌드 때만 사용하는 원본 대사 컴파일러 |
| YAMLJS | `0.3.0` | kojo 빌드 때만 사용하는 YAML 파서 |
| Jint | `4.16.4` | C# 내부의 관리형 JavaScript 실행 |
| Acornima | `1.7.0` | Jint가 사용하는 관리형 JavaScript 파서 |

실제 실행기의 SHA256은 `3A0820AD7E333B8CA001690CB1AF02B1FFB7E8C8B863E5951DC8937B995B9C6F`이다. Jint와 Acornima는 `compatibility/packages.lock.json`에 버전·패키지 해시를 고정했다. 호환 계층은 .NET 10, Emuera 플러그인은 .NET 10 Windows를 대상으로 빌드한다. 실행 PC에는 .NET 10 Windows Desktop Runtime이 필요하다.

Jint와 Acornima는 순수 관리 코드이므로 게임을 실행할 때 별도 Node 프로세스·Electron·네이티브 V8가 필요 없다. Node.js는 kojo를 생성할 때만 사용하며 완성된 실행 패키지에는 생성된 JS를 포함한다. 원본 webpack 전체나 Electron UI 시작 코드를 실행하지 않는다.

업로드 ZIP에는 `.gitmodules`가 있지만 원래 gitlink 커밋 정보는 없다. 따라서 위 Era API 커밋을 원본 게임의 정확한 서브모듈 버전이라고 단정하지 않는다. 조사·플레이 검증에 사용한 버전으로 고정하고, 바꿀 때는 다시 검증한다. 원본 API 파일은 upstream 바이트 그대로 보존하며 연결 코드는 `compatibility/game-host.js`에 둔다.

## 호스트 연결

```text
Emuera.NET ERB
  → CALLSHARP EraUmaBridge
  → C# Session / Jint
  → 원본 게임 CommonJS + 원본 Era API
  → 텍스트·번호 버튼·입력·타이머·저장 호스트
```

입력과 타이머를 포함한 모든 JS·Emuera 호출은 같은 ERB 스레드에서 실행한다. 매 호출 뒤 `Engine.Advanced.ProcessTasks()`로 Promise 작업을 처리하고, 입력 대기 중에는 CALLSHARP가 반환된다. 타이머 콜백은 ERB의 주기적인 `tick`에서 처리하므로 다른 스레드가 Jint나 Emuera 화면에 접근하지 않는다.

원본 API가 필요한 범위의 `fs`, `path`, `compressing`, UTF-8 `Buffer.from`을 제공한다. 이는 일반 Node.js 호환 계층이 아니다. 파일 접근은 별도 게임 저장 루트로 제한하고, 모듈 읽기는 지정한 게임·원본 API·생성 kojo 루트 안에서만 허용한다.

`build/static.json` 973,618바이트를 그대로 읽어 CSV에서 생성된 이름·상수·초기 캐릭터·설정을 유지한다. `engine/common/res` 서브모듈 전체를 받아 Electron을 구동하는 구조가 아니며 이미지·음성 리소스 맵은 비어 있다. 텍스트 표시의 차이는 [알려진 제한](ERAUMA_KNOWN_ISSUES.md)에 기록했다.

## 배포와 출처

개발 빌드는 보존된 원본 소스의 로컬 경로를 사용한다. `tools/Package.ps1`은 원본 게임 `ere/`·`static.json`, 원본 Era API, 생성 kojo, 실행기와 필수 DLL을 복사하고 내부 상대 경로를 사용한다. 패키지의 `package-manifest.json`은 포함 파일마다 크기와 SHA256을 기록한다.

원본 게임과 Era API의 GPL-2.0 원문, Jint의 BSD-2-Clause, Acornima의 BSD-3-Clause 및 실행기 라이선스를 패키지에 포함한다. 원본 kojo-loader 커밋에서 명시적인 LICENSE 파일을 찾지 못했으므로 컴파일러 소스는 재배포하지 않고 빌드 의존성의 출처와 커밋을 기록한다. 자세한 링크는 `third_party/ere/UPSTREAM.md`와 `packaging/THIRD_PARTY_NOTICES.md`에 있다.
