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

추가 분리 target인 `important_place_notify`, `golf_notify`, `lottery_notify`, `hot_spring_notify` 4개는 후속 전수검사에서 **D 4**로 확정했다. 대응하는 본 이벤트 자체는 old KR에 존재하지만, 현재 notify 문장은 이벤트 진입 조건을 새 UI용으로 요약한 신규 문장이라 old KR에 동일/직접 대응 문장이 없다. `rain_notify`는 현재 target가 아니다.

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

이 단계의 727에는 당시 Palmer notify 4개와 Agnes `ws_palace` D 후보를 포함하지 않았다. Palmer notify 4개는 후속 전수검사에서 **D**로 확정되어 strict B+C에는 계속 포함되지 않는다.

## 기록 밖 edu 실제 3자 대조 — 2차 확정

앞선 1차 확정 이후 `FILES.md` 순서의 old-KR 보유 edu 파일을 계속 대조했다. 아래 수치는 live의 실제 `[번역 대상]` 블록마다 **현재 Korean prose 존재 여부**를 확인하고, 구버전의 직접 파일 및 분리 `edu-events-XX` 모듈이 실제 같은 이벤트를 보유하는지 대조한 결과다.

### Mayano Top Gun `edu-24.js`

- live target: **56**
- 구버전 `edu-24.js` + `edu-events-24` 10개 모듈이 현재 56 target를 전부 대응.
- week-start/week-end/office-study/school-atrium/back-school/out-start/race-start/race-end 및 직접 race/train 이벤트가 현재 키 분할과 일치.
- 56개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- **C: 56**

### Manhattan Cafe `edu-25.js`

- live target: **41**
- 구버전 `edu-25.js` + `edu-events-25` 6개 모듈이 현재 41 target를 전부 대응.
- `beginning`, `palace`, `scared`, race 전후 이벤트와 직접 `back_school/crazy_fan_end/out_church` 분할까지 대응 확인.
- 41개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- **C: 41**

### Rice Shower `edu-30.js`

- live target: **43**
- 구버전 `edu-30.js` + `edu-events-30` 5개 모듈이 현재 43 target를 전부 대응.
- week-start/week-end/race-end/school-atrium/out-shopping 및 직접 office/race/train 이벤트의 분할 대응 확인.
- 43개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- **C: 43**

### Agnes Tachyon `edu-32-plan-a.js` / `edu-32-plan-b.js` / `edu-32.js`

현재 target:
- plan A: **26**
- plan B: **26**
- main: **35**
- 합계: **87**

구버전은 단일 `edu-32.js`와 `edu-events-32`의 다수 분리 모듈로 구성되어 있다. 직접 require되는 27개 모듈과 그 안에서 참조되는 `force-bad-ending.js`까지 대조했다.

확인한 대표 구조:
- 공통 이벤트가 현재 A/B 키로 분리된 week-start / race-start / race-end 분기
- `palace_a/palace_b`, `ending_a/ending_b`
- 온천 `hot_spring_a/hot_spring_b/hot_spring_b_sex_end`
- `be_betray` ↔ old `force-bad-ending.js`
- `be_crazy_fan` ↔ old `crazy-fan-end.js`
- train / train-fail / train-success의 현재 세분화 키

87개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존이며 구버전 대응 한국어 구현이 존재한다.
- **C: 87**

### Eishin Flash `edu-37.js`

- live target: **40**
- 구버전 `edu-37.js` + `edu-events-37`의 race-start/race-end/week-start 모듈이 현재 40 target를 전부 대응.
- old race-start 11 이벤트 ↔ current before 계열 11개.
- old race-end의 분기 포함 8 이벤트 단위 ↔ current 8개.
- week-start의 47+18 분리까지 포함해 current 13개.
- 직접 out/train/week-end 이벤트 8개.
- 40개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- **C: 40**

### 이번 2차 edu 추가 확정치

새로 엄격 확정:
- Mayano Top Gun: **56 C**
- Manhattan Cafe: **41 C**
- Rice Shower: **43 C**
- Agnes Tachyon: **87 C**
- Eishin Flash: **40 C**

합계:
- **B: 0**
- **C: 267**
- **B+C: 267**

edu 누적 엄격 확정:
- 1차: **183**
- 2차: **267**
- 합계: **450**

전체 엄격 최소:
- daily/rec: **414**
- timon: **130**
- 기록 밖 edu: **450**
- 합계: **994 작업 단위**

