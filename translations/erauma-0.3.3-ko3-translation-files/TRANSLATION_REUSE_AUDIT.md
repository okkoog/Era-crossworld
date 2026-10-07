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

무마커 13파트를 본문까지 재검사한 결과:
- **12파트는 이미 한국어 override가 실제 반영된 상태**였고 마커만 없었다.
- **1파트 — `Daiichi-Ruby/rec-85.js: rec_start` — 는 override가 없어 일본어 상속 상태**였다.

따라서 이 기록 범위 516파트의 현재 상태는:
- **미반영/작업 필요: 414파트**
- **이미 반영: 102파트**

즉 kojo daily/rec 기록만으로도 **구버전 KR이 존재하지만 live ko3에 아직 반영되지 않은 최소 414파트**가 확정된다.

### 이미 완료되어 제외되는 대표 사례

- Symboli Rudolf `daily-17.js`: 기록 46파트 중 현재 40 완료 + 6 무마커
- Agnes Digital `daily-19.js`: 기록 22파트 전부 현재 완료
- Dream Journey `daily-119.kojo`: 기록 4파트 전부 현재 완료
- Air Shakur `rec-36.kojo`: 기록 3파트 전부 현재 완료
- Narita Taishin `rec-50.kojo`: 기록 2파트 전부 현재 완료
- Matikanefukukitaru `rec-56.js`: 기록 1파트 완료
- Wonder Acute `rec-100.js`: 기록 1파트 완료

## timon 기록 전수 재검사

`REUSE_HANDOFF_STATUS.json` 자체가 다음을 명시한다.
- `classificationIsFullTranslation: false`
- `freshKoreanProseWritten: false`
- 구조가 달라진 일부는 current Japanese fallback / external translation-adaptation handoff로 남김.

29개의 `timon/REUSE_*.json`과 `timon/PENDING_REUSE.md`를 live ko3에 다시 대조했다.

### 명시적 partial reuse

표준 residual 기록에서 **35키**가 partial reuse로 명시되어 있었다.
- live에서 아직 `[번역 대상]`: **27**
- 이미 `[번역 완료]`: **8**

### 구버전 KR은 있으나 구조 차이 때문에 통째 fallback

daily/edu 기록에서 문자열 분할·배열 경계·동적 삽입 차이 때문에 직접 이식하지 않은 키:
- `timon/daily.js`: **14**
- `timon/edu.js`: **1**
- 합계 **15**, 전부 현재 `[번역 대상]`.

### 비표준 handoff 기록

`PENDING_REUSE.md`에 별도 서술로 남은 구조 불일치/부분재사용 항목 **85키**를 live에 대조:
- `[번역 대상]`: **72**
- `[번역 완료]`: **11**
- 무마커: **2**

무마커 2개 `pregnant-slave.js: punish_first / punish`를 직접 확인한 결과 실제 한국어 override 안에 일본어 잔여가 남아 있어 둘 다 **부분 미반영**으로 판정.

따라서 이 묶음의 현재 작업 필요 수는 **74키**.

### sex/system 엄격 구조 불일치

구버전 한국어 동적 조각/템플릿이 실제 존재하지만 3.113이 전용 고정 문자열로 분리·일반화하여 재조합을 포기한 것만 엄격히 추출:
- `get_chara_have_liquid`
- `unsatisfied_nipple`
- `unsatisfied_hidden_nipple`
- `unsatisfied_sadism`
- `unsatisfied_sadism_zero_stamina`
- `unsatisfied_masochism`
- `unsatisfied_masochism_zero_stamina`

**7키**, 전부 현재 `[번역 대상]`.

### mejiro/cum 엄격 구조 불일치

값/의미 자체가 바뀐 항목과 중국어 혼합 항목은 제외하고, 기존 한국어의 분할·병합·동적 문구 일반화 때문에 못 넣은 것만 추출:
- `calling_buttons`
- `get_header`
- `city_bs_ero_deeper`
- `city_bs_ero_deeper_limit_tip`
- `city_bs_ero_shallower`
- `city_bs_ero_shallower_limit_tip`
- `city_mg_trained_talent_template`

