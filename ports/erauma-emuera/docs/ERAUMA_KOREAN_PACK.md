# 0.3.3-ko2 한국어 번역 재사용팩

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
./ports/erauma-emuera/tools/Package.ps1 -PackageName erauma-emuera-0.3.3-ko2 -KoreanSourceRepository ../Era-crossworld-erauma-ko -KoreanSourceCommit 9c1b98fb7b0ea0d44d8e83b2e8a2d9ad41675bf9 -KoreanKojoRoot ../../outputs/korean-generated
./ports/erauma-emuera/tools/Test-KoreanPack.ps1 -RuntimePath ../../outputs/erauma-emuera-0.3.3-ko2
./ports/erauma-emuera/tools/Test-KoreanNative.ps1 -RuntimePath ../../outputs/erauma-emuera-0.3.3-ko2
```

새 배포 이름을 사용한다. 작성기는 한국어 커밋·원본 게임 일치·31개 생성 모듈의 경로·빌드한 DLL과 실행 폴더 DLL의 해시·ZIP 모든 파일의 해시를 확인한다. `Test-KoreanPack.ps1`은 배포된 DLL 자체로 실제 언어 메뉴 선택과 재시작 복원, 외형 설정 세 경로와 재추첨, 새 게임·휴식·저장·새 세션 로드, 4개 변경 장면의 15개 분기와 일본어 fallback을 검사한다. `Test-KoreanNative.ps1`은 숨긴 시험 창 안에서 실제 실행기와 배포 플러그인으로 초기값 선택부터 메인 화면과 휴식까지 진행하며 한국어 버튼·문자열·canvas를 확인한다. 사용자 입력이나 데스크톱 캡처를 대신하는 검사는 아니며 별도 저장 폴더에서 실행한다. 실제 직접 플레이 결과와 구별한다.