원래 기록 밖 kojo 후보 1,205 중 old-KR 보유 edu 후보는 819였다. 현재 old-KR 보유 edu target 후보 **455개(1차 조사 파일 188 + 이번 267)**를 실제 대조했으므로, 아직 미조사 후보는:
- edu: **364**
- love: **171**
- ero: **215**
- 합계: **750**

Palmer notify 4개는 당시 별도 보류했으며, 후속 전수검사에서 **D 4**로 확정했다.

## 기록 밖 edu 실제 3자 대조 — 3차 확정

2차 체크포인트 이후 old-KR 보유 edu 파일을 계속 대조했다. 이번 구간에서도 live 실제 `[번역 대상]` 블록의 Korean prose 존재 여부와 old main / 분리 event module의 실제 대응 본문을 함께 확인했다.

### Smart Falcon `edu-46.js`

- live target: **72**
- 72개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- 구버전 `edu-46.js` + `edu-events-46`의 race/week/crazy-fan 모듈을 직접 대조.
- 현재 번호가 이동한 `ws_47_15`, `we_47_15` 등은 old 이벤트 제목/본문으로 대응 확인.
- current `get_ts_content`는 old `train_success`의 한국어 트레이닝 완료 문구가 별도 helper로 분리된 것.
- `rooftop_idol`은 old event mark/check에는 key만 존재하지만, old KR 저장소 전체에서 실제 이벤트 본문 구현을 찾지 못했다.

분류:
- **C: 71**
- **D: 1** — `rooftop_idol`

### Haru Urara `edu-52.js`

- live target: **76**
- 76개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- 구버전 `edu-52.js` + 약 30개 `edu-events-52` 모듈을 대조.
- old 제목 이벤트 68개에 더해, current에서 기존 old 이벤트 내부가 별도 helper/승패/후처리 함수로 분리된 항목까지 확인했다.
- `tf_message`는 old `train-fail.js`의 속성별 한국어 실패 대사에서 분리.
- `train`은 old main의 한국어 랜덤 트레이닝 대사에서 분리.
- 기타 승패/후처리 세분화도 old KR branch 내 대응 본문 존재 확인.

분류:
- **C: 76**

### Nakayama Festa old edu 존재 여부

- 구버전 `sources/eraumak_kr_2.21/game/ere/event/edu/edu-49.js` 자체는 존재한다.
- 그러나 current ko3/ja-JP에는 대응 `edu-49` 작업 파일이 없고 `104900-Nakayama-Festa/entry.js`만 존재한다.
- 따라서 현재 edu `[번역 대상]` 감사 단위는 **0**이며 B/C/D 수치에 넣지 않는다.

### Matikanefukukitaru `edu-56.js`

- live target: **59**
- 59개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- old main + celebration/crazy-fan/office/race/train/week-start/week-end 모듈 전부 대조.
- race-end 세부 이벤트, 6개 week-start handler 모듈, current generic `race_start`까지 old KR 대응 확인.
- current `train_success`도 old `train-success.js`의 한국어 본문에서 분리된 것.
- old에만 남고 current target에는 없는 이벤트(`핫라인 전화`, 일부 과거 week-start 등)는 현재 작업 단위로 세지 않았다.

분류:
- **C: 59**

### Nice Nature `edu-60.js`

- live target: **22**
- 22개 target 블록 모두 visible Korean prose string **0**, 일본어 prose 잔존.
- old main 이벤트 **8**, `edu-events-60/race-end.js` 이벤트 **11**, `school-atrium.js` 이벤트 **3**으로 현재 22개와 정확히 대응.
- 제목과 이벤트 의미를 직접 대조했으며 별도 신규 이벤트 없음.

분류:
- **C: 22**

### 이번 3차 edu 추가 확정치

실제 대조한 current target:
- Smart Falcon: **72**
- Haru Urara: **76**
- Matikanefukukitaru: **59**
- Nice Nature: **22**
- 합계: **229**

분류:
- **B: 0**
- **C: 228**
- **D: 1**
- strict old-KR 미반영 추가: **228**

edu 누적 엄격 확정:
- 1차: **183**
- 2차: **267**
- 3차: **228**
- 합계: **678**

전체 엄격 최소:
- daily/rec: **414**
- timon: **130**
- 기록 밖 edu: **678**
- 합계: **1,222 작업 단위**