**7키**, 전부 현재 `[번역 대상]`.

### timon 엄격 확정치

현재 live에서 구버전 한국어 대응/조각이 존재하면서 구조 차이 때문에 일본어가 남아 있는 것으로 엄격히 확정한 항목:
- 표준 partial: **27**
- 구조 full fallback: **15**
- 비표준 handoff partial/fallback: **74**
- sex/system 구조 후보: **7**
- mejiro/cum 구조 후보: **7**

합계 **130 작업 단위**.

중요: 구버전 파일은 있으나 실제 해당 문장이 중국어뿐이거나, 숫자/의미/의도 자체가 바뀐 항목은 이 130에서 제외했다.

## 기록 밖 kojo 영역의 실제 후보 풀

구버전 이벤트 파일의 존재 여부를 현재 파일명의 이벤트 ID(`edu-19`, `love-19` 등) 기준으로 다시 매핑했다.

### edu
- 39 작업 파일 중 **34파일**에 대응하는 구버전 edu/edu-events 자료가 존재.
- 그 34파일의 현재 live `[번역 대상]`: **819파트**.

### love
- 37 작업 파일 중 **32파일**에 대응하는 구버전 love 자료가 존재.
- 그 32파일의 현재 live `[번역 대상]`: **171파트**.

### ero
- 22 작업 파일 중 **19파일**에 대응하는 구버전 ero 자료가 존재.
- 그 19파일의 현재 live `[번역 대상]`: **215파트**.

따라서 기록이 없는 kojo 영역에서 앞으로 실제 3자 대조해야 하는 후보는:

**819 + 171 + 215 = 1,205파트**

이 **1,205는 미반영 확정치가 아니다.** 구버전 대응 파일이 존재하면서 현재 아직 target인 실제 후보 풀이다. 각 파트별로 old KR ↔ current ja-JP ↔ live ko3 대응을 확인해야 한다.

`base`는 구버전의 동일 `event/base/base-ID` 경로가 없으므로 별도 소스 영역 매핑이 필요하며, 단순히 “구버전 없음”으로 판정하지 않는다.

## 기록 밖 edu 실제 3자 대조 — 1차 확정

현재 live `[번역 대상]`과 구버전 KR 이벤트를 실제 파트 단위로 대조했다. 단순히 같은 ID의 구버전 파일 존재 여부가 아니라, 이벤트 제목·순서·본문을 확인해 대응을 확정한 항목만 아래 수치에 포함한다.

### 이미 live 완료되어 감사 대상에서 제외

`FILES.md`에는 target가 남아 있으나 실제 live ko3에서 target 0인 앞쪽 파일:
- Silence Suzuka `edu-2.kojo`
- Tokai Teio `edu-3-give-up.js`, `edu-3-hurt.js`, `edu-3.js`
- Maruzensky `edu-4.js`
- Oguri Cap `edu-6.kojo`
- Gold Ship `edu-7.js`
- Mejiro McQueen `edu-13.kojo`
- Symboli Rudolf `edu-17.js`

따라서 이들은 현재 미반영 수에 다시 포함하지 않는다.

### Agnes Digital `edu-19.js`

- live target: **32**
- 구버전 KR 대응 확정: **31**
- **C: 31**
- `ws_palace` 1개는 구버전 전체에서 제목 `世界の旅人`, 등장인물 조합 및 クロフネ/Kurofune 관련 대응을 찾지 못해 **D 후보**로 분리.
- 31개 C 파트는 현재 블록에 한국어 prose string이 없고 일본어가 그대로 남아 있으며, 구버전 대응 이벤트에는 한국어 본문이 존재한다.

### Seiun Sky `edu-20.kojo`

구버전 edu 트리 전체에 ID 20의 `edu-20` / `edu-events-20`가 존재하지 않는다. 따라서 현재 56파트는 이번 “구버전 KR 미반영” 확정치에서 제외하고 **D 측 후보**로 분류한다.

