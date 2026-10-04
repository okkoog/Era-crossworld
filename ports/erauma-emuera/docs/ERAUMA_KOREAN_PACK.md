# 0.3.3-ko3 한국어 번역 재사용팩과 외부 번역 이양

현재 배포는 `erauma-ko`의 최신 판정 결과를 합격한 0.3.3 실행판에 반영한다. 이번 이양 작업에서는 기존 EraUmaK 2.21 한국어 문자열 358개를 추가 재사용했다. 일상 98개, 훈련 88개, 지하실 상태·구출 58개, 게임 안내 45개, 캐릭터 Daily/REC 69개다. 새로운 한국어 게임 문장은 작성하지 않았다. 앞서 완료한 일반 i18n과 기타 판정 결과도 함께 포함한다.

각 문장은 현재 3.113 함수·분기·배열·반환값·이름 삽입 위치를 유지하며 교체했다. 문장 분할이나 동적 표현이 달라 그대로 옮길 수 없는 부분은 일본어를 유지한다. 기존 REC 판정은 다시 조사하지 않고 실제 적용 결과를 별도로 기록했다. 캐릭터 Daily의 남은 32개 모듈은 판정했으며 기존 REC 적용 대기 12개 중 안전한 문자열을 추가 적용했다. 부분 적용과 아직 구조를 맞춰야 하는 부분은 외부 이양 대상으로 남는다. 판정 완료는 완역을 의미하지 않는다.

실행기 EXE와 네 DLL은 ko2와 같은 바이트를 사용한다. ko2의 한국어 초기화 오류 수정과 기존 화면·레이스 성능 개선을 그대로 포함한다. 사용자 저장은 ZIP에 넣지 않는다. 함께 준비한 플레이 폴더에는 이전 ko2의 저장을 복사하고 원본 저장의 해시와 수정 시각이 유지되는지 확인한다.

## 미번역 파일과 나중에 합치기

`translation-handoff/`는 실행 파일과 분리한 번역 작업용 데이터다. 같은 내용의 독립 ZIP도 제공한다. 모듈별 JSON의 `koreanText`만 외부 번역자가 채운다. 원문·ID·경로·문자열 위치·해시·placeholder 정보는 그대로 둔다. 부분 한국어 함수 안에 남은 일본어와 상속된 일본어를 모두 구별해 추출하며 원본 게임 파일을 삭제하거나 옮기지 않는다.

원문 속 이름과 숫자가 들어가는 위치를 보존하기 위해 동적 표현의 앞뒤 문자열은 별개 슬롯이다. 표현을 합치거나 한 슬롯으로 옮기면 검증에서 거부된다. 검증기는 중복 ID, 원문 변경, 원본 커밋 변경, placeholder 손실과 재합치기 충돌을 확인한다. 합치기 미리보기는 검토용 차이 또는 적용 계획을 만들며 게임 파일을 자동으로 수정하지 않는다. 구조 변경이 필요한 상속 함수는 번역 후에도 별도 적용 검토가 필요하다.

아동 성적 서술과 성인 범위를 확인할 수 없는 민감 함수는 이번 재사용·번역 추출에서 제외하고 경로·키·사유만 기록한다. 이는 기존 한국어가 없다는 판정과 다르다. 제외된 게임 본문은 이번 작업에서 수정하지 않았다.

`language-provenance.json`은 실제 한국어 소스 커밋과 원문·생성 모듈 개수를 기록한다. `translation-handoff/manifest.json`은 같은 소스 커밋, 추출 수, 제외 수와 파일 해시를 기록한다. 새 배포는 `Package.ps1 -KoreanDistributionVersion 0.3.3-ko3 -TranslationHandoffRoot <검증한 번역 폴더>`로 생성한다. `tools/build-kojo.cjs`로 현재 한국어 `.kojo` 전체를 새 폴더에 컴파일하고 실제 파일 목록의 일대일 대응을 검사한다.

상세 재사용 근거는 `game/erauma/ere/i18n/ko-KR/REUSE_HANDOFF_STATUS.json`과 새 배치 기록에 있다. 번역 도구 사용법은 번역 ZIP의 README에 있다. 현재 검증은 `docs/evidence/0.3.3-ko3/`에, 아래 ko2 내용은 역사적 기록으로 남긴다.

## 0.3.3-ko2 기록

합격한 `erauma-emuera-0.3.3-preview-44d6f865`의 화면 처리를 바탕으로 `erauma-ko` 브랜치의 한국어 언어팩을 함께 배포한다. 번역 소스 기준은 `9c1b98fb7b0ea0d44d8e83b2e8a2d9ad41675bf9`이다. 기존에 정리된 일반 i18n과 Timon/Kojo 일부, 재사용한 랜덤 이벤트 4개 장면의 문자열 34개를 포함한다. 완전한 한국어 번역판은 아니며 미대응 문장과 장면은 일본어 fallback을 유지한다.

0.3.3-ko1은 사용자의 새 게임 외형 설정 `초기값 사용 [2]`에서 `get_hair_color` 오류로 중단됐다. 0.3.3-ko2는 언어 목록을 먼저 등록하고 실제 사용 시점에 한국어 entry를 생성한다. 원본 공통 모듈이 초기화되기 전에 한국어팩이 순환 참조를 만들어 빈 모듈을 보관하던 원인을 수정했다. 앞선 ko1 검사는 이름·성별 입력까지만 확인해 이 결함을 놓쳤다. 새 검사는 기본·무작위·직접 설정·재추첨과 새 게임 진입·휴식·저장·새 세션 복원까지 진행한다.