기존 단순 동일-ID 탐색으로 잡았던 old-KR 보유 edu 후보 819는 완전한 값이 아니었다. 이후 FILES/live를 다시 대조하면서 파일명이 변형된 다음 67개 target가 초기 후보 풀에서 빠졌음을 확인했다.
- Satono Diamond `edu-67-99.js`: **66**
- Daiichi Ruby `edu-85-be-ntr.js`: **1**

따라서 현재 확인된 old-KR 보유 edu 후보 풀은 최소 **886 (= 819 + 67)** 이다.
3차까지 실제 대조한 current target 후보는 누적 **684개**이므로 아직 미조사 후보는:
- edu: **202**
- love: **171**
- ero: **215**
- 합계: **588**

Palmer notify 4개는 당시 별도 보류했으며, 후속 전수검사에서 **D 4**로 확정했다.

## 기록 밖 edu 실제 3자 대조 — 4차 확정 / edu 전수조사 완료

3차 이후 남아 있던 edu current target **202개**를 모두 대조했다.

### Satono Diamond `edu-67-99.js`

- live target: **66**
- live target 블록 visible Korean prose string: 전부 **0**
- old `edu-67.js` + `edu-events-67-1` 전체의 `print_event_name` 이벤트: **정확히 66**
- back-school / entrypoint / out-start / race-end / race-start / school-atrium / week-end / week-start의 제목과 이벤트 의미가 current 66 target와 전부 대응.
- **C: 66**

### Kitasan Black `edu-68.js`

- live target: **44**
- live target 블록 visible Korean prose string: 전부 **0**
- old `edu-68.js` + `edu-events-68` 실제 제목 이벤트: **정확히 44**
- 일반 육성/주간/외출/레이스/엔딩 이벤트까지 current와 전부 대응.
- **C: 44**

### Daiichi Ruby `edu-85.js` + `edu-85-be-ntr.js`

- live target: **31 + 1 = 32**
- live target 블록 visible Korean prose string: 전부 **0**
- old `edu-85.js` + `edu-events-85` 실제 제목 이벤트: **정확히 32**
- `be_ntr`는 old `crazy-fan-end.js`에 실제 한국어 NTR 엔딩 본문으로 존재.
- **C: 32**

### Wonder Acute `edu-100.js`

- live target: **15**
- live target 블록 visible Korean prose string: 전부 **0**
- old 제목 이벤트는 13개지만, current의 `begin_race_win` / `begin_race_lose` 2개는 old `race_end()` 안의 데뷔전 승리/패배 분기가 별도 함수로 분리된 것.
- 따라서 15개 모두 old KR 대응 확인.
- **C: 15**

### Treve `edu-205.js`

- live target: **18**
- live target 블록 visible Korean prose string: 전부 **0**
- old 제목 이벤트는 17개지만, current `we_95_42_end`는 old `week-end.js`의 `95 + 42` 이벤트 후반부에 포함되어 있던 한국어 본문을 별도 함수로 분리한 것.
- old 본문에서 미성년자 성추행 사건/다음날 아침/고백 후반까지 직접 확인.
- **C: 18**

### Sunday Silence `edu-400.js`

- live target: **27**
- live target 블록 visible Korean prose string: 전부 **0**
- old `edu-400.js` + `edu-events-400` 실제 제목 이벤트: **정확히 27**
- current 27 target와 전부 대응.
- **C: 27**

### 이번 4차 edu 추가 확정치

- Satono Diamond: **66 C**
- Kitasan Black: **44 C**
- Daiichi Ruby: **32 C**
- Wonder Acute: **15 C**
- Treve: **18 C**
- Sunday Silence: **27 C**

합계:
- **C: 202**

### edu 최종 감사 상태

확인된 current edu 후보 풀:
- 초기 동일-ID 탐색: 819
- 파일명 변형 누락 보정: +67
- **총 886 target**

실제 대조 완료:
- **886 / 886 (100%)**

엄격 old-KR 미반영 확정:
- 1차: **183**
- 2차: **267**
- 3차: **228**
- 4차: **202**
- **합계: 880**

별도 비확정/신규:
- Agnes Digital `ws_palace`: old KR 대응 없음 후보(D), strict 수치 제외
- Smart Falcon `rooftop_idol`: old mark/check만 있고 실제 old KR 이벤트 본문 없음(D), strict 수치 제외
- Mejiro Palmer notify 4개: **D 4 확정**, strict B+C 수치 제외