### Tamamo Cross `edu-21.kojo`

현재 22 target를 구버전의 한국어 이벤트 제목과 의미·본문으로 직접 매핑:
- **C: 22**
- B: 0

22개 모두 current visible Korean prose가 없고 일본어가 남아 있으며, 대응 구버전 섹션에는 한국어 본문이 존재한다.

### Mejiro Palmer `edu-64.kojo`

현재 79 최상위 섹션, 구버전 74 섹션. 현재판에서 별도 분리된 `*_notify` 5개를 제외하면 나머지 74개가 구버전 74개와 순서·내용상 대응한다.

직접 대응되는 74 target의 판정:
- **B: 5**
- **C: 69**

B 5개:
- `train`
- `summer_sex_end`
- `ak_c46_hug_sex_end`
- `ak_c46_kiss_sex_end`
- `party_sex_end`

추가 분리 target인 `important_place_notify`, `golf_notify`, `lottery_notify`, `hot_spring_notify` 4개는 구버전의 본 이벤트에서 분리된 조각인지 추가 판정이 필요하므로 아직 확정치에 넣지 않는다. `rain_notify`는 현재 target가 아니다.

### Mejiro Ardan `edu-71.kojo`

현재 33 최상위 섹션 ↔ 구버전 33 섹션이 순서·이벤트 의미상 대응한다. 현재 target 32개 모두 구버전 한국어 본문이 존재한다.

- **B: 27**
- **C: 5**

C 5개:
- `beginning`
- `beginning2`
- `gap`
- `together`
- `separate_way`

### Mejiro Bright `edu-74.kojo`

현재 target 24개가 구버전에서 같은 이벤트 키로 모두 존재한다.
- **B: 24**
- C: 0

각 현재 target 블록에 한국어와 일본어가 함께 남아 있고, 대응 구버전 섹션은 한국어 본문을 보유한다.

### 이번 1차 edu 추가 확정치

새로 엄격 확정된 old-KR 미반영 작업 단위:
- Agnes Digital: **31 C**
- Tamamo Cross: **22 C**
- Mejiro Palmer: **5 B + 69 C = 74**
- Mejiro Ardan: **27 B + 5 C = 32**
- Mejiro Bright: **24 B**

합계:
- **B: 56**
- **C: 127**
- **B+C: 183**

기존 엄격 최소 544에 더하면 현재 엄격 최소는:

**544 + 183 = 727 작업 단위**

이 727에는 Palmer의 미확정 notify 4개와 Agnes `ws_palace` D 후보는 포함하지 않는다.

## 다음 조사 단계

1. 기록 밖 kojo 후보 **1,205파트**를 `FILES.md` 순서로 실제 3자 대조.
2. `base` 9파일은 별도 old-source 영역 매핑 후 대조.
3. 기록 밖 `daily/rec` 및 general-i18n/entry의 구버전 자료 존재 여부를 추가 검사.
4. 각 파트를 최종 4분류:
   - **A: 구버전 KR 완전 반영**
   - **B: 구버전 KR 일부 반영 / 일부 미반영**
   - **C: 구버전 KR 존재 / 현재 미반영**
   - **D: 대응 구버전 KR 없음 / 신규 번역 필요**

## 현재 결론

전수조사 완료 전 **엄격 최소 확정치**:
- kojo daily/rec 기록 기반 현재 미반영: **414**
- timon 기록/본문 기반 현재 미반영: **130**
- 기록 밖 edu 실제 3자 대조 1차 추가 확정: **183**
- 합계: **727 작업 단위**

추가로 기록 밖 kojo에서 실제 3자 대조해야 하는 현재 후보: **1,205파트**.

따라서 **727은 최종 누락량이 아니라 현재까지 증명된 최소치**다. 1,205 후보의 파트별 대조 결과에 따라 최종 누락량은 증가한다.
