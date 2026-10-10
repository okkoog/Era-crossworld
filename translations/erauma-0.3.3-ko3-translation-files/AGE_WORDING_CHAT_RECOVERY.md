# 연령 관련 표현 파일 — 일반 ChatGPT 직접 처리 기록

기준: `okkoog/Era-crossworld` / `main`, 2026-10-10.
본 목록은 구버전 한국어 복구 및 현행 한국어 보완 업무의 **작업 분담표**다. 게임의 모든 등장인물은 성인이라는 프로젝트 전제를 유지한다. 원문에 모순되는 연령 표현이 있으면 번역상의 원문 불일치로 별도 검토한다. 이 목록의 존재 자체가 번역 오류, 실제 연령, 작업 중단 또는 완료를 뜻하지는 않는다.

**주의:** 기존 `HELD_LOCATIONS.md`의 보류 해제와 여기서의 번역 미완료는 다른 문제다. 기존 1,913 작업 단위도 아래 숫자에서 빼지 않는다. 현행 한국어는 JA를 상속할 수 있으므로 마커뿐 아니라 남은 원문 override 및 누락 키도 검사해야 한다.

## 이번 대화에서 실제 반영한 것

| 파일 (모두 `files/sources/erauma/ere/i18n/ko-KR/` 하위) | 처리 | 커밋 |
|---|---|---|
| `kojo/111600-Gentildonna/rec-116.kojo` | `good_news` 한국어 문구 28개 복구. `footprint`, `know_me` 미완료 | `0ba15e8cf510ac877fdcdefd9e3b78dd6c7a12ae` |
| `kojo/102100-Tamamo-Cross/edu-21.kojo` | `tenn_spr`, `threaten`, `uma_girl1`, `white_lightning1`의 잔여 4문구 번역. 대상 마커 0 | `7ecbb07f37b8d1e9882c284b174f43eb9593cb66` |
| `kojo/106400-Mejiro-Palmer/love-64.kojo` | 비노골적 잔여 23문구 번역. 검토 사유가 남아 있어 대상 마커 유지 | `c5c04fb404038d3516590c7f77e40693d2754663` |
| `kojo/108900-Cheval-Grand/rec-89.kojo` | `rec1`·`beginning2` 7문구, `beginning` 14문구, `rec2` 39문구 복구. 대상 마커 0 | `03f4ea708eac40a8f57a709ac65404ae8f827862`, `92ba360a33a3cd894c514205a5fb93dde24ea374`, `f997335b397e920141bf4a289bee17b09f01a69d` |

확인 방식: 기존 한국어 보존, 현행 키/분기 구조 유지, 문자열 치환 변수의 일치 여부 및 처리 장면의 잔여 일본어 가나 검사. 게임 전체를 실행한 통합 검증은 수행하지 않았다. 기존 장부의 정량 감사 카운터는 여기서 임의 수정하지 않았다.

## 이번 채팅의 추가 진행 — 스윕 토쇼 육성

- 대상: `kojo/104400-Sweep-Tosho/edu-44.kojo`
- 기존 `[번역 대상]` 82개 중 **12개 장면 신규 한국어 번역**, 이후 70개. 기존 한국어 문장에는 변경을 가하지 않았다.
- 1차 8장면: `ws_md_w_1_end`, `ws_ny_sub_select`, `ws_ny_sub_reject`, `we_in_school`, `ws_md_w_2_end`, `rs_yush_him`, `re_shuk_sho_win`, `we_new_turn`. 커밋 `1c7c6010377b7a0d46b1b160a311257ea4e3dbae`.
- 2차 2장면: `ws_md_w_1`, `ws_md_w_2`. 커밋 `a99692179ec906843824a38de5dc8257e5b431e7`.
- 3차 2장면: `ws_md_w_3`, `ws_md_w_3_end`. 커밋 `1fcf56eced68e8bbe2ec38e9c60d19d351c3200f`.
- **분류: 새로운 한국어 번역.** 이 경로와 대응되는 old-KR `event/edu/edu-44.kojo`/`edu-44.js`는 저장소에서 발견하지 못했으므로 구버전 번역 재사용 실적으로 세지 않는다.
- 각 장면의 구조와 placeholder 토큰을 보존하고, 대상 장면의 비주석 원문 가나 잔여 여부를 검사했다. 게임 런타임 전체 검증은 아직 미실시다. 다른 미완료 장면을 완료로 취급하지 않는다.