따라서 edu는 **모든 current target를 실제 조사 완료**했으며, strict B+C 기준 **880 작업 단위**가 구버전 한국어 재사용 누락으로 확정된다.

전체 엄격 최소:
- daily/rec: **414**
- timon: **130**
- edu: **880**
- **합계: 1,424 작업 단위**

기록 밖 kojo 후보 풀은 파일명 변형 67개를 포함해 최소 **1,272 (= edu 886 + love 171 + ero 215)**로 본다.
현재 남은 미조사 후보:
- edu: **0**
- love: **0**
- ero: **215**
- **합계: 215**

## 기록 밖 love 실제 3자 대조 — 전수조사 완료

edu 완료 후, old-KR love 소스가 실제 존재하는 current live 파일을 다시 집계했다.

중요:
- `FILES.md`의 love 항목만 합산하면 이미 번역 완료된 과거 target까지 포함되어 과대계상된다.
- old love 소스 32개와 **live 실제 `[번역 대상]`** 을 교차한 결과, 미완료 old-KR 후보는 **정확히 171 target**이다.
- live `[번역 완료]`로 바뀐 54개는 이번 미완료 감사 후보에서 제외했다.

### 1차 love — 59 C

다음 파일은 live target 블록에 visible Korean prose가 없고, old main 및 분리 `love-events-*`에 같은 이벤트의 한국어 본문이 존재함을 직접 확인했다.

- Agnes Digital: **9 C**
  - old `love-events-19`: 49 / 74-first / 74-after / 89-first / 89-after / 99
  - old main: `oshi`, `shine`, `univ`
- Mayano Top Gun: **4 C**
- Manhattan Cafe: **5 C**
- Rice Shower: **4 C**
- Agnes Tachyon: **10 C**
  - old `love-events-32`의 25/49, 74 accept/betray/reject 분기, 89/99까지 직접 대응
- Eishin Flash: **1 C**
- Smart Falcon: **4 C**
- Haru Urara: **12 C**
  - old `love-events-52`: 49/50, 74 3분할, 75, 89 3분할, 90 + old main 99/101
- Matikanefukukitaru: **6 C**
- Nice Nature: **4 C**

합계: **59 C**

### Mejiro Palmer `love-64.kojo`

live target: **44**

old `love-64.kojo`의 37개 실제 섹션과 old `love-64.js`의 prompt/title/helper 분할을 함께 대조했다. current 44 target가 전부 old 한국어 구조에 대응한다.

현재 target 중 한국어와 일본어가 함께 남아 있는 **B 10**:
- `valentine_out_after_sex`
- `come_fy_end`
- `rooftop_event`
- `s_feeling_end`
- `nap_end`
- `movie_end`
- `not_joke_end`
- `concern_end`
- `dessert_end`
- `party_end`

나머지 **34개는 C**.
- **B: 10**
- **C: 34**

### love 잔여 68개

#### Kitasan Black `love-68.js`
- current target: **8**
- live Korean prose: 전부 0
- old main의 49/74/89/`m_kita`/`nyotaimori`와 대응.
- current `m_kita_end`는 old `m_kita`의 마지막 한국어 문장에서 분리.
- `m_kita_notify` / `nyotaimori_notify`는 old 각 메서드의 실행 전 조건 안내문에서 분리.
- **C: 8**

#### Mejiro Ardan `love-71.kojo`
- current target: **7**
- old kojo 실제 섹션 7개와 1:1 대응.
- **C: 7**

#### Mejiro Bright `love-74.kojo`
- current target: **13**
- 13개 target 모두 current에 Korean prose와 Japanese prose가 함께 잔존.
- old kojo에 동일 key/대응 섹션과 sex 분기 존재.
- **B: 13**

#### Daiichi Ruby `love-85.js`
- current target: **17**
- live Korean prose: 전부 0
- old main + `love-events-85`의 after-girl-friend / until-fuck-buddy / until-girl-friend / until-half-life / until-wife를 직접 대조.
- current 74/99 후처리 분할 및 clinic/dance/date/delicious/dessert/foot_job/jade/kiss/loli_wife/non_penetration/sex_mark/shame/take_shower 대응 확인.
- **C: 17**

