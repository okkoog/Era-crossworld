# CrossWorld 개발·검증·승격 규칙

## 디렉터리 역할

- `game/`: 사용자가 실제 Emuera 실행으로 PASS한 마지막 안정 코드
- `dev/runtime/`: 신규 기능을 구현하고 실행 테스트하는 가변 작업장
- `test/ERA_CrossWorld_Runtime_Test_0.1.2` ~ `0.4.3`: 과거 런타임 PASS를 보존하는 기준·증거 자료

## 기본 개발 흐름

1. 신규 기능과 수정은 원칙적으로 `dev/runtime/`에 구현한다.
2. ChatGPT가 GitHub에 반영된 실제 `dev/runtime/` 코드를 정적으로 검수한다.
3. 사용자가 `dev/runtime/`의 Emuera 실행 파일로 직접 테스트한다.
4. 사용자가 실제 실행 결과를 PASS로 확인한다.
5. 별도 Codex 작업에서 검증된 변경만 `game/`에 승격한다.
6. `game/`은 마지막 사용자 PASS 상태를 계속 유지한다.

정적 검수만으로는 `game/` 승격 조건을 충족하지 않는다. 최종 승격 조건은 사용자의 실제 Emuera 실행 PASS다.

## 보호 규칙

- 신규 기능을 `game/`에 직접 구현하지 않는다.
- `test/ERA_CrossWorld_Runtime_Test_0.1.2`부터 `0.4.3`까지의 파일을 수정·삭제·이동하지 않는다.
- `dev/runtime/`은 다음 기능 개발에서 계속 변경할 수 있다.
- 사용자 PASS 전에는 개발 중인 변경을 `game/`의 안정 코드와 섞지 않는다.
- 승격 작업에서는 PASS 범위에 포함된 변경만 옮긴다.

## DEV BASE 0.1 최초 기준점 예외

DEV BASE 0.1은 이 규칙을 도입하기 전에 이미 `game/`에 반영됐다. 따라서 현재 `game/`을 롤백하거나 삭제하지 않고 최초 기준점 후보로 유지한다.

- 사용자 실행 결과가 PASS이면 현재 `game/`의 DEV BASE 0.1을 최초 안정 기준점으로 인정한다.
- 사용자 실행 결과가 FAIL이면 `game/`을 직접 고치지 않는다. 먼저 `dev/runtime/`에서 수정하고, 사용자 PASS 후 별도 작업으로 `game/`에 승격한다.