## 직접 연령/학교 표현 검색의 14개 원문 파일

경로는 모두 `sources/erauma/ere/i18n/ja-JP/kojo/` 기준이며, 아래 수치는 2026-10-10의 한국어 파일 내 **번역 대상 마커 개수**다. 0은 번역 대상 마커 0을 뜻할 뿐 전체 런타임 한국어 커버리지 100%를 보증하지 않는다.

| 원문 파일 | 대상 마커 | 진행 |
|---|---:|---|
| `100900-Daiwa-Scarlet/ero-9.js` | 0 | 기존 완료본 보존 |
| `200500-Treve/edu-205.js` | 18 | 미완료 |
| `108500-Daiichi-Ruby/love-85.js` | 0 | 기존 완료본 보존 |
| `200500-Treve/love-205.js` | 5 | 미완료 |
| `108500-Daiichi-Ruby/rec-85.js` | 0 | 기존 완료본 보존 |
| `111900-Dream-Journey/rec-119.kojo` | 0 | 기존 완료본 보존 |
| `102100-Tamamo-Cross/edu-21.kojo` | 0 | 이번 대화에서 잔여 4개 해결 |
| `103200-Agnes-Tachyon/edu-32-plan-b.js` | 26 | 미완료 |
| `103600-Air-Shakur/rec-36.kojo` | 0 | 기존 완료본 보존 |
| `108500-Daiichi-Ruby/edu-85.js` | 31 | 미완료 |
| `105000-Narita-Taishin/love-50.kojo` | 3 | 미완료 |
| `106000-Nice-Nature/edu-60.js` | 22 | 미완료 |
| `100400-Maruzensky/love-4.js` | 0 | 기존 완료본 보존 |
| `106400-Mejiro-Palmer/love-64.kojo` | 23 | 잔여 23문구 보완. 다른 검토는 남음 |

## 성장·외형/자녀 등 확장 표현으로 추가 확인한 파일

일본어 `大人になる`, `幼い`, `子供`, `幼児` 등은 반드시 실제 연령 서술을 뜻하는 것은 아니며 문맥 확인 대상이다. 이전 목록에서 지정된 파일을 우선 추린 것으로, 모든 유사 표현에 대한 의미론적 전수 완료 명단은 아니다.

| 파일 (ko-KR 작업 파일) | 대상 마커 | 상태 |
|---|---:|---|
| `kojo/111600-Gentildonna/rec-116.kojo` | 2 | `footprint`, `know_me` 미완료 |
| `kojo/108900-Cheval-Grand/rec-89.kojo` | 0 | 이번 대화에서 4개 장면 완료 |
| `kojo/103200-Agnes-Tachyon/daily-32.js` | 43 | 미완료 |
| `kojo/103200-Agnes-Tachyon/edu-32-plan-a.js` | 26 | 미완료 |
| `kojo/102400-Mayano-Top-Gun/edu-24.js` | 56 | 미완료 |
| `kojo/105200-Haru-Urara/daily-52.js` | 37 | 미완료 |
| `kojo/105200-Haru-Urara/love-52.js` | 12 | 미완료 |
| `kojo/104400-Sweep-Tosho/edu-44.kojo` | 70 | 이번 추가 작업에서 비성적 12장면 번역; 다른 장면 미완료 |
| `kojo/110000-Wonder-Acute/ero-100.js` | 74 | 미완료 |
| `timon/child/daily.js` | 0 | 기존 완료본 보존 |
| `timon/child/ero.js` | 0 | 기존 완료본 보존 |
| `timon/others/pregnant-slave.js` | 7 | 미완료 |

이 목록은 파일 변경에 따라 갱신해야 한다. 이번 대화에서 미완료 장면을 전부 번역했다고 주장하지 않는다. 나머지 파일의 번역 복구를 수행하는 동안 동일 경로에 대한 병렬 쓰기와 덮어쓰기는 피한다.