#### Wonder Acute `love-100.js`
- current target: **10**
- live Korean prose: 전부 0
- current `49-before`, `74-before`, `89-before`, `99-before`는 old 각 메서드의 week-end 안내 분기.
- 본 49/74/89/99는 old 장소 실행 분기.
- `99-end`는 old 99 후반 목줄/각인 본문.
- `99-notify`는 old 99의 “준비가 모두 끝나면 … 옥상에서 기다리고 있을 것” 안내문.
- **C: 10**

#### Treve `love-205.js`
- current target: **5**
- live Korean prose: 전부 0
- old main + `love-events-205`의 49 / 74 / 89 / 99 대응.
- `89-continue-confirm`는 old 89 진행 확인 분기에서 분리.
- **C: 5**

#### Byerley Turk `love-342.kojo`
- current target: **4**
- live Korean prose: 전부 0
- 49 / 50 / `after_sex_50`은 old `love-342.js`의 49 / 50 / `after_fuck()`와 대응.
- `pray`는 love 파일 밖의 old `page/page-god-shop.js` `case 342`에 한국어 3문장 본문이 그대로 존재.
- **C: 4**

#### Sunday Silence `love-400.js`
- current target: **4**
- live Korean prose: 전부 0
- 49는 old 49.
- current 74 + `74-3crown-a` + `74-title`은 old 단일 `74()`의 제목/삼관 분기/일반 분기를 분리한 것.
- **C: 4**

### love 최종 결과

전수조사:
- **171 / 171 완료**

분류:
- **B: 23**
- **C: 148**
- **B+C: 171**

love 후보에서는 D가 새로 확인되지 않았다.

전체 엄격 최소:
- daily/rec: **414**
- timon: **130**
- edu: **880**
- love: **171**
- **합계: 1,595 작업 단위**

기록 밖 kojo 후보 풀:
- edu: **886 / 886 조사 완료**
- love: **171 / 171 조사 완료**
- ero: **215 미조사**
- 최소 총 후보 풀: **1,272**

현재 남은 미조사 후보는 **ero 215개**다.

## 기록 밖 ero 실제 3자 대조 — 전수조사 완료

old-KR ero 소스가 존재하는 current live 파일을 실제 마커 기준으로 재집계했다.

- old-KR 대응 ID가 있는 ero 파일 중 이미 `[번역 완료]`된 항목은 제외.
- 현재 실제 `[번역 대상]`이 남은 파일은 **5개**뿐:
  - Agnes Tachyon: 49
  - Matikanefukukitaru: 56
  - Mejiro Palmer: 34
  - Wonder Acute: 74
  - Treve: 2
- 합계: **215 target**

### Agnes Tachyon `ero-32.js`

current target: **49**

old 대응:
- 일반 커맨드: `ero-lines-32/normal-communications.js`, `normal-fucking.js`, `normal-making-outs.js`, `normal-sm.js`
- `betrayed1/2`: old `betrayed-1.js`, `betrayed-2.js`
- reward / 일반 cuckold start: old `ero-start.js`
- `mark_*`: old `ero-32.js:get_mark()`
- `cum_in_*`, `orgasm_non_penetrative`: old `ero-32.js:orgasm()`
- `lure_by_tachyon`: old `normal-communications.js:lure()`의 Tachyon 주도 분기
- `use_love_eggs_in_anal`: old `items.js:use_item()`의 love-eggs + anal 분기

old KR 실제 본문이 직접 대응하는 항목:
- **C: 47**

old KR 대응을 찾지 못한 신규/변경 helper:
- `ero_start_cuckold_coffee`
- `ero_end_cuckold_coffee`

이 두 항목은 old `ero-25.js`, old `ero-32.js`, old `ero-lines-32/ero-start.js`까지 직접 확인했으나 현재 대사에 대응하는 한국어 문장이 없다. old Coffee/Tachyon NTR 코드는 존재하지만 대사 구조와 내용이 다르다.
- **D: 2**

### Matikanefukukitaru `ero-56.js`

current target: **56**

live target 블록의 visible Korean prose: 전부 **0**.

old 대응:
- 동일 이름 일반 커맨드는 `ero-lines-56/normal-communications.js`, `normal-fucking.js`, `normal-making-outs.js`, `normal-sm.js`.
- `mark_ero / mark_hate / mark_meek / mark_pain / mark_pleasure / mark_shame`는 old `ero-56.js:get_mark()` 각 분기와 직접 대응.
- `orgasm_standing / orgasm_hug_standing`은 old `ero-56.js:orgasm()`의 standing / hug_standing 분리.
- `pet_breast_from_back`은 old `normal-making-outs.js:pet_breast()`의 삽입 중 후방 가슴 애무 분기.
- `kitaru_pet_breast_first`는 같은 old `pet_breast()`의 attacker/defender 반전 분기.
- `stimulate_sleep_glans_by_virgin`은 old `sleep-fucking.js:stimulate_glans_by_virgin()`의 sleep 전용 분기.

