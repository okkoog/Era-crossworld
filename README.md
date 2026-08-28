# ERA CrossWorld

ERA CrossWorld는 Emuera.NET 기반의 텍스트/ASCII 중심 게임 프로젝트입니다.

## 현재 단계

**Pre-Prototype / DEV BASE 준비**

본격적인 게임 기능을 구현하기 전, 실제 게임 소스와 공용 코어를 위한 저장소 기반 구조를 준비하는 단계입니다.

## 기반 엔진

- Emuera.NET 1.824 + v24 + EMv18 + EE 계열
- 실제 검증에 사용된 런타임: 실행 화면상 `EEv55.25c23`

## 검증된 항목

기존 `test/`의 런타임 검증 패키지에서 다음 항목을 실제 실행으로 확인했습니다.

- 한국어/일본어/영어 출력
- ASCII 및 전각 문자 폭 처리
- 키보드/클릭 입력
- 10,000 NPC 단순 시뮬레이션
- SAVE/LOAD
- DataTable
- CALLSHARP/C# PluginManager 연동

## 개발 소스 구조

- `game/ERB/`: 실제 게임 ERB 소스
- `game/CSV/`: 실제 게임 CSV 데이터
- `game/resources/`: 실제 게임 리소스
- `core/CrossWorld.Core/`: 향후 C# 공용 코어
- `runtime/`: 런타임 관련 파일
- `plugins/`: 게임용 플러그인
- `tests/`: 향후 테스트
- `tools/`: 개발 도구
- `docs/`: 프로젝트 문서

기존 `test/`는 실행으로 PASS가 확인된 런타임 검증 자료이며, 현재 개발 구조의 `tests/`와 별도로 보존합니다.

## 다음 개발 목표

**CrossWorld DEV BASE 0.1**
