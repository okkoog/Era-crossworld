# 0.3.2 화면 갱신 수정의 검증 근거

기록일: 2026-10-01. 0.3.1 사용자 영상에서 확인한 레이스 깜빡임과 0.3.2 화면 갱신 수정의 자동 결과를 구별한다. 배포 구성 이동 검사도 PASS했으며 사람의 전체 직접 플레이·실제 음악 청취는 아직 미확인이다.

## Paint 검사 비교

| 검사 | 화면 전환 | 중간 그림 | 결과 | 보고서 |
|---|---:|---:|---|---|
| 0.3.1 대조 | 7회 | 165회 | 예상 FAIL: 중간 그림 노출 재현 | [수정 전](frame-paint-before.json) |
| 0.3.2 수정판 | 7회 | 0회 | PASS: 모든 최종 그림 변경·타이머 진행·handler/새로고침 복원 | [수정 후](frame-paint-after.json) |
| 0.3.2 원본 레이스 | 연속 20회 | 0회 | PASS: native Paint 40회·모든 최종 그림 변경·정상 복원 | [원본 레이스](original-race-paint.json) |

정확한 배포 실행기의 Paint callback과 등록된 native/수정된 `PictureBox.OnPaint` delegate 연결을 시험 소유 bitmap에 기록했다. 7회 전환은 전체 교체·부분 갱신·추가 출력·표시 지연을 포함한다. 수정 후 handler 수는 2→2(원래 native+시험 observer)이며 이후 새로고침 3회가 정상 처리됐다. PNG 기록이 callback을 늦추고 스트레스 경우는 시험 소유 console의 프레임 제한만 0으로 설정하므로 165회는 실제 화면 fps나 사용자 영상의 빈 프레임 수가 아니다. 데스크톱 캡처·OS 입력·사람의 직접 플레이로 취급하지 않는다.

원본 레이스 시험은 격리한 fixture에서 500ms 가상 시간 전진으로 연속 20회 갱신했다. 각 강제 clear에서는 이전 완성 그림을 유지하고 마지막에는 새 완성 그림을 출력했다. 실제 경과 시간은 별도 실행기 7단계의 타이머 시험에서 통과했다.

```powershell
./ports/erauma-emuera/tools/Test-FramePaint.ps1
./ports/erauma-emuera/tools/Test-FramePaint.ps1 -OriginalRace
```

## 다른 자동 회귀

| 검사 | 결과 | 보고서 |
|---|---|---|
| 배포 구성 이동 | PASS: 공백 경로·23화면·원본 레이스 20회, 중간 그림 0 | [이동 사전 검사](package-relocation-preflight.json) |
| 호스트 기본·API·저장·플레이·UI | PASS: 10개·21개·10개·46개·21개 | [호스트 회귀](host-regression.json) |
| 실제 입력 출력·행 소유권 | PASS: 4프레임의 미관리 행 0 | [입력 출력](input-echo.json) |
| 일반 게임 입력 루프 | PASS: 7단계와 타이머 tick 1회 | [입력 루프](continue-input.json) |
| 원본 게임 canvas | PASS: 23화면·전체 26회·부분 27회·205행 보존·경고 0 | [게임 화면](game-ui-res.json) |
| 실제 실행기 회귀 | PASS: 7단계. 실제 경과 시간 타이머·레이스·저장·재시작 복원·정상 종료 포함 | [실행기 회귀](native-regression.json) |

시험 바이너리의 식별값은 [바이너리 기록](binaries.json)에 있다. 이 값은 새 배포 ZIP의 SHA256을 뜻하지 않는다.

## 사용자 영상과 화면 예시

0.3.1 사용자 영상은 60fps·310프레임·5.1667초다. canvas 전체가 주기적으로 비는 구간 45회·114프레임(36.8%), 구간당 약 17–67ms를 확인했다. 사용자는 이전보다 부드러워졌다고 보고했으며, 영상의 짧은 전체 화면 소실을 이전 그림이 계속 남는 중첩 현상과 구별한다. 수치와 분석 범위는 [사용자 영상 분석](user-video-analysis.json)에 있다.

사용자 영상의 빈 화면 예시:

![0.3.1 사용자 영상의 빈 화면](user-video-blank-frame.png)

아래는 자동 Paint 검사의 시험 bitmap이며 데스크톱 캡처가 아니다.

- [0.3.1 중간 빈 그림](screen-blank-before.png)
- [0.3.2 교체 중 유지한 이전 그림](screen-retained-after.png)
- [0.3.2 교체 후 완성 그림](screen-complete-after.png)

## 남은 확인

같은 배포 구성의 공백 경로 이동 검사에서 원본 화면 23개와 레이스 연속 갱신 20회가 PASS했다. ZIP의 개별 파일 해시는 `package-manifest.json`과 생성 검증 보고서로 확인한다. 레이스 → 저장 → 완전 종료 → 재실행 → 로드 → 후속 행동의 사람 직접 결과와 실제 음악 청취도 필요하다. 자동 PASS만으로 전체 UI 포팅을 완료로 표시하지 않는다.