따라서:
- **C: 56**

### Mejiro Palmer `ero-64.kojo`

current target: **34**

old `ero-64.js`, `ero-64.kojo`, `ero-lines-64/*` 전체와 대조.

current에 Korean prose와 Japanese prose가 함께 남아 있는 **B 13**:
- `prepare_anal`
- `ask_blow_job`
- `ask_foot_job`
- `missionary`
- `doggy_style`
- `sitting`
- `hug_standing`
- `ask_cowgirl`
- `hit_anal`
- `mark_meek`
- `get_semen_blow_job`
- `get_semen_missionary`
- `get_semen_doggy_style`

나머지 **21개는 C**.
- **B: 13**
- **C: 21**

### Wonder Acute `ero-100.js`

current target: **74**

live target 블록의 visible Korean prose: 전부 **0**.

old `ero-lines-100` 실제 메서드와 교차:
- **72개**는 current key와 old 메서드명이 그대로 일치.
- `sleep_kiss` / `sleep_french_kiss`는 old `sleep-communications.js`의 `kiss` / `french_kiss`가 current에서 sleep 전용 key로 분리된 것.

따라서:
- **C: 74**

### Treve `ero-205.js`

current target:
- `ero_start`
- `ero_end`

old `ero-205.js`의 `ero_start()`, `ero_end()`에 한국어 본문이 직접 대응.
- **C: 2**

### ero 최종 결과

전수조사:
- **215 / 215 완료**

분류:
- **B: 13**
- **C: 200**
- **D: 2**
- **B+C: 213**

전체 엄격 최소:
- daily/rec 기록: **414**
- timon: **130**
- edu: **880**
- love: **171**
- ero: **213**
- **합계: 1,808 작업 단위**

기록 밖 kojo 후보 풀:
- edu: **886 / 886 조사 완료**
- love: **171 / 171 조사 완료**
- ero: **215 / 215 조사 완료**
- **합계: 1,272 / 1,272 조사 완료**

kojo edu/love/ero 후보 풀에서 strict B+C:
- edu 880 + love 171 + ero 213 = **1,264**

strict에서 제외된 항목:
- edu D 2
- edu Palmer notify **D 4**
- ero D 2

## base 실제 3자 대조 — 전수조사 완료

`FILES.md`에는 base가 9파일 / 108파트로 기록되어 있으나, live 실제 마커를 다시 세면:
- 이미 `[번역 완료]`: **27**
  - Tokai Teio: 12
  - Gold Ship: 4
  - Mejiro McQueen: 11
- 현재 `[번역 대상]`: **81**

현재 감사 대상 81:
- Manhattan Cafe: 13
- Agnes Tachyon: 7
- Haru Urara: 13
- Mejiro Palmer: 11
- Cheval Grand: 23
- Dream Journey: 14

old-source 매핑:
- 기본 대응: `sources/eraumak_kr_2.21/game/ere/event/basement/basement-<ID>.js`
- Cheval Grand: 추가로 `basement/base-events-89/*`
- Haru Urara `first_prison`: 예외적으로 old `event/ero/ero-52.js` 첫 감금 분기

### Manhattan Cafe
- current 13 target 모두 live Korean prose 0.
- 12개는 old basement에 동일 key/메서드가 직접 존재.
- `rescue_from_tachyon`은 old `rescue_battle_success(owner_id === 32)`와 문장 단위로 대응.
- **C: 13**

### Agnes Tachyon
- current 7 target 모두 live Korean prose 0.
- old basement의 동일 key/분기와 대응.
- **C: 7**

### Haru Urara
- current 13 target 모두 live Korean prose 0.
- 12개는 old basement와 직접 대응.
- `first_prison`은 old `ero-52.js`의 `!exp:52:감금횟수` 분기에 한국어 본문이 존재:
  - “왜 이렇게 되어버린 걸까요?”
  - “밀실의 반쯤 열린 문은 잠겨 있지 않았다”
  - 남을지 나갈지 선택
  - “정말로 나쁜 아이가 되어도 괜찮은 거야”
- **C: 13**

