# 0.3.3 성능 개선 검증

기록일: 2026-10-02. 같은 원본 레이스와 고정 Emuera.NET 실행기로 0.3.2와 0.3.3을 비교했다. 자동 검사는 사람의 직접 플레이·사용자 화면 FPS·음악 청취를 대신하지 않는다.

## 성능 비교

| 측정 | 0.3.2 | 0.3.3 |
|---|---:|---:|
| 프레임 갱신 중앙값, 각 30개 표본·8회 준비 제외 | 196.78ms | 48.93ms |
| 프레임 갱신 p95 | 225.87ms | 58.85ms |
| 갱신 준비 중앙값 | 113.85ms | 0.0216ms |
| 반복 레이아웃 변환 중앙값 | 17.83ms | 0.55ms |
| 실제 시간으로 진행한 4배속 레이스의 화면 갱신 | 3.37회/초 | 8.74회/초 |

갱신 비용 중앙값은 약 4.02배 개선됐다. 정상 갱신에서 이전 그림을 다시 그려 보관하는 비용을 제거하고 완성된 화면을 한 번 표시한다. 과거 출력으로 스크롤한 경우에는 이전 그림을 보관하는 방식으로 돌아간다. 그림·텍스트 측정 결과를 제한된 크기의 캐시에서 재사용하며 원본 타이머의 다음 실행 시각까지 기다린다. 게임 규칙과 저장 버전 숫자 `3`은 유지한다.

[비교 보고서](performance-comparison.json), [0.3.2 측정](performance-before.json), [0.3.3 측정](performance-after.json)에 바이너리 SHA256과 조건을 기록했다. 실제 시간 측정은 자체 숨긴 창에서 수행했으며 이전 50프레임·이번 38프레임으로 표본 수가 다르다. 입력 대기 진입의 추가 Paint도 남아 있다. 이 수치는 사용자 화면의 FPS나 전용 실행기와의 동등한 비교가 아니며 60FPS 달성을 뜻하지 않는다. 레이스 움직임 보간은 아직 구현하지 않았다.

## 자동 회귀

| 검사 | 결과 | 근거 |
|---|---|---|
| 일반 화면·스크롤 상태 Paint 전환 | PASS: 9전환·중간 그림 0, 처리기 2→2, 이후 새로고침 3회 복원 | [Paint](frame-paint.json) |
| 이미지 캐시 | PASS: 21개, 누적 이미지 720개·128슬롯 교체·행/배경 보존·native unload·배경 크기 변경 | [캐시](image-cache.json) |
| 실제 입력 출력 줄 | PASS: 4프레임의 미관리 행 0 | [입력 출력](input-echo.json) |
| 일반 Game.ERB 입력 루프 | PASS: 7단계, 실제 100ms 타이머 callback 2회 | [입력 루프](continue-input.json) |
| 원본 게임 화면 | PASS: 23화면·전체 26회·부분 27회·205행 보존·경고 0 | [게임 화면](game-ui.json) |
| 호스트 기본/API/타이머/저장/진행/UI | PASS: 10/21/22/10/46/21개, 총 130개 | [호스트](host-regression.json) |
| 고정 실행기 7단계 | PASS: 실제 시간 타이머·레이스·저장·별도 프로세스 복원·정상 종료 | [실행기](native-regression.json) |
| 배포 구성 이동 | PASS: 공백 경로에서 같은 파일로 원본 23화면·레이스 20회 갱신 | [이동 preflight](package-relocation-preflight.json) |
| 원본 레이스 연속 갱신 | PASS: 20전환·Paint 20회·중간 그림 0·모든 최종 그림 변경 | [원본 레이스](original-race-paint.json) |

일반 7회 갱신의 Paint는 각각 1회다. 스크롤 상태의 전체 교체는 1회, 부분 교체는 2회지만 중간 빈 그림은 없다. Paint 검사는 소유한 시험 창의 native callback을 bitmap에 기록하므로 성능 비교와 분리했다. 호스트 검사는 실제 배포 호환 DLL의 읽기 복사본으로 실행했다.

[바이너리 기록](binaries.json)은 시험한 실행기·연결 DLL·부트스트랩을 식별한다. 원본 게임 파일과 공식 자원은 이번 변경 대상이 아니다. 배포 ZIP의 해시 검증 결과는 ZIP 옆 생성 보고서에 별도로 기록한다.

## 재현

```powershell
./tools/Test-RacePerformance.ps1 -RuntimePath ./artifacts/runtime-Game
./tools/Test-FramePaint.ps1
./tools/Test-FramePaint.ps1 -OriginalRace
./tools/Test-ImageCache.ps1
./tools/Test-InputEcho.ps1
./tools/Test-ContinueInput.ps1
./tools/Test-GameUi.ps1
```

레이스 Paint 검사의 가상 시간 전진은 격리한 시험 저장에만 적용한다. 성능 측정의 실제 시간 실행과 고정 실행기 7단계 타이머는 실제 경과 시간을 사용한다. 전체 직접 레이스→저장→종료→재실행→로드→후속 행동과 실제 음악 청취는 아직 미확인이다.
