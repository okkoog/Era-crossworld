# ko3 구버전 한국어 재사용 전수조사

기준 브랜치: `main`
감사 시작일: 2026-10-07

## 목적

현재 live ko3를 기준으로 다음 3개를 비교해, **구버전 한국어 자료가 존재하지만 현재 ko3에 아직 반영되지 않은 분량**을 분리한다.

1. 구버전 한국어: `sources/eraumak_kr_2.21/game/...`
2. 현재 일본어: `sources/erauma/ere/i18n/ja-JP/...`
3. 현재 live ko3: `translations/erauma-0.3.3-ko3-translation-files/files/sources/erauma/ere/i18n/ko-KR/...`

현재까지 작업자가 완료한 번역/포팅은 live ko3 상태를 기준으로 제외한다.

## 전체 작업 목록 기준

`FILES.md` 기준:
- 작업 파일: **301개**
- 기재된 대상 파트: **4,529개**

분류:
- general-i18n: 9파일 / 930파트
- daily: 40파일 / 698파트
- entry: 86파일 / 277파트
- ero: 22파일 / 285파트
- edu: 39파일 / 1,431파트
- love: 37파일 / 247파트
- rec: 33파일 / 82파트
- base: 9파일 / 108파트
- timon: 26파일 / 471파트

> FILES.md 숫자는 생성 당시 목록이므로 현재 live 마커와 다를 수 있다. 실제 판정은 각 live 파일의 마커/본문 상태가 우선이다.

## 1차 확정: kojo daily/rec 재사용 기록

다음 상태만 집계했다.
- `old_hook_correspondence_requires_external_adapter`
- `old_section_correspondence_requires_external_adapter`
- `source_found_control_or_dynamic_structure_changed_requires_external_adapter`

의미: **구버전 한국어 대응 자료/훅/섹션이 확인됐으나 구조·동적 문자열 차이 때문에 자동 이식하지 않고 외부 작업으로 넘긴 항목.**

기록 파일:
- `REUSE_DAILY_BATCH_05.json`
- `REUSE_DAILY_BATCH_06.json`
- `REUSE_DAILY_BATCH_07.json`
- `REUSE_DAILY_BATCH_08.json`
- `REC_APPLICATION_01.json`
- `REC_APPLICATION_02.json`

중복 `target + key` 제거 후:
- **516파트**
- **30파일**

상태별:
- old hook correspondence: **345**
- old section correspondence: **45**
- control/dynamic structure changed: **126**

### 현재 live ko3 대조 결과

516파트를 현재 live ko3와 다시 대조:
- **아직 [번역 대상]: 413파트**
- **이미 [번역 완료]: 90파트**
- **마커 없음/별도 상태: 13파트**

따라서 **현재 시점에서 확정적으로 "구버전 KR이 존재하지만 live ko3에 아직 미반영"인 최소 수량은 413파트**다.

마커 없음 13파트는 별도 본문 검사를 통해
- 이미 한국어가 들어가 마커가 필요 없는 상태인지
- inherited override인지
- 실제 누락인지
를 추가 판정해야 한다.

### 이미 완료되어 제외되는 대표 사례

- Symboli Rudolf `daily-17.js`: 기록 46파트 중 현재 40 완료 + 6 무마커
- Agnes Digital `daily-19.js`: 기록 22파트 전부 현재 완료
- Dream Journey `daily-119.kojo`: 기록 4파트 전부 현재 완료
- Air Shakur `rec-36.kojo`: 기록 3파트 전부 현재 완료
- Narita Taishin `rec-50.kojo`: 기록 2파트 전부 현재 완료
- Matikanefukukitaru `rec-56.js`: 기록 1파트 완료
- Wonder Acute `rec-100.js`: 기록 1파트 완료

## timon 기록에서 확인된 별도 문제

`REUSE_HANDOFF_STATUS.json` 자체가 다음을 명시한다.
- `classificationIsFullTranslation: false`
- `freshKoreanProseWritten: false`
- 구조가 달라진 일부는 current Japanese fallback / external translation-adaptation handoff로 남김.

즉 kojo daily/rec뿐 아니라 timon에도 **구버전 KR 존재 + 부분 재사용 + 남은 일본어 fallback** 사례가 있다.

대표:
- `timon/base.js`: 3 full reuse + 9 partial reuse. 부분 재사용 항목에는 구버전 KR 일부가 대응하지만 구조가 달라 현재 일본어가 남은 구간 존재.
- `timon/daily.js`: 일부 full/partial reuse와 구조 fallback 기록 존재.
- `timon/edu.js`: 4개 항목이 partial neutral reuse로 분류됨.
- `timon/sex/ero-common.js`, `ero-rape.js` 등도 구버전 소스 메타데이터 대응은 확인되었으나 일부 current Japanese fallback 유지 기록이 존재.
- `timon/mejiro/cum.js`: 구조/의미 차이 때문에 직접 재사용하지 않은 항목 기록 존재.

이 영역은 **"구버전 KR 존재하지만 실제 문자열을 안전하게 재사용할 수 있는가"**와 **"구버전에는 비슷한 자료만 있고 현재 의미가 달라 신규 번역이 필요한가"**를 분리해서 재판정해야 하므로, 위 413과 아직 합산하지 않았다.

## 다음 조사 단계

1. 위 516 중 **무마커 13파트** 본문 판정.
2. `timon`의 partial reuse / fallback 항목을 현재 live ko3와 대조하여
   - 구버전 KR 실질 미반영
   - 의미 변경으로 재사용 불가
   - 이미 반영됨
   로 분리.
3. 기존 kojo reuse 기록이 없는 영역 전수 대조:
   - `base`
   - `edu`
   - `love`
   - `ero`
   - 기록 밖의 `daily/rec`
4. 각 파트별로 최종 4분류:
   - **A: 구버전 KR 완전 반영**
   - **B: 구버전 KR 일부 반영 / 일부 미반영**
   - **C: 구버전 KR 존재 / 현재 미반영**
   - **D: 대응 구버전 KR 없음 / 신규 번역 필요**

## 현재 결론

전수조사 완료 전 최소 확정치:
- **C 또는 B에 해당한다고 기존 기록이 명시한 항목: 516파트 / 30파일**
- 그중 **현재 live ko3에서 명백히 아직 [번역 대상]인 항목: 413파트**
- 이 숫자는 `edu/love/ero/base` 등 기록이 없는 영역을 아직 포함하지 않은 **최소치**다.