### Mejiro Palmer
- current 11 target 모두 live Korean prose 0.
- old `basement-64.js` 동일 key/분기와 대응.
- **C: 11**

### Cheval Grand
- current 23 target 모두 live Korean prose 0.
- 기본 15개는 old `basement-89.js`에 직접 대응.
- 분할 helper 8개는 old `base-events-89`에서 대응:
  - `ask_release_agree_first`
  - `ask_release_reject_first`
  - `find_escape_out`
  - `flatter_after_battle`
  - `flatter_after_strike`
  - `flatter_no_escape_first`
  - `flatter_no_escape_second`
  - `flatter_no_escape_third`
- **C: 23**

### Dream Journey
- current 14 target 모두 live Korean prose 0.
- old `basement-119.js` 동일 key/분기와 대응.
- **C: 14**

### base 최종 결과
- live 미완료 감사: **81 / 81 완료**
- **C: 81**
- **B+C: 81**

전체 엄격 최소:
- daily/rec 기록: **414**
- timon: **130**
- edu: **880**
- love: **171**
- ero: **213**
- base: **81**
- **합계: 1,889 작업 단위**

## 기록 밖 daily/rec 및 general-i18n 검사

### 기록 밖 daily

old `event/daily`에 character-specific 소스가 존재하는 current daily 파일을 실제 directory ID와 교차했다.

- current daily 파일 중 old-source ID 대응: **29파일**
- `REUSE_DAILY_BATCH_01~09`의 character 기록과 교차:
  - **29 / 29 모두 기존 감사 기록에 포함**
- 따라서 파일 단위로 완전히 기록 밖인 old-KR daily 후보: **0**

추가 strict B/C:
- **0**

### 기록 밖 rec

old `event/rec` ID와 current rec를 교차했을 때 기존 `REUSE_REC_BATCH_01~14`의 character 기록에 없는 파일이 3개 보였다.

- Silence Suzuka `rec-2.kojo`
- Oguri Cap `rec-6.kojo`
- Mejiro McQueen `rec-13.kojo`

그러나 live 실제 마커를 확인하면 세 파일 모두 이미 `[번역 완료]` 상태다.
- Suzuka: 6 완료
- Oguri: 1 완료
- McQueen: 4 완료
- 실제 `[번역 대상]`: **0**

따라서 기록 밖 rec의 추가 strict B/C:
- **0**

### general-i18n

현재 non-kojo/timon general 파일은 FILES 기준 8개:
- `chara/names.js`
- `chara/titles.js`
- global `entry.js`
- `race/clothes.js`
- `race/races.js`
- `race/skills.js`
- `snippets.js`
- `table/param.js`

live 실제 상태:
- names: target 0 / done 639
- titles: target 0 / done 81
- global entry: target 0 / 연결·보조
- clothes: target 0 / done 75
- races: target 0 / done 44
- snippets: target 0 / done 1
- param: target 0 / done 18
- `race/skills.js`: **target marker 70**

#### `race/skills.js` marker 재검증

70 marker를 실제 assignment 값으로 검사하면:
- 숫자 skill ID: **45**
  - 현재 값이 전부 이미 한국어.
  - 일부는 old `data/race/skill/skill-<ID>.js`와 이름이 정확히 일치하고, 나머지도 live 값 자체가 이미 한국어이므로 strict 미반영에 포함하지 않음.
- 공통 symbolic key: **25**
  - 현재 값이 중국어.

old 대응이 직접 확인된 24개:
- `learnt` → old `page-train.js`의 `[습득함]`
- `n_type` → `기술 유형`
- `n_ground` → `마장 유형`
- `n_dis` → `거리 유형`
- `n_style` → `각질 유형`
- `n_ability` → `효과 유형`
- `n_t_buff / n_t_heal / n_t_speed / n_t_control / n_t_debuff`
  - old `uma-skill.js`의 `패시브 / 회복 / 버프 / 디버프 / 약화`
- `r_normal / r_advanced / r_spe / r_evol / r_ero_normal / r_ero_advanced`
  - old `uma-skill.js`의 `공용 / 전설 / 고유 / 진화 / 공용 · 조교 / 강화 · 조교`
- `t_currentSpeed / t_hpRate / t_targetSpeed / t_temp / t_tempPer / t_laneMove / t_ero`
  - old ability tag names의 `순간속도 / 지구력 / 목표속도 / 흥분 / 흥분확률 / 돌파 / 조교`