## 실행과 언어 선택

ZIP 전체를 새 폴더에 압축 해제하고 그 폴더의 `Emuera.exe`를 실행한다. 첫 실행에서 동의 `[1]` → 타이틀의 `语言/Language` `[7]` → `한국어` `[5]`를 선택한다. 선택은 `sav-game/sav/global.sav`에 저장되며 다음 실행에도 유지된다. 기존 일본어 설정을 가져왔으면 같은 메뉴에서 한국어를 선택한다.

기존 저장을 이어가려면 게임을 종료한 상태에서 기존 실행판의 `sav-game` 폴더를 새 실행판 폴더로 복사한다. 새 ZIP에는 사용자 저장이 들어 있지 않으며 기존 실행판 폴더나 ZIP을 덮어쓰지 않는다. 게임의 코드 번호와 저장 버전 `3`은 그대로다.

## 포함 경로와 출처

- `game/erauma/ere/i18n/ko-KR/`: 한국어 원문 108개 파일. 번역 진행 기록과 제6차 재사용 근거를 포함한다.
- `game/kojo/i18n/ko-KR/`: 공식 원본 컴파일러로 변환한 한국어 Kojo 모듈 31개.
- `game/language-packs/ko-KR/entry.js`: 기존 실행기의 언어팩 로더에 한국어를 연결하는 entry.
- `language-provenance.json`: 번역 소스 커밋, 파일 개수, fallback 정책.
- `game/erauma/ere/i18n/ko-KR/timon/PENDING_REUSE.md`: 미대응 문장과 다음 번역 재사용 조사 후보.
- `game/erauma/ere/i18n/ko-KR/THIRD_PARTY_NOTICES.md`: 기존 한국어 번역 데이터의 추가 출처와 라이선스.

보존된 저장소의 일본어 원본과 기본 게임 selector는 수정하지 않는다. 한국어 트리는 배포 폴더에서만 추가하고 독립 entry로 등록한다. 기본 일본어 대사와 생성 모듈도 모두 포함해 fallback을 유지한다. 실행기 EXE와 Jint/Acornima DLL은 이전 배포본과 같은 바이트를 사용한다. Compatibility의 언어팩 로더를 수정하고 Plugin/Compatibility DLL을 재빌드했다. 화면 갱신·레이스 타이머 코드는 변경하지 않는다. 잘못된 입력 안내 일부는 기존 실행기의 영어 fallback으로 남는다.

## 패키지 재현

`erauma-ko`의 지정 커밋을 별도 작업 폴더에 체크아웃한다. 기본 0.3.3 빌드와 원본 Kojo·공식 리소스를 준비한 뒤 한국어 Kojo만 별도 폴더에 생성한다. `build-kojo.cjs`의 첫 인자는 한국어 소스 루트, 두 번째 인자는 생성 루트 아래 `i18n/ko-KR`이어야 한다.

```powershell
node ports/erauma-emuera/tools/build-kojo.cjs ../Era-crossworld-erauma-ko/sources/erauma/ere/i18n/ko-KR ../../outputs/korean-generated/i18n/ko-KR ../erauma-deps/kojo-loader/src/parse-kojo.js ../erauma-deps/yamljs/package/lib/Yaml.js
./ports/erauma-emuera/tools/Package.ps1 -PackageName erauma-emuera-0.3.3-ko2 -KoreanDistributionVersion 0.3.3-ko2 -KoreanSourceRepository ../Era-crossworld-erauma-ko -KoreanSourceCommit 9c1b98fb7b0ea0d44d8e83b2e8a2d9ad41675bf9 -KoreanKojoRoot ../../outputs/korean-generated
./ports/erauma-emuera/tools/Test-KoreanPack.ps1 -RuntimePath ../../outputs/erauma-emuera-0.3.3-ko2
./ports/erauma-emuera/tools/Test-KoreanNative.ps1 -RuntimePath ../../outputs/erauma-emuera-0.3.3-ko2
```

새 배포 이름을 사용한다. 작성기는 한국어 커밋·원본 게임 일치·31개 생성 모듈의 경로·빌드한 DLL과 실행 폴더 DLL의 해시·ZIP 모든 파일의 해시를 확인한다. `Test-KoreanPack.ps1`은 배포된 DLL 자체로 실제 언어 메뉴 선택과 재시작 복원, 외형 설정 세 경로와 재추첨, 새 게임·휴식·저장·새 세션 로드, 4개 변경 장면의 15개 분기와 일본어 fallback을 검사한다. `Test-KoreanNative.ps1`은 숨긴 시험 창 안에서 실제 실행기와 배포 플러그인으로 초기값 선택부터 메인 화면과 휴식까지 진행하며 한국어 버튼·문자열·canvas를 확인한다. 사용자 입력이나 데스크톱 캡처를 대신하는 검사는 아니며 별도 저장 폴더에서 실행한다. 실제 직접 플레이 결과와 구별한다.