따라서:
- **C: 24**

old 대응이 없는 신규 tag:
- `t_accelFull`
- current에는 `ability_type_enum.AccelFullSpeed = 48`, `ability_tag_enum.accelFull`이 새로 존재.
- old 2.21 `uma-skill.js`에는 `AccelFullSpeed` 및 `accelFull` 자체가 없음.
- **D: 1**

general-i18n 추가 strict:
- **24**

### 이 단계 반영 후 엄격 최소

- 이전 strict: **1,889**
- general-i18n C: **+24**
- 기록 밖 daily/rec: **+0**
- **합계: 1,913 작업 단위**

## character entry 및 잔여 계열 최종 검사

### character `entry.js`

`FILES.md`의 character entry 목록을 live 실제 마커 기준으로 다시 검사했다.

- character `entry.js`: **86파일**
- 86 / 86 파일의 실제 `[번역 대상]`: **0**
- 과거 `FILES.md`에 target로 남아 있던 항목들은 현재 모두 `[번역 완료]` 또는 연결/보조 상태.
- 따라서 character entry의 추가 strict B/C: **0**

추가로 FILES 분류에서 별도 확인:
- root `kojo/entry.js`: 연결 파일, target 0
- `kojo/av-sister/daily.kojo`: `select` 이미 `[번역 완료]`, target 0

### Mejiro Palmer edu notify 4개 최종 판정

대상:
- `important_place_notify`
- `golf_notify`
- `lottery_notify`
- `hot_spring_notify`

old `edu-64.kojo`에는 각각의 본 이벤트가 존재한다.
- 프리 레이스
- 상점가/골프 관련 이벤트
- 경품 추첨
- 온천 여행

하지만 current notify의 짧은 UI 알림 문장 자체는 old KR에 존재하지 않는다.
이 문장들은 현재판에서 이벤트 진입 조건을 별도 안내하기 위해 새로 분리/추가된 요약문이다.

따라서:
- **D: 4**
- strict B+C 증가: **0**

### FILES 전체 계열 커버리지

`FILES.md` 301파일을 계열별로 확인:
- general: 8
- kojo/daily: 39
- kojo/entry: 87 (character 86 + root connector 1)
- kojo/ero: 22
- kojo/edu: 39
- kojo/love: 37
- kojo/rec: 33
- kojo/base: 9
- kojo/other: 1 (`av-sister/daily.kojo`)
- timon: 26

위 계열은 모두 기존 감사 기록 또는 이번 실제 재검증 범위에 포함되었다.
**미검사 파일 계열 없음.**

### 전수조사 최종 strict old-KR 미반영 확정치

- daily/rec 기록 기반: **414**
- timon: **130**
- edu: **880**
- love: **171**
- ero: **213**
- base: **81**
- general-i18n: **24**
- character entry 추가: **0**
- **최종 합계: 1,913 작업 단위**

## 전수조사 완료 / 다음 실행 단계

구버전 한국어 재사용 가능성 전수조사는 완료했다.

다음 작업 우선순위:
1. **strict B+C 1,913 작업 단위의 old-KR 재사용 반영**
2. 재사용 반영 후 live `[번역 대상]` 재집계
3. 그 뒤에만 D 및 진짜 신규 번역 대상으로 돌아간다.

분류 기준은 계속 유지:
- **A: 구버전 KR 완전 반영**
- **B: 구버전 KR 일부 반영 / 일부 미반영**
- **C: 구버전 KR 존재 / 현재 미반영**
- **D: 대응 구버전 KR 없음 / 신규 번역 필요**

## 최종 결론

구버전 한국어 재사용 전수조사는 **완료**했다.

strict 기준 old-KR이 존재하지만 현재 live ko3에 반영되지 않은 확정량:
- kojo daily/rec: **414**
- timon: **130**
- edu: **880**
- love: **171**
- ero: **213**
- base: **81**
- general-i18n: **24**
- character entry 추가: **0**
- **최종 strict B+C: 1,913 작업 단위**

`FILES.md`의 301파일 계열은 모두 감사 범위에 포함되었고, 마지막 Palmer notify 4개도 **D**로 확정했다. 따라서 더 이상 “미확정이라 strict에서 보류 중인 항목”은 없다.

이제 새 번역을 계속하기 전에 **1,913 작업 단위의 구버전 KR 재사용 반영을 우선**하는 것이 맞다.
